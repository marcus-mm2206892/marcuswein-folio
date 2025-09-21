import React from "react";

const getTextSizeClasses = (size: "sm" | "md" | "lg" | "xl") => {
  switch (size) {
    case "sm":
      return "text-[clamp(1.5rem,8vw,4rem)] md:text-[clamp(1.5rem,6vw,4rem)]";
    case "md":
      return "text-[clamp(2rem,10vw,5rem)] md:text-[clamp(2rem,7vw,5rem)]";
    case "lg":
      return "text-[clamp(2.8rem,12vw,7rem)] md:text-[clamp(2.8rem,9vw,7rem)]";
    case "xl":
      return "text-[clamp(3.5rem,15vw,9rem)] md:text-[clamp(3.5rem,12vw,9rem)]";
    default:
      return "text-[clamp(2.8rem,12vw,7rem)] md:text-[clamp(2.8rem,9vw,7rem)]";
  }
};

interface SectionTitleProps {
  title: {
    line1: string;
    line2: string;
  };
  superscriptNumber?: string;
  textSize?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  superscriptNumber,
  textSize = "lg",
  className = "",
}) => {
  return (
    <h1
      className={`
        col-span-12 md:col-span-8
        font-heading font-bold leading-[0.9] text-left tracking-tight
        ${getTextSizeClasses(textSize)}
        ${className}
      `}
    >
      <span className="block pl-0">{title.line1}</span>
      {/* no mobile padding; only indent on md+ */}
      <span className="block pl-0 md:pl-[6vw]">
        {title.line2}
        {superscriptNumber && (
          <sup
            className="pl-2 md:pl-4 
        text-[clamp(1.6rem,6vw,4rem)] font-heading text-gray-1 font-medium ml-1"
          >
            ({superscriptNumber})
          </sup>
        )}
      </span>
    </h1>
  );
};

export default SectionTitle;
