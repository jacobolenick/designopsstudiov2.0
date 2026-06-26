import { motion } from "framer-motion";
import {
  Figma,
  Zap,
  MessagesSquare,
  CircleCheck,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";

const steps: { icon: LucideIcon; title: string }[] = [
  { icon: Figma, title: "Figma access & requirements handoff" },
  { icon: Zap, title: "Design sprint" },
  { icon: MessagesSquare, title: "Async communication through Slack + Loom" },
  { icon: CircleCheck, title: "Final sign-off on work" },
  { icon: FolderOpen, title: "Hand off of files" },
];

export function HowWeWork() {
  return (
    <section id="process" className="px-6 pb-12 pt-4 md:px-10 md:pb-16 md:pt-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight tracking-[-0.02em]">
            How we work
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted md:text-[16px]">
            A clear, repeatable process from kickoff to handoff.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-[8%] right-[8%] top-[3.25rem] hidden h-px bg-border md:block"
            aria-hidden="true"
          />

          <div className="grid items-start gap-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-5">
            {steps.map((step, i) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                  Step {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 mt-3 flex h-11 w-11 items-center justify-center rounded-full bg-white ring-4 ring-white">
                  <step.icon strokeWidth={1.5} className="h-5 w-5 text-ink" />
                </div>

                <p className="mt-4 max-w-[12rem] text-[14px] font-medium leading-snug text-ink md:text-[15px]">
                  {step.title}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-lg text-center text-[15px] leading-relaxed text-muted"
        >
          We accept 3-month or longer retainers and, under certain
          circumstances, will discuss something different.
        </motion.p>
      </div>
    </section>
  );
}
