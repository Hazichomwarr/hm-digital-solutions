export default function FooterBrand() {
  return (
    <div className="lg:col-span-1">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-600 to-emerald-500" />

        <div>
          <h3 className="text-xl font-bold">HM Digital</h3>
          <p className="text-sm text-slate-400">Solutions</p>
        </div>
      </div>

      <p className="mt-6 leading-7 text-slate-400">
        Helping businesses modernize, automate, and grow in the digital age.
      </p>
    </div>
  );
}
