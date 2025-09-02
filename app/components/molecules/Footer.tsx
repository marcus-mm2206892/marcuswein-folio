"use client";

import React, { useEffect, useState } from "react";
import {
  SOCIAL_LINKS,
  CONTACT_DETAILS,
  SITE_CONFIG,
  NAVIGATION,
} from "@/app/config/constants";
import {
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  UpArrowIcon,
} from "@/app/components/atoms/Icons";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const qatarOffset = 3 * 60; // Qatar is GMT+3
      const utcTime =
        currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
      const qatarTime = new Date(utcTime + qatarOffset * 60000);

      const hours = qatarTime.getHours();
      const minutes = qatarTime.getMinutes();
      const seconds = qatarTime.getSeconds();

      const formattedHours = hours % 12 || 12;
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

      setLocalTime(
        `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}, DOH`
      );
    };

    return () => {};
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-gray-3 p-10 px-[5%] relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
        {/* Menu and Socials - Side by side on mobile, separate on medium+ */}
        <div className="grid grid-cols-6 md:contents gap-5">
          {/* Menu Column */}
          <div className="col-span-3 md:col-span-6">
            <h3 className="border-b border-gray-1 text-lg font-bold mb-2.5 pb-2.5">
              Menu
            </h3>
            <ul className="list-none p-0">
              {Object.values(NAVIGATION).map((item) => (
                <li key={item.id} className="flex items-center h-6 mb-1.5">
                  <a
                    href={item.href}
                    className="text-gray-1 text-sm hover:text-accent-green transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="col-span-3 md:col-span-2">
            <h3 className="border-b border-gray-1 text-lg font-bold mb-2.5 pb-2.5">
              Socials
            </h3>
            <ul className="list-none p-0">
              {Object.entries(SOCIAL_LINKS).map(([platform, social]) => (
                <li key={platform} className="flex items-center h-6 mb-1.5">
                  <div className="w-[18px] h-[18px] mr-2.5 flex items-center">
                    {platform === "github" && <GithubIcon size={18} />}
                    {platform === "linkedin" && <LinkedInIcon size={18} />}
                    {platform === "instagram" && <InstagramIcon size={18} />}
                    {platform === "youtube" && <YouTubeIcon size={18} />}
                  </div>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-1 text-sm hover:text-accent-green transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4">
          <h3 className="border-b border-gray-1 text-lg font-bold mb-2.5 pb-2.5">
            Contact
          </h3>
          <ul className="list-none p-0">
            <li className="flex items-center h-6 mb-1.5">
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="text-gray-1 text-sm"
              >
                {CONTACT_DETAILS.email}
              </a>
            </li>
            <li className="flex items-center h-6 mb-1.5">
              <a
                href={`tel:${CONTACT_DETAILS.number}`}
                className="text-gray-1 text-sm"
              >
                {CONTACT_DETAILS.number}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-5 items-end">
        <h1 className="md:col-span-2 m-0 p-0 text-3xl md:text-6xl font-extrabold text-gray-3 leading-none">
          © 2024 <br /> MARCUSW
        </h1>
        <div className="text-right md:text-left text-sm md:text-base">
          <span className="font-heading font-bold text-gray-3">
            {"Local Time".toUpperCase()}
          </span>
          <br />
          <span className="font-mono text-gray-1">{localTime}</span>
        </div>
        <div className="hidden md:block"></div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="hidden md:flex absolute bottom-[2vh] right-[2%] w-[7vh] h-[7vh] m-[2vh] rounded-full bg-accent-warm-gray justify-center items-center cursor-pointer hover:bg-accent-warm-gray-light transition-colors"
        aria-label="Scroll to top"
      >
        <UpArrowIcon className="text-gray-3" />
      </button>
    </footer>
  );
}
