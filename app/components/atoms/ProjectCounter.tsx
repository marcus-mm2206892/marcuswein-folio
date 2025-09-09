import React, { useEffect, useRef } from "react";
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
          setCurrentNumber(index + 1);
        },
        onEnterBack: () => {
          setCurrentNumber(index + 1);
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

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        ref={counterRef}
        className="text-[20vw] leading-none font-mono font-bold sticky top-8"
        style={{ willChange: "transform" }}
      >
        <span>0</span>
        <span>{currentNumber}</span>
        <span>.</span>
      </div>
    </div>
  );
}
