import { motion } from "framer-motion";
import {
  Figma,
  Zap,
  MessagesSquare,
  CircleCheck,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";
import {
  StrokeDivider,
  strokeBadgeClass,
  strokeCardClass,
  strokeCardInnerClass,
  strokeIconBoxClass,
} from "./strokeCard";

const steps: { icon: LucideIcon; title: string }[] = [
  { icon: Figma, title: "Figma access & requirements handoff" },
  { icon: Zap, title: "Design sprint" },
  { icon: MessagesSquare, title: "Async communication through Slack + Loom" },
  { icon: CircleCheck, title: "Final sign-off on work" },
  { icon: FolderOpen, title: "Hand off of files" },
];

export function HowWeWork() {
  return (
    <section id="process" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em] leading-tight text-balance">
            How we work
          </h2>
          <p className="mt-4 text-muted text-[15px] md:text-[16px] leading-relaxed">
            A clear, repeatable process from kickoff to handoff.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`${strokeCardClass} items-center text-center`}
            >
              <span className={strokeBadgeClass}>
                Step {String(i + 1).padStart(2, "0")}
              </span>

              <StrokeDivider className="my-4" />

              <div
                className={`${strokeCardInnerClass} flex w-full flex-col items-center p-5`}
              >
                <div className={`${strokeIconBoxClass} mb-4 h-11 w-11`}>
                  <step.icon strokeWidth={1.5} className="h-5 w-5 text-ink" />
                </div>
                <p className="text-[14px] md:text-[15px] font-medium leading-snug text-ink">
                  {step.title}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-muted text-[15px] max-w-lg mx-auto leading-relaxed"
        >
          We accept 3-month or longer retainers and, under certain
          circumstances, will discuss something different.
        </motion.p>
      </div>
    </section>
  );
}
