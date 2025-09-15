"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";

export default function MainPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });

  // Transform scroll progress to scale values
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [2, 1.5]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        scaleX,
        borderRadius: useTransform(borderRadius, (value) => `${value}rem`),
      }}
      className="relative mt-screen left-0 right-0 min-h-[calc(100vh*3)] bg-black text-off-white z-5 px-8 py-32 flex flex-col gap-32 origin-center"
    >
      <section id="about">
        <AboutMe />
      </section>
      <section id="journey">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Skills />
    </motion.div>
  );
}
