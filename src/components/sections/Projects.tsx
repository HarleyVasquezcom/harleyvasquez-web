"use client";
import { PROJECTS } from "@/lib/data";
import { trackProjectClick } from "@/lib/analytics";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              className="glass rounded-xl overflow-hidden hover:border-accent/50 transition-all group"
            >
              <div className="aspect-video bg-surface-2 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-surface-2 text-foreground/60">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent-light">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                  {project.description}
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
                    Code
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
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
