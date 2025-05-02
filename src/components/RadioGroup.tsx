
import React from "react";
import { Language } from "../data/translations";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  name: string;
  language: Language;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedValue,
  onChange,
  name,
  language,
}) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200
            ${
              selectedValue === option.value
                ? "bg-white text-[#6455F0] font-medium"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          onClick={() => onChange(option.value)}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => {}}
            className="hidden"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
