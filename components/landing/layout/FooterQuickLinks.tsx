import Link from "next/link";

export default function FooterQuickLinks() {
  return (
    <div>
      <h4 className="text-lg font-semibold">Quick Links</h4>

      <ul className="mt-6 space-y-4 text-slate-400">
        {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
          <li key={item}>
            <Link href="/" className="transition hover:text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
