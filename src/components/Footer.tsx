import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SITE, SOCIAL } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-surface-border mt-32">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-mono text-xl font-bold text-accent mb-4">HV_</h3>
              <p className="text-sm text-foreground/40 mb-4">{SITE.tagline}</p>
              <p className="text-sm text-foreground/40">{SITE.location}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {SOCIAL.map((social) => {
                  const Icon = social.icon === "github" ? Github : 
                              social.icon === "linkedin" ? Linkedin : 
                              social.icon === "twitter" ? Twitter : Mail;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/40 hover:text-accent transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-foreground/40 hover:text-foreground transition-colors"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-surface-border text-center text-sm text-foreground/40">
            <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
