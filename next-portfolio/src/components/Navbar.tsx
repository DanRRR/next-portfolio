"use client";

import Link from "next/link";
import Image from "next/image";
// import CircularText from "./CircularText";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FullscreenMenu from "@components/FullscreenMenu";

// TODO: Add hamburger dropdown and responsiveness
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* // <nav className=" w-full px-6 py-4 flex items-center justify-between backdrop-blur-md fixed top-0 z-50"> */}
      <nav className="w-full px-4 sm:px-6 py-4 flex items-center justify-between fixed top-0 z-50">
        {/* Logo */}
        <div className="relative w-[100px] h-[100px]">
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

        {/* Navigation Links */}
        {/* Desktop Navigation */}
        <div className="hidden md:flex font-grotesk space-x-20 text-xl font-bold px-20">
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

        {/* Burger Icon for Mobile */}
        <button
          className="md:hidden z-50 text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Side Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Side Drawer */}
            <FullscreenMenu />
            {/* <motion.div
              className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white z-50 p-6 flex flex-col gap-6 font-grotesk"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button className="self-end" onClick={toggleMenu}>
                <X size={24} />
              </button>
              {["about", "work", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={toggleMenu}
                  className="hover:text-[var(--accent)] transition relative inline-block after:block after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 hover:after:w-full"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </motion.div> */}
          </>
        )}
      </AnimatePresence>
    </>
  );
}
