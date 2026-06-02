// app/thank-you/page.tsx

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <CheckCircle2 className="mb-6 h-20 w-20 text-emerald-500" />

        <h1 className="text-5xl font-bold text-slate-900">Thank You!</h1>

        <p className="mt-6 text-lg text-slate-600">
          Your consultation request has been received.
        </p>

        <p className="mt-2 text-lg text-slate-600">
          We{"'"}ll review your submission and contact you within 24 hours.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
          <h2 className="font-semibold text-slate-900">What Happens Next?</h2>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>✓ We review your request</li>

            <li>✓ We identify potential solutions</li>

            <li>✓ We reach out to schedule a discussion</li>
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400"
          >
            Return Home
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
