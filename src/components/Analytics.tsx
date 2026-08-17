import { Analytics }     from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script            from "next/script";

export function AnalyticsProvider() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <>
      <Analytics />
      <SpeedInsights />
      {domain && (
        <Script defer data-domain={domain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
      )}
    </>
  );
}
