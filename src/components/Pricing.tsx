import { motion } from "framer-motion";
import { CONTRA_URL, CTA_LABEL } from "../config";
import { ContraCTAArrow } from "./ContraCTAArrow";

type PricingTier = {
  name: string;
  price: string;
  badge?: string;
  features: string[];
  popular?: boolean;
};

const sharedFeatures = [
  "Async Slack",
  "Product design",
  "Design systems",
  "UX improvements",
  "Loom walkthroughs",
] as const;

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$2,750",
    features: ["10–15 hours/month", ...sharedFeatures],
  },
  {
    name: "Growth",
    price: "$3,500",
    badge: "Most popular",
    popular: true,
    features: ["20–25 hours/month", ...sharedFeatures],
  },
  {
    name: "Fractional Lead",
    price: "$5,000–6,000",
    badge: "Full design leadership",
    features: ["35–40 hours/month", ...sharedFeatures],
  },
];

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const mid = Math.ceil(tier.features.length / 2);
  const leftFeatures = tier.features.slice(0, mid);
  const rightFeatures = tier.features.slice(mid);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`relative flex flex-col overflow-hidden rounded-[28px] border bg-white p-6 ${
        tier.popular ? "md:px-8 md:py-10 md:-my-6" : "md:p-7"
      } ${
        tier.popular
          ? "border-ink/20 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.12)] md:z-10"
          : "border-ink/10"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[17px] font-medium tracking-[-0.01em] text-ink">
          {tier.name}
        </h3>
        {tier.badge && (
          <span className="flex-shrink-0 rounded-md border border-ink/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-muted">
            {tier.badge}
          </span>
        )}
      </div>

      {/* Dashed divider */}
      <div
        className="my-5 h-px w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(0,0,0,0.14) 0, rgba(0,0,0,0.14) 4px, transparent 4px, transparent 10px)",
        }}
      />

      {/* Price */}
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-[clamp(1.75rem,3vw,2.125rem)] font-medium tracking-[-0.03em] text-ink">
          {tier.price}
        </span>
        <span className="text-[15px] text-muted">/month</span>
      </div>

      {/* Features box */}
      <div className={`relative flex-1 ${tier.popular ? "mt-6 md:mt-8" : "mt-6"}`}>
        <div className="absolute -top-2.5 left-4 z-10 rounded-md border border-ink/10 bg-white px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-muted">
          Included
        </div>
        <div className="rounded-2xl border border-ink/[0.08] bg-gradient-to-b from-ink/[0.04] to-ink/[0.02] px-5 pb-5 pt-6">
          <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            <ul className="flex flex-col gap-2.5">
              {leftFeatures.map((feature) => (
                <li
                  key={feature}
                  className="text-[13px] leading-snug text-ink/85"
                >
                  {feature}
                </li>
              ))}
            </ul>
            {rightFeatures.length > 0 && (
              <ul className="flex flex-col gap-2.5">
                {rightFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="text-[13px] leading-snug text-ink/85"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <a
        href={CONTRA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 rounded-2xl border border-ink/10 bg-gradient-to-b from-ink/[0.05] to-ink/[0.02] px-4 py-3.5 transition-colors hover:border-ink/15 hover:from-ink/[0.07] hover:to-ink/[0.03] ${
          tier.popular ? "mt-6 md:mt-8" : "mt-6"
        }`}
      >
        <img
          src="/jacob-headshot.png"
          alt=""
          className="h-9 w-9 flex-shrink-0 rounded-lg object-cover"
        />
        <span className="flex-1 text-[15px] font-medium text-ink">
          {CTA_LABEL}
        </span>
        <ContraCTAArrow size="sm" variant="onLight" />
      </a>
    </motion.article>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-white px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 max-w-2xl md:mb-20">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight tracking-[-0.02em]">
            Pricing
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted md:text-[16px]">
            Retainer-based engagements scoped to your team. Reach out for a
            custom quote.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)] md:items-center">
          {tiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
