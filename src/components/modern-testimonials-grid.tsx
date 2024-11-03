"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day.",
    author: "Alex Johnson",
    position: "CTO, TechCorp",
    avatar: "/testimonial-1.avif",
  },
  {
    quote:
      "The customer support is unparalleled. They've been incredibly responsive and helpful throughout our onboarding.",
    author: "Samantha Lee",
    position: "Operations Manager, InnovateCo",
    avatar: "/testimonial-2.avif",
  },
  {
    quote:
      "We've seen a 40% increase in productivity since implementing this solution. It's been a game-changer for us.",
    author: "Michael Chen",
    position: "Product Lead, FutureTech",
    avatar: "/testimonial-3.avif",
  },
  {
    quote:
      "The analytics features have given us insights we never had before. It's like having a data scientist on the team.",
    author: "Emily Rodriguez",
    position: "Data Analyst, InsightFlow",
    avatar: "/testimonial-4.avif",
  },
  {
    quote:
      "Security was our top concern, and this product has exceeded our expectations. We feel completely safe.",
    author: "David Kim",
    position: "Security Officer, SecureNet",
    avatar: "/testimonial-5.avif",
  },
  {
    quote:
      "The mobile experience is flawless. Our team can now work efficiently from anywhere, at any time.",
    author: "Laura Martinez",
    position: "Mobile Dev Lead, AppWorks",
    avatar: "/placeholder.svg?height=80&width=80",
  },
];

export function ModernTestimonialsGridComponent() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-center text-4xl font-bold text-transparent">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="mb-6 h-6 w-6 text-gray-300" />
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="mr-4 h-12 w-12 rounded-full border-2 border-gray-50"
                />
                <div>
                  <h3 className="font-medium text-gray-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
