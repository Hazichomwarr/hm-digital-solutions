// components/landing/CTAFeature.tsx

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function CTAFeature({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <div className="flex gap-4">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
        <Icon className="h-7 w-7" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
        <p className="mt-2 leading-7 text-slate-400">{feature.description}</p>
      </div>
    </div>
  );
}
