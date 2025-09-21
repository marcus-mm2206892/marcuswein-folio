import React from "react";
import SectionTitle from "../atoms/SectionTitle";

interface SectionHeaderProps {
  title: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  description: string;
  icons?: React.ReactNode[];
  superscriptNumber?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  icons = [],
  superscriptNumber,
}: SectionHeaderProps) {
  return (
    <section className="relative w-full">
      {/* container with padding so content never hugs edges */}
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* LEFT: GIANT HEADING */}
          <SectionTitle title={title} superscriptNumber={superscriptNumber} />

          {/* RIGHT: SUPPORTING COPY */}
          <aside className="col-span-12 md:col-span-4 md:col-start-9 self-start">
            <div className="flex flex-col gap-4 max-w-prose">
              <span className="font-mono text-lg md:text-xl text-accent-green">
                ( {subtitle} )
              </span>
              <p className="text-base md:text-lg text-off-white">
                {description}
              </p>
            </div>

            {icons.length > 0 && (
              <div className="mt-4 flex gap-3">
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className="h-9 w-9 rounded-md border border-accent-green flex items-center justify-center"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
