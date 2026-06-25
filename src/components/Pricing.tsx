import { motion } from "framer-motion";
import { Crown, Rocket, TrendingUp, type LucideIcon } from "lucide-react";
import { CONTRA_URL, CTA_LABEL } from "../config";
import { ContraCTAArrow } from "./ContraCTAArrow";

type PricingTier = {
  name: string;
  price: string;
  icon: LucideIcon;
  popular?: boolean;
  features: string[];
};

const tierColors = [
  {
    icon: "text-blue-700",
    box: "bg-blue-50 border-blue-200",
  },
  {
    icon: "text-orange-700",
    box: "bg-orange-50 border-orange-200",
  },
  {
    icon: "text-green-700",
    box: "bg-green-50 border-green-200",
  },
] as const;

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$2,750/month",
    icon: Rocket,
    features: [
      "10–15 hours/month",
      "Async Slack",
      "Weekly check-in",
      "Small feature work",
      "Great for startups",
    ],
  },
  {
    name: "Growth",
    price: "$3,500/month",
    icon: TrendingUp,
    popular: true,
    features: [
      "20–25 hours/month",
      "Design system work",
      "Product design",
      "UX improvements",
      "Weekly meetings",
      "Loom walkthroughs",
    ],
  },
  {
    name: "Fractional Lead Designer",
    price: "$5,000–6,000/month",
    icon: Crown,
    features: [
      "35–40 hours/month",
      "Own the design function",
      "Mentor designers",
      "Strategy",
      "Design systems",
      "Product direction",
    ],
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

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => {
            const colors = tierColors[i];

            return (
              <motion.article
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`flex flex-col p-8 rounded-2xl border bg-white transition-all ${
                  tier.popular
                    ? "border-ink/20 shadow-sm ring-1 ring-ink/5"
                    : "border-border hover:border-ink/15 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center ${colors.box}`}
                  >
                    <tier.icon
                      strokeWidth={1.5}
                      className={`w-[18px] h-[18px] ${colors.icon}`}
                    />
                  </div>
                  {tier.popular && (
                    <span className="flex-shrink-0 text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full border bg-orange-50 text-orange-700 border-orange-200">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="text-[17px] font-medium mb-1">{tier.name}</h3>

                <p className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-medium tracking-[-0.02em] mb-6">
                  {tier.price}
                </p>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-[14px] text-muted leading-relaxed"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href={CONTRA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-ink text-white text-[17px] md:text-[18px] font-medium px-10 py-4 md:px-12 md:py-5 rounded-full hover:bg-ink/85 transition-colors shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)]"
          >
            {CTA_LABEL}
            <ContraCTAArrow />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
