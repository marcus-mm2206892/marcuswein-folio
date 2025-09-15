"use client";

import React, { useState, useRef, useEffect } from "react";
import Name from "./contact-subsections/Name";
import Email from "./contact-subsections/Email";
import Message from "./contact-subsections/Message";
import Thanks from "./contact-subsections/Thanks";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Step = "title" | "name" | "email" | "message" | "thanks";

export default function Contact() {
  const [currentStep, setCurrentStep] = useState<Step>("title");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLayoutToggled, setIsLayoutToggled] = useState(false);

  const validateName = (name: string): boolean => {
    const namePattern = /^(?=.*[a-zA-Z])[a-zA-Z\d\W]+$/;
    if (!namePattern.test(name.trim())) {
      setErrors({ name: "Please enter a valid name." });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrors({ email: "Please enter a valid email." });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateMessage = (message: string): boolean => {
    if (!message.trim()) {
      setErrors({ message: "The text is empty." });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleNext = (step: Step, value: string) => {
    // Clear any existing errors first
    setErrors({});
    let isValid = true;

    switch (step) {
      case "name":
        isValid = validateName(value);
        if (isValid) {
          setFormData((prev) => ({ ...prev, name: value }));
          setCurrentStep("email");
        }
        break;
      case "email":
        isValid = validateEmail(value);
        if (isValid) {
          setFormData((prev) => ({ ...prev, email: value }));
          setCurrentStep("message");
        }
        break;
      case "message":
        isValid = validateMessage(value);
        if (isValid) {
          setFormData((prev) => ({ ...prev, message: value }));
          setCurrentStep("thanks");
        }
        break;
    }
  };

  const handlePrevious = () => {
    switch (currentStep) {
      case "name":
        setCurrentStep("title");
        setIsLayoutToggled(false);
        break;
      case "email":
        setCurrentStep("name");
        break;
      case "message":
        setCurrentStep("email");
        break;
      case "thanks":
        setCurrentStep("message");
        break;
    }
  };

  const handleTitleClick = () => {
    setIsLayoutToggled(true);
    setCurrentStep("name");
  };

  const handleReset = () => {
    setCurrentStep("title");
    setIsLayoutToggled(false);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  const handleSubmit = async () => {
    // Email sending logic would go here
    console.log("Form submitted:", formData);
    // Show the thanks page
    setCurrentStep("thanks");
  };

  const renderStep = () => {
    switch (currentStep) {
      case "name":
        return (
          <Name
            value={formData.name}
            onNext={(value) => handleNext("name", value)}
            onPrevious={handlePrevious}
            error={errors.name}
          />
        );
      case "email":
        return (
          <Email
            value={formData.email}
            onNext={(value) => handleNext("email", value)}
            onPrevious={handlePrevious}
            error={errors.email}
          />
        );
      case "message":
        return (
          <Message
            value={formData.message}
            onNext={(value) => handleNext("message", value)}
            onPrevious={handlePrevious}
            error={errors.message}
          />
        );
      case "thanks":
        return <Thanks onReset={handleReset} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" id="contact">
      <div
        className={`contact-div flex items-center w-[95%] h-[90vh] mx-auto p-[5%] bg-black text-off-white rounded-2xl transition-all duration-300 ${
          isLayoutToggled ? "two-column" : ""
        }`}
        id="contact"
      >
        {/* Title Section */}
        {currentStep === "title" && (
          <div className="contact-title-div flex-1 text-center flex flex-col justify-center h-full">
            <p className="contact-title-subtext text-lg text-accent-green-light mb-2">
              ( Have something in mind? )
            </p>
            <h1
              className="contact-title-maintext text-[10vw] leading-[12vw] h-[12vw] overflow-hidden font-bold text-white cursor-pointer"
              onClick={handleTitleClick}
            >
              LET'S TALK.
            </h1>
          </div>
        )}

        {/* Form Section */}
        {isLayoutToggled && currentStep !== "title" && (
          <div className="contact-form-div flex-1 flex flex-col justify-center items-center h-full px-8">
            {renderStep()}
          </div>
        )}
      </div>
    </div>
  );
}
