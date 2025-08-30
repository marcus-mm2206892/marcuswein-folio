"use client";

import { LANDING_PAGE } from "@/app/config/constants";
import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";

export default function LandingPage() {
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const [isClickable, setIsClickable] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 200;

      if (scrollY <= fadeStart) {
        setOpacity(1);
        setTranslateY(0);
        setIsClickable(true);
      } else if (scrollY >= fadeEnd) {
        setOpacity(0);
        setTranslateY(128); // move down by 6rem
        setIsClickable(false);
      } else {
        // Calculate opacity and translateY between fadeStart and fadeEnd
        const fadeRange = fadeEnd - fadeStart;
        const currentProgress = scrollY - fadeStart;
        const progressRatio = currentProgress / fadeRange;

        const newOpacity = 1 - progressRatio;
        const newTranslateY = progressRatio * 128; // Move up to 6rem

        setOpacity(newOpacity);
        setTranslateY(newTranslateY);
        setIsClickable(newOpacity > 0.1);
      }
    };

    // Call handleScroll immediately to set initial state based on current scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`sticky top-0 flex flex-col items-center justify-center h-screen p-8 ${
        !isClickable ? "pointer-events-none" : ""
      }`}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="flex-1 flex flex-col items-center justify-end md:justify-center w-full mb-12 md:mb-0">
        <img
          src="/assets/images/personal/marcuswein.svg"
          alt="MARCUSW"
          className="mt-auto mb-8 w-full h-auto hidden md:block"
        />
        <img
          src="/assets/images/personal/marcusw.svg"
          alt="MARCUSW"
          className="block md:hidden md:mt-20 h-auto pb-8 self-start"
          style={{
            width: "clamp(75%, 80vw, 100%)",
          }}
        />
        <div className="w-full md:grid md:grid-cols-3 md:gap-8 md:content-end md:mb-16">
          <div className="flex flex-col gap-4 md:gap-12 self-start md:max-h-84">
            <div className="hidden md:block">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.25"
                viewBox="6 6 12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="m-0 size-4 p-0 md:size-6 text-accent-green-light"
                height="1em"
                width="1em"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </div>

            <div className="flex flex-col gap-4 md:gap-10">
              <p className="w-full text-balance text-sm font-regular leading-snug text-gray-1 md:text-base xl:text-lg">
                {LANDING_PAGE.landingDescription}
              </p>

              <div className="overflow-hidden">
                <button className="group relative flex h-fit w-fit items-center justify-center overflow-hidden rounded-full bg-gray-2 font-bold uppercase tracking-wide text-white px-6 py-4 text-base">
                  <span className="relative z-1">Download CV ↗</span>
                </button>
              </div>
            </div>
          </div>

          {/* Row 2, Column 2: Empty space */}
          <div></div>

          {/* Row 2, Column 3: Vector Home Screen Image */}
          <div className="flex items-center justify-end">
            <img
              src="/assets/images/svg/vectorhomescreen.svg"
              alt="Vector Home Screen"
              className="w-3/4 max-w-64 h-auto hidden md:block"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between items-end">
        <div className="flex flex-col gap-0 text-gray-3 font-mono text-xs md:text-base">
          <span className="hidden md:block">
            {LANDING_PAGE.landingCoordinates.x}, <br className="md:hidden" />
            {LANDING_PAGE.landingCoordinates.y}
          </span>
          <span>{LANDING_PAGE.landingLocation.toUpperCase()}</span>
        </div>
        <div className="flex flex-col gap-0">
          <span className="text-gray-2 font-mono text-right text-xs md:text-base">
            AVAILABLE FOR WORK
          </span>
          <span className="text-gray-3 font-heading text-right text-3xl md:text-6xl font-bold">
            {LANDING_PAGE.subInfoDescription.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Canvas positioned absolutely above all content */}
      <div className="absolute inset-0 pointer-events-none z-1">
        <div className="relative w-full h-full">
          <div className="absolute top-1/3 md:top-1/2 mt-12 md:mt-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-90 md:w-xl h-80 md:h-96 block">
            <Canvas />
          </div>
        </div>
      </div>
    </section>
  );
}
