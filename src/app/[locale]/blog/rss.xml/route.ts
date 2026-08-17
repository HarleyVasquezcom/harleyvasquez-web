import { NextRequest, NextResponse } from "next/server";
import { generateRSS }               from "@/lib/rss";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const siteUrl    = process.env.NEXT_PUBLIC_SITE_URL ?? "https://harleyvasquez.dev";
  const xml        = generateRSS(locale, siteUrl);
  return new NextResponse(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
