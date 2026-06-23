import { CONTRA_URL } from "../config";
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
        </nav>

        <a
          href={CONTRA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium bg-ink text-white px-4 py-2 rounded-full hover:bg-ink/85 transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
