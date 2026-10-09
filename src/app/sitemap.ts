import type { MetadataRoute } from "next";
import { treatments, doctors, site, redirectMap } from "@/lib/content";

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/treatments",
    "/doctors",
    "/gallery",
    "/testimonials",
    "/contact",
  ].map((p) => ({
    url: `${site.domain}${p}`,
    lastModified: now,
    changeFrequency: (p === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: p === "" ? 1 : p === "/treatments" || p === "/about" ? 0.9 : 0.8,
  }));

  const treatmentRoutes = treatments.map((t) => ({
    url: `${site.domain}/treatments/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const doctorRoutes = doctors.map((d) => ({
    url: `${site.domain}/doctors/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // published legacy URLs that now redirect, so crawlers follow the change
  const legacy = redirectMap
    .filter((r) => r.destination !== r.source)
    .map((r) => ({
      url: `${site.domain}${r.source}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  return [...staticRoutes, ...treatmentRoutes, ...doctorRoutes, ...legacy];
}
