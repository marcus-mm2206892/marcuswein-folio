"use client";

import Image from "next/image";
import { SITE_CONFIG, SOCIAL_LINKS, CONTACT_DETAILS } from "./config/constants";
import NavBar from "./components/molecules/NavBar";
import LandingPage from "./components/sections/LandingPage";
import MainPage from "./components/sections/MainPage";
import Footer from "./components/sections/Footer";
import Burger from "./components/molecules/Burger";
import Sidebar from "./components/molecules/Sidebar";
import { useState, useEffect } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBurger(scrollY >= window.innerHeight / 10); // Show after 1/10 of viewport height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main className="min-h-screen bg-off-white text-gray-3">
      <NavBar />
      {/* Hero Section */}
      <LandingPage />
      <MainPage />

      {/* Footer */}
      <Footer />

      {/* Burger Menu - Show after 50vh or when sidebar is open */}
      <Burger
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
        isVisible={showBurger || isSidebarOpen}
      />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </main>
  );
}
