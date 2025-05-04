
import React, { ChangeEvent } from "react";

interface FormInputProps {
  type?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name: string;
  min?: number;
  max?: number;
  required?: boolean;
  dir?: "rtl" | "ltr" | "auto";
  inputMode?: "text" | "numeric" | "tel" | "email" | "url" | "search" | "none" | "decimal";
}

const FormInput: React.FC<FormInputProps> = ({
  type = "text", 
  value,
  onChange,
  placeholder,
  name,
  min,
  max,
  required = false,
  dir = "auto",
  inputMode,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      min={min}
      max={max}
      required={required}
      dir={dir}
      inputMode={inputMode}
      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
    />
  );
};

export default FormInput;
