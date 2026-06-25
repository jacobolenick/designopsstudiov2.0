type ContraCTAArrowProps = {
  size?: "sm" | "md";
  variant?: "onDark" | "onLight";
};

export function ContraCTAArrow({
  size = "md",
  variant = "onDark",
}: ContraCTAArrowProps) {
  const sizeClass =
    size === "sm" ? "w-5 h-5 text-[11px]" : "w-6 h-6 text-[12px]";
  const colorClass =
    variant === "onDark" ? "bg-white text-ink" : "bg-ink text-white";

  return (
    <span
      className={`${sizeClass} rounded-full ${colorClass} flex items-center justify-center font-medium`}
    >
      →
    </span>
  );
}
