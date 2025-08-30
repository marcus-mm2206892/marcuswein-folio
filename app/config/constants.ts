import {
  Brain,
  Code2,
  Layout,
  Palette,
  Gamepad2,
  Hammer,
  Mail,
  Phone,
} from "lucide-react";

export const SITE_CONFIG = {
  name: "Marcus Wein",
  description:
    "Software Developer & AI Researcher based in Doha, Qatar. Building meaningful software solutions that merge design, AI, and research.",
  url: "https://marcuswein.com",
  author: "Marcus Wein",
  keywords:
    "software developer, AI researcher, frontend developer, Qatar University, computer science, machine learning, React, Next.js, Python",
  ogImage: "/assets/images/personal/Marcus.png",
  twitterHandle: "@verayzown",
  githubUsername: "marcus-mm2206892",
  linkedinUsername: "marcuswein",
  location: "Doha, Qatar",
  university: "Qatar University",
  graduationYear: "2026",
};

export const NAVIGATION = {
  home: {
    label: "Home",
    href: "/",
    id: "home",
  },
  about: {
    label: "About",
    href: "#about",
    id: "about",
  },
  journey: {
    label: "Journey",
    href: "#journey",
    id: "journey",
  },
  projects: {
    label: "Projects",
    href: "#projects",
    id: "projects",
  },
  contact: {
    label: "Contact",
    href: "#contact",
    id: "contact",
  },
};

export const SOCIAL_LINKS = {
  github: {
    label: "Github",
    link: "https://github.com/marcus-mm2206892",
    icon: "/assets/images/icons/github-icon.png",
  },
  linkedin: {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/marcuswein",
    icon: "/assets/images/icons/linkedin-icon.png",
  },
  instagram: {
    label: "Instagram",
    link: "https://www.instagram.com/verayzown/",
    icon: "/assets/images/icons/instagram-icon.png",
  },
  youtube: {
    label: "YouTube",
    link: "https://www.youtube.com/@verayzon",
    icon: "/assets/images/icons/youtube-icon.png",
  },
};

export const CONTACT_DETAILS = {
  email: "marcuswein0210@gmail.com",
  number: "+974 66815630",
};

export const LANDING_PAGE = {
  headerTitle: {
    pt1: "Software Dev.",
    pt2: "Research",
  },
  landingDescription:
    "A builder at heart. From coding software and AI systems to crafting Gundams, I thrive on turning pieces into something greater than the sum of its parts.",
  landingCoordinates: {
    x: "25.3262° S",
    y: "51.5295° E",
  },
  landingLocation: "Doha, Qatar",
  subInfoTitle: "Available for work",
  subInfoDescription: `SEPT '26`,
  popupTexts: {
    aiResearcher: {
      label: "AI Researcher",
      icon: Brain,
    },
    frontendDev: {
      label: "Frontend Developer",
      icon: Code2,
    },
    webDesigner: {
      label: "Web Designer",
      icon: Layout,
    },
    graphicDesigner: {
      label: "Graphic Designer",
      icon: Palette,
    },
    gamer: {
      label: "Gamer",
      icon: Gamepad2,
    },
    gundamBuilder: {
      label: "Gundam Builder",
      icon: Hammer,
    },
  },
};

export const ABOUT_ME = {
  blurb:
    "Not your typical CS student — growing up as a Filipino in Qatar taught me to see the world differently, and now I channel that into building tech with impact.",
  paragraphs: [
    `Growing up as an outsider in Qatar's desert lands, I discovered resilience and creativity in navigating worlds not originally my own. 
That spirit fuels my work today, building meaningful software solutions that merge design, AI, and research. 
Whether it's designing apps, experimenting with deep learning, or leading hackathon teams, I thrive on making technology practical, human, and a little bit unexpected.`,

    `Outside of tech, you'll find me piecing together Gundams, sipping coffee in random places, editing media, or pushing my small Nissan Tiida like it's a race car. 
To me, building, whether digital or physical, isn't just what I do, it's who I am.`,
  ],
};

export const EDUCATION = {
  university: {
    name: "Qatar University",
    year: "2022 - Present",
    degree: "B.Sc. in Computer Science",
    gpa: "CGPA: 4.00",
    distinctions: {
      talentScholarship: {
        title: "Talent Scholarship in Research, Technology, and Innovation",
        link: "https://www.qu.edu.qa/en-us/students/admission/scholarships/Pages/types.aspx",
      },
      deansList: {
        title: `Dean's List (2022 - Present)`,
        link: "https://www.qu.edu.qa/en-us/students/registration/student-records/Pages/academic-honors.aspx",
      },
    },
    link: "https://www.qu.edu.qa/en-us/",
  },
};

export const EXPERIENCES = {};

export const WORKS = {
  description: `Featured projects that I've worked on that have been meticulously crafted with passion over the years`,
  works: [
    {
      project: "CAQU Carbon Emissions Tracker",
      organization: "Qatar University",
      year: "2025",
      tag1: "Frontend",
      tag2: "LLMs",
      backgroundImage: "../../public/assets/images/backgrounds/bg1.jpg",
      video: "",
      visitLink: "",
    },
    {
      project: "CampConnect",
      organization: "CMUQ Lifelines",
      year: "2025",
      tag1: "Mobile Dev.",
      tag2: "Hackathon",
      backgroundImage: "../../public/assets/images/backgrounds/bg2.jpg",
      video: "",
      visitLink: "https://youtu.be/NW1u85gMUBk",
    },
    {
      project: "UniTrack",
      organization: "Qatar University",
      year: "2025",
      tag1: "Fullstack Dev.",
      tag2: "Design",
      backgroundImage: "../../public/assets/images/backgrounds/bg3.jpg",
      video: "",
      visitLink: "https://unitrack-eight.vercel.app",
    },
    {
      project: "Makira Mobile Application",
      organization: "Makira Beauty",
      year: "2025",
      tag1: "UI/UX Design",
      tag2: "Wireframing",
      backgroundImage: "../../public/assets/images/backgrounds/bg4.jpg",
      video: "",
      visitLink: "https://makira.me/",
    },
    {
      project: "Kahramaa AMI for Smart Meters",
      organization: "Siemens",
      year: "2024",
      tag1: "Analytics",
      tag2: "PowerBI",
      backgroundImage: "../../public/assets/images/backgrounds/bg4.jpg",
      video: "",
      visitLink: "",
    },
  ],
};

export const SKILLS = {
  languages: {
    title: "Languages",
    icon: "",
    tags: [
      { tag: "Python", icon: Code2 },
      { tag: "Java", icon: Code2 },
      { tag: "JavaScript", icon: Code2 },
      { tag: "Typescript", icon: Code2 },
      { tag: "C", icon: Code2 },
      { tag: "Dart", icon: Code2 },
      { tag: "HTML/CSS", icon: Code2 },
      { tag: "Bash", icon: Code2 },
      { tag: "SQL", icon: Code2 },
    ],
  },
  frameworkstools: {
    title: "Frameworks and Tools",
    icon: "",
    tags: [
      { tag: "React", icon: Code2 },
      { tag: "Next.js", icon: Code2 },
      { tag: "Flutter", icon: Code2 },
      { tag: "Git", icon: Code2 },
      { tag: "Vercel", icon: Code2 },
      { tag: "Tailwind CSS", icon: Code2 },
      { tag: "Firebase", icon: Code2 },
      { tag: "Prisma", icon: Code2 },
      { tag: "PostgreSQL", icon: Code2 },
      { tag: "JDBC", icon: Code2 },
    ],
  },
  aiml: {
    title: "AI/ML Tools",
    icon: "",
    tags: [
      { tag: "PyTorch", icon: Code2 },
      { tag: "Pandas", icon: Code2 },
      { tag: "Numpy", icon: Code2 },
      { tag: "Matplotlib", icon: Code2 },
      { tag: "Scikit-Learn", icon: Code2 },
      { tag: "OpenCV", icon: Code2 },
      { tag: "Seaborn", icon: Code2 },
      { tag: "Jupyter", icon: Code2 },
    ],
  },
  relevantSkills: {
    title: "Relevant Skills",
    icon: "",
    tags: [
      { tag: "Adobe Photoshop", icon: Code2 },
      { tag: "Adobe Premiere Pro", icon: Code2 },
      { tag: "Figma", icon: Code2 },
      { tag: "Canva", icon: Code2 },
      { tag: "Postman", icon: Code2 },
      { tag: "OpenAPI", icon: Code2 },
      { tag: "dbdiagram.io", icon: Code2 },
      { tag: "PowerBI", icon: Code2 },
      { tag: "MATLAB", icon: Code2 },
      { tag: "SPSS", icon: Code2 },
    ],
  },
};
