import ManifestoFlow from "@/components/effects/manifesto-flow";
import ScrollProgress from "@/components/layout/scroll-progress";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Roadmap from "@/components/sections/roadmap";
import Skill from "@/components/sections/skill";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <main className="relative bg-background text-foreground">
        <Hero />
        <About />
        <ManifestoFlow />
        <Skill />
        <ManifestoFlow reverse />
        <Projects />
        <ManifestoFlow />
        <Roadmap />
        <ManifestoFlow reverse />
        <Contact />
      </main>
    </>
  );
}
