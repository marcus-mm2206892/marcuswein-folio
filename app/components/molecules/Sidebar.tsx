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
      {/* Menu Overlay */}
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
        className="h-[98vh] bg-gray-3 fixed right-0 top-[1%] text-off-white z-50 rounded-2xl max-w-[98%] overflow-hidden"
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
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="w-[10px] h-[10px] bg-off-white rounded-full absolute left-[-30px]"
                  initial={{ scale: 0 }}
                  animate={{ scale: activeLink === item.id ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                {item.label.toUpperCase()}
              </motion.a>
            ))}
          </nav>

          {/* Footer */}
          <div className="min-w-[300px] flex flex-col items-start">
            <p className="text-accent-green text-[0.9em] font-bold">
              EMAIL ADDRESS
            </p>
            <div className="animated-link">
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="text-off-white text-[1.15em] font-bold h-[1.2em] leading-[1.2em] hover:text-accent-green transition-colors"
              >
                {CONTACT_DETAILS.email}
              </a>
            </div>
            <div className="flex gap-[10px] mt-[20px]">
              <a
                href={SOCIAL_LINKS.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--stroke"
              >
                <span className="button__flair"></span>
                <span className="button__label">
                  {SOCIAL_LINKS.linkedin.label.toUpperCase()}
                </span>
              </a>

              <a
                href={SOCIAL_LINKS.github.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--stroke"
              >
                <span className="button__flair"></span>
                <span className="button__label">
                  {SOCIAL_LINKS.github.label.toUpperCase()}
                </span>
              </a>

              <a
                href={SOCIAL_LINKS.instagram.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--stroke"
              >
                <span className="button__flair"></span>
                <span className="button__label">
                  {SOCIAL_LINKS.instagram.label.toUpperCase()}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* SVG Background Elements */}
        <div className="absolute top-[20%] left-[89%] transform -translate-x-1/2 -translate-y-1/2 z-3 w-[100vh] h-[100vh] fill-accent-warm-gray opacity-40">
          <svg viewBox="0 0 100 100" className="menu-svg">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute top-[25%] left-[93%] transform -translate-x-1/2 -translate-y-1/2 z-3 w-[100vh] h-[100vh] fill-accent-green opacity-30">
          <svg viewBox="0 0 100 100" className="menu-svg">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
        </div>
      </motion.div>
    </>
  );
}
