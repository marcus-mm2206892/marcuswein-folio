"use client";

import { LANDING_PAGE } from "@/app/config/constants";
import React, { useEffect, useState } from "react";
import Canvas from "../molecules/Canvas";
import { DownRightIcon } from "../atoms/Icons";

export default function LandingPage() {
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const [isClickable, setIsClickable] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 600;

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
      className={`sticky top-0 flex flex-col items-center justify-center h-screen p-8 z-0 ${
        !isClickable ? "pointer-events-none" : ""
      }`}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="flex-1 flex flex-col items-center justify-end md:justify-center w-full mb-12 md:mb-0">
        <img
          src="/assets/images/personal/marcuswein2.svg"
          alt="MARCUSW"
          className="mt-auto mb-8 w-full h-auto hidden md:block"
        />
        <img
          src="/assets/images/personal/marcusw2.svg"
          alt="MARCUSW"
          className="block md:hidden md:mt-20 h-auto pb-8 self-start"
          style={{
            width: "clamp(75%, 80vw, 100%)",
          }}
        />
        <div className="w-full md:grid md:grid-cols-3 md:gap-6 md:content-end md:mb-12">
          <div className="flex flex-col gap-4 md:gap-12 self-start md:max-h-84">
            <div className="hidden md:block">
              <DownRightIcon className="w-6 h-6" />
            </div>

            <div className="flex flex-col gap-6">
              <p className="max-w-full md:w-4/5 text-balance text-sm font-medium leading-snug text-gray-1 md:text-base xl:text-lg">
                {LANDING_PAGE.landingDescription}
              </p>

              <div className="overflow-hidden">
                <button className="group relative flex h-fit w-fit items-center justify-center overflow-hidden rounded-full bg-accent-dark-green font-bold uppercase tracking-wide text-white px-6 py-4 text-lg">
                  <span className="relative">VIEW MY CV ↗</span>
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
              className="w-3/5 max-w-64 h-auto hidden md:block"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between items-end">
        <div className="flex flex-col gap-0">
          <span className="hidden md:block text-gray-3 text-xs md:text-base font-mono">
            {LANDING_PAGE.landingCoordinates.x}, <br className="md:hidden" />
            {LANDING_PAGE.landingCoordinates.y}
          </span>
          <span className="text-gray-3 text-xs md:text-base font-mono">
            {LANDING_PAGE.landingLocation.toUpperCase()}
          </span>
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
          <div className="absolute top-1/3 md:top-1/2 mt-12 md:mt-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-86 md:w-xl h-80 md:h-96 block">
            <Canvas />
          </div>
        </div>
      </div>
    </section>
  );
}
