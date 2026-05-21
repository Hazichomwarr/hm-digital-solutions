// components/landing/ServicesSection.tsx

import { services } from "@/lib/constants/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            Solutions to Run Your Business Smarter
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From building your online presence to streamlining your operations,
            we provide end-to-end digital solutions tailored to your goals.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
