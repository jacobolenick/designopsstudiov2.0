import { CONTRA_URL, CTA_LABEL } from "../config";
import { ContraCTAArrow } from "./ContraCTAArrow";

type ContraCTAButtonProps = {
  className?: string;
  size?: "default" | "compact";
  showHeadshot?: boolean;
};

const sizeStyles = {
  default: {
    button: "w-full gap-3 px-4 py-3.5",
    image: "h-9 w-9",
    text: "flex-1 text-[15px]",
  },
  compact: {
    button: "gap-1.5 px-2 py-1.5 max-sm:rounded-xl sm:gap-2 sm:px-2.5 sm:py-2",
    image: "h-6 w-6 max-sm:hidden sm:h-7 sm:w-7 rounded-md",
    text: "text-[12px] sm:text-[13px] md:text-[14px] whitespace-nowrap",
  },
} as const;

export function ContraCTAButton({
  className = "",
  size = "default",
  showHeadshot = true,
}: ContraCTAButtonProps) {
  const styles = sizeStyles[size];

  return (
    <a
      href={CONTRA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center rounded-2xl border border-ink bg-ink transition-colors hover:bg-ink/85 ${
        showHeadshot
          ? styles.button
          : "w-full justify-between gap-3 px-5 py-3.5"
      } ${className}`}
    >
      {showHeadshot && (
        <img
          src="/jacob-headshot.png"
          alt=""
          className={`flex-shrink-0 rounded-lg object-cover ${styles.image}`}
        />
      )}
      <span
        className={`font-medium text-white ${showHeadshot ? styles.text : "text-[15px]"}`}
      >
        {CTA_LABEL}
      </span>
      <ContraCTAArrow size="sm" variant="onDark" />
    </a>
  );
}
