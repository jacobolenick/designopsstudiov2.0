export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? "https://designops.studio";

export const CTA_EMAIL = "jacob@designops.studio";
export const CTA_URL = `mailto:${CTA_EMAIL}`;
export const CTA_LABEL = "Work with us";

export function getCtaMailto(subject?: string) {
  if (!subject) return CTA_URL;
  return `${CTA_URL}?subject=${encodeURIComponent(subject)}`;
}

export const CONTRA_URL = "https://contra.com/jacobolenick";

export const SOCIAL_LINKS = {
  threads: "https://www.threads.net/@jacob.olenick",
  x: "https://x.com/urdesignfriend",
  linkedin: "https://www.linkedin.com/in/jacobmolenick",
} as const;
