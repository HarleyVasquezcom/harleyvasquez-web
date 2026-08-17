"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLocale }              from "next-intl";
import { Globe }                  from "lucide-react";
import { useState }               from "react";
import { trackLanguageSwitch }    from "@/lib/analytics";
import { routing }                from "@/i18n/routing";
import { cn }                     from "@/lib/utils";

const LABELS: Record<string, string> = { en:"EN", es:"ES", fr:"FR", de:"DE", pt:"PT", it:"IT" };

export function LanguageSwitcher() {
  const locale   = useLocale();
  const router   = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (next: string) => {
    const segments = pathname.split("/");
    segments[1]    = next;
    trackLanguageSwitch(next);
    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-foreground/40 hover:text-foreground hover:bg-surface-2 transition-all">
        <Globe size={13} />{LABELS[locale]}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 glass rounded-xl overflow-hidden min-w-[80px] z-50 shadow-xl">
          {routing.locales.map((l) => (
            <button key={l} onClick={() => switchLocale(l)}
              className={cn("w-full px-3 py-2 text-xs text-left transition-colors",
                l === locale ? "text-accent bg-accent/10" : "text-foreground/50 hover:text-foreground hover:bg-surface-2")}>
              {LABELS[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
