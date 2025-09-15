"use client";

import React, { useState, useEffect } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../atoms/Icons";
import InputField from "../atoms/InputField";
import TextAreaField from "../atoms/TextAreaField";

interface FormStepProps {
  stepNumber: string;
  question: string;
  value: string;
  onNext: (value: string) => void;
  onPrevious: () => void;
  error?: string;
  fieldType: "input" | "textarea";
  placeholder: string;
  tip?: string;
}

export default function FormStep({
  stepNumber,
  question,
  value,
  onNext,
  onPrevious,
  error,
  fieldType,
  placeholder,
  tip,
}: FormStepProps) {
  const [inputValue, setInputValue] = useState(value);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showHitEnter, setShowHitEnter] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorOpacity, setErrorOpacity] = useState(0);
  const [submitAttempt, setSubmitAttempt] = useState(0);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    setShowNextButton(inputValue.trim().length > 0);
    setShowHitEnter(inputValue.trim().length > 0);
  }, [inputValue]);

  useEffect(() => {
    if (error) {
      setShowError(true);
      setErrorOpacity(1);

      const fadeTimer = setTimeout(() => {
        setErrorOpacity(0);
      }, 1500);

      const hideTimer = setTimeout(() => {
        setShowError(false);
      }, 2000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    } else {
      setShowError(false);
      setErrorOpacity(0);
    }
  }, [error, submitAttempt]);

  // Reset error display when user starts typing
  useEffect(() => {
    if (inputValue.trim().length > 0) {
      setShowError(false);
      setErrorOpacity(0);
    }
  }, [inputValue]);

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (fieldType === "textarea") {
      // Handle Shift+Enter for new lines in textarea
      if (e.key === "Enter" && e.shiftKey) {
        e.preventDefault();
        const textarea = e.currentTarget as HTMLTextAreaElement;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;
        textarea.value =
          value.substring(0, start) + "\n" + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        setInputValue(textarea.value);
        return;
      }
    }

    // Handle Enter for submission
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        setSubmitAttempt((prev) => prev + 1);
        onNext(inputValue);
      }
    }
  };

  const handleNextClick = () => {
    if (inputValue.trim()) {
      setSubmitAttempt((prev) => prev + 1);
      onNext(inputValue);
    }
  };

  return (
    <div className="step flex flex-col items-start max-w-[600px] w-full">
      {/* Step Header */}
      <div className="step-header flex items-center w-full mb-2">
        <div
          className="contact-prev-button flex items-center justify-center cursor-pointer mr-2"
          onClick={onPrevious}
        >
          <LeftArrowIcon
            className="prev-arrow-icon text-accent-green-light"
            size={20}
          />
        </div>
        <p className="step-counter text-base text-accent-green-light m-0">
          {stepNumber}
        </p>
      </div>

      {/* Question */}
      <h2 className="step-question text-2xl mb-5 text-white">{question}</h2>

      {/* Input Container */}
      <div className="input-container-wrapper flex justify-between items-start w-full relative mt-12 h-16">
        {fieldType === "input" ? (
          <InputField
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoFocus={true}
            footerTip={
              tip && showHitEnter ? (
                <>
                  {tip}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="enter-icon"
                  >
                    <path
                      d="M12 5V19M12 5L6 11M12 5L18 11"
                      stroke="#888683"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              ) : undefined
            }
          />
        ) : (
          <TextAreaField
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoFocus={true}
            footerTip={
              tip && showHitEnter ? (
                <>
                  {tip}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="enter-icon"
                  >
                    <path
                      d="M12 5V19M12 5L6 11M12 5L18 11"
                      stroke="#888683"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              ) : undefined
            }
          />
        )}

        {/* Next Button */}
        {showNextButton && (
          <button
            type="button"
            className="contact-next-button flex items-center justify-center self-end mb-2 rounded-full text-off-white border-none cursor-pointer w-8 h-8"
            onClick={handleNextClick}
          >
            <RightArrowIcon className="text-accent-green-light" size={20} />
          </button>
        )}

        {/* Error Message - Positioned absolutely with fade out */}
        {showError && error && (
          <p
            className="error-message text-red-500 text-sm absolute top-full left-0 mt-2 transition-opacity duration-500 ease-out"
            style={{ opacity: errorOpacity }}
          >
            {error}
          </p>
        )}

        {/* Tip now rendered by the field components as footerTip */}
      </div>
    </div>
  );
}
