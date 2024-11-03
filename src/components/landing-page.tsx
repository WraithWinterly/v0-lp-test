"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Rocket, Zap, Shield, Globe } from "lucide-react";
import Link from "next/link";

export function LandingPageComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize Your Workflow
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Empower your team with cutting-edge technology. Boost
                  productivity and streamline operations with our innovative
                  platform.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Experience unparalleled speed and efficiency in your daily
                  operations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Secure & Reliable</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Your data is protected with state-of-the-art security
                  measures.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <Globe className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Global Scalability</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Easily scale your operations across the globe with our
                  cloud-based solution.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Stay Updated
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our newsletter to get the latest updates and exclusive
                  offers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 TechLaunch. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
