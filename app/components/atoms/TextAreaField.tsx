"use client";

import React, { useRef, useEffect } from "react";

interface TextAreaFieldProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  className?: string;
  autoFocus?: boolean;
  footerTip?: React.ReactNode;
}

export default function TextAreaField({
  value,
  onChange,
  onKeyDown,
  placeholder,
  className = "",
  autoFocus = false,
  footerTip,
}: TextAreaFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [autoFocus]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleWheel = (e: React.WheelEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    const textarea = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = textarea;

    // Check if we can scroll in the direction of the wheel
    const canScrollUp = scrollTop > 0;
    const canScrollDown = scrollTop < scrollHeight - clientHeight;

    if ((e.deltaY < 0 && canScrollUp) || (e.deltaY > 0 && canScrollDown)) {
      e.preventDefault();
      textarea.scrollTop += e.deltaY;
    }
  };

  return (
    <div className="w-full">
      <div className="textarea-container flex justify-between items-start w-full relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          onWheel={handleWheel}
          placeholder={placeholder}
          className={`textarea-field w-full max-w-[calc(100%-50px)] pr-2 pb-2 text-xl font-semibold text-white bg-transparent border-none outline-none resize-none overflow-y-auto box-border h-[8rem] scrollbar-hide ${className}`}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <div className="c-line w-full h-px bg-accent-green-light absolute bottom-[-1px] left-0 transform scale-x-100 origin-left"></div>
      </div>
      {footerTip && (
        <div className="mt-2 w-full text-accent-green-light text-sm flex items-center gap-1 justify-end">
          {footerTip}
        </div>
      )}
    </div>
  );
}
