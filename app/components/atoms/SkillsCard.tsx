import React, { forwardRef } from "react";
import Image from "next/image";

type SkillsCardProps = {
  index: number; // 0,1,2,3...
  frontSrc: string;
  frontAlt: string;
  backText: string;
};

// Forward the ref to the outermost root element you need to target
const SkillsCard = forwardRef<HTMLDivElement, SkillsCardProps>(
  ({ index, frontSrc, frontAlt, backText }, ref) => {
    return (
      // Card
      <div
        id={`card-${index + 1}`}
        ref={ref}
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          aspect-[2/3]
          w-[clamp(160px,42vw,240px)]
          [perspective:1000px]
        "
      >
        {/* Wrapper (floating) */}
        <div
          className="absolute w-full h-full animate-float"
          style={{ animationDelay: `${index * 0.2}s` }} // 0s, .2s, .4s, .6s
        >
          {/* Flip card inner */}
          <div className="flip-card-front relative w-full h-full [transform-style:preserve-3d]">
            {/* Front */}
            <div className="absolute w-full h-full [backface-visibility:hidden] overflow-hidden rounded-xl">
              <Image
                priority
                src={frontSrc}
                width={500}
                height={500}
                alt={frontAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Back */}
            <div className="flip-card-back absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden bg-white p-4">
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-center text-base font-light p-4">
                {backText}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

SkillsCard.displayName = "SkillsCard";
export default SkillsCard;
