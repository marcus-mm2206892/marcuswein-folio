"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import CircularText from "../atoms/CircularText";
import { GithubIcon, LinkedInIcon, InstagramIcon } from "../atoms/Icons";
import { CONTACT_DETAILS, CONTACT_FORM, SOCIAL_LINKS } from "../../config/data";
import SectionTitle from "../atoms/SectionTitle";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // Auto-clear errors after 3 seconds
    if (Object.values(newErrors).some((error) => error !== "")) {
      setTimeout(() => {
        setErrors({ name: "", email: "", message: "" });
      }, 3000);
    }

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setSubmitAttempted(false);
    }
  };

  return (
    <div
      className={`justify-center contact-div flex flex-col mt-12 w-[90%] h-fit lg:h-[90vh] mx-auto p-[10%] bg-black text-off-white rounded-2xl transition-all duration-300`}
      id="contact"
    >
      <div className="w-full items-center justify-center">
        {/* Header Section */}
        <div className="flex items-center justify-center pb-8">
          <SectionTitle
            title={{ line1: "DROP ME", line2: "A MESSAGE /" }}
            textSize="md"
          />
        </div>

        {/* Content Sections */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Section - Contact Form */}
          <div className="flex-1 sm:flex-2">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="w-full h-fit">
                <label
                  htmlFor="name"
                  className={`block text-sm mb-2 transition-colors duration-500 ease-in-out ${errors.name ? "text-red-400" : "text-off-white"}`}
                >
                  {CONTACT_FORM.form.name.label}
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder={
                    errors.name || CONTACT_FORM.form.name.placeholder
                  }
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-black border rounded-lg text-off-white focus:outline-none transition-all duration-500 ease-in-out ${
                    errors.name
                      ? "border-red-400 focus:border-red-400 placeholder:text-red-400"
                      : "border-gray-3 focus:border-accent-green-light placeholder:text-gray-4"
                  }`}
                />
              </div>

              {/* Email */}
              <div className="w-full">
                <label
                  htmlFor="email"
                  className={`block text-sm mb-2 transition-colors duration-500 ease-in-out ${errors.email ? "text-red-400" : "text-off-white"}`}
                >
                  {CONTACT_FORM.form.email.label}
                </label>

                <input
                  id="email"
                  name="email"
                  placeholder={
                    errors.email || CONTACT_FORM.form.email.placeholder
                  }
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-black border rounded-lg text-off-white focus:outline-none transition-all duration-500 ease-in-out ${
                    errors.email
                      ? "border-red-400 focus:border-red-400 placeholder:text-red-400"
                      : "border-gray-3 focus:border-accent-green-light placeholder:text-gray-4"
                  }`}
                />
              </div>

              {/* Message */}
              <div className="w-full">
                <label
                  htmlFor="message"
                  className={`block text-sm mb-2 transition-colors duration-500 ease-in-out ${errors.message ? "text-red-400" : "text-off-white"}`}
                >
                  {CONTACT_FORM.form.message.label}
                </label>
                <div
                  className={`flex items-center gap-6 flex-col md:flex-row px-3 py-2 bg-black border rounded-lg text-off-white placeholder:text-gray-4 transition-all duration-500 ease-in-out ${
                    errors.message
                      ? "border-red-400 focus-within:border-red-400"
                      : "border-gray-3 focus-within:border-accent-green-light"
                  }`}
                >
                  <div className="flex-2 w-full">
                    <textarea
                      id="message"
                      name="message"
                      placeholder={
                        errors.message || CONTACT_FORM.form.message.placeholder
                      }
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-3 py-2 resize-none focus:outline-none transition-all duration-500 ease-in-out ${
                        errors.message
                          ? "placeholder:text-red-400"
                          : "placeholder:text-gray-4"
                      }`}
                    />
                  </div>
                  <div className="flex items-center justify-center pb-4 sm:pb-0 pr-0 sm:pr-4">
                    <CircularText
                      text={CONTACT_FORM.form.submit.text}
                      spinDuration={CONTACT_FORM.form.submit.spinDuration}
                      onHover={CONTACT_FORM.form.submit.hoverEffect}
                      className="text-accent-green-light"
                      onClick={() => {
                        const form = document.querySelector("form");
                        if (form) {
                          form.requestSubmit();
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Right Section - Personal Info */}
          <div className="flex-1 group relative rounded-3xl overflow-hidden border border-transparent hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-[border,box-shadow] duration-500 bg-gray-3 p-8 lg:p-10 h-fit self-center">
            {/* Background gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />

            {/* Mysterious background visual elements */}
            <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
              {/* Concentric circles - centered */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="relative">
                  <div className="w-80 h-80 border border-white/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  <div className="w-64 h-64 border border-white/35 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  <div className="w-48 h-48 border border-white/40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </motion.div>

              {/* Floating particles - properly positioned within card bounds */}
              <motion.div
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{ top: "20%", left: "15%" }}
                animate={{
                  y: [-15, 15, -15],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{ top: "25%", right: "20%" }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{ bottom: "30%", left: "25%" }}
                animate={{
                  y: [-12, 12, -12],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: 2,
                }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{ bottom: "25%", right: "15%" }}
                animate={{
                  y: [-18, 18, -18],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{ top: "60%", right: "10%" }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.9, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5,
                }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{ top: "70%", left: "10%" }}
                animate={{
                  y: [-14, 14, -14],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  delay: 2.2,
                }}
              />
            </div>
            {/* Content positioned above background animations */}
            <div className="relative z-10">
              {/* Status Indicator */}
              <div className="flex items-center mb-8 w-fit gap-4 rounded-full bg-accent-green px-4 py-2">
                <span className="relative flex h-[6px] w-[6px]">
                  <span className="bg-off-white absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-off-white relative inline-flex h-full w-full rounded-full"></span>
                </span>
                <p className="text-off-white font-mono text-xs">
                  {CONTACT_FORM.header.status}
                </p>
              </div>
              {/* Profile Picture */}
              <div className="my-4 flex items-center justify-start">
                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-starts">
                  <img
                    src="/assets/images/personal/Headshot.png"
                    alt="Marcus Wein"
                    className="w-full h-full object-cover border-1 border-accent-green p-2 aspect-square overflow-hidden rounded-full"
                  />
                </div>
              </div>
              {/* Description */}
              <p className="text-white text-base leading-relaxed mb-4">
                {CONTACT_FORM.description}
              </p>
              <div className="flex items-center justify-start gap-6">
                <a
                  href={SOCIAL_LINKS.linkedin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-green-light transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={18} className="brightness-0 invert" />
                </a>

                <a
                  href={SOCIAL_LINKS.github.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-green-light transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} className="brightness-0 invert" />
                </a>

                <a
                  href={SOCIAL_LINKS.instagram.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-green-light transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} className="brightness-0 invert" />
                </a>
              </div>
            </div>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
