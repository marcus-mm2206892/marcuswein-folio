"use client";

import React from "react";
import { motion } from "framer-motion";

interface BurgerProps {
  isOpen: boolean;
  onToggle: () => void;
  isVisible: boolean;
}

export default function Burger({ isOpen, onToggle, isVisible }: BurgerProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-[2vh] right-[2%] m-[2vh] z-[60] w-[7vh] h-[7vh] rounded-full bg-accent-green cursor-pointer flex items-center justify-center hover:bg-accent-green-light transition-colors"
      aria-label="Toggle menu"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        scale: {
          duration: 0.25,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: isVisible ? 1.05 : 0 }}
      whileTap={{ scale: isVisible ? 0.95 : 0 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Top line */}
        <motion.div
          className="absolute w-[40%] h-[1px] bg-off-white"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -5,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Bottom line */}
        <motion.div
          className="absolute w-[40%] h-[1px] bg-off-white"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : 5,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </motion.button>
  );
}
