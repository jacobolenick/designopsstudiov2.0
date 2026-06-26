import { ContraCTAButton } from "./ContraCTAButton";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white px-4 py-3 md:px-10 md:py-4">
      <div className="mx-auto flex max-w-[1200px] min-w-0 items-center justify-between gap-3">
        <a href="#" className="block shrink-0 py-1">
          <Logo className="[&_img]:h-7 md:[&_img]:h-9" />
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

        <ContraCTAButton size="compact" className="shrink-0" />
      </div>
    </header>
  );
}
