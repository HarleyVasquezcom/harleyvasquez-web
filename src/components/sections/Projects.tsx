"use client";
import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export function Projects() {
  const t      = useTranslations("projects");
  const locale = useLocale();

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("title")}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-all"
          >
            <span className="text-sm font-medium">{t("seeMore")}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}