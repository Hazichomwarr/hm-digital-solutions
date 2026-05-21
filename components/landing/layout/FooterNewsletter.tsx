import { Send } from "lucide-react";

export default function FooterNewsletter() {
  return (
    <div>
      <h4 className="text-lg font-semibold">Stay Updated</h4>

      <p className="mt-6 leading-7 text-slate-400">
        Tips, updates, and insights to help your business grow.
      </p>

      {/* Input */}
      <div className="mt-6 flex items-center gap-3">
        <input
          type="email"
          placeholder="Your email"
          className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-emerald-500"
        />

        <button className="rounded-xl bg-emerald-500 p-3 text-black transition hover:bg-emerald-400">
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
