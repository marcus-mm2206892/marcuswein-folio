import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EXPERIENCES } from "../../config/constants";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  MapInputRange,
} from "framer-motion";
import { useRef } from "react";

interface ExperienceCardProps {
  i: number;
  title: string;
  role: string;
  description: Array<string>;
  logo: string;
  date: string;
  location: string;
  src: string;
  link: string;
  color: string;
  range: MapInputRange;
  targetScale: number;
  progress: MotionValue<number>;
}

export default function ExperienceCard({
  i,
  title,
  role,
  description,
  logo,
  date,
  location,
  src,
  link,
  color,
  range,
  targetScale,
  progress,
}: ExperienceCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="cardContainer h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="card flex flex-col relative h-[500px] w-[1000px] rounded-3xl p-12"
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="text-center m-0 text-xl">{title}</h2>
        <div className="flex h-full mt-12 gap-12">
          <div className="w-[50%] relative top-[10%]">
            <p className="text-base first-letter:text-2xl">{description}</p>
            <span className="flex items-center gap-1">
              <Link
                href={link}
                target="_blank"
                className="text-xs underline cursor-pointer"
              >
                See more
              </Link>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className="imgContainer relative w-[60%] h-full rounded-3xl overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image
                fill
                src={src}
                alt="image"
                className="hidden sm:block object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
