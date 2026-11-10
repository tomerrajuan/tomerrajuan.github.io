import { ArrowUpRight, FileText, Mail } from "lucide-react"
import { profile } from "../data"
import { Reveal } from "../motion"

export function Contact() {
  return (
    <section id="contact" className="px-6 pb-10">
      <Reveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-cream sm:px-14 sm:py-20">
          <p className="text-sm uppercase tracking-[0.22em] text-cream/60">
            Contact
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            If you are hiring a fullstack engineer, write me.
          </h2>
          <p className="mt-6 max-w-lg text-cream/70">
            I am based in Berlin and open to conversations about product-minded
            engineering roles. Fastest path is email.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm text-ink transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-5 py-3 text-sm text-cream transition-transform hover:-translate-y-0.5"
            >
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-5 py-3 text-sm text-cream transition-transform hover:-translate-y-0.5"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a
              href={profile.cv}
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-5 py-3 text-sm text-cream transition-transform hover:-translate-y-0.5"
            >
              <FileText size={16} />
              CV
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-sm text-muted">
        <p>
          {profile.name} · {profile.location}
        </p>
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-ink">
          {profile.phone}
        </a>
      </div>
    </footer>
  )
}
