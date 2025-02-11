"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Github } from "lucide-react";
import Link from "next/link";
import Button from "./Button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Mithila91",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mithila-ahmed-/",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/Miithila",
  },

  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/mithilaas/",
  },
];

export function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            03. Contact
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Have a project in mind? Just send me a message so we can have a
            chat!
          </p>
          <div className="py-32">
            <Button className="mt-6 px-8 py-3 border-2 border-customLightPurple text-white rounded-[50px] shadow-custom-light hover:bg-purple-500 hover:text-white transition">
             <Link href="mailto:your-email@example.com?subject=Project Inquiry&body=Hi Mithila, I would like to discuss a project with you.">Send me an Email</Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8"
          >
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-customLightPurple transition-colors"
                aria-label={link.name}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-10 h-10 " />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
