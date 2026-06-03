import { NAV_LINKS } from "@/lib/constants/nav";
import Link from "next/link";

export default function FooterQuickLinks() {
  return (
    <div>
      <h4 className="text-lg font-semibold">Quick Links</h4>

      <ul className="mt-6 space-y-4 text-slate-400">
        {NAV_LINKS.map((item) => (
          <li key={item.title}>
            <Link href={item.link} className="transition hover:text-white">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
