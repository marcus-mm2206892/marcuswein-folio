import React from "react";
import Image from "next/image";

interface IconProps {
  className?: string;
  size?: number;
}

export const GithubIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/github-icon.png"
    alt="GitHub"
    width={size}
    height={size}
    className={className}
  />
);

export const LinkedInIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/linkedin-icon.png"
    alt="LinkedIn"
    width={size}
    height={size}
    className={className}
  />
);

export const InstagramIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/instagram-icon.png"
    alt="Instagram"
    width={size}
    height={size}
    className={className}
  />
);

export const YouTubeIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/youtube-icon.png"
    alt="YouTube"
    width={size}
    height={size}
    className={className}
  />
);

export const UpArrowIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    className={`w-8 h-8 ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V19M12 5L6 11M12 5L18 11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
