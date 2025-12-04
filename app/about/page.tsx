"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Linkedin, Mail, Send } from "lucide-react";

const paragraphs = [
  "I'm a product and motion designer with 4+ years of experience, crafting digital experiences that blend beauty with purpose.",
  "My work lives at the intersection of design and interaction — creating intuitive interfaces that feel alive through thoughtful animation.",
  "I believe great design should feel invisible yet memorable, guiding users effortlessly while leaving a lasting impression.",
];

const projects = [
  { name: "TOYOTA", href: "/case/toyota" },
  { name: "BREADLY", href: "/case/breadly" },
  { name: "CLIQUE", href: "#" },
  { name: "XTRUCKER", href: "#" },
];

const contacts = [
  {
    id: 1,
    title: "LINKEDIN",
    href: "https://www.linkedin.com/in/asilbek-khamidullayev/",
    icon: Linkedin,
  },
  {
    id: 2,
    title: "EMAIL",
    href: "mailto:asilbekkhamidullayevv@gmail.com",
    icon: Mail,
  },
  {
    id: 3,
    title: "TELEGRAM",
    href: "https://t.me/AsilbekKhamidullayev",
    icon: Send,
  },
];

export default function AboutPage() {
  return (
    <div className="px-3 md:px-4 pt-[100px]">
      {/* Close Button */}
      <Link href="/" className="fixed top-5 left-3 z-1000">
        <Button variant="nav" size="navIcon" aria-label="Close">
          <X className="h-5 w-5" />
        </Button>
      </Link>

      {/* About Section */}
      <section className="flex flex-col items-center mb-[100px]">
        <motion.h1
          className="text-portfolio-gray-700 text-center font-sans text-[50px] md:text-[64px] leading-16 italic font-black tracking-[-1.28px] uppercase mb-12 md:mb-20"
          initial={{ opacity: 0, rotateX: -90, scaleY: 0.8 }}
          animate={{ opacity: 1, rotateX: 0, scaleY: 1 }}
          transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1] }}
        >
          ABOUT
        </motion.h1>

        <div className="font-sans flex flex-col items-center text-center gap-10 w-full max-w-[940px] mx-auto">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              className="text-portfolio-gray-700 text-xl md:text-[40px] font-semibold leading-9 md:leading-14 tracking-[-0.4px] md:tracking-[-0.5px] transition-colors duration-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-[90px] md:mt-[150px] flex flex-col items-center">
        <motion.h2
          className="text-portfolio-gray-700 text-center font-sans text-4xl md:text-[64px] leading-16 italic font-black tracking-[-0.7px] md:tracking-[-1.28px] uppercase mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          PROJECTS
        </motion.h2>

        <ul className="list-none p-0 m-0 flex flex-col gap-10 items-center">
          {projects.map((project, index) => (
            <motion.li
              key={project.name}
              className="text-portfolio-gray-700 font-sans text-[32px] md:text-[56px] font-bold leading-9 md:leading-14 tracking-[-0.3px] md:tracking-[-0.5px] uppercase transition-transform duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-y-110"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={project.href}
                className="hover:text-portfolio-gray-400 transition-colors"
              >
                {project.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mt-[90px] md:mt-[150px] mb-[120px] md:mb-[200px] flex flex-col items-center">
        <motion.h2
          className="text-portfolio-gray-700 text-center font-sans text-4xl md:text-[64px] leading-16 italic font-black tracking-[-0.7px] md:tracking-[-1.28px] uppercase mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          CONTACT
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contacts.map((contact) => (
            <Link
              key={contact.id}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              className="flex items-center gap-2 font-sans text-sm font-semibold text-portfolio-gray-700 transition-transform duration-200 hover:scale-105"
            >
              <contact.icon className="h-4 w-4" />
              <span>{contact.title}</span>
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
