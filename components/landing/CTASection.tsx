// components/landing/CTASection.tsx

import { ctaFeatures } from "@/lib/constants/ctaFeatures";
import CTAFeature from "./CTAFeature";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-blue-950 to-black py-20 text-white">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT SIDE */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Ready to
            <span className="text-emerald-400"> Modernize </span>
            Your Business?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Let’s build the right solution for your business and take it to the
            next level with smarter systems, automation, and digital
            infrastructure.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/book-consultation">
              <button className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400 cursor-pointer">
                Book a Consultation →
              </button>
            </Link>

            <Link href="/contact">
              <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-slate-500 cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
          {ctaFeatures.map((feature) => (
            <CTAFeature key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
