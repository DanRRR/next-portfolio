"use client";

import Link from "next/link";
import Image from "next/image";

// TODO: Add hamburger dropdown and responsiveness
export default function Navbar() {
  return (
    // <nav className=" w-full px-6 py-4 flex items-center justify-between backdrop-blur-md fixed top-0 z-50">
    <nav className="w-full px-4 sm:px-6 py-4 flex items-center justify-between backdrop-blur-md fixed top-0 z-50">
      {/* Logo */}
      <Link
        href="/"
        className=" shrink-0 text-2xl font-semibold tracking-tight hover:opacity-80 transition px-2.5"
      >
        {/* Dan<span className="text-green-600">.</span> */}
        <Image
          src="/transparent_chrome.png"
          alt="My Logo"
          width={80}
          height={80}
        />
      </Link>

      {/* Navigation Links */}
      <div className=" hidden md:flex font-grotesk space-x-20 text-xl font-bold px-20">
        {/* <div className="flex flex-col md:flex-row gap-4"> */}
        <Link
          href="#about"
          className="hover:text-[var(--accent)] transition relative inline-block after:block after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 hover:after:w-full"
        >
          About
        </Link>
        <Link
          href="#work"
          className="hover:text-[var(--accent)] transition relative inline-block after:block after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 hover:after:w-full"
        >
          Work
        </Link>
        <Link
          href="#projects"
          className="hover:text-[var(--accent)] transition relative inline-block after:block after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 hover:after:w-full"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="hover:text-[var(--accent)] transition relative inline-block after:block after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 hover:after:w-full"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
