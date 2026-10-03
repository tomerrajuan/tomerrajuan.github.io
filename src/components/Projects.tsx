import { ArrowUpRight } from "lucide-react"
import { projects, type Project } from "../data"
import { Reveal } from "../motion"

const previewClass =
  "aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"

function ProjectPreview({ project }: { project: Project }) {
  const alt = project.imageAlt ?? project.title

  if (!project.video) {
    return <img src={project.image} alt={alt} className={previewClass} />
  }

  return (
    <>
      <video
        className={`${previewClass} motion-reduce:hidden`}
        autoPlay
        muted
        loop
        playsInline
        poster={project.image}
        aria-label={alt}
      >
        <source src={project.video} type="video/webm" />
        {project.videoMp4 ? <source src={project.videoMp4} type="video/mp4" /> : null}
      </video>
      <img src={project.image} alt={alt} className={`hidden ${previewClass} motion-reduce:block`} />
    </>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1

  return (
    <Reveal>
      <article className="grid items-center gap-8 border-t border-line py-16 sm:py-20 lg:grid-cols-12 lg:gap-12">
        <div
          className={`lg:col-span-6 ${flipped ? "lg:order-2" : ""}`}
        >
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-[1.5rem] border border-line bg-cream shadow-[0_20px_60px_rgba(20,19,17,0.08)]"
          >
            <ProjectPreview project={project} />
          </a>
        </div>

        <div className={`lg:col-span-6 ${flipped ? "lg:order-1" : ""}`}>
          <p className="text-sm text-muted">
            {project.client}
          </p>
          <h3 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-ink">
            {project.title}
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>
          <ul className="mt-5 space-y-2 text-[15px] text-ink/80">
            {project.highlights.map((item) => (
              <li key={item} className="pl-4" style={{ textIndent: "-0.7rem" }}>
                <span className="mr-2 text-accent">·</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-cream px-3 py-1 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink underline-offset-4 hover:underline"
            >
              {project.hrefLabel ?? "View project"}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

const professionalProjects = projects.filter((project) => !project.personal)
const personalProjects = projects.filter((project) => project.personal)

export function Projects() {
  return (
    <section id="work" className="scroll-mt-28 px-6 pt-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.22em] text-muted">
            Selected work
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Public products, maps, and the systems behind them.
          </h2>
        </Reveal>
        <div className="mt-4">
          {professionalProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        {personalProjects.length > 0 && (
          <div className="mt-8">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.22em] text-muted">
                My projects
              </p>
            </Reveal>
            <div className="mt-4">
              {personalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={professionalProjects.length + index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
