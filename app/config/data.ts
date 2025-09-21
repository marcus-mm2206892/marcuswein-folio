import { Brain, Code2, Layout, Palette, Gamepad2, Hammer } from "lucide-react";

// Import colored skill icons
import {
  PythonColoredIcon,
  JavaBlackIcon,
  TypescriptColoredIcon,
  DartColoredIcon,
  CColoredIcon,
  SqlColoredIcon,
  ReactColoredIcon,
  NextColoredIcon,
  FlutterColoredIcon,
  TailwindcssColoredIcon,
  PytorchColoredIcon,
  PandasColoredIcon,
  NumpyColoredIcon,
  OpencvColoredIcon,
  FigmaColoredIcon,
  AdobeColoredIcon,
  PowerbiColoredIcon,
  FirebaseColoredIcon,
  PrismaBlackIcon,
  MatlabColoredIcon,
  SpssBlackIcon,
  HtmlColoredIcon,
  BashBlackIcon,
  HuggingfaceColoredIcon,
  GitColoredIcon,
  PostmanColoredIcon,
} from "../components/atoms/Icons";

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
    key: "github",
  },
  linkedin: {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/marcuswein",
    icon: "/assets/images/icons/linkedin-icon.png",
    key: "linkedin",
  },
  instagram: {
    label: "Instagram",
    link: "https://www.instagram.com/verayzown/",
    icon: "/assets/images/icons/instagram-icon.png",
    key: "instagram",
  },
  youtube: {
    label: "YouTube",
    link: "https://www.youtube.com/@verayzon",
    icon: "/assets/images/icons/youtube-icon.png",
    key: "youtube",
  },
};

export const CONTACT_DETAILS = {
  email: "marcuswein0210@gmail.com",
  number: "+974 66815630",
};

export const CONTACT_FORM = {
  header: {
    status: "AVAILABLE",
    title: "Let's start a project together",
    subtitle: "CONNECT WITH ME",
  },
  form: {
    name: {
      label: "Full Name",
      placeholder: "Enter your full name",
    },
    email: {
      label: "Email",
      placeholder: "Enter your email",
    },
    message: {
      label: "Message",
      placeholder: "Tell me how I can help you",
    },
    submit: {
      text: "SUBMIT * SUBMIT * SUBMIT * ",
      spinDuration: 15,
      hoverEffect: "slowDown" as const,
    },
  },
  description:
    "Got an idea? A project? Or just a meme to share? My inbox is always open, and replies are faster if you bribe me with good Spotify playlists.",
};

export const LANDING_PAGE = {
  cvLink:
    "https://drive.google.com/file/d/1DJFV8jf6QmVrhHggP6JzPxYhkv1EFvha/view?usp=drive_link",
  headerTitle: {
    pt1: "Software Dev.",
    pt2: "Research",
  },
  landingDescription:
    "A builder at heart. From coding software and AI systems to assembling Gundams, I thrive on turning pieces into something greater than the sum of its parts.",
  landingCoordinates: {
    x: "25.3262° S",
    y: "51.5295° E",
  },
  landingLocation: "Doha, Qatar",
  subInfoTitle: "GRADUATING",
  subInfoDescription: `MAY '26`,
  popupTexts: {
    frontendDev: {
      label: "Frontend Dev.",
      icon: Code2,
    },
    webDesigner: {
      label: "Web Designer",
      icon: Layout,
    },
    aiResearcher: {
      label: "AI Researcher",
      icon: Brain,
    },
    gamer: {
      label: "Gamer",
      icon: Gamepad2,
    },
    graphicArtist: {
      label: "Graphic Artist",
      icon: Palette,
    },
    gundamAddict: {
      label: "Gundam Addict",
      icon: Hammer,
    },
  },
};

export const ABOUT_ME = {
  blurb:
    "Not your typical CS student — growing up as a Filipino in Qatar taught me to see the world differently, and now I channel that into building tech with impact.",
  paragraphs: [
    `Growing up as an outsider in Qatar's desert lands, I discovered resilience and creativity in navigating worlds not originally my own. 
That spirit fuels my work today, <strong>building meaningful software solutions that merge design, AI, and research.</strong>
Whether it's designing apps, experimenting with deep learning, or competing in hackathons, I thrive on making technology practical, human, and a little bit unexpected.`,

    `Outside of tech, you'll find me piecing together Gundams, sipping coffee in random places, editing media, or pushing my small Nissan Tiida like it's a race car. 
To me, building, whether digital or physical, isn't just what I do, it's who I am.`,
  ],
};

export const EXPERIENCES_DESCRIPTION =
  "Real-world XP in code, teamwork, and the delicate art of surviving deadlines. Collecting experiences like infinity stones.";

export const EXPERIENCES = [
  {
    title: "Siemens",
    role: "Grid Software Intern",
    description: [
      "Developed Power BI dashboards to analyze smart meter electricity data and provide insights into consumption behavior",
      "Preprocessed millions of records in Python for demand forecasting using regression and weather data",
      "Configured and monitored RFID for 26 electric chargers at Doha Festival City",
      "Contributed to a 1.5M QAR cybersecurity tender document for Kahramaa",
    ],
    skills: [
      "Power BI",
      "Python",
      "Regression",
      "Data Analytics",
      "Tendering Process",
      "Business Management",
    ],
    src: "/assets/images/experiences/siemens.jpg",
    logo: "/assets/images/companies/siemens.png",
    date: "Jun 2024 – Jul 2024",
    location: "Doha, Qatar",
    link: "https://www.siemens.com",
    color: "#585847", // start (medium-dark)
  },
  {
    title: "Qatar University",
    role: "Summer Research Intern",
    description: [
      "Designed and trained a CNN helmet pose detection model (EfficientNet-B3) with ~95% accuracy",
      "Collected and labeled custom image datasets to classify distracted vs. attentive motorcycle riders",
      "Prototyped a mobile app with OpenCV and Flutter for real-time detection, GPS speed tracking, and alerts",
      "Prepared groundwork for TensorFlow Lite integration on mobile devices",
    ],
    skills: [
      "Deep Learning",
      "CNNs",
      "OpenCV",
      "Flutter",
      "PyTorch",
      "Dataset Creation",
      "Computer Vision",
    ],
    src: "/assets/images/experiences/srip.jpg",
    logo: "/assets/images/companies/qu.png",
    date: "May 2025 – Jul 2025",
    location: "Doha, Qatar",
    link: "https://www.qu.edu.qa",
    color: "#4E4E3F", // darker
  },
  {
    title: "Makira Beauty",
    role: "Software Development Intern",
    description: [
      "Designed and refined 200+ app screens in Figma for a beautician booking app",
      "Mapped functionality with ER, class, and use-case diagrams",
      "Worked with the team to turn requirements into user journeys and features",
      "Validated features with stakeholders and ensured consistent UI/UX design",
    ],
    skills: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "User Research",
      "Stakeholder Management",
      "Mobile App Design",
    ],
    src: "/assets/images/experiences/makira.jpg",
    logo: "/assets/images/companies/makira.png",
    date: "Jun 2025 – Aug 2025",
    location: "Doha, Qatar",
    link: "https://www.makira-beauty.com",
    color: "#3F3F32", // even darker
  },
  {
    title: "Hamad Medical Corporation",
    role: "AI/ML Research Intern",
    description: [
      "Applying deep learning techniques in surgical healthcare research for medical image analysis",
      "Exploring CNNs, vision transformers, and pretrained architectures for surgical AI models",
      "Engaging in scientific writing, secondary research, and evaluation of model performance",
      "Currently leading a literature review on Vision-Language Models applications in surgery",
    ],
    skills: [
      "Vision-Language Models",
      "Deep Learning",
      "CNNs",
      "PyTorch",
      "Research",
    ],
    src: "/assets/images/experiences/hamad.png",
    logo: "/assets/images/companies/hmc.png",
    date: "Mar 2025 – Present",
    location: "Doha, Qatar",
    link: "https://www.hamad.qa",
    color: "#333328", // darker
  },
  {
    title: "S3Lab",
    role: "Frontend Development Intern",
    description: [
      "Building the frontend of a carbon emissions tracking platform for companies",
      "Resolving development tickets through Redmine and collaborating with senior devs and QA through Git",
      "Connecting backend APIs to display and process sustainability data through the user interface",
      "Collaborating with research teams to integrate AI-powered chat and data visualization features",
    ],
    skills: [
      "Frontend Development",
      "Next.js",
      "API Integration",
      "Data Visualization",
      "AI Chatbots",
      "RAGs",
    ],
    src: "/assets/images/experiences/s3lab2.png",
    logo: "/assets/images/companies/s3lab.png",
    date: "Aug 2025 – Present",
    location: "Doha, Qatar",
    link: "https://www.qu.edu.qa",
    color: "#26261F", // darkest
  },
];

export const COMPANIES = [
  {
    name: "Siemens",
    logo: "/assets/images/companies/siemens.png",
  },
  {
    name: "Hamad Medical Corporation",
    logo: "/assets/images/companies/hmc.png",
  },
  {
    name: "Qatar University",
    logo: "/assets/images/companies/qu.png",
  },
  {
    name: "Makira Beauty",
    logo: "/assets/images/companies/makira.png",
  },
  {
    name: "S3Lab",
    logo: "/assets/images/companies/s3lab.png",
  },
];

export const PROJECTS_DESCRIPTION =
  "Proof that late nights, too much coffee, and just enough passion can in fact, produce working code.";

export const PROJECTS = {
  projects: [
    {
      title: "CAQU Carbon Emissions Tracker",
      organization: "S3Lab",
      description:
        "Web platform that helps companies calculate, track, and visualize their carbon emissions",
      year: "2025",
      tag1: "Frontend",
      tag2: "LLMs",
      backgroundImage: "/assets/images/backgrounds/bg1.jpg",
      video: "/assets/videos/caquvideo.mp4",
      visitLink: "https://s3lab.net",
    },
    {
      title: "CampConnect",
      organization: "CMUQ Lifelines",
      description:
        "Mobile app connecting displaced students with nearby educational camps in post-crisis areas",
      year: "2025",
      tag1: "Mobile Dev.",
      tag2: "Hackathon",
      backgroundImage: "/assets/images/backgrounds/bg2.jpg",
      video: "/assets/videos/campconnectvideo.mp4",
      visitLink: "https://youtu.be/NW1u85gMUBk",
    },
    {
      title: "UniTrack",
      organization: "Qatar University",
      description:
        "Student management system for monitoring study plans, course registration, grading, and academic progress",
      year: "2025",
      tag1: "Fullstack Dev.",
      tag2: "Design",
      backgroundImage: "/assets/images/backgrounds/bg3.jpg",
      video: "/assets/videos/unitrackvideo.mp4",
      visitLink: "https://unitrack-eight.vercel.app",
    },
    {
      title: "Makira Mobile App UI",
      organization: "Makira Beauty",
      description:
        "Complete app design for booking beauticians, covering onboarding, services, and profile management",
      year: "2025",
      tag1: "UI/UX Design",
      tag2: "Wireframing",
      backgroundImage: "/assets/images/backgrounds/bg4.jpg",
      video: "/assets/videos/makiravideo.mp4",
      visitLink: "https://makira.me/",
    },
    {
      title: "Kahramaa AMI for Smart Meters",
      organization: "Siemens",
      description:
        "Smart metering initiative analyzing electricity consumption to support demand forecasting and energy insights",
      year: "2024",
      tag1: "Analytics",
      tag2: "PowerBI",
      backgroundImage: "/assets/images/backgrounds/bg5.jpg",
      video: "/assets/videos/siemensvideo.mp4",
      visitLink:
        "https://www.linkedin.com/posts/siemens_siemens-qatar-was-the-perfect-launchpad-activity-7268851488976773121-PX3c?utm_source=share&utm_medium=member_desktop",
    },
  ],
};

export const SKILLS_DESCRIPTION =
  "Jack of many trades, master of Googling errors until code, design, and research projects finally behave.";

export const SKILLS_CARDS = [
  {
    title: "LANG.",
    items: [
      { label: "Python", icon: PythonColoredIcon },
      { label: "Java", icon: JavaBlackIcon },
      { label: "Typescript", icon: TypescriptColoredIcon },
      { label: "C", icon: CColoredIcon },
      { label: "Dart", icon: DartColoredIcon },
      { label: "SQL", icon: SqlColoredIcon },
      { label: "HTML/CSS", icon: HtmlColoredIcon },
      { label: "Bash", icon: BashBlackIcon },
    ],
  },
  {
    title: "SOFTW.",
    items: [
      { label: "React", icon: ReactColoredIcon },
      { label: "Next.js", icon: NextColoredIcon },
      { label: "Flutter", icon: FlutterColoredIcon },
      { label: "Prisma", icon: PrismaBlackIcon },
      { label: "Git", icon: GitColoredIcon },
      { label: "Firebase", icon: FirebaseColoredIcon },
      { label: "Tailwind CSS", icon: TailwindcssColoredIcon },
      { label: "Postman", icon: PostmanColoredIcon },
    ],
  },
  {
    title: "DATA/ML/AI",
    items: [
      { label: "PyTorch", icon: PytorchColoredIcon },
      { label: "Numpy", icon: NumpyColoredIcon },
      { label: "Pandas", icon: PandasColoredIcon },
      { label: "OpenCV", icon: OpencvColoredIcon },
      { label: "Hugging Face", icon: HuggingfaceColoredIcon },
    ],
  },
  {
    title: "TOOLS",
    items: [
      { label: "Adobe Creative", icon: AdobeColoredIcon },
      { label: "Figma", icon: FigmaColoredIcon },
      { label: "MATLAB", icon: MatlabColoredIcon },
      { label: "SPSS", icon: SpssBlackIcon },
      { label: "PowerBI", icon: PowerbiColoredIcon },
    ],
  },
];

// export const EDUCATION = {
//   university: {
//     name: "Qatar University",
//     year: "2022 - Present",
//     degree: "B.Sc. in Computer Science",
//     gpa: "CGPA: 4.00",
//     distinctions: {
//       talentScholarship: {
//         title: "Talent Scholarship in Research, Technology, and Innovation",
//         link: "https://www.qu.edu.qa/en-us/students/admission/scholarships/Pages/types.aspx",
//       },
//       deansList: {
//         title: `Dean's List (2022 - Present)`,
//         link: "https://www.qu.edu.qa/en-us/students/registration/student-records/Pages/academic-honors.aspx",
//       },
//     },
//     link: "https://www.qu.edu.qa/en-us/",
//   },
// };
