import { experience, skills } from "../data"
import { Reveal } from "../motion"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12">
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
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-medium">
                    {job.role}
                    <span className="text-muted"> · {job.company}</span>
                  </h3>
                  <p className="text-sm text-muted">
                    {job.dates} · {job.location}
                  </p>
                </div>
                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-muted/80">
                  {job.stack}
                </p>
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
    <section className="bg-accent-soft/70 px-6 py-16 sm:py-20 lg:py-24">
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

        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-8">
          {skills.map((group) => (
            <Reveal key={group.label}>
              <article className="h-full border-t border-ink/15 pt-5">
                <h3 className="text-lg font-medium text-ink">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-ink/10 bg-cream/60 px-2.5 py-1.5 text-sm text-ink/80"
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
