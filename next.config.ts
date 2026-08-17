import type { NextConfig } from "next";
import createNextIntl from "next-intl/plugin";

const withNextIntl = createNextIntl("./src/i18n/request.ts");

const config: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default withNextIntl(config);
