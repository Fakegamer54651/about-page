"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { useState } from "react";
import { X } from "lucide-react";

function ImageModal({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-10000 bg-black/45 backdrop-blur-sm flex items-center justify-center p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-full max-h-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-modal"
        />
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center bg-[#D2D2D2] rounded-full shadow-nav transition-transform hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function BreadlyCasePage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      <Navigation variant="back" />

      <main className="max-w-[860px] mx-auto px-4 md:px-8 py-16 min-h-screen">
        {/* Hero Section */}
        <motion.section
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-sans text-[32px] md:text-[64px] font-normal leading-tight tracking-[-0.02em] text-portfolio-gray-700 uppercase mb-6">
            Breadly
          </h1>
          <p className="font-sans text-base text-[#6C6C6C] leading-relaxed max-w-[720px] mx-auto mb-12">
            An elegant food ordering platform designed with simplicity and
            user-centricity in mind.
          </p>

          {/* Hero Images Grid - 1 full width on top, 2 side by side below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-12">
            <motion.div
              className="col-span-1 md:col-span-2 relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/breadly/casetwofrom1.webp")}
            >
              <Image
                src="/assets/breadly/casetwofrom1.webp"
                alt="Breadly Hero 1"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/breadly/casetwofrom2.webp")}
            >
              <Image
                src="/assets/breadly/casetwofrom2.webp"
                alt="Breadly Hero 2"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/breadly/casetwofrom3.webp")}
            >
              <Image
                src="/assets/breadly/casetwofrom3.webp"
                alt="Breadly Hero 3"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* What Company Section */}
        <motion.section
          className="mb-[100px] text-left py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans text-2xl font-bold leading-tight tracking-[-0.01em] text-portfolio-gray-600 capitalize mb-6">
            What company?
          </h2>
          <p className="font-sans text-lg leading-8 text-[#5f5f5f] mb-12 max-w-[800px]">
            Breadly is an artisan bakery founded in 2017. The brand brings
            together culinary traditions and flavors from around the world,
            working with classic recipes adapted for modern techniques — while
            preserving authenticity and quality.
          </p>
          <motion.div
            className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
            whileHover={{ y: -1, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)" }}
            onClick={() => setModalImage("/assets/breadly/casetwofrom4.webp")}
          >
            <Image
              src="/assets/breadly/casetwofrom4.webp"
              alt="Breadly Company"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.section>

        {/* Context Section */}
        <motion.section
          className="mb-[100px] text-left py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans text-2xl font-bold leading-tight tracking-[-0.01em] text-portfolio-gray-600 capitalize mb-6">
            Context
          </h2>
          <p className="font-sans text-lg leading-8 text-[#5f5f5f] mb-12 max-w-[800px]">
            The project started from scratch — Breadly didn&apos;t have a
            website before. I designed and built the full experience from zero:
            structure, layout, responsive design, and visual direction. The goal
            was to reflect their artisan identity through a clean, modern
            interface that supports both branding and usability.
          </p>
        </motion.section>

        {/* What Was Done Section */}
        <motion.section
          className="mb-16 text-left py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans text-2xl font-bold leading-tight tracking-[-0.01em] text-portfolio-gray-600 capitalize mb-6">
            What Was Done
          </h2>
          <p className="font-sans text-lg leading-8 text-[#5f5f5f] mb-12 max-w-[800px]">
            The development process focused on creating a comprehensive digital
            experience that would properly represent Breadly&apos;s artisan
            quality and streamline the ordering process for their customers.
          </p>
          <motion.div
            className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer mb-20"
            whileHover={{ y: -1, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)" }}
            onClick={() => setModalImage("/assets/breadly/casetwofrom5.webp")}
          >
            <Image
              src="/assets/breadly/casetwofrom5.webp"
              alt="Breadly What Was Done"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.section>

        {/* First 3-Image Grid Section */}
        <motion.section
          className="mb-[100px] py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="col-span-1 md:col-span-2 relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/breadly/casetwofrom6.webp")}
            >
              <Image
                src="/assets/breadly/casetwofrom6.webp"
                alt="Breadly Process 1"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/breadly/casetwofrom7.webp")}
            >
              <Image
                src="/assets/breadly/casetwofrom7.webp"
                alt="Breadly Process 2"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/breadly/casetwofrom8.webp")}
            >
              <Image
                src="/assets/breadly/casetwofrom8.webp"
                alt="Breadly Process 3"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Second 3-Image Grid Section */}
        <motion.section
          className="mb-20 py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="col-span-1 md:col-span-2 relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/breadly/casetwofrom9.webp")}
            >
              <Image
                src="/assets/breadly/casetwofrom9.webp"
                alt="Breadly Features 1"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() =>
                setModalImage("/assets/breadly/casetwofrom10.webp")
              }
            >
              <Image
                src="/assets/breadly/casetwofrom10.webp"
                alt="Breadly Features 2"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() =>
                setModalImage("/assets/breadly/casetwofrom11.webp")
              }
            >
              <Image
                src="/assets/breadly/casetwofrom11.webp"
                alt="Breadly Features 3"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Final Single Image Section */}
        <motion.section
          className="mb-16 py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
            whileHover={{ y: -1, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)" }}
            onClick={() => setModalImage("/assets/breadly/casetwofrom12.webp")}
          >
            <Image
              src="/assets/breadly/casetwofrom12.webp"
              alt="Breadly Final Design"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          className="mb-8 text-left pt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans text-2xl font-bold leading-tight tracking-[-0.01em] text-portfolio-gray-600 capitalize mb-6">
            Results
          </h2>
          <p className="font-sans text-lg leading-8 text-[#5f5f5f] mb-8 max-w-[800px]">
            Breadly was designed from the ground up with a clear focus on
            simplicity, clarity, and ease of use. The final product delivers:
          </p>
          <ul className="list-none mt-8">
            <li className="font-sans text-lg leading-[1.8] text-[#5f5f5f] mb-4 pl-8 relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:font-semibold before:text-[#4CAF50] before:text-xl">
              A fully responsive interface that works smoothly across devices
            </li>
            <li className="font-sans text-lg leading-[1.8] text-[#5f5f5f] mb-4 pl-8 relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:font-semibold before:text-[#4CAF50] before:text-xl">
              Straightforward ordering flows that minimize friction for users
            </li>
            <li className="font-sans text-lg leading-[1.8] text-[#5f5f5f] mb-4 pl-8 relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:font-semibold before:text-[#4CAF50] before:text-xl">
              A visually clean, modern UI tailored for intuitive decision-making
            </li>
            <li className="font-sans text-lg leading-[1.8] text-[#5f5f5f] mb-4 pl-8 relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:font-semibold before:text-[#4CAF50] before:text-xl">
              While metrics are not yet available, the project established a
              solid, user-focused foundation for the brand&apos;s digital
              presence and future growth
            </li>
          </ul>
        </motion.section>

        {/* Website Link */}
        <motion.div
          className="text-center my-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://breadly.uz/en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-[#6C6C6C] hover:text-portfolio-gray-700 transition-colors"
          >
            breadly.uz
          </a>
        </motion.div>
      </main>

      {/* Image Modal */}
      {modalImage && (
        <ImageModal
          src={modalImage}
          alt="Enlarged view"
          onClose={() => setModalImage(null)}
        />
      )}
    </>
  );
}
