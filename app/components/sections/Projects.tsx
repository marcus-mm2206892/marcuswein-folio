import { SKILLS_DESCRIPTION } from "@/app/config/constants";
import { AIIcon, BatmanIcon, BugIcon, CoffeeIcon } from "../atoms/Icons";
import SectionHeader from "../molecules/SectionHeader";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <SectionHeader
        title={{
          line1: "SELECTED",
          line2: "WORKS /",
        }}
        subtitle="PROJECTS"
        description={SKILLS_DESCRIPTION}
        superscriptNumber="5"
        icons={[
          <BatmanIcon size={20} />,
          <AIIcon size={20} />,
          <BugIcon size={20} />,
          <CoffeeIcon size={20} />,
        ]}
      />
      <div className="min-h-screen grid grid-cols-12 gap-4 relative"></div>
    </div>
  );
}
