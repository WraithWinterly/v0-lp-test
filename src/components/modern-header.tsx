"use client";

import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Github, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    {
      name: "Resources",
      href: "#resources",
      dropdownItems: [
        { name: "Documentation", href: "#documentation" },
        { name: "API Reference", href: "#api-reference" },
        { name: "Blog", href: "#blog" },
      ],
    },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* <Image src="/placeholder.svg" alt="TechStartup Logo" width={40} height={40} className="w-10 h-10" /> */}
              <span className="ml-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-xl font-semibold text-transparent">
                TechStartup
              </span>
            </Link>
          </div>

          <nav className="hidden space-x-8 md:flex">
            {navItems.map((item) =>
              item.dropdownItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-800 transition-colors hover:text-gray-600">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.dropdownItems.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.name}>
                        <Link href={dropdownItem.href} className="w-full">
                          {dropdownItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-800 transition-colors hover:text-gray-600"
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Button variant="ghost" className="text-sm">
              Sign In
            </Button>
            <Button className="text-sm">Start Free Trial</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 transition-colors hover:text-gray-600"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdownItems ? (
                  <>
                    <button className="block w-full px-3 py-2 text-left text-base font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-600">
                      {item.name}
                    </button>
                    <div className="pl-4">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-base font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="flex items-center px-5">
              <Button
                variant="ghost"
                className="w-full justify-start text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <Button
                className="w-full text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
