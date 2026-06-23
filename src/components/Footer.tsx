import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { CONTRA_URL, CTA_LABEL } from "../config";
import { Logo } from "./Logo";
import { CloudText } from "./CloudText";

function MagneticButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-20 inline-flex items-center gap-2 bg-white text-ink text-[14px] font-medium px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
    >
      {children}
    </motion.a>
  );
}

function FooterCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative py-20 md:py-28 overflow-hidden border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        <a
          href={CONTRA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mb-10 md:mb-12 relative z-20"
        >
          <p className="text-[13px] text-white/40 mb-3 tracking-wide">
            Start a project
          </p>
          <h2 className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[-0.02em] text-white/70 transition-colors duration-500 hover:text-white/90">
            Ready to build your design system?{" "}
            <span className="text-white/40">Starting today.</span>
          </h2>
        </a>

        <div className="flex justify-center mb-10 md:mb-12">
          <CloudText
            onHoverChange={setHovered}
            className="text-[clamp(4rem,18vw,11rem)] font-medium tracking-[-0.04em] leading-[0.85] cursor-default"
          >
            DesignOps
          </CloudText>
        </div>

        <div className="flex justify-center relative z-20">
          <MagneticButton href={CONTRA_URL}>
            {CTA_LABEL}
            <span className="w-5 h-5 rounded-full bg-ink text-white text-[11px] flex items-center justify-center font-medium">
              →
            </span>
          </MagneticButton>
        </div>

        <div
          className={`mt-10 overflow-hidden transition-opacity duration-700 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-[clamp(2rem,5vw,3.5rem)] font-medium tracking-[-0.03em] text-white/[0.06] mx-10"
              >
                {CTA_LABEL}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ opacity: hovered ? 0.12 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,197,253,0.25),transparent_70%)]" />
      </motion.div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <FooterCTA />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pb-10">
        <div className="grid sm:grid-cols-3 gap-10 pt-10 border-t border-white/10 text-[14px]">
          <div>
            <p className="font-medium mb-4">Connect</p>
            <ul className="space-y-2 text-white/50">
              <li>
                <a
                  href={CONTRA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contra
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-4">Navigate</p>
            <ul className="space-y-2 text-white/50">
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-4">Info</p>
            <ul className="space-y-2 text-white/50">
              <li>3+ month retainers</li>
              <li>Remote worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[12px] text-white/30">
          <Logo variant="light" />
          <p>Product design & design systems</p>
        </div>
      </div>
    </footer>
  );
}
