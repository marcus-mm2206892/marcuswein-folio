"use client";

import React from "react";
import Image from "next/image";
import { EXPERIENCES } from "../../config/data";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  MapInputRange,
} from "framer-motion";
import { useRef } from "react";
import Tag from "./Tag";

interface ExperienceCardProps {
  i: number;
  title: string;
  role: string;
  description: Array<string>;
  skills: Array<string>;
  src: string;
  logo: string;
  date: string;
  location: string;
  link: string;
  color: string;
  range: MapInputRange;
  targetScale: number;
  progress: MotionValue<number>;
}

export default function ExperienceCard({
  i,
  title,
  role,
  description,
  skills,
  src,
  logo,
  date,
  location,
  link,
  color,
  range,
  targetScale,
  progress,
}: ExperienceCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Simple icon component for tags (no lucide icons)
  const SimpleIcon = () => <div className="w-2 h-2 rounded-full bg-white/60" />;

  return (
    <div
      ref={container}
      className="cardContainer h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="card group relative min-h-[550px] w-full max-w-[1100px] mx-auto rounded-3xl overflow-hidden border border-transparent hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-[border,box-shadow] duration-500"
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        {/* Background gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />

        {/* Mysterious background visual elements */}
        <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
          {/* Concentric circles - centered */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="relative">
              <div className="w-80 h-80 border border-white/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="w-64 h-64 border border-white/35 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="w-48 h-48 border border-white/40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
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
        </div>

        {/* Header Section */}
        <div className="relative z-10 p-4 sm:p-6 lg:p-8 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Company Logo */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 flex-shrink-0">
                <Image
                  src={logo}
                  alt={`${title} logo`}
                  width={40}
                  height={40}
                  className="object-contain w-6 h-6 sm:w-10 sm:h-10"
                />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                  {title}
                </h2>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg font-medium">
                  {role}
                </p>
              </div>
            </div>

            {/* Date and Location */}
            <div className="text-left sm:text-right">
              <div className="text-white/70 mb-1">
                <span className="text-xs sm:text-sm font-bold">{date}</span>
              </div>
              <div className="text-white/70">
                <span className="text-xs sm:text-sm">{location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left: Description */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                {description.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 group/item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/60 mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-white transition-colors duration-200" />
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Skills Section */}
              <div className="pt-2 sm:pt-4">
                <h4 className="text-white/70 text-xs sm:text-sm font-medium mb-2 sm:mb-3 uppercase tracking-wider">
                  Skills Learned
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Tag
                        color="bg-accent-green"
                        label={skill}
                        icon={SimpleIcon}
                        size="medium"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Image or Placeholder - Hidden on small screens, shown on large screens */}
            <div className="relative hidden lg:block">
              {src ? (
                <div className="h-auto w-full rounded-2xl overflow-hidden border border-white/20 group/visual">
                  <Image
                    src={src}
                    alt={`${title} experience`}
                    width={400}
                    height={320}
                    className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover/visual:scale-105"
                  />
                </div>
              ) : (
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center group/visual">
                  {/* Animated geometric shapes */}
                  <div className="relative w-32 h-32">
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-white/30"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.div
                      className="absolute inset-4 rounded-full border border-white/20"
                      animate={{
                        rotate: -360,
                        scale: [1, 0.9, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.div
                      className="absolute inset-8 rounded-full bg-white/10"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    </div>
  );
}
