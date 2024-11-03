"use client";

import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-purple-100 to-blue-50 py-40">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-black md:text-5xl">
            Transform Your Business Today
          </h2>
          <p className="mb-10 text-lg text-black/90">
            Join thousands of companies already leveraging our platform to drive
            growth, increase efficiency, and stay ahead of the competition.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white px-8 text-purple-600 hover:bg-white/90"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white px-8 hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-black/80">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
