import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const siteUrl = (process.env.VITE_SITE_URL ?? "https://designops.studio").replace(
  /\/$/,
  ""
);

const sections = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/#process", priority: "0.8", changefreq: "monthly" },
  { path: "/#work", priority: "0.8", changefreq: "monthly" },
  { path: "/#services", priority: "0.8", changefreq: "monthly" },
  { path: "/#pricing", priority: "0.8", changefreq: "monthly" },
  { path: "/#about", priority: "0.7", changefreq: "monthly" },
  { path: "/#contact", priority: "0.7", changefreq: "monthly" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sections
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `# ${siteUrl}
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml

# Curated overview for AI systems
# ${siteUrl}/llms.txt
`;

const llms = `# DesignOps Studio

> Product design, design systems, and 0–1 Figma builds on retainer for teams that ship.

DesignOps Studio is a product design consultancy led by Jacob Olenick. The site covers services, selected work, pricing tiers (Starter, Growth, Fractional Lead), and how retainer engagements run from kickoff to handoff.

## Main

- [Home](${siteUrl}/): Landing page — hero, clients, work, process, services, pricing, and founder bio
- [How we work](${siteUrl}/#process): Five-step process from Figma handoff through design sprint, async comms, sign-off, and file delivery
- [Selected work](${siteUrl}/#work): Portfolio including Espresso UI, Orgspace, CRTSIDE, AXS Inventory, and Visual App
- [What we offer](${siteUrl}/#services): 0→1 design systems in Figma, Claude Code integration, and embedded product design
- [Pricing](${siteUrl}/#pricing): Monthly retainer tiers at $2,750 (Starter), $3,500 (Growth), and $5,000–6,000 (Fractional Lead)
- [About the founder](${siteUrl}/#about): Jacob Olenick — Founder of DesignOps Studio & Espresso UI
- [Contact](${siteUrl}/#contact): Footer CTA and links to hire on Contra

## Optional

- [Hire on Contra](https://contra.com/jacobolenick): Book Jacob Olenick for product design and design systems work
- [LinkedIn](https://www.linkedin.com/in/jacobmolenick): Jacob Olenick on LinkedIn
- [Threads](https://www.threads.net/@jacob.olenick): Jacob Olenick on Threads
- [X](https://x.com/urdesignfriend): Jacob Olenick on X
`;

writeFileSync(join(publicDir, "robots.txt"), robots);
writeFileSync(join(publicDir, "sitemap.xml"), sitemap);
writeFileSync(join(publicDir, "llms.txt"), llms);

console.log(`Generated SEO files for ${siteUrl}`);
