import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PageServices } from "@/lib/constants/services";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="font-semibold uppercase tracking-widest text-emerald-400">
            Our Services
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white md:text-6xl">
            Technology Solutions Built
            <br />
            For Growing Businesses
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            We help businesses streamline operations, improve visibility, and
            leverage technology to achieve sustainable growth.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {PageServices.map((service) => (
              <ServiceItem key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Not Sure Which Service You Need?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Schedule a consultation and we{"'"}ll help identify the best
            technology solutions for your business goals.
          </p>

          <Link
            href="/book-consultation"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-semibold text-black transition hover:bg-emerald-400"
          >
            Book a Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceItem({ service }: { service: PageServices }) {
  const Icon = service.icon;
  return (
    <article className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-4">
        <Image
          src={service.imageUrl}
          alt={`${service.title} service illustration`}
          width={400}
          height={150}
          className="w-auto aspect-video rounded-2xl transition duration-300 hover:scale-105"
        />
        <div>
          <div className="p-2 my-2 flex items-center justify-center gap-4 rounded-2xl bg-emerald-100">
            <Icon className="h-6 w-6 text-emerald-600" />

            <h2 className="text-2xl font-bold text-slate-900">
              {service.title}
            </h2>
          </div>

          <div className="mt-6 space-y-5 rounded-xl bg-slate-50 p-4">
            <div>
              <p className="font-semibold text-slate-900">Problem</p>

              <p className="mt-2 text-slate-600">{service.problem}</p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Solution</p>

              <p className="mt-2 text-slate-600">{service.solution}</p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Outcome</p>

              <p className="mt-2 text-slate-600">{service.outcome}</p>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/book-consultation"
        className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-600 hover:text-emerald-700"
      >
        Discuss This Service
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
