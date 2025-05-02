
import React, { ChangeEvent } from "react";

interface FormSelectProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder?: string;
  name: string;
  required?: boolean;
  dir?: "rtl" | "ltr" | "auto";
}

const FormSelect: React.FC<FormSelectProps> = ({
  value,
  onChange,
  options,
  placeholder, 
  name,
  required = false,
  dir = "auto",
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      dir={dir}
      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
    >
      {placeholder && (
        <option value="" disabled className="text-gray-400">
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <option key={index} value={option} className="bg-gray-800 text-white">
          {option}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
