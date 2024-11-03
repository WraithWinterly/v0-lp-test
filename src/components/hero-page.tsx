"use client";

import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col">
      <main className="flex min-h-[90vh] flex-grow justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-56 max-w-7xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Revolutionize Your Workflow</span>
            <span className="block text-indigo-600">with Quantum AI</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Harness the power of cutting-edge artificial intelligence to
            streamline your business processes, boost productivity, and unlock
            new possibilities.
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Button size="lg" className="w-full px-8 py-3 sm:w-auto">
                Get started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-3 sm:ml-3 sm:mt-0">
              <Button
                variant="outline"
                size="lg"
                className="w-full px-8 py-3 sm:w-auto"
              >
                Live demo
              </Button>
            </div>
          </div>
        </div>
      </main>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto -mt-40 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Image
          src="/screenshot.webp"
          alt="Product screenshot"
          width={1920}
          height={1080}
          className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
        />
      </div>
    </div>
  );
}
