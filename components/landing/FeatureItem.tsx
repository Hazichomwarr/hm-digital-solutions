// components/landing/FeatureItem.tsx

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function FeatureItem({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <div className="group border-l border-slate-200 pl-6 transition hover:border-emerald-500">
      {/* Icon */}
      <div className="inline-flex rounded-2xl bg-slate-100 p-3 text-slate-900 transition group-hover:bg-emerald-500 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-semibold text-slate-900">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
    </div>
  );
}
