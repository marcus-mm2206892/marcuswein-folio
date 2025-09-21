"use client";

import React from "react";
import { motion } from "framer-motion";

interface ConcentricCirclesProps {
  className?: string;
  duration?: number;
  sizes?: number[];
  opacities?: number[];
}

export default function ConcentricCircles({
  className = "",
  duration = 30,
  sizes = [320, 256, 192], // w-80, w-64, w-48 in pixels
  opacities = [0.3, 0.35, 0.4],
}: ConcentricCirclesProps) {
  return (
    <>
      {/* Concentric circles - centered */}
      <motion.div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative">
          {sizes.map((size, index) => (
            <div
              key={index}
              className="border border-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                borderColor: `rgba(255, 255, 255, ${opacities[index]})`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating particles - properly positioned within card bounds */}
      <motion.div
        className="absolute w-2 h-2 bg-white/60 rounded-full"
        style={{ top: "20%", left: "15%" }}
        animate={{
          y: [-15, 15, -15],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0,
        }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-white/60 rounded-full"
        style={{ top: "25%", right: "20%" }}
        animate={{
          y: [-20, 20, -20],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-white/60 rounded-full"
        style={{ bottom: "30%", left: "25%" }}
        animate={{
          y: [-12, 12, -12],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          delay: 2,
        }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-white/60 rounded-full"
        style={{ bottom: "25%", right: "15%" }}
        animate={{
          y: [-18, 18, -18],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-white/60 rounded-full"
        style={{ top: "60%", right: "10%" }}
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-white/60 rounded-full"
        style={{ top: "70%", left: "10%" }}
        animate={{
          y: [-14, 14, -14],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          delay: 2.2,
        }}
      />
    </>
  );
}
