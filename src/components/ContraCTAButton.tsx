import { CONTRA_URL, CTA_LABEL } from "../config";
import { ContraCTAArrow } from "./ContraCTAArrow";

type ContraCTAButtonProps = {
  className?: string;
  size?: "default" | "compact";
};

const sizeStyles = {
  default: {
    button: "w-full gap-3 px-4 py-3.5",
    image: "h-9 w-9",
    text: "flex-1 text-[15px]",
  },
  compact: {
    button: "gap-2 px-2.5 py-2",
    image: "h-7 w-7 rounded-md",
    text: "text-[13px] md:text-[14px]",
  },
} as const;

export function ContraCTAButton({
  className = "",
  size = "default",
}: ContraCTAButtonProps) {
  const styles = sizeStyles[size];

  return (
    <a
      href={CONTRA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center rounded-2xl border border-ink bg-ink transition-colors hover:bg-ink/85 ${styles.button} ${className}`}
    >
      <img
        src="/jacob-headshot.png"
        alt=""
        className={`flex-shrink-0 rounded-lg object-cover ${styles.image}`}
      />
      <span className={`font-medium text-white ${styles.text}`}>
        {CTA_LABEL}
      </span>
      <ContraCTAArrow size="sm" variant="onDark" />
    </a>
  );
}
