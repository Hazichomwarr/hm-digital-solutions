// actions/consultation.ts

"use server";

import { clientNotificationEmail, getAdminEmail } from "@/emails/notification";
import { resend } from "@/lib/resend";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { consultationSchema } from "@/lib/validations/consultation";

export async function submitConsultation(data: unknown) {
  try {
    const result = consultationSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten(),
      };
    }

    // Persit to DB
    const consultation = result.data;
    const { error } = await supabaseAdmin.from("consultations").insert({
      full_name: consultation.fullName,
      business_name: consultation.businessName,
      email: consultation.email,
      phone: consultation.phone,
      industry: consultation.industry,
      website: consultation.website,
      services: consultation.services,
      message: consultation.message,
    });

    if (error) {
      console.error(error);

      return {
        success: false,
        message: "Failed to save consultation.",
      };
    }
    console.log(result.data);

    //Notify Admin by email
    const adminEmailResult = await resend.emails.send(
      getAdminEmail(result.data),
    );
    console.log("Admin email result:", adminEmailResult);

    //Notify also the client by email
    const clientEmailResult = await resend.emails.send(
      clientNotificationEmail(result.data.email, result.data.fullName),
    );
    console.log("Client email result:", clientEmailResult);

    return { success: true };
  } catch (error) {
    console.log("Error:", error);

    return { success: false, errors: "Unexpected server error." };
  }
}

export async function getConsultations() {
  const { data, error } = await supabaseAdmin
    .from("consultations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log("error:", error);
    return [];
  }

  return data;
}
