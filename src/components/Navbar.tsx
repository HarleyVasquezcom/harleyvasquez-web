"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NAV_LINKS, SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const locale = pathname.split("/")[1] || "en";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-surface-border">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="font-mono text-lg font-bold text-accent">
            HV_
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className={cn(
                  "text-sm transition-colors",
                  pathname === `/${locale}${link.href}`
                    ? "text-foreground"
                    : "text-foreground/40 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-foreground/40 hover:text-foreground hover:bg-surface-2 transition-all"
            >
              {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-foreground/40 hover:text-foreground hover:bg-surface-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-surface-border">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="block py-2 text-sm text-foreground/40 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
