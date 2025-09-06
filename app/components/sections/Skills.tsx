"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // named import
import { useGSAP } from "@gsap/react";
import SkillsCard from "@/app/components/atoms/SkillsCard";
import {
  BugIcon,
  AIIcon,
  BatmanIcon,
  CoffeeIcon,
} from "@/app/components/atoms/Icons";
import { SKILLS_CARDS, SKILLS_DESCRIPTION } from "@/app/config/constants";

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
              scrub: 0.3,
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
          const FLIP_STAGGER = isMobile ? 0.05 : 0.06;
          cards.forEach((card, i) => {
            if (!card) return;
            const front = card.querySelector(
              ".flip-card-front > div:first-child"
            )!;
            const back = card.querySelector(".flip-card-back")!;
            tl.to(card, { rotateZ: 0, duration: 1 }, 0.3 + i * FLIP_STAGGER);
            tl.to(
              front,
              { rotationY: -180, duration: 1 },
              0.3 + i * FLIP_STAGGER
            );
            tl.to(back, { rotationY: 0, duration: 1 }, 0.3 + i * FLIP_STAGGER);
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
      <section className="relative w-full">
        {/* container with padding so content never hugs edges */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* LEFT: GIANT HEADING */}
            <h1
              className="
              col-span-12 md:col-span-8
              font-heading font-bold leading-[0.9] text-left tracking-tight
              text-[clamp(2.5rem,9vw,7rem)]
            "
            >
              <span className="block pl-0">AREA OF</span>
              {/* no mobile padding; only indent on md+ */}
              <span className="block pl-0 md:pl-[6vw]">EXPERTISE /</span>
            </h1>

            {/* RIGHT: SUPPORTING COPY */}
            <aside className="col-span-12 md:col-span-4 md:col-start-9 self-start">
              <div className="flex flex-col gap-4 max-w-prose">
                <span className="font-mono text-lg md:text-xl text-accent-green">
                  ( SKILLS )
                </span>
                <p className="text-base md:text-lg text-off-white">
                  {SKILLS_DESCRIPTION}
                </p>
              </div>

              <div className="mt-4 flex gap-3">
                <div className="h-9 w-9 rounded-md border border-accent-green flex items-center justify-center">
                  <BatmanIcon size={20} />
                </div>
                <div className="h-9 w-9 rounded-md border border-accent-green flex items-center justify-center">
                  <AIIcon size={20} />
                </div>
                <div className="h-9 w-9 rounded-md border border-accent-green flex items-center justify-center">
                  <BugIcon size={20} />
                </div>
                <div className="h-9 w-9 rounded-md border border-accent-green flex items-center justify-center">
                  <CoffeeIcon size={20} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
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
