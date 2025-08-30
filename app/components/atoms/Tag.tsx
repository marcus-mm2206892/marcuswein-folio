import React from "react";
import { LucideIcon } from "lucide-react";

interface TagProps {
  label: string;
  icon: LucideIcon;
}

export default function Tag({ label, icon: Icon }: TagProps) {
  return (
    <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full bg-accent-green shadow-lg whitespace-nowrap">
      <Icon className="w-3 h-3 md:w-4 md:h-4 text-off-white" />
      <span className="text-[0.6rem] md:text-sm font-medium text-off-white">
        {label}
      </span>
    </div>
  );
}
