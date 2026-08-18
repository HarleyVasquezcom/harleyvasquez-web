import type { Locale } from "@/i18n/routing";

export const SITE = {
  name:         "Harley Vásquez",
  role:         "Software Engineer",
  tagline:      "Building digital products that scale.",
  bio:          "Software engineer passionate about distributed systems, user experience and code that lasts. I specialize in modern full-stack architectures and teams that ship with speed without sacrificing quality.",
  email:        "hello@harleyvasquez.dev",
  location:     "Mexico City, MX 🇲🇽",
  availability: true,
};

export const SOCIAL = [
  { label: "GitHub",   href: "https://github.com/harleyvasquez",    icon: "github"   },
  { label: "LinkedIn", href: "https://linkedin.com/in/harleyvasquez", icon: "linkedin" },
  { label: "X",        href: "https://x.com/harleyvasquez",          icon: "twitter"  },
];

export const STACK = [
  { name: "TypeScript", color: "#3178C6" },
  { name: "Next.js",    color: "#FFFFFF" },
  { name: "React",      color: "#61DAFB" },
  { name: "Node.js",    color: "#339933" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Redis",      color: "#FF4438" },
  { name: "Docker",     color: "#2496ED" },
  { name: "AWS",        color: "#FF9900" },
  { name: "Go",         color: "#00ADD8" },
  { name: "Rust",       color: "#F74C00" },
  { name: "GraphQL",    color: "#E10098" },
  { name: "Terraform",  color: "#7B42BC" },
];

export type Project = {
  slug:        string;
  title:       string;
  description: Record<Locale, string>;
  category:    Record<Locale, string>;
  tags:        string[];
  image:       string;
  href:        string;
  live:        string | null;
  featured:    boolean;
};

export const PROJECTS: Project[] = [
  {
    slug:        "flux-platform",
    title:       "Flux Platform",
    description: {
      en: "SaaS observability platform for microservices. Processes 50M events/day with p99 latency < 10ms.",
      es: "Plataforma SaaS de observabilidad para microservicios. Procesa 50M de eventos/día con latencia p99 < 10ms.",
      fr: "Plateforme SaaS d'observabilité pour microservices. Traite 50M d'événements/jour avec une latence p99 < 10ms.",
      de: "SaaS-Observability-Plattform für Microservices. Verarbeitet 50M Ereignisse/Tag mit p99-Latenz < 10ms.",
      pt: "Plataforma SaaS de observabilidade para microsserviços. Processa 50M de eventos/dia com latência p99 < 10ms.",
      it: "Piattaforma SaaS di osservabilità per microservizi. Elabora 50M di eventi/giorno con latenza p99 < 10ms.",
    },
    category: {
      en: "SaaS",
      es: "SaaS",
      fr: "SaaS",
      de: "SaaS",
      pt: "SaaS",
      it: "SaaS",
    },
    tags:        ["Go", "Kafka", "ClickHouse", "Next.js"],
    image:       "/projects/flux.png",
    href:        "https://github.com/harleyvasquez/flux",
    live:        "https://flux.harleyvasquez.dev",
    featured:    true,
  },
  {
    slug:        "arc-cli",
    title:       "Arc CLI",
    description: {
      en: "Terminal tool for infrastructure-as-code management. 2k+ GitHub stars.",
      es: "Herramienta de terminal para gestión de infraestructura como código. +2k estrellas en GitHub.",
      fr: "Outil en ligne de commande pour la gestion d'infrastructure as code. +2k étoiles GitHub.",
      de: "Terminal-Tool für Infrastructure-as-Code-Verwaltung. +2k GitHub-Sterne.",
      pt: "Ferramenta de terminal para gerenciamento de infraestrutura como código. +2k estrelas no GitHub.",
      it: "Strumento da terminale per la gestione di infrastructure as code. +2k stelle su GitHub.",
    },
    category: {
      en: "Open Source",
      es: "Código abierto",
      fr: "Open Source",
      de: "Open Source",
      pt: "Código aberto",
      it: "Open Source",
    },
    tags:        ["Rust", "Terraform", "CLI"],
    image:       "/projects/arc.png",
    href:        "https://github.com/harleyvasquez/arc",
    live:        null,
    featured:    true,
  },
  {
    slug:        "databridge",
    title:       "DataBridge",
    description: {
      en: "ETL framework with support for 30+ connectors. Used in production by 15 companies.",
      es: "Framework ETL con soporte para más de 30 conectores. Usado en producción por 15 empresas.",
      fr: "Framework ETL prenant en charge plus de 30 connecteurs. Utilisé en production par 15 entreprises.",
      de: "ETL-Framework mit Unterstützung für über 30 Konnektoren. Wird in Produktion von 15 Unternehmen eingesetzt.",
      pt: "Framework ETL com suporte a mais de 30 conectores. Usado em produção por 15 empresas.",
      it: "Framework ETL con supporto per oltre 30 connettori. Usato in produzione da 15 aziende.",
    },
    category: {
      en: "Open Source",
      es: "Código abierto",
      fr: "Open Source",
      de: "Open Source",
      pt: "Código aberto",
      it: "Open Source",
    },
    tags:        ["Python", "PostgreSQL", "Redis"],
    image:       "/projects/databridge.png",
    href:        "https://github.com/harleyvasquez/databridge",
    live:        "https://databridge.dev",
    featured:    false,
  },
];

export function localizeProject(project: Project, locale: Locale) {
  return {
    ...project,
    description: project.description[locale],
    category:    project.category[locale],
  };
}

export const EXPERIENCE = [
  {
    type:        "work",
    title:       "Senior Software Engineer",
    org:         "Vercel",
    period:      "2022 — present",
    description: "Working on the Edge Functions runtime and DX tooling. Led CI pipeline migration that's 60% faster.",
    tech:        ["TypeScript", "Rust", "Next.js"],
  },
  {
    type:        "work",
    title:       "Software Engineer II",
    org:         "Stripe",
    period:      "2019 — 2022",
    description: "Billing Infrastructure team. Designed the payment retry system that reduced revenue loss by $2M/year.",
    tech:        ["Ruby", "Go", "PostgreSQL"],
  },
  {
    type:        "education",
    title:       "B.Sc. Computer Engineering",
    org:         "UNAM",
    period:      "2015 — 2019",
    description: "Specialization in distributed systems and compilers. Thesis on SQL query planner optimization.",
    tech:        [],
  },
];

export const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Blog",       href: "#blog"       },
  { label: "Contact",    href: "#contact"    },
];
