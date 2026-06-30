import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-ink/[0.04] hover:text-ink dark:border-white/20 dark:bg-white dark:text-black dark:hover:bg-white/90"
    >
      {isDark ? (
        <Sun strokeWidth={1.5} className="h-4 w-4" />
      ) : (
        <Moon strokeWidth={1.5} className="h-4 w-4" />
      )}
    </button>
  );
}
