"use client";

import React from "react";

interface ThanksProps {
  onReset: () => void;
}

export default function Thanks({ onReset }: ThanksProps) {
  return (
    <div className="contact-title-div flex-1 text-center flex flex-col justify-center h-full w-full">
      <h1
        className="contact-title-maintext font-heading text-[12vw] leading-[12vw] h-[12vw] overflow-hidden font-bold text-white cursor-pointer"
        onClick={onReset}
      >
        THANKS.
      </h1>
      <p className="contact-title-subtext text-lg text-accent-green-light mt-2">
        ( I'll get back to you in a bit )
      </p>
    </div>
  );
}
