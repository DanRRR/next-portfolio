"use client";

import Link from "next/link";
import Image from "next/image";
import CircularText from "./CircularText";

// TODO: Add hamburger dropdown and responsiveness
export default function Navbar() {
  return (
    // <nav className=" w-full px-6 py-4 flex items-center justify-between backdrop-blur-md fixed top-0 z-50">
    <nav className="w-full px-4 sm:px-6 py-4 flex items-center justify-between fixed top-0 z-50">
      {/* Logo */}
      <div className="relative w-[100px] h-[100px]">
        {/* Logo at lower z-index */}
        <Link
          href="/"
          className="absolute inset-0 z-10 flex items-center justify-center px-2.5 hover:opacity-80 transition pointer-events-none"
        >
          <Image
            src="/transparent_chrome.png"
            alt="My Logo"
            width={80}
            height={80}
          />
        </Link>

        {/* Circular spinning text in front */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <CircularText
            text="Dan * Thiraphat * Ruksujarit * "
            onHover="slowDown"
            spinDuration={40}
            className="w-[160px] h-[160px]"
          />
        </div>
      </div>

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
