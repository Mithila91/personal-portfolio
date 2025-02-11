import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="bg-radial-from-purple-to-black text-white min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-10 row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Made With <span className="text-customLightPurple shadow">❤</span> by Mithila Ahmed
      </footer>
    </div>
  );
}
