import { ContraCTAButton } from "./ContraCTAButton";
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

        <ContraCTAButton size="compact" />
      </div>
    </header>
  );
}
