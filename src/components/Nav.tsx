import { useEffect, useState } from "react"
import { Mail, Menu, Moon, Sun, X } from "lucide-react"
import { profile } from "../data"
import { applyTheme, type Theme } from "../theme"

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setCurrentTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  )

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  return (
    <header className="mx-auto max-w-6xl px-6 pt-6">
      <div className="flex items-center justify-between gap-3 py-3 sm:py-4">
        <a
          href="#top"
          className="min-w-0 truncate text-base font-semibold tracking-tight text-ink sm:text-lg"
        >
          {profile.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Toggle color theme"
            aria-pressed={theme === "dark"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => {
              const nextTheme = theme === "dark" ? "light" : "dark"
              applyTheme(nextTheme)
              setCurrentTheme(nextTheme)
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream text-ink transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.email}`}
            className="inline-flex h-10 items-center justify-center rounded-full bg-ink px-3 text-sm text-cream transition-transform hover:-translate-y-0.5 sm:px-4"
          >
            <Mail size={16} className="sm:hidden" />
            <span className="hidden sm:inline">Email</span>
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream text-ink sm:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav id="site-menu" aria-label="Sections" className="border-t border-line pb-3 sm:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-3 py-3 text-base text-ink transition-colors hover:bg-accent-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
