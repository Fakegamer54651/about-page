"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const uiShots = [
  {
    id: 1,
    type: "image",
    src: "/assets/UI1.jpg",
    alt: "UI Shot 1",
    title: "SHOT One",
  },
  { id: 2, type: "video", src: "/assets/ui-shot-video.mp4", title: "SHOT Two" },
  {
    id: 3,
    type: "image",
    src: "/assets/UI3.jpg",
    alt: "UI Shot 3",
    title: "SHOT Three",
  },
  {
    id: 4,
    type: "image",
    src: "/assets/UI4.jpg",
    alt: "UI Shot 4",
    title: "SHOT Four",
  },
  {
    id: 5,
    type: "video",
    src: "/assets/ui-shot-video2.mp4",
    title: "SHOT Five",
  },
  {
    id: 6,
    type: "image",
    src: "/assets/UI6.jpg",
    alt: "UI Shot 6",
    title: "SHOT Six",
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
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.64,
      ease: "easeOut",
    },
  },
};

export function UIShots() {
  return (
    <section className="mt-[100px] text-center px-4">
      <motion.h2
        className="text-[40px] md:text-[48px] leading-[48px] font-sans font-medium tracking-[-1.28px] uppercase text-[#363636] mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, delay: 0.12 }}
        viewport={{ once: true }}
      >
        UI SHOTS
      </motion.h2>

      <motion.p
        className="text-[#6C6C6C] font-sans text-base font-normal leading-6 mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, delay: 0.18 }}
        viewport={{ once: true }}
      >
        A collection of UI animations, design challenges, and visual
        experiments.
      </motion.p>

      <motion.div
        className="ui-shots-grid flex md:grid md:grid-cols-3 gap-4 md:gap-16 overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-2 md:px-0 md:justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {uiShots.map((shot) => (
          <motion.div
            key={shot.id}
            className="flex flex-col items-center gap-4 shrink-0 snap-start w-[343px] md:w-[416px]"
            variants={itemVariants}
          >
            <div className="w-[343px] md:w-[416px] h-[205px] md:h-[249px] rounded-lg md:rounded-xl overflow-hidden bg-[#f1f1f1] relative flex items-center justify-center">
              {shot.type === "image" ? (
                <Image
                  src={shot.src}
                  alt={shot.alt || ""}
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={shot.src} type="video/mp4" />
                </video>
              )}
            </div>
            <span className="font-sans text-sm font-semibold tracking-wider uppercase text-[#363636] transition-all duration-300 hover:scale-110">
              {shot.title}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
