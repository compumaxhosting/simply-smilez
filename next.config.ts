import type { NextConfig } from "next";
import { redirectMap } from "./src/lib/content";

const nextConfig: NextConfig = {
  async redirects() {
    return redirectMap;
  },
};

export default nextConfig;
