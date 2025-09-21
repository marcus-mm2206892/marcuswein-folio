"use client";
import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";

interface AnimatedPillProps {
  children: ReactNode;
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  className?: string;
  target?: string;
  rel?: string;
  variant?: "stroke" | "filled";
  dataBlock?: string;
  clickable?: boolean;
}

export default function AnimatedPill({
  children,
  href,
  onClick,
  className = "",
  target,
  rel,
  variant = "stroke",
  dataBlock = "button",
  clickable = true,
}: AnimatedPillProps) {
  const buttonRef = useRef<
    HTMLAnchorElement | HTMLButtonElement | HTMLDivElement
  >(null);
  const flairRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;

    if (!button || !flair) return;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      );

      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      );

      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top),
      };
    };

    const handleMouseEnter = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const { x, y } = getXY(mouseEvent);

      xSet(x);
      ySet(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const { x, y } = getXY(mouseEvent);

      gsap.killTweensOf(flair);

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const { x, y } = getXY(mouseEvent);

      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const baseClasses = `
    group inline-flex items-center justify-center gap-2
    font-medium text-base leading-none tracking-none 
    whitespace-nowrap relative overflow-hidden 
    min-w-[90px] cursor-pointer no-underline
    transition-colors duration-[50ms] ease-in-out
  `;

  const variantClasses =
    variant === "stroke"
      ? `
        bg-transparent border-2 border-off-white
        hover:no-underline
        px-6 py-3 rounded-[6.25rem]
        md:px-6 md:py-3 md:text-base
        max-md:px-4 max-md:py-2.5 max-md:text-xs
      `
      : `
        bg-transparent border-2 border-[#746C64] 
        hover:no-underline
        px-7 py-2.5 rounded-[6.25rem]
        md:px-7 md:py-2.5 md:text-base
        max-md:px-4 max-md:py-2.5 max-md:text-xs
      `;

  const flairClasses = variant === "stroke" ? "bg-off-white" : "bg-[#746C64]";

  const buttonContent = (
    <>
      <span
        className={`relative text-center transition-colors duration-[50ms] ease-in-out z-10 ${
          variant === "stroke"
            ? "text-off-white group-hover:!text-[#746C64] group-hover:transition-colors group-hover:duration-[150ms] group-hover:ease-in-out"
            : "text-[#746C64] group-hover:!text-off-white group-hover:transition-colors group-hover:duration-[150ms] group-hover:ease-in-out"
        }`}
      >
        {children}
      </span>
      <div
        ref={flairRef}
        className={`
          absolute inset-0 pointer-events-none 
          transform scale-0 origin-top-left
          will-change-transform
        `}
        style={{ transform: "scale(0)" }}
      >
        <div
          className={`
            absolute top-0 left-0 pointer-events-none
            w-[170%] aspect-square rounded-full
            transform -translate-x-1/2 -translate-y-1/2
            ${flairClasses}
          `}
        />
      </div>
    </>
  );

  if (href && clickable) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${className}`}
        data-block={dataBlock}
      >
        {buttonContent}
      </a>
    );
  }

  if (clickable) {
    return (
      <button
        ref={buttonRef as React.RefObject<HTMLButtonElement>}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${className}`}
        data-block={dataBlock}
      >
        {buttonContent}
      </button>
    );
  }

  return (
    <div
      ref={buttonRef as React.RefObject<HTMLDivElement>}
      className={`${baseClasses} ${variantClasses} ${className}`}
      data-block={dataBlock}
    >
      {buttonContent}
    </div>
  );
}
