import React from "react";
import { LucideIcon } from "lucide-react";

interface IconProps {
  className?: string;
  size?: number;
}

interface TagProps {
  label: string;
  icon: LucideIcon | React.FC<IconProps>;
  size?: "small" | "medium" | "large";
  color?: string;
}

export default function Tag({
  label,
  icon: Icon,
  size = "medium",
  color,
}: TagProps) {
  // Size-based styling configurations
  const sizeConfig = {
    small: {
      container: "gap-1 px-1.5 py-0.5",
      icon: "w-2.5 h-2.5",
      text: "text-[0.4rem]",
    },
    medium: {
      container: "gap-1 md:gap-2 px-2 md:px- py-1 md:py-2",
      icon: "w-3 h-3 md:w-4 md:h-4",
      text: "text-[0.6rem] min-[466px]:text-[0.8rem]",
    },
    large: {
      container: "gap-2 md:gap-3 px-3 md:px-6 py-1.5 md:py-3",
      icon: "w-4 h-4 md:w-5 md:h-5",
      text: "text-xs md:text-base",
    },
  };

  const config = sizeConfig[size];
  const backgroundColor = color || "bg-accent-green-light";
  const textColor = color ? "text-white" : "text-off-white";
  const iconColor = color ? "text-white" : "text-off-white";

  return (
    <div
      className={`flex items-center ${config.container} rounded-full ${backgroundColor} shadow-lg whitespace-nowrap`}
    >
      <Icon className={`${config.icon} ${iconColor}`} />
      <span className={`${config.text} font-medium ${textColor}`}>{label}</span>
    </div>
  );
}
