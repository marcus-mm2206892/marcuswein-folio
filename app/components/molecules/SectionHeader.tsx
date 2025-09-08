import React from "react";

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
          <h1
            className="
              col-span-12 md:col-span-8
              font-heading font-bold leading-[0.9] text-left tracking-tight
              text-[clamp(2.8rem,12vw,7rem)]
              md:text-[clamp(2.8rem,9vw,7rem)]
            "
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
