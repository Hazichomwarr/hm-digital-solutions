import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function FooterContact() {
  return (
    <div>
      <h4 className="text-lg font-semibold">Contact</h4>

      <ul className="mt-6 space-y-5 text-slate-400">
        <li className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 text-emerald-400" />
          Newark, NJ
        </li>

        <li className="flex items-start gap-3">
          <Phone className="mt-1 h-5 w-5 text-emerald-400" />
          (862) 123-4567
        </li>

        <li className="flex items-start gap-3">
          <Mail className="mt-1 h-5 w-5 text-emerald-400" />
          hello@hmdigitalsolutions.tech
        </li>
      </ul>

      {/* Socials */}
      <div className="mt-8 flex gap-4">
        <button className="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-slate-600 hover:text-white cursor-pointer">
          <FaLinkedinIn className="h-5 w-5" />
        </button>

        <button className="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-slate-600 hover:text-white cursor-pointer">
          <FaInstagram className="h-5 w-5" />
        </button>

        <button className="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-slate-600 hover:text-white cursor-pointer">
          <FaFacebook className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
