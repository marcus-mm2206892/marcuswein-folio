import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  title: string;
  organization: string;
  description: string;
  year: string;
  tag1: string;
  tag2: string;
  backgroundImage: string;
  video: string;
  visitLink: string;
}

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // IntersectionObserver for fade-in animation
  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% is visible
        rootMargin: "50px", // Start loading slightly before entering viewport
      }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Video loading state management
  useEffect(() => {
    if (!isMounted) return;

    const video = videoRef.current;
    if (!video || !project.video) return;

    // Check if video is already loaded (cached)
    const checkVideoReady = () => {
      // readyState: 0=HAVE_NOTHING, 1=HAVE_METADATA, 2=HAVE_CURRENT_DATA, 3=HAVE_FUTURE_DATA, 4=HAVE_ENOUGH_DATA
      if (video.readyState >= 3) {
        setIsVideoReady(true);
      }
    };

    // Check immediately in case video is cached
    checkVideoReady();

    // Handle video loading state
    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    const handleCanPlayThrough = () => {
      setIsVideoReady(true);
    };

    const handleLoadStart = () => {
      setIsVideoReady(false);
    };

    const handleWaiting = () => {
      setIsVideoReady(false);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("canplaythrough", handleCanPlayThrough);
    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("waiting", handleWaiting);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("waiting", handleWaiting);
    };
  }, [project.video, isMounted]);

  // Video play/pause logic (separate from loading state)
  useEffect(() => {
    if (!isMounted) return;

    const video = videoRef.current;
    if (!video || !project.video) return;

    // IntersectionObserver for video play/pause
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check readyState directly instead of relying on isVideoReady state
          const canPlay = video.readyState >= 3;
          if (entry.isIntersecting && canPlay) {
            video.play().catch((err) => {
              console.error("Error playing video:", err);
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
      }
    );

    videoObserver.observe(video);

    return () => {
      videoObserver.disconnect();
    };
  }, [project.video, isMounted]);

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col gap-4 w-full h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full h-auto max-h-[70vh] aspect-square relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={project.backgroundImage}
            alt={project.title}
            fill
            className="object-cover rounded-xl"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </motion.div>
        {project.video && (
          <>
            <motion.video
              ref={videoRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-[4/3] object-cover rounded-lg shadow-2xl"
              muted
              loop
              playsInline
              preload="metadata"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVideoReady ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
            {isMounted && !isVideoReady && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-[4/3] bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-accent-green border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </>
        )}
      </div>
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-sm font-mono text-accent-green font-bold">
          ( {project.organization} )
        </span>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-bold text-off-white">
              {project.title}
            </span>
            <span className="text-baseline font-body text-off-white">
              {project.description}
            </span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="whitespace-nowrap rounded-full text-sm font-heading px-2 py-1 border border-accent-green-light text-accent-green-light flex items-center justify-center">
              {project.tag1}
            </span>
            <span className="whitespace-nowrap rounded-full text-sm font-heading px-2 py-1 border border-accent-green-light text-accent-green-light flex items-center justify-center">
              {project.tag2}
            </span>
            <span className="whitespace-nowrap rounded-full text-sm font-heading font-bold px-2 py-1 bg-accent-green text-black flex items-center justify-center">
              {project.year}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
