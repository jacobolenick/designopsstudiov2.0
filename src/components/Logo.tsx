type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const markClass =
    variant === "light" ? "invert opacity-50" : "";

  return (
    <span className={`inline-flex items-center gap-2.5 md:gap-3 ${className}`}>
      <img
        src="/logo-mark.png"
        alt=""
        width={920}
        height={948}
        className={`block h-8 w-auto flex-shrink-0 object-contain md:h-9 ${markClass}`}
        draggable={false}
      />
      <span
        className={`text-[16px] font-medium tracking-[-0.02em] md:text-[17px] ${
          variant === "light" ? "text-white/50" : "text-ink"
        }`}
      >
        DesignOps Studio
      </span>
    </span>
  );
}
