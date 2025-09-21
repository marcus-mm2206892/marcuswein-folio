import React, { forwardRef } from "react";
import Image from "next/image";
import Tag from "@/app/components/atoms/Tag"; // import your Tag component
import { LucideIcon } from "lucide-react";

interface IconProps {
  className?: string;
  size?: number;
}

type SkillsCardProps = {
  index: number;
  frontSrc: string;
  frontAlt: string;
  title: string; // e.g. "TECH"
  items: { label: string; icon: LucideIcon | React.FC<IconProps> }[]; // new: array of tags w/ icons
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
          aspect-[2/3] w-[clamp(160px,42vw,240px)] [perspective:1000px]
        "
      >
        <div
          className="absolute w-full h-full animate-float"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="flip-card-front relative w-full h-full [transform-style:preserve-3d]">
            {/* FRONT */}
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

            {/* BACK */}
            <div className="flip-card-back absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden bg-white text-black p-4 md:p-6 flex flex-col">
              {/* header row */}
              <div className="flex justify-between items-start">
                <h3 className="font-heading text-lg font-bold tracking-tight">
                  {title}
                </h3>
                <span className="font-heading text-lg font-bold">
                  {firstLetter}
                </span>
              </div>

              {/* tags instead of list */}
              <div className="mt-2 min-[466px]:mt-4 flex flex-wrap gap-1">
                {items.map((it, i) => (
                  <Tag key={i} label={it.label} icon={it.icon} size="medium" />
                ))}
              </div>

              {/* upside-down footer */}
              <div className="hidden sm:flex mt-auto justify-between items-end rotate-180">
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
