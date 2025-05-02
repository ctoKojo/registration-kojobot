
import React, { ReactNode } from "react";
import { Language } from "../data/translations";

interface FormFieldProps {
  label: string;
  optional?: string;
  children: ReactNode;
  error?: string;
  language: Language;
}

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  optional, 
  children, 
  error, 
  language 
}) => {
  return (
    <div className="mb-5 sm:mb-6">
      <label className="block text-lg sm:text-xl font-semibold mb-2">
        {label}
        {optional && (
          <span className="text-xs sm:text-sm font-normal opacity-80 ml-1">
            {optional}
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className={`text-red-300 mt-2 text-xs sm:text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
