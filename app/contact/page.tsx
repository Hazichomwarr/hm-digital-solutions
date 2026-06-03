import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="font-semibold uppercase tracking-widest text-emerald-400">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white md:text-6xl">
            Let{"'"}s Talk About Your Business
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Whether you need a website, automation, technical support, or
            business technology guidance, we are here to help.
          </p>

          <div className="mt-6 text-emerald-500 hover:underline">
            <a href="tel:+9294537790"> 📞 Call Now</a>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <Mail className="h-8 w-8 text-emerald-600" />

              <h2 className="mt-4 font-bold text-slate-900">Email</h2>

              <p className="mt-2 text-slate-600">
                contact@hm-digitalsolutions.com
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <Phone className="h-8 w-8 text-emerald-600" />

              <h2 className="mt-4 font-bold text-slate-900">Phone</h2>

              <p className="mt-2 text-slate-600">929-453-7790</p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <MapPin className="h-8 w-8 text-emerald-600" />

              <h2 className="mt-4 font-bold text-slate-900">Location</h2>

              <p className="mt-2 text-slate-600">Newark, NJ</p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <Clock className="h-8 w-8 text-emerald-600" />

              <h2 className="mt-4 font-bold text-slate-900">Response Time</h2>

              <p className="mt-2 text-slate-600">Within 24 hours</p>
            </article>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Why Work With HM Digital Solutions?
            </h2>

            <p className="mt-6 text-slate-600">
              We help small and growing businesses leverage technology to
              improve operations, strengthen their online presence, and unlock
              new growth opportunities.
            </p>

            <p className="mt-4 text-slate-600">
              Every business is different. That{"'"}s why we focus on practical,
              tailored solutions rather than one-size-fits-all approaches.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Preferred Contact Method
            </h3>

            <p className="mt-4 text-slate-600">
              For project inquiries and consultations, we recommend using our
              consultation form.
            </p>

            <Link
              href="/book-consultation"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold text-slate-900">
                Do you work with small businesses?
              </h3>

              <p className="mt-2 text-slate-600">
                Yes. We specialize in helping small and growing businesses
                implement practical technology solutions.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold text-slate-900">
                How much do your services cost?
              </h3>

              <p className="mt-2 text-slate-600">
                Pricing depends on project scope. Schedule a consultation for a
                tailored quote.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold text-slate-900">
                How quickly can we get started?
              </h3>

              <p className="mt-2 text-slate-600">
                Most projects can begin shortly after the initial consultation
                and planning phase.
              </p>
            </div>
          </div>

          <Link
            href="/book-consultation"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400"
          >
            Request Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
