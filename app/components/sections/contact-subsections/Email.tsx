"use client";

import React from "react";
import FormStep from "../../molecules/FormStep";

interface EmailProps {
  value: string;
  onNext: (value: string) => void;
  onPrevious: () => void;
  error?: string;
}

export default function Email({
  value,
  onNext,
  onPrevious,
  error,
}: EmailProps) {
  return (
    <FormStep
      stepNumber="02/03"
      question="What's your email?"
      value={value}
      onNext={onNext}
      onPrevious={onPrevious}
      error={error}
      fieldType="input"
      placeholder="Type your email"
      tip="Hit Enter!"
    />
  );
}
