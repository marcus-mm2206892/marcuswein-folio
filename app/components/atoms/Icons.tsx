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
    src="/assets/images/icons/github-icon.svg"
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
    src="/assets/images/icons/linkedin-icon.svg"
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
    src="/assets/images/icons/instagram-icon.svg"
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
    src="/assets/images/icons/youtube-icon.svg"
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

export const DownRightIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="1.25"
    viewBox="6 6 12 12"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`m-0 p-0 text-accent-green-light ${className}`}
    height="1em"
    width="1em"
  >
    <line x1="7" y1="7" x2="17" y2="17"></line>
    <polyline points="17 7 17 17 7 17"></polyline>
  </svg>
);

export const BatmanIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/batman.svg"
    alt="Batman"
    width={size}
    height={size}
    className={className}
  />
);

export const AIIcon: React.FC<IconProps> = ({ className = "", size = 18 }) => (
  <Image
    src="/assets/images/icons/ai.svg"
    alt="AI"
    width={size}
    height={size}
    className={className}
  />
);

export const BugIcon: React.FC<IconProps> = ({ className = "", size = 18 }) => (
  <Image
    src="/assets/images/icons/bug.svg"
    alt="Bug"
    width={size}
    height={size}
    className={className}
  />
);

export const CoffeeIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/coffee.svg"
    alt="Coffee"
    width={size}
    height={size}
    className={className}
  />
);

export const AdobeBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/adobe-black.svg"
    alt="Adobe"
    width={size}
    height={size}
    className={className}
  />
);

export const AdobeColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/adobe-colored.svg"
    alt="Adobe"
    width={size}
    height={size}
    className={className}
  />
);

export const ArduinoBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/arduino-black.svg"
    alt="Arduino"
    width={size}
    height={size}
    className={className}
  />
);

export const ArduinoColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/arduino-colored.svg"
    alt="Arduino"
    width={size}
    height={size}
    className={className}
  />
);

export const BashBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/bash-black.svg"
    alt="Bash"
    width={size}
    height={size}
    className={className}
  />
);

export const CBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/c-black.svg"
    alt="C"
    width={size}
    height={size}
    className={className}
  />
);

export const CColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/c-colored.svg"
    alt="C"
    width={size}
    height={size}
    className={className}
  />
);

export const DartBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/dart-black.svg"
    alt="Dart"
    width={size}
    height={size}
    className={className}
  />
);

export const DartColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/dart-colored.svg"
    alt="Dart"
    width={size}
    height={size}
    className={className}
  />
);

export const FigmaBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/figma-black.svg"
    alt="Figma"
    width={size}
    height={size}
    className={className}
  />
);

export const FigmaColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/figma-colored.svg"
    alt="Figma"
    width={size}
    height={size}
    className={className}
  />
);

export const FirebaseBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/firebase-black.svg"
    alt="Firebase"
    width={size}
    height={size}
    className={className}
  />
);

export const FirebaseColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/firebase-colored.svg"
    alt="Firebase"
    width={size}
    height={size}
    className={className}
  />
);

export const FlutterBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/flutter-black.svg"
    alt="Flutter"
    width={size}
    height={size}
    className={className}
  />
);

export const FlutterColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/flutter-colored.svg"
    alt="Flutter"
    width={size}
    height={size}
    className={className}
  />
);

export const GitColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/git-colored.svg"
    alt="Git"
    width={size}
    height={size}
    className={className}
  />
);

export const HuggingfaceColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/huggingface-colored.svg"
    alt="Hugging Face"
    width={size}
    height={size}
    className={className}
  />
);

export const HtmlBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/html-black.svg"
    alt="HTML"
    width={size}
    height={size}
    className={className}
  />
);

export const HtmlColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/html-colored.svg"
    alt="HTML"
    width={size}
    height={size}
    className={className}
  />
);

export const JavaBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/java-black.svg"
    alt="Java"
    width={size}
    height={size}
    className={className}
  />
);

export const JavaColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/java-colored.svg"
    alt="Java"
    width={size}
    height={size}
    className={className}
  />
);

export const MatlabBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/matlab-black.svg"
    alt="MATLAB"
    width={size}
    height={size}
    className={className}
  />
);

export const MatlabColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/matlab-colored.svg"
    alt="MATLAB"
    width={size}
    height={size}
    className={className}
  />
);

export const MsOfficeBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/msoffice-black.svg"
    alt="Microsoft Office"
    width={size}
    height={size}
    className={className}
  />
);

export const MsOfficeColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/msoffice-colored.svg"
    alt="Microsoft Office"
    width={size}
    height={size}
    className={className}
  />
);

export const NextColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/next-colored.svg"
    alt="Next.js"
    width={size}
    height={size}
    className={className}
  />
);

export const NextjsBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/nextjs-black.svg"
    alt="Next.js"
    width={size}
    height={size}
    className={className}
  />
);

export const NumpyBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/numpy-black.svg"
    alt="NumPy"
    width={size}
    height={size}
    className={className}
  />
);

export const NumpyColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/numpy-colored.svg"
    alt="NumPy"
    width={size}
    height={size}
    className={className}
  />
);

export const OpencvBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/opencv-black.svg"
    alt="OpenCV"
    width={size}
    height={size}
    className={className}
  />
);

export const OpencvColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/opencv-colored.svg"
    alt="OpenCV"
    width={size}
    height={size}
    className={className}
  />
);

export const PandasBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/pandas-black.svg"
    alt="Pandas"
    width={size}
    height={size}
    className={className}
  />
);

export const PandasColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/pandas-colored.svg"
    alt="Pandas"
    width={size}
    height={size}
    className={className}
  />
);

export const PostmanColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/postman-colored.svg"
    alt="Postman"
    width={size}
    height={size}
    className={className}
  />
);

export const PowerbiBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/powerbi-black.png"
    alt="Power BI"
    width={size}
    height={size}
    className={className}
  />
);

export const PowerbiColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/powerbi-colored.svg"
    alt="Power BI"
    width={size}
    height={size}
    className={className}
  />
);

export const PrismaBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/prisma-black.svg"
    alt="Prisma"
    width={size}
    height={size}
    className={className}
  />
);

export const PythonBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/python-black.svg"
    alt="Python"
    width={size}
    height={size}
    className={className}
  />
);

export const PythonColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/python-colored.svg"
    alt="Python"
    width={size}
    height={size}
    className={className}
  />
);

export const PytorchBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/pytorch-black.svg"
    alt="PyTorch"
    width={size}
    height={size}
    className={className}
  />
);

export const PytorchColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/pytorch-colored.svg"
    alt="PyTorch"
    width={size}
    height={size}
    className={className}
  />
);

export const ReactBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/react-black.png"
    alt="React"
    width={size}
    height={size}
    className={className}
  />
);

export const ReactColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/react-colored.png"
    alt="React"
    width={size}
    height={size}
    className={className}
  />
);

export const SpssBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/spss-black.svg"
    alt="SPSS"
    width={size}
    height={size}
    className={className}
  />
);

export const SqlBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/sql-black.png"
    alt="SQL"
    width={size}
    height={size}
    className={className}
  />
);

export const SqlColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/sql-colored.png"
    alt="SQL"
    width={size}
    height={size}
    className={className}
  />
);

export const TailwindcssBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/tailwindcss-black.svg"
    alt="Tailwind CSS"
    width={size}
    height={size}
    className={className}
  />
);

export const TailwindcssColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/tailwindcss-colored.svg"
    alt="Tailwind CSS"
    width={size}
    height={size}
    className={className}
  />
);

export const TypescriptBlackIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/typescript-black.svg"
    alt="TypeScript"
    width={size}
    height={size}
    className={className}
  />
);

export const TypescriptColoredIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/skills_icons/typescript-colored.svg"
    alt="TypeScript"
    width={size}
    height={size}
    className={className}
  />
);

export const CodeIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/code.svg"
    alt="Code"
    width={size}
    height={size}
    className={className}
  />
);

export const DesignIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/design.svg"
    alt="Design"
    width={size}
    height={size}
    className={className}
  />
);

export const DuckIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/duck.svg"
    alt="Duck"
    width={size}
    height={size}
    className={className}
  />
);

export const SpidermanIcon: React.FC<IconProps> = ({
  className = "",
  size = 18,
}) => (
  <Image
    src="/assets/images/icons/spiderman.svg"
    alt="Spiderman"
    width={size}
    height={size}
    className={className}
  />
);
