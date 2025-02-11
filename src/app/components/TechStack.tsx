"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { SiCss3, SiDocker, SiFigma, SiGit, SiHtml5, SiTailwindcss, SiGraphql, SiWebflow, SiBlender, SiTypescript, SiStoryblok, SiJavascript, SiReact, SiNextdotjs } from "react-icons/si"

const techStack = [
  { icon: SiHtml5, name: "HTML5", color: "text-[#E34F26]" },
  { icon: SiCss3, name: "CSS3", color: "text-[#1572B6]" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]" },
  { icon: SiDocker, name: "Docker", color: "text-[#2496ED]" },
  { icon: SiFigma, name: "Figma", color: "text-[#F24E1E]" },
  { icon: SiGit, name: "Git", color: "text-[#F05032]" },
  { icon: SiGraphql, name: "GraphQL", color: "text-[#E10098]" },
  { icon: SiWebflow, name: "Webflow", color: "text-[#2496ED]" },
  {icon: SiBlender, name: "Blender", color: "text-[#1572B6]"},
  {icon: SiTypescript, name: "Typescript", color: "text-[#1572B6]"},
  {icon: SiStoryblok, name: "Storyblok", color: "text-[#1572B6]"},
  {icon: SiJavascript, name: "Javascript", color: "text-[#F05032]"},
  {icon: SiReact, name: "React", color: "text-[#06B6D4]"},
  {icon:SiNextdotjs, name: "Next.js", color: "text-[#000000]"},
]

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative overflow-hidden w-full py-10" ref={containerRef}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex gap-20 whitespace-nowrap"
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center gap-2"
          >
            <tech.icon className={`w-16 h-16 ${tech.color}`} />
            <span className="text-sm text-zinc-400">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient overlays for smooth fade effect */}
      {/* <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background/100 to-transparent z-10 backdrop-blur-lg" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background/80 to-transparent z-10 backdrop-blur-lg" /> */}
    </div>
  )
}

