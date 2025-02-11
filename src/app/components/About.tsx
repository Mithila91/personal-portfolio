"use client"

import { motion } from "framer-motion"
import { TechStack } from "./TechStack"

export function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">01. About me</h2>
          <div className="space-y-6 text-zinc-300">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Hello! My name is Mithila, and I love building interactive and visually engaging websites. My journey into
              web development started with frontend experiments, playing around with animations and UI design, which led
              me to explore more advanced frameworks and 3D programming.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Over the years, I&apos;ve worked as a consultant, helping businesses create fast, user-friendly, and
              beautiful digital experiences. I enjoy experimenting with dynamic interfaces, often using motion and 3D
              elements to make websites feel more alive.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-center text-zinc-400 mb-8">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <TechStack />
        </motion.div>
      </div>
    </section>
  )
}

