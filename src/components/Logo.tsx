type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="DesignOps"
      width={8375}
      height={1276}
      className={`h-5 md:h-6 w-auto object-contain ${
        variant === "light" ? "brightness-0 invert opacity-50" : ""
      } ${className}`}
    />
  );
}
