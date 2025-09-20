"use client";

import React from "react";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCES, EXPERIENCES_DESCRIPTION } from "@/app/config/data";
import ExperienceCard from "../atoms/ExperienceCard";
import SectionHeader from "../molecules/SectionHeader";
import {
  BobaFettIcon,
  BugIcon,
  CodeIcon,
  CoffeeIcon,
  HeartIcon,
  SpidermanIcon,
  TeamIcon,
  WorkIcon,
} from "../atoms/Icons";
import LogoLoop from "../atoms/LogoLoop";

export default function Experience() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="min-h-screen relative gap-4" id="journey">
      <SectionHeader
        title={{
          line1: "JOURNEY",
          line2: "SO FAR /",
        }}
        subtitle="ADVENTURES"
        description={EXPERIENCES_DESCRIPTION}
        superscriptNumber="5"
        icons={[
          <BobaFettIcon size={20} />,
          <HeartIcon size={20} />,
          <WorkIcon size={20} />,
          <TeamIcon size={20} />,
        ]}
      />
      <LogoLoop
        logos={EXPERIENCES.map((experience) => ({
          src: experience.logo,
          alt: experience.title,
        }))}
        speed={20}
        direction="left"
        width="100%"
        logoHeight={60}
        gap={100}
        pauseOnHover={true}
        fadeOut={true}
        fadeOutColor="bg-black"
        scaleOnHover={true}
      />
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
