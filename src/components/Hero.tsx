import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONTRA_URL, CTA_LABEL } from "../config";
import { ContraCTAArrow } from "./ContraCTAArrow";
import { FramedImage } from "./FramedImage";

const HERO_WIDTH = 6904;
const HERO_HEIGHT = 4988;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1.07, 1.14]);
  const imageY = useTransform(scrollYProgress, [0, 0.55, 1], [0, -72, -160]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible pt-28 md:pt-36 pb-20 md:pb-32 px-6 md:px-10"
    >
      <div className="max-w-[1200px] mx-auto overflow-visible">
        <div className="relative z-0 max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[13px] text-muted mb-5"
          >
            Product design & design systems
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.25rem,5.5vw,3.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-balance"
          >
            <span className="text-muted">
              Design systems and product design
            </span>{" "}
            <span className="text-ink">for teams that ship</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-[17px] text-muted leading-relaxed max-w-xl mx-auto"
          >
            0→1 Figma builds, Claude Code integration, and embedded product
            design — on retainer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <a
              href={CONTRA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-ink text-white text-[16px] md:text-[17px] font-medium px-8 py-3.5 md:px-10 md:py-4 rounded-full hover:bg-ink/85 transition-colors shadow-[0_12px_40px_-8px_rgba(0,0,0,0.25)]"
            >
              {CTA_LABEL}
              <ContraCTAArrow />
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative z-10 text-center text-[13px] text-muted mb-4 md:mb-5"
        >
          Client work for Orgspace. Helped them raise $10 million.
        </motion.p>

        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="relative z-20 origin-top will-change-transform"
        >
          <div
            className="framed-image-aspect w-full"
            style={{ paddingBottom: `${(HERO_HEIGHT / HERO_WIDTH) * 100}%` }}
          >
            <div className="framed-image-aspect__fill">
              <FramedImage
                src="/hero.png"
                alt="Orgspace product design — account creation flow"
                width={HERO_WIDTH}
                height={HERO_HEIGHT}
                priority
                fill
                className="h-full w-full shadow-[0_24px_80px_-12px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
