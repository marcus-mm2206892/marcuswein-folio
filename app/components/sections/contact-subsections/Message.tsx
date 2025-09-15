"use client";

import React from "react";
import FormStep from "../../molecules/FormStep";

interface MessageProps {
  value: string;
  onNext: (value: string) => void;
  onPrevious: () => void;
  error?: string;
}

export default function Message({
  value,
  onNext,
  onPrevious,
  error,
}: MessageProps) {
  return (
    <FormStep
      stepNumber="03/03"
      question="What's your message?"
      value={value}
      onNext={onNext}
      onPrevious={onPrevious}
      error={error}
      fieldType="textarea"
      placeholder="Type your message"
      tip="Add a new line with Shift+Enter"
    />
  );
}
