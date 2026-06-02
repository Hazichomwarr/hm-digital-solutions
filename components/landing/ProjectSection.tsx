// components/landing/ProjectsSection.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/constants/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Our Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              Projects That Make an Impact
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              A glimpse of the businesses we’ve helped transform through
              websites, systems, automation, and branding.
            </p>
          </div>

          {/* <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link> */}
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
