"use client";

import Link from "next/link";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function DetailedFooterComponent() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">About Us</h2>
            <p className="mb-4 text-sm leading-relaxed">
              TechStartup is revolutionizing the way businesses operate with
              cutting-edge AI and cloud solutions. Our mission is to empower
              companies of all sizes with the tools they need to thrive in the
              digital age.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Pricing", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Resources</h2>
            <ul className="space-y-2">
              {[
                "Blog",
                "Whitepaper",
                "Case Studies",
                "Documentation",
                "Help Center",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Stay Updated
            </h2>
            <p className="mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-gray-700 bg-gray-800 text-white placeholder-gray-400"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-sm">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p>&copy; 2024 TechStartup. All rights reserved.</p>
            <nav className="mt-4 flex space-x-4 md:mt-0">
              <Link href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
