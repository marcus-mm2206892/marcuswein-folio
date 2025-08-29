"use client";

import { SITE_CONFIG, SOCIAL_LINKS } from "@/app/config/constants";
import React, { useEffect, useState } from "react";

export default function LandingPage() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector("#nav-bar") as HTMLElement;
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <section
      className="pt-20 pb-16 px-6"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-3">
          Hey! I'm Marcus 👋
        </h1>
        <p className="text-xl md:text-2xl font-body text-gray-1 max-w-2xl mx-auto">
          Software Developer & AI Researcher based in {SITE_CONFIG.location}.
          Building meaningful software solutions that merge design, AI, and
          research.
        </p>
        <div className="flex justify-center space-x-4 pt-4">
          <a
            href={SOCIAL_LINKS.github.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View GitHub
          </a>
          <a
            href={SOCIAL_LINKS.linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
