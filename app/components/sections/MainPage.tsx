import React from "react";
import AboutMe from "./AboutMe";

export default function MainPage() {
  return (
    <div className="absolute top-full left-0 right-0 min-h-[calc(100vh*3)] bg-[#000000] text-off-white rounded-[2rem] z-5 px-8 py-32">
      <AboutMe />
    </div>
  );
}
