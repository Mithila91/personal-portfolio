import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 bg-radial-from-purple-to-black -z-10" />
      <div className="relative z-0">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="py-10 row-start-3 flex gap-6 flex-wrap items-center justify-center">
          Made With <span className="text-customLightPurple shadow">❤</span> by Mithila Ahmed
        </footer>
      </div>
    </main>
  );
}
