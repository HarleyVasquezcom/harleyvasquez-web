import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title:       t("pageTitle"),
    description: t("pageDescription"),
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });

  return (
    <section className="section-padding pt-32">
      <div className="container-max">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("pageTitle")}</h1>
        <p className="text-foreground/60 mb-10">{t("pageDescription")}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}