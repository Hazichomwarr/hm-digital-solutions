// components/landing/DashboardPreview.tsx

const stats = [
  {
    title: "Total Clients",
    value: "128",
    change: "+12%",
  },
  {
    title: "Appointments",
    value: "43",
    change: "+8%",
  },
  {
    title: "Revenue",
    value: "$12,450",
    change: "+18%",
  },
  {
    title: "Tasks Completed",
    value: "312",
    change: "+24%",
  },
];

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
              Here{"'"}s what’s happening with your business today.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
            >
              <p className="text-sm text-slate-400">{stat.title}</p>

              <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>

              <p className="mt-1 text-xs text-emerald-400">
                {stat.change} this month
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fake Graph */}
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="font-medium text-white">Revenue Growth</h4>

          <span className="text-sm text-emerald-400">+18%</span>
        </div>

        <svg viewBox="0 0 300 120" className="h-48 w-full">
          <polyline
            fill="none"
            stroke="rgb(16 185 129)"
            strokeWidth="4"
            points="
        0,90
        40,80
        80,85
        120,55
        160,60
        200,40
        240,25
        300,10
      "
          />

          <circle cx="300" cy="10" r="5" fill="rgb(16 185 129)" />
        </svg>
      </div>

      {/* Recent activity */}
      {/* <div className="mt-6 space-y-3">
        {[
          "New consultation request received",
          "Website project approved",
          "Google profile optimized",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl bg-slate-950 p-3"
          >
            <div className="h-2 w-2 rounded-full bg-emerald-500" />

            <p className="text-sm text-slate-300">{item}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
