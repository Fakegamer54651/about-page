"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const heroCards = [
  {
    id: 1,
    src: "/assets/hero-image-01.webp",
    alt: "Hero Image 01",
    className: "card-1",
    delay: 0.2,
  },
  {
    id: 2,
    src: "/assets/hero-image-02.webp",
    alt: "Hero Image 02",
    className: "card-2",
    delay: 0.4,
  },
  {
    id: 3,
    src: "/assets/hero-image-03.webp",
    alt: "Hero Image 03",
    className: "card-3",
    delay: 0.6,
  },
  {
    id: 4,
    src: "/assets/hero-image-04.webp",
    alt: "Hero Image 04",
    className: "card-4",
    delay: 0.8,
  },
];

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-8 md:pt-8 relative z-1 min-h-screen w-full max-w-[100vw] mx-auto">
      {/* Hero Info */}
      <motion.div
        className="flex flex-col items-center gap-2 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-portfolio-gray-700 font-sans text-sm font-bold tracking-[1.26px] uppercase">
          TASHKENT, UZBEKISTAN
        </p>
        <p className="text-[#C8C8C8] font-sans text-[10px] font-medium tracking-[0.9px] uppercase">
          asilbekkhamidullayevv@gmail.com
        </p>
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        className="w-[681px] max-w-[90vw] text-portfolio-gray-700 font-sans text-[50px] md:text-[100px] leading-20 md:leading-[90px] font-extrabold uppercase tracking-[-2.016px] whitespace-nowrap overflow-hidden relative z-10 mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        CALL ME, BEK
      </motion.h1>

      {/* Hero Cards */}
      <div className="flex justify-center items-end mt-10 relative z-1">
        {heroCards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`hero-card ${card.className} w-[100px] h-[100px] md:w-[202px] md:h-[202px] rounded-[10px] md:rounded-2xl bg-portfolio-gray-100 shadow-nav -mr-4 md:-mr-20 relative`}
            style={{
              zIndex: index + 1,
              animationDelay: `${card.delay}s`,
            }}
          >
            <div className="w-full h-full rounded-inherit overflow-hidden">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover rounded-inherit"
                priority={index === 0}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hero Subtitle */}
      <motion.h2
        className="text-portfolio-gray-400 font-sans text-4xl md:text-[100px] font-normal uppercase tracking-[-2.016px] mt-10 mb-4 text-center max-w-[90vw] leading-tight md:leading-[110px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.04 }}
      >
        PRODUCT & MOTION
        <br />
        DESIGNER
      </motion.h2>

      {/* Clients Section */}
      <motion.div
        className="flex flex-col items-center gap-2 mt-[120px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <p className="text-portfolio-gray-700 font-sans text-sm font-bold tracking-[1.26px] uppercase">
          CLIENTS INCLUDE
        </p>
        <p className="text-[#C8C8C8] font-sans text-[10px] font-medium tracking-[0.9px] uppercase">
          ABOZOR, TOYOTA, TIZIM, CLIQUE.APP, MAXWAY, DELEVER, SNAPTOOLS
        </p>
      </motion.div>
    </section>
  );
}
