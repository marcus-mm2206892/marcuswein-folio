import Image from "next/image";
import { SITE_CONFIG, SOCIAL_LINKS, CONTACT_DETAILS } from "./config/constants";
import NavBar from "./components/molecules/NavBar";
import LandingPage from "./components/molecules/LandingPage";
import MainPage from "./components/molecules/MainPage";

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white text-gray-3">
      <NavBar />
      {/* Hero Section */}
      <LandingPage />
      <MainPage />
      {/* Projects Section */}
      <section className="py-16 px-6 bg-warm-gray-1">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-3 text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-warm-gray-2">
              <h3 className="text-xl font-heading font-semibold text-gray-3 mb-3">
                🎨 Artist's AI
              </h3>
              <p className="text-gray-1 mb-4">
                AI tools for visual artists. Built with React, Next.js, Prisma,
                and Gemini API.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-green text-white text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-accent-green text-white text-sm rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-accent-green text-white text-sm rounded-full">
                  AI
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-warm-gray-2">
              <h3 className="text-xl font-heading font-semibold text-gray-3 mb-3">
                🧠 Helmet Pose Detector
              </h3>
              <p className="text-gray-1 mb-4">
                Computer vision system detecting distracted motorcycle drivers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-green text-white text-sm rounded-full">
                  Python
                </span>
                <span className="px-3 py-1 bg-accent-green text-white text-sm rounded-full">
                  OpenCV
                </span>
                <span className="px-3 py-1 bg-accent-green text-white text-sm rounded-full">
                  Computer Vision
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-warm-gray-2">
              <h3 className="text-xl font-heading font-semibold text-gray-3 mb-3">
                📚 UniTrack
              </h3>
              <p className="text-gray-1 mb-4">
                Course registration app for students, admins, and faculty.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-green text-white text-sm rounded-full">
                  Full Stack
                </span>
                <span className="px-3 py-1 bg-accent-green text-white text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-accent-green text-white text-sm rounded-full">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-3">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-1">
            I'm always open to discussing new opportunities and collaborations.
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Email:</span>{" "}
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="link">
                {CONTACT_DETAILS.email}
              </a>
            </p>
            <p className="text-lg">
              <span className="font-semibold">Location:</span>{" "}
              {SITE_CONFIG.location}
            </p>
            <p className="text-lg">
              <span className="font-semibold">University:</span>{" "}
              {SITE_CONFIG.university}
            </p>
          </div>
          <div className="flex justify-center space-x-6 pt-4">
            {Object.entries(SOCIAL_LINKS).map(([platform, social]) => (
              <a
                key={platform}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-1 hover:text-accent-green transition-colors"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
