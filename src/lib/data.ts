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

export const PROJECTS = [
  {
    slug:        "flux-platform",
    title:       "Flux Platform",
    description: "SaaS observability platform for microservices. Processes 50M events/day with p99 latency < 10ms.",
    category:    "SaaS",
    tags:        ["Go", "Kafka", "ClickHouse", "Next.js"],
    image:       "/projects/flux.png",
    href:        "https://github.com/harleyvasquez/flux",
    live:        "https://flux.harleyvasquez.dev",
    featured:    true,
  },
  {
    slug:        "arc-cli",
    title:       "Arc CLI",
    description: "Terminal tool for infrastructure-as-code management. 2k+ GitHub stars.",
    category:    "Open Source",
    tags:        ["Rust", "Terraform", "CLI"],
    image:       "/projects/arc.png",
    href:        "https://github.com/harleyvasquez/arc",
    live:        null,
    featured:    true,
  },
  {
    slug:        "databridge",
    title:       "DataBridge",
    description: "ETL framework with support for 30+ connectors. Used in production by 15 companies.",
    category:    "Open Source",
    tags:        ["Python", "PostgreSQL", "Redis"],
    image:       "/projects/databridge.png",
    href:        "https://github.com/harleyvasquez/databridge",
    live:        "https://databridge.dev",
    featured:    false,
  },
];

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
