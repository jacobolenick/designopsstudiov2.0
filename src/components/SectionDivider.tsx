type SectionDividerProps = {
  label: string;
};

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div
      className="px-6 py-6 md:px-10 md:py-8"
      aria-hidden="true"
    >
      <div className="mx-auto flex max-w-[1200px] items-center gap-3 md:gap-4">
        <span className="flex-shrink-0 text-[15px] font-light leading-none text-border">
          +
        </span>

        <div className="flex min-w-0 flex-1 items-center">
          <div className="h-px flex-1 bg-border" />
          <span className="mx-0 flex-shrink-0 rounded-full border border-border bg-white px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted md:px-5 md:py-2 md:text-[11px]">
            {label}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <span className="flex-shrink-0 text-[15px] font-light leading-none text-border">
          +
        </span>
      </div>
    </div>
  );
}
