import { Consultation } from "../lib/validations/consultation";
import ConsultationAdminEmail from "./ConsultationAdminEmail";
import ConsultationClientEmail from "./ConsultationClientEmail";

export const getAdminEmail = (consultation: Consultation) => ({
  from: "onboarding@resend.dev",

  to: "marehamza8@gmail.com",

  subject: "New Consultation Request",

  react: (
    <ConsultationAdminEmail
      fullName={consultation.fullName}
      email={consultation.email}
      businessName={consultation.businessName}
      phone={consultation.phone}
      services={consultation.services}
      message={consultation.message}
    />
  ),
});

export const clientNotificationEmail = (email: string, fullName: string) => ({
  from: "onboarding@resend.dev",

  to: email,

  subject: "HM digital - Consultation Request received",

  react: <ConsultationClientEmail fullName={fullName} />,
});
