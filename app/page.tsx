import Image from "next/image";
import { SITE_CONFIG, SOCIAL_LINKS, CONTACT_DETAILS } from "./config/constants";
import NavBar from "./components/molecules/NavBar";
import LandingPage from "./components/molecules/LandingPage";
import MainPage from "./components/molecules/MainPage";
import Footer from "./components/molecules/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white text-gray-3">
      <NavBar />
      {/* Hero Section */}
      <LandingPage />
      <MainPage />
      {/* Projects Section */}
      <section className="py-16 px-6 bg-off-white min-h-[calc(100vh*3)]"></section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
