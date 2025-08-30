"use client";

import Image from "next/image";
import { SITE_CONFIG, SOCIAL_LINKS, CONTACT_DETAILS } from "./config/constants";
import NavBar from "./components/molecules/NavBar";
import LandingPage from "./components/molecules/LandingPage";
import MainPage from "./components/molecules/MainPage";
import Footer from "./components/molecules/Footer";
import Burger from "./components/molecules/Burger";
import Sidebar from "./components/molecules/Sidebar";
import { useState, useEffect } from "react";
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
      {/* Projects Section */}
      <section className="py-16 px-6 bg-off-white min-h-[calc(100vh*3)]"></section>

      {/* Footer */}
      <Footer />

      {/* Burger Menu - Show after 50vh or when sidebar is open */}
      <AnimatePresence>
        {(showBurger || isSidebarOpen) && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Burger isOpen={isSidebarOpen} onToggle={toggleSidebar} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </main>
  );
}
