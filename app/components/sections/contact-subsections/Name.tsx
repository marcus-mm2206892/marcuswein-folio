"use client";

import React from "react";
import FormStep from "../../molecules/FormStep";

interface NameProps {
  value: string;
  onNext: (value: string) => void;
  onPrevious: () => void;
  error?: string;
}

export default function Name({ value, onNext, onPrevious, error }: NameProps) {
  return (
    <FormStep
      stepNumber="01/03"
      question="What's your name?"
      value={value}
      onNext={onNext}
      onPrevious={onPrevious}
      error={error}
      fieldType="input"
      placeholder="Type your name"
      tip="Hit Enter!"
    />
  );
}
