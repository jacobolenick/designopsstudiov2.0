import { motion } from "framer-motion";
import { CONTRA_URL, CTA_LABEL } from "../config";

type PricingTier = {
  name: string;
  badge: string;
  badgeClass: string;
  description: string;
};

const tiers: PricingTier[] = [
  {
    name: "Design System (Only)",
    badge: "3+ months",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    description:
      "Full Figma build with variables, themes, and documentation.",
  },
  {
    name: "Design System (Ongoing)",
    badge: "Retainer",
    badgeClass: "bg-orange-50 text-orange-700 border-orange-200",
    description:
      "We continue to make updates to your design system as your needs change.",
  },
  {
    name: "Design System + Claude Code",
    badge: "5+ months",
    badgeClass: "bg-green-50 text-green-700 border-green-200",
    description:
      "Full Figma build with variables, themes, and documentation.",
  },
  {
    name: "Product Design",
    badge: "3+ months",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    description:
      "We'll be your embedded product designer for all your design needs.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-10 py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em] leading-tight">
            Pricing
          </h2>
          <p className="mt-4 text-muted text-[15px] md:text-[16px] leading-relaxed">
            Retainer-based engagements scoped to your team. Reach out for a
            custom quote.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {tiers.map((tier, i) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col p-8 rounded-2xl border border-border bg-white hover:border-ink/15 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-[17px] font-medium">{tier.name}</h3>
                <span
                  className={`flex-shrink-0 text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full border ${tier.badgeClass}`}
                >
                  {tier.badge}
                </span>
              </div>

              <p className="text-[14px] text-muted leading-relaxed flex-1">
                {tier.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a
            href={CONTRA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-ink text-white text-[14px] font-medium px-6 py-2.5 rounded-full hover:bg-ink/85 transition-colors"
          >
            {CTA_LABEL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
