"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Toyota",
    image: "/assets/project2.png",
    href: "/case/toyota",
    comingSoon: false,
  },
  {
    id: 2,
    title: "Breadly",
    image: "/assets/project4.png",
    href: "/case/breadly",
    comingSoon: false,
  },
  {
    id: 3,
    title: "Clique",
    image: "/assets/project1.png",
    href: "#",
    comingSoon: true,
  },
  {
    id: 4,
    title: "Xtrucker",
    image: "/assets/project3.png",
    href: "#",
    comingSoon: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.64,
      ease: "easeOut",
    },
  },
};

export function FeaturedWork() {
  return (
    <section className="flex flex-col items-center mt-[60px] md:mt-[220px] text-center px-4">
      <motion.h2
        className="text-portfolio-gray-700 font-sans text-[40px] md:text-[64px] leading-12 md:leading-16 tracking-[-1.28px] font-medium uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48 }}
        viewport={{ once: true }}
      >
        FEATURED WORK
      </motion.h2>

      <motion.p
        className="text-[#6C6C6C] font-sans text-base font-normal mt-4 md:mt-8 mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, delay: 0.06 }}
        viewport={{ once: true }}
      >
        notable projects
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 max-w-[1400px] w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            {project.comingSoon ? (
              <div className="flex flex-col items-center gap-4 cursor-default">
                <div className="bg-portfolio-gray-100 w-full h-[190px] md:h-[376px] rounded-2xl md:rounded-4xl overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="px-5 py-2.5 font-sans text-sm font-semibold tracking-wider uppercase rounded-3xl bg-black/4 backdrop-blur-sm text-portfolio-gray-700">
                  {project.title} (Coming soon)
                </span>
              </div>
            ) : (
              <Link
                href={project.href}
                className="flex flex-col items-center gap-4 group transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="bg-portfolio-gray-100 w-full h-[190px] md:h-[376px] rounded-2xl md:rounded-4xl overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="px-5 py-2.5 font-sans text-sm font-semibold tracking-wider uppercase rounded-3xl bg-black/4 backdrop-blur-sm text-portfolio-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:shadow-nav">
                  {project.title}
                </span>
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
