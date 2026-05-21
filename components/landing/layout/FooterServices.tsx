import Link from "next/link";

export default function FooterServices() {
  return (
    <div>
      <h4 className="text-lg font-semibold">Services</h4>

      <ul className="mt-6 space-y-4 text-slate-400">
        {[
          "Digital Solutions",
          "Creative Services",
          "Business Support",
          "Automation",
          "Consulting",
        ].map((item) => (
          <li key={item}>
            <Link href="/services" className="transition hover:text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
