import React from "react";

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
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="w-full h-auto max-h-[75vh] aspect-square relative bg-red-500"></div>
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
