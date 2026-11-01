import type { APIRoute } from "astro";

const localizedPages = [
  { path: "/", language: "en" },
  { path: "/es", language: "es" },
];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response("Set SITE_URL to the public site origin to generate the sitemap.", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const siteUrl = site.toString().replace(/\/$/, "");
  const alternates = [
    ...localizedPages.map(({ path, language }) => ({
      language,
      url: `${siteUrl}${path}`,
    })),
    { language: "x-default", url: `${siteUrl}/` },
  ];

  const entries = localizedPages
    .map(
      ({ path }) => `  <url>
    <loc>${siteUrl}${path}</loc>
${alternates
  .map(
    ({ language, url }) =>
      `    <xhtml:link rel="alternate" hreflang="${language}" href="${url}" />`,
  )
  .join("\n")}
  </url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
