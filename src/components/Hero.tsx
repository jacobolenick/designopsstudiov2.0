import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContraCTAButton } from "./ContraCTAButton";
import { FramedImage } from "./FramedImage";

const HERO_WIDTH = 4568;
const HERO_HEIGHT = 3372;

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
      className="relative overflow-visible px-6 pb-20 pt-28 md:px-10 md:pb-32 md:pt-36"
    >
      <div className="mx-auto max-w-[1200px] overflow-visible">
        <div className="relative z-0 mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-[14px] font-medium tracking-[-0.01em] text-muted md:text-[15px]"
          >
            DesignOps Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-[clamp(2.25rem,5.5vw,3.75rem)] font-medium leading-[1.1] tracking-[-0.03em]"
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
            className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-muted"
          >
            0–1 Figma builds, AI integrations, and embedded product
            design — on retainer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-8 w-full max-w-sm"
          >
            <ContraCTAButton />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative z-10 mb-4 text-center text-[13px] text-muted md:mb-5"
        >
          Espresso UI — Figma library for SaaS applications
        </motion.p>

        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="relative z-20 mx-auto w-full origin-top will-change-transform"
        >
          <FramedImage
            src="/hero.jpg"
            alt="Espresso UI design system — components and patterns"
            width={HERO_WIDTH}
            height={HERO_HEIGHT}
            priority
            className="hero-image block w-full shadow-[0_24px_80px_-12px_rgba(0,0,0,0.12)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
