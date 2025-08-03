"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MorphingHamburger from "./Hamburger";
// import CircularText from "./CircularText";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 w-full px-4 sm:px-6 py-4 flex items-center justify-between z-50">
        {/* Logo */}
        <div className="relative w-16 sm:w-20 md:w-24 aspect-square">
          <Link
            href="/"
            className="absolute inset-0 z-10 flex items-center justify-center px-2.5 hover:opacity-80 transition pointer-events-auto"
          >
            <Image
              src="/transparent_chrome.png"
              alt="My Logo"
              width={80}
              height={80}
            />
          </Link>

          {/* Circular spinning text in front */}
          {/* <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <CircularText
              text="Dan * Thiraphat * Ruksujarit * "
              onHover="slowDown"
              spinDuration={40}
              className="w-[160px] h-[160px]"
            />
          </div> */}
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex font-grotesk space-x-20 text-xl font-bold px-6">
          {["about", "work", "projects", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="hover:text-[var(--accent)] transition relative inline-block after:block after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 hover:after:w-full"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <MorphingHamburger
            isOpen={isOpen}
            toggle={toggleMenu}
            className="w-8 h-8"
          />
        </div>
      </nav>

      {/* Side Drawer for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-full bg-[var(--background)] z-40 p-6 flex flex-col font-grotesk"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex flex-col gap-6 pt-20">
              {["about", "work", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={toggleMenu}
                  className="text-3xl font-bold hover:text-[var(--accent)] transition relative inline-block after:block after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 hover:after:w-full"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
