import React, { useRef, useEffect } from "react";
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
    };
  }, [project.video]);

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="w-full h-auto max-h-[75vh] aspect-square relative">
        <Image
          src={project.backgroundImage}
          alt={project.title}
          fill
          className="object-cover rounded-xl"
        />
        {project.video && (
          <video
            ref={videoRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 object-cover rounded-lg shadow-2xl"
            muted
            loop
            playsInline
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
