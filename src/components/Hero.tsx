import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { profile } from "../data"
import { fadeUp, stagger } from "../motion"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative flex min-h-[100svh] items-center px-6 pb-10 pt-24 sm:pb-16 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-accent-soft/80 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-accent-soft/50 blur-3xl" />
      </div>

      <motion.div
        className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12"
        variants={reduce ? undefined : stagger}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
      >
        <motion.img
          src={profile.photo}
          alt={`${profile.name}, fullstack engineer in Berlin`}
          className="order-1 mx-auto h-32 w-32 rounded-full object-cover object-[center_18%] ring-4 ring-cream shadow-[0_20px_50px_rgba(11,13,18,0.12)] sm:h-44 sm:w-44 lg:order-2 lg:mx-0 lg:h-80 lg:w-80"
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
            className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] text-ink sm:mt-6 sm:text-7xl lg:text-8xl"
            variants={reduce ? undefined : fadeUp(0.05)}
          >
            Products for millions. Public services for everyone.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:mt-8"
            variants={reduce ? undefined : fadeUp(0.1)}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
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
              className="inline-flex items-center rounded-full border border-line bg-cream px-5 py-3 text-sm text-ink transition-transform hover:-translate-y-0.5"
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
    </section>
  )
}
