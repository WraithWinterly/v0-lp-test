import { Rocket } from "lucide-react";
import Link from "next/link";

export function HeaderComponent() {
  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="#">
        <Rocket className="mr-2 h-6 w-6" />
        <span className="font-bold">TechLaunch</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
