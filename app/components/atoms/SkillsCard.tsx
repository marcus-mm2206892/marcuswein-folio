import React, { forwardRef } from "react";
import Image from "next/image";

type SkillsCardProps = {
  index: number;
  frontSrc: string; // keep your PNG face
  frontAlt: string;
  // Back face content (TECH-style)
  title: string; // e.g. "TECH"
  items: string[]; // e.g. ["WebGL Development", ...]
};

const SkillsCard = forwardRef<HTMLDivElement, SkillsCardProps>(
  ({ index, frontSrc, frontAlt, title, items }, ref) => {
    const firstLetter = title.charAt(0).toUpperCase();

    return (
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
        {/* floating wrapper */}
        <div
          className="absolute w-full h-full animate-float"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {/* flip container */}
          <div className="flip-card-front relative w-full h-full [transform-style:preserve-3d]">
            {/* FRONT (unchanged image face) */}
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

            {/* BACK (TECH-style) */}
            <div
              className="
              flip-card-back absolute w-full h-full
              [backface-visibility:hidden] [transform:rotateY(180deg)]
              rounded-xl overflow-hidden
              bg-white text-black p-6 flex flex-col
            "
            >
              {/* header row */}
              <div className="flex justify-between items-start">
                <h3 className="font-heading text-lg font-bold tracking-tight">
                  {title}
                </h3>
                <span className="font-heading text-lg font-bold">
                  {firstLetter}
                </span>
              </div>

              {/* list */}
              <ul className="mt-[2.5vw] md:mt-6 space-y-4 text-[2.5vw] md:text-sm">
                {items.map((it, i) => (
                  <li
                    key={i}
                    className="pb-2 border-b border-dotted border-black/40 last:border-none"
                  >
                    {it}
                  </li>
                ))}
              </ul>

              {/* upside-down footer */}
              <div className="mt-auto pt-4 flex justify-between items-end rotate-180">
                <span className="font-heading text-lg font-bold tracking-tight">
                  {title}
                </span>
                <span className="font-heading text-lg font-bold">
                  {firstLetter}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

SkillsCard.displayName = "SkillsCard";
export default SkillsCard;
