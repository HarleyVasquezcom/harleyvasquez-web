import { SITE } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-max text-center">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">{SITE.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-4">{SITE.role}</p>
          <p className="text-lg text-foreground/50 mb-8 max-w-2xl mx-auto">{SITE.tagline}</p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {SITE.availability && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-light text-sm">
                <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
                Available for work
              </span>
            )}
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-foreground/40 hover:text-foreground transition-colors"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
