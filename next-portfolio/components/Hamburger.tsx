// components/MorphingHamburger.tsx
"use client";

import { motion } from "framer-motion";

export default function MorphingHamburger({
  isOpen,
  toggle,
  className = "",
}: {
  isOpen: boolean;
  toggle: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={toggle}
      className={`w-10 h-10 relative z-50 ${className}`}
      aria-label="Toggle menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="size-8"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            closed: { d: "M3.75 9 L20.25 9" },
            open: { d: "M5 5 L19 19" },
          }}
          initial="closed" // prevents enter animation
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            closed: { d: "M3.75 15.75 L20.25 15.75" },
            open: { d: "M5 19 L19 5" },
          }}
          initial="closed" // prevents enter animation
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
}
