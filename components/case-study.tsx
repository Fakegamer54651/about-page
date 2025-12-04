"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { useState } from "react";
import { X } from "lucide-react";

interface CaseSection {
  title: string;
  text: string;
  images?: string[];
}

interface CaseStudyProps {
  title: string;
  description: string;
  heroImages: {
    top?: string[];
    bottom?: string;
  };
  sections: CaseSection[];
  results?: string[];
  websiteLink?: string;
}

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

export function CaseStudy({
  title,
  description,
  heroImages,
  sections,
  results,
  websiteLink,
}: CaseStudyProps) {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      <Navigation variant="back" />

      <div className="max-w-[860px] mx-auto px-4 md:px-8 py-16 md:pt-16 min-h-screen">
        {/* Hero Section */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-sans text-[32px] md:text-[64px] font-normal leading-tight tracking-[-0.02em] text-portfolio-gray-700 uppercase mb-6">
            {title}
          </h1>
          <p className="font-sans text-base text-[#6C6C6C] leading-relaxed max-w-[720px] mx-auto mb-12">
            {description}
          </p>

          {/* Hero Images Grid */}
          {heroImages && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {heroImages.top?.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
                  }}
                  onClick={() => setModalImage(img)}
                >
                  <Image
                    src={img}
                    alt={`${title} hero ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
              {heroImages.bottom && (
                <motion.div
                  className="col-span-1 md:col-span-2 relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
                  }}
                  onClick={() => setModalImage(heroImages.bottom!)}
                >
                  <Image
                    src={heroImages.bottom}
                    alt={`${title} hero main`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
            </div>
          )}
        </motion.section>

        {/* Case Sections */}
        {sections.map((section, index) => (
          <motion.section
            key={index}
            className="mb-20 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans text-2xl font-bold leading-10 tracking-[-0.01em] text-portfolio-gray-600 capitalize mb-6">
              {section.title}
            </h2>
            <p className="font-sans text-lg leading-8 text-[#5f5f5f] mb-8 max-w-[800px]">
              {section.text}
            </p>

            {section.images && (
              <div className="flex flex-col gap-6 mt-8">
                {section.images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
                    whileHover={{
                      y: -2,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
                    }}
                    onClick={() => setModalImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${section.title} ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        ))}

        {/* Results Section */}
        {results && results.length > 0 && (
          <motion.section
            className="mb-20 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans text-2xl font-bold leading-10 tracking-[-0.01em] text-portfolio-gray-600 capitalize mb-6">
              Results
            </h2>
            <ul className="list-none mt-8">
              {results.map((result, i) => (
                <li
                  key={i}
                  className="font-sans text-lg leading-[1.8] text-[#2a2a2a] mb-4 pl-8 relative before:content-['→'] before:absolute before:left-0 before:top-0 before:font-semibold before:text-[#4CAF50] before:text-xl"
                >
                  {result}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Website Link */}
        {websiteLink && (
          <motion.div
            className="text-center my-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#6C6C6C] hover:text-portfolio-gray-700 transition-colors"
            >
              Visit Website →
            </a>
          </motion.div>
        )}
      </div>

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
