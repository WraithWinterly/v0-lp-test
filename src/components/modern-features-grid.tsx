"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Globe,
  Cloud,
  BarChart,
  Smartphone,
  Users,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience unparalleled speed with our optimized algorithms.",
    color: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Bank-level encryption keeps your data safe and protected.",
    color: "text-blue-500",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Connect and collaborate from anywhere in the world.",
    color: "text-green-500",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamlessly integrate with popular cloud services.",
    color: "text-purple-500",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain insights with our powerful data analysis tools.",
    color: "text-red-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Fully responsive design for a great mobile experience.",
    color: "text-indigo-500",
  },
  // {
  //   icon: Users,
  //   title: "Team Collaboration",
  //   description: "Foster teamwork with our collaborative features.",
  //   color: "text-pink-500",
  // },
  // {
  //   icon: Lock,
  //   title: "Privacy First",
  //   description: "Your privacy is our priority with customizable settings.",
  //   color: "text-teal-500",
  // },
];

export function ModernFeaturesGridComponent() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">Our Features</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`${feature.color} mb-4 rounded-full bg-gray-100 p-2`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
