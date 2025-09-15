"use client";

import React, { useRef, useEffect } from "react";

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  autoFocus?: boolean;
  footerTip?: React.ReactNode;
}

export default function InputField({
  value,
  onChange,
  onKeyDown,
  placeholder,
  className = "",
  autoFocus = false,
  footerTip,
}: InputFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="input-container flex justify-between items-center w-full relative h-12">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className={`input-field w-full max-w-[calc(100%-50px)] pr-2 pb-2 text-2xl font-body text-white bg-transparent border-none outline-none resize-none min-h-[2rem] overflow-y-auto box-border ${className}`}
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
