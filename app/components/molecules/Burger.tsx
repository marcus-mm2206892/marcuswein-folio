"use client";

import React from "react";
import { motion } from "framer-motion";

interface BurgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Burger({ isOpen, onToggle }: BurgerProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-[2vh] right-[2%] m-[2vh] z-[60] w-[7vh] h-[7vh] rounded-full bg-accent-green cursor-pointer flex items-center justify-center hover:bg-accent-green-light transition-colors"
      aria-label="Toggle menu"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
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
