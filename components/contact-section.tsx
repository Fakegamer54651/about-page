"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Linkedin, Mail, Send } from "lucide-react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: "easeOut",
    },
  },
};

export function ContactSection() {
  return (
    <section className="mt-10 md:mt-[150px] mb-[60px] md:mb-[200px] flex flex-col items-center text-center px-4">
      <motion.h2
        className="text-portfolio-gray-700 font-sans text-[40px] md:text-[48px] leading-12 font-semibold tracking-[-1.28px] uppercase mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, delay: 0.18 }}
        viewport={{ once: true }}
      >
        REACH OUT
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contacts.map((contact) => (
          <motion.div key={contact.id} variants={itemVariants}>
            <Link
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              className="flex items-center gap-3 h-12 text-portfolio-gray-700 font-sans text-sm font-semibold transition-all duration-200 hover:scale-105"
            >
              <contact.icon className="h-4 w-4" />
              <span>{contact.title}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
