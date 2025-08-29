"use client";

import React from "react";
import Link from "next/link";
import { LANDING_PAGE, NAVIGATION } from "@/app/config/constants";

export default function NavBar() {
  return (
    <header
      id="nav-bar"
      role="banner"
      aria-label="Main navigation"
      className="top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto pt-8 px-8">
        <div className="flex justify-between items-center min-h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex flex-col md:flex-row items-start justify-start md:items-center md:justify-start gap-4">
            <div>
              <Link href={NAVIGATION.home.href} aria-label="Go to homepage">
                <img
                  className="h-12 w-auto"
                  src="/assets/images/personal/mwlogo.png"
                  alt="Marcus Wein Logo"
                  draggable="false"
                />
              </Link>
            </div>
            <div>
              <span className="text-sm md:text-md font-mono text-gray-3 hover:text-accent-green transition-colors whitespace-normal">
                ( {LANDING_PAGE.headerTitle.pt1}
                <br className="md:hidden" /> & {LANDING_PAGE.headerTitle.pt2} )
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="flex flex-col md:flex-row md:space-x-8 items-end md:items-center"
          >
            {Object.values(NAVIGATION)
              .filter((item) => item.id !== "home")
              .map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-gray-1 rounded-md text-md font-body font-medium"
                >
                  {item.label}
                </Link>
              ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
