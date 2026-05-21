// components/landing/DashboardPreview.tsx

export default function DashboardPreview() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-emerald-500/20 blur-3xl" />

      {/* Dashboard Card */}
      <div className="relative rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Welcome back, Admin
            </h3>
            <p className="text-sm text-slate-400">
              Here's what’s happening with your business today.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {["Total Clients", "Appointments", "Revenue", "Tasks Completed"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
              >
                <p className="text-sm text-slate-400">{item}</p>

                <div className="mt-2 h-6 w-24 rounded bg-slate-800" />
              </div>
            ),
          )}
        </div>

        {/* Fake Graph */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-6">
          <div className="h-48 rounded-xl bg-linear-to-br from-slate-800 to-slate-900" />
        </div>
      </div>
    </div>
  );
}
