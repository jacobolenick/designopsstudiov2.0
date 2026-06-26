import { motion } from "framer-motion";
import { ContraCTAButton } from "./ContraCTAButton";
import {
  StrokeDivider,
  strokeBadgeClass,
  strokeCardClass,
  strokeCardInnerClass,
} from "./strokeCard";

type PricingTier = {
  name: string;
  price: string;
  minimum: string;
  badge?: string;
  perfectFor: string;
  includesNote?: string;
  features: string[];
  popular?: boolean;
};

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$2,750",
    minimum: "3-month minimum",
    perfectFor:
      "Early-stage startups or teams that need senior design support.",
    features: [
      "Product UI & UX design",
      "Async communication (Slack)",
      "Figma handoff",
    ],
  },
  {
    name: "Growth",
    price: "$3,500",
    minimum: "3-month minimum",
    badge: "Most popular",
    popular: true,
    perfectFor:
      "Growing SaaS companies shipping new features every sprint.",
    includesNote: "Everything in Starter, plus:",
    features: [
      "Design system improvements",
      "New component creation",
      "UX audits",
      "Developer collaboration",
      "Design documentation",
      "Loom walkthroughs for every delivery",
    ],
  },
  {
    name: "Scale / Design Partner",
    price: "$5,750",
    minimum: "3–6 month engagement",
    perfectFor:
      "Companies investing in long-term product quality and scalability.",
    includesNote: "Everything in Growth, plus:",
    features: [
      "Complete design system architecture",
      "Product roadmap collaboration",
      "Accessibility reviews",
      "Priority turnaround",
    ],
  },
];

function FeatureItem({ feature }: { feature: string }) {
  return (
    <li className="flex gap-2.5 text-[13px] leading-snug text-ink/85">
      <span
        className="mt-[0.45em] h-1 w-1 flex-shrink-0 rounded-full bg-ink/35"
        aria-hidden="true"
      />
      {feature}
    </li>
  );
}

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
      className={`${strokeCardClass} p-6 ${
        tier.popular ? "md:px-8 md:py-10 md:-my-6" : "md:p-7"
      } ${
        tier.popular
          ? "border-ink/20 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.12)] md:z-10"
          : "border-ink/10"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[17px] font-medium tracking-[-0.01em] text-ink">
          {tier.name}
        </h3>
        {tier.badge && (
          <span className={strokeBadgeClass}>{tier.badge}</span>
        )}
      </div>

      <StrokeDivider />

      <p className="text-[13px] leading-relaxed text-muted">
        <span className="font-medium text-ink/70">Perfect for: </span>
        {tier.perfectFor}
      </p>

      <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-[clamp(1.75rem,3vw,2.125rem)] font-medium tracking-[-0.03em] text-ink">
          {tier.price}
        </span>
        <span className="text-[15px] text-muted">/month</span>
      </div>
      <p className="mt-1 text-[13px] text-muted">({tier.minimum})</p>

      <div className="relative mt-6">
        <div className="absolute -top-2.5 left-4 z-10 rounded-md border border-ink/10 bg-white px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-muted">
          Included
        </div>
        <div className={`${strokeCardInnerClass} px-5 pb-5 pt-6`}>
          {tier.includesNote && (
            <p className="mb-3 text-[12px] leading-snug text-muted">
              {tier.includesNote}
            </p>
          )}
          <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            <ul className="flex flex-col gap-2.5">
              {leftFeatures.map((feature) => (
                <FeatureItem key={feature} feature={feature} />
              ))}
            </ul>
            {rightFeatures.length > 0 && (
              <ul className="flex flex-col gap-2.5">
                {rightFeatures.map((feature) => (
                  <FeatureItem key={feature} feature={feature} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <ContraCTAButton className="mt-6" />
    </motion.article>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 max-w-2xl md:mb-12">
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
