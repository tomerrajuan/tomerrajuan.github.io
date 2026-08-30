import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const ease = [0.22, 1, 0.36, 1] as const

export function fadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease },
    },
  }
}

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : fadeUp(delay)}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  )
}
