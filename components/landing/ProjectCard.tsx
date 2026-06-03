// components/landing/ProjectCard.tsx

import Image from "next/image";

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  url?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      className="group cursor-pointer"
      href={project.url ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition duration-300 hover:shadow-xl">
        <div className="relative aspect-4/3">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={600}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Fixes the missing sizes warning
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">{project.category}</p>
        <p className="mt-3 text-xs leading-6 text-slate-600">
          {project.description}
        </p>
      </div>
    </a>
  );
}
