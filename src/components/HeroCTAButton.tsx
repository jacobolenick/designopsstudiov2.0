import { CTA_URL, CTA_LABEL } from "../config";
import { ContraCTAArrow } from "./ContraCTAArrow";

export function HeroCTAButton() {
  return (
    <a
      href={CTA_URL}
      className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl border border-ink bg-ink px-5 py-3.5 transition-colors hover:bg-ink/85 dark:border-white dark:bg-white dark:hover:bg-white/90"
    >
      <span className="text-[15px] font-medium text-white dark:text-black">{CTA_LABEL}</span>
      <ContraCTAArrow size="sm" variant="onDark" />
    </a>
  );
}
