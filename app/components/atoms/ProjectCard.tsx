import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

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
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.video) return;

    // Handle video loading state
    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    const handleLoadStart = () => {
      setIsVideoReady(false);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadstart", handleLoadStart);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isVideoReady) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadstart", handleLoadStart);
    };
  }, [project.video, isVideoReady]);

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="w-full h-auto max-h-[70vh] aspect-square relative">
        <Image
          src={project.backgroundImage}
          alt={project.title}
          fill
          className="object-cover rounded-xl"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {project.video && (
          <>
            <video
              ref={videoRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-[4/3] object-cover rounded-lg shadow-2xl"
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isVideoReady && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-[4/3] bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-accent-green border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </>
        )}
      </div>
      <div className="flex flex-col gap-2">
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
      </div>
    </div>
  );
}
