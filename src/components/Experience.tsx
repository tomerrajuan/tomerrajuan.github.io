import { experience, skills } from "../data"
import { Reveal } from "../motion"

function stackItems(stack: string) {
  const items: string[] = []
  let current = ""
  let depth = 0
  for (const char of stack) {
    if (char === "(") depth += 1
    if (char === ")") depth = Math.max(0, depth - 1)
    if (char === "," && depth === 0) {
      if (current.trim()) items.push(current.trim())
      current = ""
    } else {
      current += char
    }
  }
  if (current.trim()) items.push(current.trim())
  return items
}

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.22em] text-muted">
              Experience
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">
              From public services to consumer scale.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <article className="border-t border-line py-10 first:border-t-0 first:pt-0">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{job.company}</h3>
                    <p className="mt-1 text-muted">{job.role}</p>
                  </div>
                  <p className="text-sm text-muted">
                    {job.dates}
                    <span className="px-1.5">·</span>
                    {job.location}
                  </p>
                </div>
                <ul className="mt-6 space-y-4">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="grid grid-cols-[0.7rem_1fr] gap-3 text-[15px] leading-relaxed text-ink/90"
                    >
                      <span className="mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {stackItems(job.stack).map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-cream px-2.5 py-1 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowIWork() {
  return (
    <section className="bg-accent-soft px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.22em] text-accent">
              Capabilities
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">
              How I work
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {skills.map((group) => (
            <Reveal key={group.label}>
              <article className="h-full rounded-2xl border border-line bg-cream p-5 sm:p-6">
                <h3 className="text-lg font-medium text-ink">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-paper px-2.5 py-1 text-sm text-ink/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
