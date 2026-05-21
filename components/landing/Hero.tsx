// components/landing/Hero.tsx

import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020817] text-white">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            Digital Solutions That Drive Real Results
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              Helping Local Businesses
              <span className="block text-emerald-400">
                Modernize, Automate
              </span>
              & Grow.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              We build websites, automation systems, and digital infrastructure
              that help businesses save time, increase efficiency, and grow with
              confidence.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-emerald-500 px-6 py-3 font-medium text-black transition hover:bg-emerald-400">
              Book a Consultation
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-white transition hover:border-slate-500">
              Explore Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-400">
            <div>✔ Local Expertise</div>
            <div>✔ Modern Solutions</div>
            <div>✔ Reliable Support</div>
            <div>✔ Results Driven</div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <DashboardPreview />
      </div>
    </section>
  );
}
