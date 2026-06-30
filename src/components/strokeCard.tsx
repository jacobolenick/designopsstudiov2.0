type StrokeDividerProps = {
  className?: string;
};

export const strokeCardClass =
  "relative flex flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-surface p-6 md:p-7";

export const strokeCardInnerClass =
  "rounded-2xl border border-ink/[0.08] bg-gradient-to-b from-ink/[0.04] to-ink/[0.02]";

export const strokeBadgeClass =
  "flex-shrink-0 rounded-md border border-ink/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-muted";

export const strokeIconBoxClass =
  "flex items-center justify-center rounded-xl border border-ink/10 bg-surface";

export function StrokeDivider({ className = "my-5" }: StrokeDividerProps) {
  return (
    <div
      className={`h-px w-full ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, var(--stroke-divider) 0, var(--stroke-divider) 4px, transparent 4px, transparent 10px)",
      }}
    />
  );
}
