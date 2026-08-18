"use client";
import type { Project } from "@/lib/data";
import { localizeProject } from "@/lib/data";
import type { Locale } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { trackProjectClick } from "@/lib/analytics";

export function ProjectCard({ project }: { project: Project }) {
  const locale  = useLocale() as Locale;
  const t       = useTranslations("projects");
  const { title, description, category } = localizeProject(project, locale);

  return (
    <div className="glass rounded-xl overflow-hidden hover:border-accent/50 transition-all group">
      <div className="aspect-video bg-surface-2 relative overflow-hidden">
        <Image
          src={project.image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded bg-surface-2 text-foreground/60">
            {category}
          </span>
          {project.featured && (
            <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent-light">
              {t("featured")}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded bg-surface-2 text-foreground/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackProjectClick(project.title)}
            className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors"
          >
            <Github size={16} />
            {t("code")}
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProjectClick(project.title)}
              className="flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <ExternalLink size={16} />
              {t("live")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}