"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // named import
import { useGSAP } from "@gsap/react";
import SkillsCard from "@/app/components/atoms/SkillsCard";
import SectionHeader from "@/app/components/molecules/SectionHeader";
import {
  AIIcon,
  BatmanIcon,
  DuckIcon,
  DesignIcon,
} from "@/app/components/atoms/Icons";
import { SKILLS_CARDS, SKILLS_DESCRIPTION } from "@/app/config/data";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const container = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const cards = cardRefs.current;
      const triggerEl = container.current!.querySelector(".cards") as Element;
      const totalScrollHeight = () => window.innerHeight * 3;

      const mm = gsap.matchMedia();

      mm.add(
        {
          // breakpoints
          isMobile: "(max-width: 640px)",
          isTablet: "(min-width: 641px) and (max-width: 1024px)",
          isDesktop: "(min-width: 1025px)",
        },
        (ctx) => {
          const { isMobile, isTablet } = ctx.conditions!;

          // X positions (%) and Y positions (%) per breakpoint
          const lefts = isMobile
            ? [22, 78, 22, 78]
            : isTablet
              ? [30, 70, 30, 70] // two columns
              : [11, 37, 63, 89];

          const tops =
            isMobile || isTablet
              ? [27, 27, 72, 72] // two rows (nice vertical gap)
              : [50, 50, 50, 50];

          const tilts = isMobile
            ? [-8, 4, 4, -8]
            : isTablet
              ? [-6, 6, -6, 6] // gentler tilt on tablet
              : [-15, -7.5, 7.5, 15];

          const scales = isMobile
            ? [0.92, 0.92, 0.92, 0.92]
            : isTablet
              ? [0.9, 0.9, 0.9, 0.9] // small downscale for breathing room
              : [1, 1, 1, 1];

          // set initial state
          cards.forEach((card, i) => {
            if (!card) return;
            gsap.set(card, {
              xPercent: -50,
              yPercent: -50,
              left: "50%", // start centered; we animate to lefts[i]
              top: "50%",
              rotateZ: 0,
              scale: scales[i],
            });
          });

          // one scrubbed timeline
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: triggerEl,
              start: "top top",
              end: () => `+=${totalScrollHeight()}`,
              scrub: 0.5,
              pin: true,
              pinSpacing: true,
              invalidateOnRefresh: true, // recompute on resize/rotation
            },
          });

          // PHASE 1: spread + place on their Y lanes
          cards.forEach((card, i) => {
            if (!card) return;
            tl.to(
              card,
              {
                left: `${lefts[i]}%`,
                top: `${tops[i]}%`, // <<< per-card Y
                rotateZ: tilts[i],
              },
              0
            );
          });

          // PHASE 2: flip with tiny stagger (same as before)
          const FLIP_STAGGER = isMobile ? 0.06 : 0.07;
          cards.forEach((card, i) => {
            if (!card) return;
            const front = card.querySelector(
              ".flip-card-front > div:first-child"
            )!;
            const back = card.querySelector(".flip-card-back")!;
            tl.to(card, { rotateZ: 0, duration: 1 }, 0.5 + i * FLIP_STAGGER);
            tl.to(
              front,
              { rotationY: -180, duration: 1 },
              0.5 + i * FLIP_STAGGER
            );
            tl.to(back, { rotationY: 0, duration: 1 }, 0.5 + i * FLIP_STAGGER);
          });

          // refresh on resize
          ScrollTrigger.refresh();
          return () => tl.kill();
        }
      );
    },
    { scope: container }
  );

  return (
    <div>
      <SectionHeader
        title={{
          line1: "AREA OF",
          line2: "EXPERTISE /",
        }}
        subtitle="SKILLS"
        description={SKILLS_DESCRIPTION}
        icons={[
          <BatmanIcon size={20} />,
          <AIIcon size={20} />,
          <DesignIcon size={20} />,
          <DuckIcon size={20} />,
        ]}
      />
      <div ref={container} className="relative w-full">
        <section className="cards relative w-full h-screen">
          {SKILLS_CARDS.map((c, i) => (
            <SkillsCard
              key={i}
              index={i}
              frontSrc="/assets/images/personal/card.png"
              frontAlt="Card Image"
              title={c.title}
              items={c.items}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
