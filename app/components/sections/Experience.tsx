"use client";

import React from "react";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCES } from "@/app/config/constants";
import ExperienceCard from "../atoms/ExperienceCard";

export default function Experience() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="min-h-screen relative">
      {EXPERIENCES.map((experience, index) => {
        const targetScale = 1 - (EXPERIENCES.length - index) * 0.05;
        return (
          <ExperienceCard
            key={index}
            i={index}
            {...experience}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
}
