import { EXPERIENCE } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
        
        <div className="space-y-8">
          {EXPERIENCE.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 rounded-xl glass hover:border-accent/30 transition-all"
            >
              <div className="flex-shrink-0">
                {item.type === "work" ? (
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Briefcase className="text-accent" size={24} />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center">
                    <GraduationCap className="text-foreground/60" size={24} />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-foreground/40">·</span>
                  <span className="text-foreground/60">{item.org}</span>
                </div>
                
                <p className="text-sm text-foreground/40 mb-3">{item.period}</p>
                <p className="text-foreground/70 mb-4">{item.description}</p>
                
                {item.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded bg-surface-2 text-foreground/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
