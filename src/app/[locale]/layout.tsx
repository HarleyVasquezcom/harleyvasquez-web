import type { Metadata } from "next";
import { notFound }       from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages }    from "next-intl/server";
import { routing }        from "@/i18n/routing";
import { ThemeProvider }  from "@/components/ThemeProvider";
import { Navbar }         from "@/components/Navbar";
import { Footer }         from "@/components/Footer";
import { AnalyticsProvider } from "@/components/Analytics";
import { GeistSans }      from "geist/font/sans";
import { GeistMono }      from "geist/font/mono";
import "../globals.css";

export const metadata: Metadata = {
  title: { default: "Harley Vásquez — Software Engineer", template: "%s | Harley Vásquez" },
  description: "Software Engineer specialized in distributed systems, full-stack architectures and high-scale SaaS products.",
  metadataBase: new URL("https://harleyvasquez.dev"),
  openGraph: {
    type: "website",
    siteName: "Harley Vásquez",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", creator: "@harleyvasquez" },
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-surface text-foreground antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <AnalyticsProvider />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
