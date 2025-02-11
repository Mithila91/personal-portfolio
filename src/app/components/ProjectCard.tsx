"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
//import Image from "next/image"
import cn from "clsx"

const projects = [
  {
    id: 1,
    name: "crowd collective.",
    description:
      "At Crowd Collective, I've worked as a consultant in various roles, gaining experience in frontend, DevOps, backend, and eCommerce. This has allowed me to work on a variety of projects, expanding my technical skills across different domains.",
    logo: "/assets/crowdCollectiveLogo.png",
  },
  {
    id: 2,
    name: "Elkjøp",
    description:
      "Currently consulting at Elkjøp, focusing on internal applications. My work involves Next.js, Tailwind, and DevOps, along with infrastructure setup using AWS and Azure.",
    logo: "/assets/elkjopLogo.png",
  },
  {
    id: 3,
    name: "STUDY ALONG",
    description:
      "A consulting project where I built their homepage using Sentry.io, Next.js, and Tailwind to create a fast, scalable, and easily manageable website.",
    logo: "/assets/studyAlongLogo.webp",
  },
  {
    id: 4,
    name: "PS of Sweden",
    description:
      "A consulting gig where I worked on the PS of Sweden website for a year, the focus was the replace the current backend with a new one, and change the CMS solution to Storyblok.",
    logo: "/assets/studyAlongLogo.webp",
  },
  {
    id: 5,
    name: "Connoisseur Experience",
    description:
    "Project Built using Webflow and Vanilla JS, to create a fast, scalable, and easily manageable website.",
  logo: "/assets/studyAlongLogo.webp",
  }
  // Add more projects here to test pagination
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projectsPerPage = 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const hasMultiplePages = projects.length > projectsPerPage

  const currentProjects = projects.slice(
    currentIndex * projectsPerPage,
    currentIndex * projectsPerPage + projectsPerPage,
  )

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    if (window.innerWidth >= 768) {
      // Desktop pagination
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + newDirection
        if (nextIndex < 0) return totalPages - 1
        if (nextIndex >= totalPages) return 0
        return nextIndex
      })
    } else {
      // Mobile pagination
      setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length)
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">02. Clients & Projects</h2>

          {/* Desktop View */}
          <div className="hidden md:block relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-3 gap-6 mb-12"
              >
                {currentProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      rotateX: 2,
                      rotateY: 2,
                      transition: { duration: 0.2 },
                    }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative p-6 rounded-3xl bg-radial-from-purple-to-black shadow-custom-light"
                  >
                    <div className="space-y-4 ">
                      {/* <div className="w-24 h-24 relative mb-4">
                        <Image
                          src={project.logo || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-contain"
                        />
                      </div> */}
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      <p className="text-zinc-300">{project.description}</p>
                    </div>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-3xl bg-customLightPurple/10 pointer-events-none"
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {hasMultiplePages && (
              <>
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-customPurple hover:bg-customLightPurple transition-colors"
                  onClick={() => paginate(-1)}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-customPurple hover:bg-customLightPurple transition-colors"
                  onClick={() => paginate(1)}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}
          </div>

          {/* Mobile View */}
          <div className="md:hidden relative pb-12">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="p-6 rounded-3xl bg-radial-from-purple-to-black shadow-custom-light"
              >
                <div className="space-y-4">
                  {/* <div className="w-24 h-24 relative mb-4">
                    <Image
                      src={projects[currentIndex].logo || "/placeholder.svg"}
                      alt={projects[currentIndex].name}
                      fill
                      className="object-contain"
                    />
                  </div> */}
                  <h3 className="text-xl font-bold text-white">{projects[currentIndex].name}</h3>
                  <p className="text-zinc-300">{projects[currentIndex].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2 rounded-full bg-customPurple hover:bg-customLightPurple transition-colors"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-2 rounded-full bg-customPurple hover:bg-customLightPurple transition-colors"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: window.innerWidth >= 768 ? totalPages : projects.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-4 h-4 rounded-full transition-colors border-2",
                  currentIndex === index
                    ? "bg-customLightPurple border-customLightPurple"
                    : "bg-transparent border-customPurple hover:bg-customPurple/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

