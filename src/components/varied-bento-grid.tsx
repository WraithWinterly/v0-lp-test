"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const gridItems = [
  {
    src: "/tech-1.jpg",
    alt: "AI-Powered Analytics",
    description:
      "Harness the power of artificial intelligence to gain deeper insights.",
    size: "large",
  },
  {
    src: "/tech-2.jpg",
    alt: "Real-time Collaboration",
    description: "Work together seamlessly with your team in real-time.",
    size: "small",
  },
  {
    src: "/tech-3.jpg",
    alt: "Cloud Integration",
    description: "Seamlessly connect and scale with cloud-native architecture.",
    size: "small",
  },
  {
    src: "/tech-4.webp",
    alt: "Advanced Security",
    description: "Enterprise-grade security to protect your valuable data.",
    size: "medium",
  },
  {
    src: "/tech-5.webp",
    alt: "Custom Workflows",
    description: "Build and automate workflows tailored to your needs.",
    size: "medium",
  },
  {
    src: "/tech-6.webp",
    alt: "Mobile Experience",
    description: "Take your work anywhere with our powerful mobile platform.",
    size: "large",
  },
];

export function VariedBentoGridComponent() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    const target = document.querySelector("#varied-bento-grid");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-center text-4xl font-bold text-transparent">
          Unified Platform Experience
        </h2>
        <motion.div
          id="varied-bento-grid"
          className="mx-auto grid max-w-6xl grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-white/50 shadow-lg backdrop-blur-sm ${
                item.size === "large"
                  ? "col-span-2 row-span-2 aspect-square"
                  : item.size === "medium"
                    ? "col-span-2 row-span-1 aspect-[2/1]"
                    : "col-span-1 row-span-1 aspect-square"
              }`}
              variants={itemVariants}
            >
              <div className="absolute inset-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="relative flex h-full flex-col justify-end p-6">
                <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-blue-200">
                  {item.alt}
                </h3>
                <p className="line-clamp-2 text-sm text-white/90">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
