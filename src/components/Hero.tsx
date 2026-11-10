import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { profile } from "../data"
import { fadeUp, stagger } from "../motion"

const facts = [
  {
    label: "Now",
    title: "Klarna",
    detail:
      "Fullstack engineer in Berlin. Consumer features for tens of millions of people.",
  },
  {
    label: "2020 – 2023",
    title: "init AG",
    detail: "Public services for German ministries and Bertelsmann Stiftung.",
  },
  {
    label: "Also",
    title: "Independent products",
    detail: "Clear Gifting and Names Lottery.",
  },
]

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative px-6 pb-8 pt-8 sm:pb-12 sm:pt-12">
      <motion.div
        className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16"
        variants={reduce ? undefined : stagger}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
      >
        <motion.img
          src={profile.photo}
          alt={`${profile.name}, fullstack engineer in Berlin`}
          className="order-1 mx-auto h-40 w-40 rounded-full object-cover object-[center_18%] ring-4 ring-cream shadow-[0_20px_50px_rgba(11,13,18,0.14)] sm:h-56 sm:w-56 lg:order-2 lg:mx-0 lg:h-96 lg:w-96"
          variants={reduce ? undefined : fadeUp()}
        />

        <div className="order-2 lg:order-1">
          <motion.p
            className="text-sm uppercase tracking-[0.22em] text-muted"
            variants={reduce ? undefined : fadeUp()}
          >
            {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            className="mt-4 max-w-3xl text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:mt-5 sm:text-6xl lg:text-[4.25rem]"
            variants={reduce ? undefined : fadeUp(0.05)}
          >
            Products for millions. Public services for everyone.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:mt-6"
            variants={reduce ? undefined : fadeUp(0.1)}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
            variants={reduce ? undefined : fadeUp(0.16)}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-cream transition-transform hover:-translate-y-0.5"
            >
              Selected work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-ink/35 bg-transparent px-5 py-3 text-sm text-ink transition-transform hover:-translate-y-0.5 hover:bg-cream"
            >
              Get in touch
            </a>
            <a
              href={profile.cv}
              className="inline-flex items-center px-3 py-3 text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </motion.div>

      <dl className="mx-auto mt-14 grid max-w-6xl border-t border-line sm:mt-20 sm:grid-cols-3">
        {facts.map((fact) => (
          <div
            key={fact.title}
            className="border-b border-line py-5 last:border-b-0 sm:border-b-0 sm:px-6 sm:py-6 sm:first:pl-0 sm:[&:not(:first-child)]:border-l"
          >
            <dt className="text-xs uppercase tracking-[0.18em] text-muted">{fact.label}</dt>
            <dd className="mt-2 text-lg font-medium tracking-tight text-ink">{fact.title}</dd>
            <dd className="mt-1 max-w-xs text-sm leading-relaxed text-muted">{fact.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
