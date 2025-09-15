"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tag from "./Tag";
import { LANDING_PAGE } from "@/app/config/data";

export default function TagsAnimation() {
  const tags = Object.values(LANDING_PAGE.popupTexts);
  const [currentTagIndex, setCurrentTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagIndex((prev) => (prev + 1) % tags.length);
    }, 3500); // Change tag every 3 seconds

    return () => clearInterval(interval);
  }, [tags.length]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentTagIndex}
          className="absolute bottom-0"
          style={{
            left: `${currentTagIndex % 2 === 0 ? 10 : 65}%`,
          }}
          initial={{
            y: -100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: -250,
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
          }}
          exit={{
            y: -400,
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1],
          }}
        >
          <Tag
            label={tags[currentTagIndex].label}
            icon={tags[currentTagIndex].icon}
            size="medium"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
