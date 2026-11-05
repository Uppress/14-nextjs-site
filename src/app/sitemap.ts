import type { MetadataRoute } from "next";
import { getServices } from "@/lib/services";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/services", "/contact"];
  const serviceRoutes = getServices().map(
    (service) => `/services/${service.slug}`,
  );

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
