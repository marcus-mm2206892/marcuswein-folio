"use client";

import React from "react";
import Image from "next/image";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  MapInputRange,
} from "framer-motion";
import { useRef } from "react";
import Tag from "./Tag";
import ConcentricCircles from "./ConcentricCircles";

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
        className="card group relative min-h-[580px] sm:min-h-[600px] w-[90%] lg:w-[100%] min-w-[320px] max-w-[1100px] rounded-3xl overflow-hidden border border-transparent hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-[border,box-shadow] duration-500"
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
          <ConcentricCircles />
        </div>

        {/* Header Section */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 pb-2">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              {/* Company Logo */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 flex-shrink-0">
                <Image
                  src={logo}
                  alt={`${title} logo`}
                  width={40}
                  height={40}
                  className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
                  <div
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 group/item"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/60 mt-1.5 sm:mt-2 flex-shrink-0 " />
                    <p className="text-white/90 text-xs sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills Section */}
              <div className="pt-2 sm:pt-4">
                <h4 className="text-white/70 text-xs sm:text-sm font-medium mb-2 sm:mb-3 uppercase tracking-wider">
                  Skills Learned
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.map((skill, index) => (
                    <Tag
                      key={skill}
                      color="bg-accent-green"
                      label={skill}
                      icon={SimpleIcon}
                      textColor="text-off-white"
                      size="medium"
                    />
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
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
