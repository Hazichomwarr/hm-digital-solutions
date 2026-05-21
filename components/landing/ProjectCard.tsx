// components/landing/ProjectCard.tsx

import Image from "next/image";

type Project = {
  title: string;
  category: string;
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition duration-300 hover:shadow-xl">
        <div className="relative aspect-4/3">
          <Image
            src={project.image}
            alt={project.title}
            fill
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
      </div>
    </div>
  );
}
