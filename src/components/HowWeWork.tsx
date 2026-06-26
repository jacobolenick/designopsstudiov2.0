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
    <section id="process" className="px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 max-w-2xl md:mb-12">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight tracking-[-0.02em]">
            How we work
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted md:text-[16px]">
            A clear, repeatable process from kickoff to handoff.
          </p>
        </div>

        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`${strokeCardClass} flex h-full flex-col`}
            >
              <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-muted">
                Step {String(i + 1).padStart(2, "0")}
              </span>

              <StrokeDivider />

              <div
                className={`${strokeCardInnerClass} flex min-h-[160px] flex-1 flex-col items-start p-5`}
              >
                <div className={`${strokeIconBoxClass} mb-4 h-10 w-10`}>
                  <step.icon
                    strokeWidth={1.5}
                    className="h-[18px] w-[18px] text-ink"
                  />
                </div>
                <p className="text-[14px] leading-relaxed text-ink/85">
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
          className="mx-auto mt-12 max-w-lg text-center text-[15px] leading-relaxed text-muted"
        >
          We accept 3-month or longer retainers and, under certain
          circumstances, will discuss something different.
        </motion.p>
      </div>
    </section>
  );
}
