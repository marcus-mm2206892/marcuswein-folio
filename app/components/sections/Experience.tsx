import React from "react";
import { useScroll } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="min-h-screen grid grid-cols-12 gap-4 relative">
      Experience
    </div>
  );
}
