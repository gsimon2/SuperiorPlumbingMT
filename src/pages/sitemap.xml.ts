import { pages, siteOrigin } from "@/content";
import { plumbingServices } from "@/content/services";
import { GetServerSideProps } from "next";

const extraPaths = ["/privacy"] as const;

function sitemapXml(paths: ReadonlyArray<string>) {
   const lastmod = new Date().toISOString();

   return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
   .map((path) => {
      const loc = path === "/" ? `${siteOrigin}/` : `${siteOrigin}${path}`;
      const priority = path === "/" ? "1.0" : path.startsWith("/services") ? "0.8" : "0.7";

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
   })
   .join("\n")}
</urlset>`;
}

function Sitemap() {
   return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
   const paths = [
      ...pages.map((page) => page.url),
      ...extraPaths,
      ...plumbingServices.map((service) => `/services/${service.slug}`),
   ];
   const uniquePaths = Array.from(new Set(paths));

   res.setHeader("Content-Type", "text/xml; charset=utf-8");
   res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
   res.write(sitemapXml(uniquePaths));
   res.end();

   return { props: {} };
};

export default Sitemap;
