import { PROJECTS, PROJECTS_DESCRIPTION } from "@/app/config/data";
import { BugIcon, CodeIcon, CoffeeIcon, SpidermanIcon } from "../atoms/Icons";
import SectionHeader from "../molecules/SectionHeader";
import ProjectCard from "../atoms/ProjectCard";
import ProjectCounter from "../atoms/ProjectCounter";
import { useRef } from "react";

export default function Projects() {
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen" id="projects">
      <SectionHeader
        title={{
          line1: "SELECTED",
          line2: "WORKS /",
        }}
        subtitle="PROJECTS"
        description={PROJECTS_DESCRIPTION}
        superscriptNumber="5"
        icons={[
          <SpidermanIcon size={20} />,
          <CodeIcon size={20} />,
          <BugIcon size={20} />,
          <CoffeeIcon size={20} />,
        ]}
      />
      <div
        ref={projectsContainerRef}
        className="mt-16 grid grid-cols-12 gap-4 relative items-start"
      >
        <div className="hidden md:flex col-span-5 w-full">
          <ProjectCounter projectsContainerRef={projectsContainerRef} />
        </div>
        <div className="col-span-12 md:col-span-7 flex flex-col gap-16">
          {PROJECTS.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
