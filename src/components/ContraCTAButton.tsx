import { CONTRA_URL, CTA_LABEL } from "../config";
import { ContraCTAArrow } from "./ContraCTAArrow";

type ContraCTAButtonProps = {
  className?: string;
};

export function ContraCTAButton({ className = "" }: ContraCTAButtonProps) {
  return (
    <a
      href={CONTRA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 rounded-2xl border border-ink bg-ink px-4 py-3.5 transition-colors hover:bg-ink/85 ${className}`}
    >
      <img
        src="/jacob-headshot.png"
        alt=""
        className="h-9 w-9 flex-shrink-0 rounded-lg object-cover"
      />
      <span className="flex-1 text-[15px] font-medium text-white">{CTA_LABEL}</span>
      <ContraCTAArrow size="sm" variant="onDark" />
    </a>
  );
}
