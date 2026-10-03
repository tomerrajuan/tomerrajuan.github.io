import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { profile } from "../data"
import { applyTheme, type Theme } from "../theme"

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [theme, setCurrentTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  )

  useEffect(() => {
    let last = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 12)
      setHidden(y > last && y > 80)
      last = y
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40"
      animate={{ y: hidden ? -88 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "mt-3 rounded-full border border-line/80 bg-cream/80 shadow-[0_8px_30px_rgba(20,19,17,0.06)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-ink">
          <img
            src={profile.photo}
            alt=""
            className="h-8 w-8 rounded-full object-cover object-[center_18%]"
          />
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
        <div className="flex items-center gap-2">
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
            className="rounded-full bg-ink px-4 py-2 text-sm text-cream transition-transform hover:-translate-y-0.5"
          >
            Email
          </a>
        </div>
      </div>
    </motion.header>
  )
}
