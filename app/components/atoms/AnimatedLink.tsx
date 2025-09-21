"use client";
import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";

interface AnimatedLinkProps {
  children: ReactNode;
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
  className?: string;
  target?: string;
  rel?: string;
}

export default function AnimatedLink({
  children,
  href,
  onClick,
  className = "",
  target,
  rel,
}: AnimatedLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const cloneRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    const text = textRef.current;
    const clone = cloneRef.current;

    if (!link || !text || !clone) return;

    const handleMouseEnter = () => {
      gsap.to(text, {
        y: "-100%",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(clone, {
        y: "-100%",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(text, {
        y: "0%",
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(clone, {
        y: "0%",
        duration: 0.3,
        ease: "power2.in",
      });
    };

    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      link.removeEventListener("mouseenter", handleMouseEnter);
      link.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const linkContent = (
    <span className="relative inline-block overflow-hidden h-[1.4em] leading-[1.4em] align-middle">
      <span
        ref={textRef}
        className="relative inline-block"
        style={{ transform: "translateY(0%)" }}
      >
        {children}
      </span>
      <span
        ref={cloneRef}
        className="absolute top-full left-0 inline-block"
        style={{ transform: "translateY(0%)" }}
      >
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <a
        ref={linkRef}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={`inline-block text-inherit no-underline relative ${className}`}
      >
        {linkContent}
      </a>
    );
  }

  return (
    <button
      ref={linkRef as any}
      onClick={onClick}
      className={`inline-block text-inherit no-underline relative bg-transparent border-none cursor-pointer ${className}`}
    >
      {linkContent}
    </button>
  );
}
