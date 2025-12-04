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

export default function ToyotaCasePage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      <Navigation variant="back" />

      <main className="max-w-[860px] mx-auto px-4 md:px-8 py-16 min-h-screen">
        {/* Hero Section */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-sans text-[32px] md:text-[64px] font-normal leading-tight tracking-[-0.02em] text-portfolio-gray-700 uppercase mb-6">
            Toyota
          </h1>
          <p className="font-sans text-base text-[#6C6C6C] leading-relaxed max-w-[720px] mx-auto mb-12">
            Designed and optimized the internal inventory management experience
            to reduce overload by 17%, improve technician flow, and prevent
            unauthorized parts handling.
          </p>

          {/* Hero Images Grid - 2 on top, 1 full width bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/toyota/1.webp")}
            >
              <Image
                src="/assets/toyota/1.webp"
                alt="Toyota Inventory System Hero 1"
                fill
                className="object-contain w-full h-fit"
              />
            </motion.div>
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/toyota/2.webp")}
            >
              <Image
                src="/assets/toyota/2.webp"
                alt="Toyota Inventory System Hero 2"
                fill
                className="object-contain w-full h-fit"
              />
            </motion.div>
            <motion.div
              className="col-span-1 md:col-span-2 relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/toyota/3.webp")}
            >
              <Image
                src="/assets/toyota/3.webp"
                alt="Toyota Inventory System Hero 3"
                fill
                className="object-contain w-full h-fit"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* What Company Section */}
        <motion.section
          className="mb-20 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans text-2xl font-bold leading-10 tracking-[-0.01em] text-portfolio-gray-600 capitalize mb-6">
            What company?
          </h2>
          <p className="font-sans text-lg leading-8 text-[#5f5f5f] mb-8 max-w-[800px]">
            The official Toyota dealership network in Uzbekistan, responsible
            for new and used vehicle sales, aftersales service, and parts
            management. Operates under Toyota&apos;s global standards, adapted
            to local infrastructure and team workflows.
          </p>
          <motion.div
            className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer mt-8"
            whileHover={{ y: -1, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)" }}
            onClick={() => setModalImage("/assets/toyota/4.webp")}
          >
            <Image
              src="/assets/toyota/4.webp"
              alt="Toyota Company"
              fill
              className="object-contain w-full h-fit"
            />
          </motion.div>
        </motion.section>

        {/* Context Section */}
        <motion.section
          className="mb-20 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans text-2xl font-bold leading-10 tracking-[-0.01em] text-portfolio-gray-600 capitalize mb-6">
            Context
          </h2>
          <p className="font-sans text-lg leading-8 text-[#5f5f5f] mb-8 max-w-[800px]">
            Toyota Uzbekistan&apos;s mechanical service departments were dealing
            with outdated, disjointed tools for managing parts inventory. This
            created inefficiencies in technician workflow, supply shortages, and
            a lack of visibility into how parts were requested, stored, and
            used.
          </p>
        </motion.section>

        {/* Why Section */}
        <motion.section
          className="mb-20 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans text-2xl font-bold leading-10 tracking-[-0.01em] text-portfolio-gray-600 capitalize mb-6">
            Why?
          </h2>
          <p className="font-sans text-lg leading-8 text-[#5f5f5f] mb-8 max-w-[800px]">
            To optimize internal service performance and minimize parts misuse.
            The previous system was outdated and inefficient — slow to use and
            misaligned with how technicians and warehouse staff actually worked.
            The new system aimed to reduce product overload, streamline
            warehouse-to-technician flow, and ensure better control over parts
            handling.
          </p>
          <div className="flex flex-col gap-6 mt-8">
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/toyota/5.webp")}
            >
              <Image
                src="/assets/toyota/5.webp"
                alt="Toyota Why 1"
                fill
                className="object-contain w-full h-fit"
              />
            </motion.div>
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/toyota/6.webp")}
            >
              <Image
                src="/assets/toyota/6.webp"
                alt="Toyota Why 2"
                fill
                className="object-contain w-full h-fit"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Problems Section */}
        <motion.section
          className="mb-20 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans text-2xl font-bold leading-10 tracking-[-0.01em] text-portfolio-gray-600 capitalize mb-6">
            Problems
          </h2>
          <p className="font-sans text-lg leading-8 text-[#5f5f5f] mb-8 max-w-[800px]">
            Through on-site observation of the dealership&apos;s day-to-day
            operations, I studied how technicians and warehouse staff interacted
            with the existing system. The research revealed several core issues
            in the inventory management flow.
          </p>
          <div className="flex flex-col gap-6 mt-8">
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/toyota/7.webp")}
            >
              <Image
                src="/assets/toyota/7.webp"
                alt="Toyota Problems 1"
                fill
                className="object-contain w-full h-fit"
              />
            </motion.div>
            <motion.div
              className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
              whileHover={{
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
              }}
              onClick={() => setModalImage("/assets/toyota/8.webp")}
            >
              <Image
                src="/assets/toyota/8.webp"
                alt="Toyota Problems 2"
                fill
                className="object-contain w-full h-fit"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Interactions Section */}
        <motion.section
          className="mb-20 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans text-2xl font-bold leading-10 tracking-[-0.01em] text-portfolio-gray-600 capitalize mb-6">
            Interactions
          </h2>
          <p className="font-sans text-lg leading-8 text-[#5f5f5f] mb-8 max-w-[800px]">
            Beyond layout and visuals, I focused on refining micro-interactions
            that directly impacted usability and task efficiency.
          </p>
          <div className="flex flex-col gap-6 mt-8">
            {[9, 10, 11, 12, 13].map((num) => (
              <motion.div
                key={num}
                className="relative aspect-video rounded-2xl overflow-hidden bg-portfolio-gray-100 cursor-pointer"
                whileHover={{
                  y: -1,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.24)",
                }}
                onClick={() => setModalImage(`/assets/toyota/${num}.webp`)}
              >
                <Image
                  src={`/assets/toyota/${num}.webp`}
                  alt={`Toyota Interaction ${num - 8}`}
                  fill
                  className="object-contain w-full h-fit"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Results Section */}
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
          <p className="font-sans text-lg leading-8 text-[#5f5f5f] mb-8 max-w-[800px]">
            The redesigned inventory system improved service operations across
            Toyota&apos;s dealership in Uzbekistan. By addressing key
            interaction issues and aligning the system with real technician and
            warehouse workflows:
          </p>
          <ul className="list-none mt-8">
            <li className="font-sans text-lg leading-[1.8] text-[#2a2a2a] mb-4 pl-8 relative before:content-['→'] before:absolute before:left-0 before:top-0 before:font-semibold before:text-[#4CAF50] before:text-xl">
              Service overload decreased by{" "}
              <strong className="font-bold text-portfolio-gray-800">17%</strong>{" "}
              (based on internal analytics)
            </li>
            <li className="font-sans text-lg leading-[1.8] text-[#2a2a2a] mb-4 pl-8 relative before:content-['→'] before:absolute before:left-0 before:top-0 before:font-semibold before:text-[#4CAF50] before:text-xl">
              Parts misuse dropped significantly due to better access control
              and traceability
            </li>
            <li className="font-sans text-lg leading-[1.8] text-[#2a2a2a] mb-4 pl-8 relative before:content-['→'] before:absolute before:left-0 before:top-0 before:font-semibold before:text-[#4CAF50] before:text-xl">
              Workflow friction was reduced through smarter, context-aware
              micro-interactions
            </li>
            <li className="font-sans text-lg leading-[1.8] text-[#2a2a2a] mb-4 pl-8 relative before:content-['→'] before:absolute before:left-0 before:top-0 before:font-semibold before:text-[#4CAF50] before:text-xl">
              The system became faster, more intuitive, and aligned with how
              staff actually worked
            </li>
          </ul>
        </motion.section>
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
