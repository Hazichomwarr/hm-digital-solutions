// components/landing/ServiceCard.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Service = {
  title: string;
  icon: React.ElementType;
  color: string;
  items: string[];
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Icon */}
      <div
        className={`inline-flex rounded-2xl bg-linear-to-br ${service.color} p-4 text-white shadow-lg`}
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-semibold text-slate-900">
        {service.title}
      </h3>

      {/* List */}
      <ul className="mt-6 space-y-3 text-slate-600">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />

            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/services"
        className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
