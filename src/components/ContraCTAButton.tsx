import { CTA_URL, CTA_LABEL } from "../config";
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
    button: "gap-2 px-2.5 py-2",
    image: "h-7 w-7 rounded-md",
    text: "text-[13px] md:text-[14px]",
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
      href={CTA_URL}
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
