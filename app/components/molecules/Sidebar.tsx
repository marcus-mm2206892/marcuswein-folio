"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NAVIGATION,
  SOCIAL_LINKS,
  CONTACT_DETAILS,
} from "@/app/config/constants";
import {
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
} from "@/app/components/atoms/Icons";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkHover = (linkId: string) => {
    setActiveLink(linkId);
  };

  const handleLinkLeave = () => {
    setActiveLink(null);
  };

  return (
    <>
      {/* Black Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 pointer-events-auto"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Menu Sidebar */}
      <motion.div
        initial={{ x: "calc(100% + 100px)" }}
        animate={{ x: isOpen ? 0 : "calc(100% + 100px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-[98vh] bg-accent-dark-green fixed right-0 top-[1%] text-off-white z-50 rounded-tl-2xl rounded-bl-2xl max-w-[98%] overflow-hidden"
      >
        <div className="box-border h-full pr-[28vh] pl-[5vh] pt-[10vh] pb-[5vh] flex flex-col justify-between">
          {/* Navigation */}
          <nav className="flex flex-col text-[5vh] mt-[20%] z-4">
            <div className="header"></div>
            {Object.values(NAVIGATION).map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                className="text-off-white font-bold relative flex items-center no-underline"
                onMouseEnter={() => handleLinkHover(item.id)}
                onMouseLeave={handleLinkLeave}
                whileHover={{ x: 12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href === "/") {
                    // home link should scroll to the top
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    // scroll to the section with offset
                    const element = document.querySelector(item.href);
                    if (element) {
                      const elementPosition =
                        element.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - 100; // 100px offset from top

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }
                  onClose();
                }}
              >
                <motion.div
                  className="w-2 h-2 bg-off-white rounded-full absolute left-[-1.5rem]"
                  initial={{ scale: 0 }}
                  animate={{ scale: activeLink === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                {item.label.toUpperCase()}
              </motion.a>
            ))}
          </nav>

          {/* Footer */}
          <div className="min-w-sm flex flex-col items-start">
            <p className="text-accent-green-light text-base font-bold">
              EMAIL ADDRESS
            </p>
            <div className="animated-link">
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="text-off-white text-lg font-bold"
              >
                {CONTACT_DETAILS.email}
              </a>
            </div>
            <div className="flex gap-2 mt-4">
              {Object.values(SOCIAL_LINKS)
                .filter((item) => item.label !== "YouTube")
                .map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 border border-off-white rounded-full text-off-white text-sm"
                    key={item.key}
                  >
                    <span>{item.label.toUpperCase()}</span>
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* SVG Background Elements */}
        <div className="absolute top-[35%] left-[89%] transform -translate-x-1/2 -translate-y-1/2 z-3 w-full h-full fill-warm-gray-3 opacity-10">
          <svg viewBox="0 0 100 100" className="menu-svg">
            <circle cx="50" cy="50" r="50" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute top-[40%] left-[93%] transform -translate-x-1/2 -translate-y-1/2 z-3 w-full h-full fill-warm-gray-1 opacity-10">
          <svg viewBox="0 0 100 100" className="menu-svg">
            <circle cx="50" cy="50" r="50" fill="currentColor" />
          </svg>
        </div>
      </motion.div>
    </>
  );
}
