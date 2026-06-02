// app/book-consultation/page.tsx
import ConsultationForm from "@/components/forms/ConsultationForm";

export default function BookConsultationPage() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-emerald-600">
            Book Consultation
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900">
            Let{"'"}s Talk About Your Business
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Tell us a little about your business and we{"'"}ll reach out to
            discuss solutions that can help you grow.
          </p>
        </div>

        <ConsultationForm />
      </div>
    </section>
  );
}
