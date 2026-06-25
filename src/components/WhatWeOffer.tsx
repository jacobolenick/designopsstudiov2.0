import { motion } from "framer-motion";
import { Layers, Code2, PenTool } from "lucide-react";

const serviceColors = [
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

const services = [
  {
    icon: Layers,
    title: "0→1 Design Systems in Figma",
    description:
      "Full builds from the ground up — components, variables, themes, and documentation.",
  },
  {
    icon: Code2,
    title: "Claude Code Integration",
    description:
      "Connect your design system to Claude Code so design and development stay in sync.",
  },
  {
    icon: PenTool,
    title: "Product Design",
    description:
      "Embedded product design for features, flows, and interfaces your team ships every day.",
  },
];

export function WhatWeOffer() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em] leading-tight">
            What we offer
          </h2>
          <p className="mt-4 text-muted text-[15px] md:text-[16px] leading-relaxed">
            Focused services for teams building products at scale. We also offer
            branding and web design in certain situations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const colors = serviceColors[i];

            return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 rounded-2xl bg-white border border-border"
            >
              <div
                className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-6 ${colors.box}`}
              >
                <service.icon
                  strokeWidth={1.5}
                  className={`w-[18px] h-[18px] ${colors.icon}`}
                />
              </div>
              <h3 className="text-[17px] font-medium mb-2">{service.title}</h3>
              <p className="text-[14px] text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
