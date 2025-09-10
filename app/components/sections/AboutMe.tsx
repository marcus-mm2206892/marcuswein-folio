import React from "react";
import { DownRightIcon } from "../atoms/Icons";
import { ABOUT_ME } from "@/app/config/constants";

export default function AboutMe() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-4 relative">
      <div className="col-span-12">
        <DownRightIcon className="w-10 h-10" />
      </div>
      <div className="col-span-12 md:col-span-7 items-center justify-center relative">
        {/* Image */}
        <div className="relative pointer-events-none w-auto h-[107vw] md:h-[56vw]">
          <svg
            viewBox="0 0 100 100"
            className="absolute mt-[14vw] md:mt-[8vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[47vw] md:h-[47vw] fill-accent-green opacity-10"
          >
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            className="absolute mt-[14vw] md:mt-[8vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] md:w-[50vw] md:h-[50vw] fill-accent-green opacity-10"
          >
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
          <img
            src="/assets/images/personal/Headshot.png"
            alt="Marcus"
            className="absolute mt-[14vw] md:mt-[8vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[80vw] md:h-[40vw] rounded-3xl"
          />
          {/* About Me Title */}
          <div className="relative">
            <p className="font-heading text-[10vw] md:text-[6vw] font-bold mb-[-6vw] md:mb-[-4vw] mix-blend-difference">
              DEVELOPER,
            </p>
            <p className=" font-heading text-[10vw] md:text-[6vw] font-bold mb-[-6vw] md:mb-[-4vw] mix-blend-difference">
              RESEARCHER,
            </p>
            <p className="font-heading text-[10vw] md:text-[6vw] font-bold mb-[-6vw] md:mb-[-4vw] mix-blend-difference">
              DESIGNER /
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-5 flex items-center justify-center">
        {/* Content */}
        <div className="flex flex-col gap-4 pt-8 md:pt-0">
          <span className="font-mono text-lg md:text-xl text-accent-green">
            ( ABOUT ME )
          </span>
          <p
            className="text-base md:text-xl text-off-white"
            dangerouslySetInnerHTML={{ __html: ABOUT_ME.paragraphs[0] }}
          />
          <p className="text-base md:text-xl text-off-white">
            {ABOUT_ME.paragraphs[1]}
          </p>
        </div>
      </div>
    </section>
  );
}
