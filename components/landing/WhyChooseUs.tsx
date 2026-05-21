// components/landing/WhyChooseUs.tsx

import { features } from "@/lib/constants/features";
import FeatureItem from "./FeatureItem";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl flex gap-16 lg:px-8">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            We Combine Technology,
            <br />
            Strategy & Local Insight
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We’re more than a service provider — we’re your technology partner
            focused on long-term growth, efficiency, and modern business
            systems.
          </p>

          <button className="mt-8 rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900 transition hover:border-slate-400 hover:shadow-md">
            About Us →
          </button>
        </div>

        {/* RIGHT GRID */}
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
