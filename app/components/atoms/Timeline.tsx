"use client";

import { useEffect, useState } from "react";

interface TimelineProps {
  experiences: Array<any>;
}

export default function Timeline({ experiences }: TimelineProps) {
  const [positions, setPositions] = useState<number[]>([]);

  useEffect(() => {
    const updatePositions = () => {
      const newPositions = experiences.map((_, idx) => {
        const el = document.getElementById(`experience-${idx}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top + window.scrollY + rect.height / 2; // center of card
        }
        return 0;
      });
      setPositions(newPositions);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    window.addEventListener("scroll", updatePositions);

    return () => {
      window.removeEventListener("resize", updatePositions);
      window.removeEventListener("scroll", updatePositions);
    };
  }, [experiences]);

  return (
    <div className="relative h-full flex justify-center">
      {/* Darker line */}
      <div className="w-[4px] bg-gray-700 rounded-full h-full" />

      {/* Circles aligned with cards */}
      {positions.map((y, idx) => (
        <div
          key={idx}
          className="absolute w-6 h-6 bg-accent-green rounded-full shadow-[0_0_15px_4px_rgba(140,140,115,0.8)]"
          style={{
            top: `${y}px`,
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
