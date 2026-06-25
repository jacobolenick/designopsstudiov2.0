import { CONTRA_URL, CTA_LABEL } from "../config";
import { ContraCTAArrow } from "./ContraCTAArrow";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <a href="#" className="block py-1">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[14px] text-muted">
          <a href="#process" className="hover:text-ink transition-colors">
            Process
          </a>
          <a href="#work" className="hover:text-ink transition-colors">
            Work
          </a>
          <a href="#services" className="hover:text-ink transition-colors">
            Services
          </a>
          <a href="#pricing" className="hover:text-ink transition-colors">
            Pricing
          </a>
          <a href="#about" className="hover:text-ink transition-colors">
            About
          </a>
        </nav>

        <a
          href={CONTRA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-medium bg-ink text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-ink/85 transition-colors"
        >
          {CTA_LABEL}
          <ContraCTAArrow size="sm" />
        </a>
      </div>
    </header>
  );
}
