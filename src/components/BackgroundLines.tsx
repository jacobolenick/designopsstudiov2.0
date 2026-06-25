export function BackgroundLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="mx-auto h-full max-w-[1200px] px-6 md:px-10">
        <div className="relative h-full">
          <div className="absolute inset-y-0 left-0 w-px bg-ink/[0.06]" />
          <div className="absolute inset-y-0 right-0 w-px bg-ink/[0.06]" />
          <div className="absolute inset-y-0 left-1/4 hidden w-px bg-ink/[0.04] md:block" />
          <div className="absolute inset-y-0 left-1/2 hidden w-px bg-ink/[0.04] md:block" />
          <div className="absolute inset-y-0 left-3/4 hidden w-px bg-ink/[0.04] md:block" />
        </div>
      </div>
    </div>
  );
}
