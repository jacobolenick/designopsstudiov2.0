import { ContraCTAButton } from "./ContraCTAButton";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-full border-b border-border bg-white py-3 pl-4 pr-3 md:px-10 md:py-4">
      <div className="mx-auto grid w-full max-w-[1200px] min-w-0 grid-cols-[1fr_auto] items-center gap-2 md:grid-cols-[1fr_auto_1fr]">
        <a href="#" className="block shrink-0 justify-self-start py-1">
          <Logo className="[&_img]:h-7 md:[&_img]:h-9" />
        </a>

        <nav className="hidden items-center justify-center gap-8 text-[14px] text-muted md:flex md:justify-self-center">
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

        <ContraCTAButton
          size="compact"
          className="shrink-0 justify-self-end md:col-start-3"
        />
      </div>
    </header>
  );
}
