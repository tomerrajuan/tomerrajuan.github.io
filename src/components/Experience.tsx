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

      <div className="mx-auto mt-8 max-w-6xl border-t border-line pt-16">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.22em] text-muted">
            How I work
          </p>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <Reveal key={group.label}>
              <h3 className="text-sm font-medium text-ink">{group.label}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
