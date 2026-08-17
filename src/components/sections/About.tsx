import { SITE, STACK } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-foreground/70 leading-relaxed mb-6">{SITE.bio}</p>
            <p className="text-foreground/70 leading-relaxed">
              I believe in building software that not only works today but scales gracefully for tomorrow. 
              My approach combines deep technical expertise with a focus on user experience and team collaboration.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech.name}
                  className="px-3 py-1.5 rounded-md bg-surface-2 text-sm border border-surface-border hover:border-accent transition-colors"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
