// components/forms/ConsultationForm.tsx

"use client";

import {
  Consultation,
  consultationSchema,
} from "@/lib/validations/consultation";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitConsultation } from "@/actions/consultation";
import { useRouter } from "next/navigation";

const BUSINESS_AREAS = [
  "Website Development",
  "Business Automation",
  "Branding & Design",
  "CRM Setup (Customer Relationship Management) ",
  "AI Solutions",
  "Google Business Profile",
  "Tech Support",
  "Other",
];

export default function TestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Consultation>({
    resolver: zodResolver(consultationSchema),
  });

  const router = useRouter();

  async function onSubmit(data: Consultation) {
    const result = await submitConsultation(data);

    if (!result.success) {
      const actionError = result.errors;
      console.log("server error:", actionError);

      return;
    }

    // Reset the form fileds
    reset();

    // Redirect to /thank-you
    router.push("/thank-you");
  }
  return (
    <form
      className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Contact Information */}
      <div>
        <h2 className="mb-6 text-xl font-semibold text-slate-900">
          Contact Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Input
              placeholder="Full Name"
              error={errors.fullName?.message}
              {...register("fullName")}
              className="text-sm"
            />
          </div>

          <div>
            <Input
              type="email"
              error={errors.email?.message}
              className="text-sm"
              placeholder="Email"
              {...register("email")}
            />
          </div>

          <div>
            <Input
              type="tel"
              error={errors.phone?.message}
              className="text-sm"
              placeholder="Phone Number"
              {...register("phone")}
            />
          </div>

          <div>
            <Input
              error={errors.businessName?.message}
              className="text-sm"
              placeholder="Business Name"
              {...register("businessName")}
            />
          </div>
        </div>
      </div>

      {/* Business Information */}
      <div>
        <h2 className="mb-6 text-xl font-semibold text-slate-900">
          Business Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Input
              error={errors.industry?.message}
              className="text-sm"
              placeholder="Type of Business (Ex: Tech Store)"
              {...register("industry")}
            />
          </div>

          <Input
            type="url"
            error={errors.website?.message}
            className="text-sm"
            placeholder="Website (optional)"
            {...register("website")}
          />
        </div>
      </div>

      {/* Services */}
      <div>
        <h2 className="mb-6 text-xl font-semibold text-slate-900">
          Services Interested In
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {BUSINESS_AREAS.map((service) => (
            <label
              key={service}
              className=" text-sm flex items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
              <input
                type="checkbox"
                value={service}
                {...register("services")}
              />

              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-medium text-slate-900"
        >
          Tell us about your project
        </label>

        <textarea
          id="message"
          placeholder="Briefly describe what you're looking for..."
          {...register("message")}
          className="w-full text-sm rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
          rows={6}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* CTA */}
      <button
        type="submit"
        className="w-full rounded-xl bg-emerald-500 px-6 py-4 text-lg font-semibold text-black transition cursor-pointer hover:bg-emerald-400"
      >
        Schedule My Consultation
      </button>
    </form>
  );
}
