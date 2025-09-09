import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ProjectCounterProps {
  projectsContainerRef?: React.RefObject<HTMLDivElement | null>;
}

export default function ProjectCounter({
  projectsContainerRef,
}: ProjectCounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentNumber, setCurrentNumber] = React.useState(1);
  const numberSlotRef = useRef<HTMLSpanElement>(null);
  const prevNumberRef = useRef<number>(1);
  const scrollDirectionRef = useRef<1 | -1>(1);

  useEffect(() => {
    if (
      !counterRef.current ||
      !projectsContainerRef?.current ||
      !containerRef.current
    )
      return;

    const counter = counterRef.current;
    const projectsContainer = projectsContainerRef.current;
    const container = containerRef.current;

    // set the container height to match the projects container height
    const updateHeight = () => {
      // Get the height of the right column (project cards container)
      const projectCardsContainer = projectsContainer.querySelector(
        ".col-span-12.md\\:col-span-7"
      ) as HTMLElement;
      if (projectCardsContainer) {
        const cardsHeight = projectCardsContainer.offsetHeight;
        container.style.height = `${cardsHeight}px`;
      } else {
        // Fallback to projects container height
        const projectsHeight = projectsContainer.offsetHeight;
        container.style.height = `${projectsHeight}px`;
      }
    };

    // initial height setting with a small delay
    setTimeout(updateHeight, 100);

    // Update height on resize
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(projectsContainer);

    // Also watch for window resize events
    const handleWindowResize = () => {
      setTimeout(updateHeight, 50); // Small delay to ensure layout is updated
    };

    window.addEventListener("resize", handleWindowResize);

    // Simple viewport watcher - just update the number based on which project is in view
    const projectCards = projectsContainer.querySelectorAll(
      ".col-span-12.md\\:col-span-7 > div"
    );

    projectCards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card as HTMLElement,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setCurrentNumber((prev) => {
            prevNumberRef.current = prev;
            return index + 1;
          });
        },
        onEnterBack: () => {
          setCurrentNumber((prev) => {
            prevNumberRef.current = prev;
            return index + 1;
          });
        },
      });
    });

    // Keep the counter in its original position
    ScrollTrigger.create({
      trigger: projectsContainer,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        scrollDirectionRef.current = (self.direction as 1 | -1) || 1;

        // keep the counter in its original position
        gsap.set(counter, {
          y: 0,
          ease: "none",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === projectsContainer) {
          trigger.kill();
        }
      });
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [projectsContainerRef]);

  // Animate digit transition based on scroll direction whenever currentNumber changes
  useLayoutEffect(() => {
    if (!numberSlotRef.current) return;

    const oldDigit = numberSlotRef.current.querySelector(
      ".digit-old"
    ) as HTMLElement | null;
    const newDigit = numberSlotRef.current.querySelector(
      ".digit-new"
    ) as HTMLElement | null;

    if (!oldDigit || !newDigit) return;

    const direction = scrollDirectionRef.current; // 1 = scrolling down, -1 = up

    // Position incoming digit off-screen in the proper direction
    gsap.set(oldDigit, { yPercent: 0 });
    gsap.set(newDigit, { yPercent: direction === 1 ? 100 : -100 });

    const tl = gsap.timeline({
      defaults: { duration: 0.45, ease: "power2.out" },
    });
    tl.to(oldDigit, { yPercent: direction === 1 ? -100 : 100 }, 0);
    tl.to(newDigit, { yPercent: 0 }, 0);

    return () => {
      tl.kill();
    };
  }, [currentNumber]);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        ref={counterRef}
        className="text-[20vw] leading-none font-mono font-bold sticky top-8 flex items-end"
        style={{ willChange: "transform" }}
      >
        <span>0</span>
        <span
          ref={numberSlotRef}
          className="relative inline-block h-[1em] w-[1ch] overflow-hidden align-baseline"
          style={{ willChange: "transform" }}
        >
          <span
            key={`old-${prevNumberRef.current}`}
            className="digit-old absolute inset-0 will-change-transform"
            style={{ transform: "translateY(0%)" }}
          >
            {prevNumberRef.current}
          </span>
          <span
            key={`new-${currentNumber}`}
            className="digit-new absolute inset-0 will-change-transform"
            style={{ transform: "translateY(0%)" }}
          >
            {currentNumber}
          </span>
        </span>
        <span>.</span>
      </div>
    </div>
  );
}
