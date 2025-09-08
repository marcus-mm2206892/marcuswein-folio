import { useRef } from "react";

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={marqueeRef} className="marquee">
      <div className="marquee-content">
        <div className="marquee-item">Item 1</div>
      </div>
    </div>
  );
}
