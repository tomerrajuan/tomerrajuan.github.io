import { Contact, Footer } from "./components/Contact"
import { Experience, HowIWork } from "./components/Experience"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { Projects } from "./components/Projects"

export default function App() {
  return (
    <div id="top" className="bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <HowIWork />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
