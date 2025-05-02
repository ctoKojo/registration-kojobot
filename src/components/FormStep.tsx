
import React, { ReactNode } from "react";
import { Language } from "../data/translations";

interface FormStepProps {
  children: ReactNode;
  language: Language;
  isActive: boolean;
  direction: "next" | "prev" | "none"; 
}

const FormStep: React.FC<FormStepProps> = ({ 
  children, 
  language, 
  isActive, 
  direction 
}) => {
  if (!isActive) return null;

  let animationClass = "";
  
  if (direction === "next") {
    animationClass = "animate-slide-in";
  } else if (direction === "prev") {
    animationClass = "animate-slide-in"; // Could use a different animation for prev
  } else {
    animationClass = "animate-fade-in";
  }

  return (
    <div className={`${language === 'ar' ? 'rtl font-cairo' : 'ltr font-poppins'} ${animationClass}`}>
      {children}
    </div>
  );
};

export default FormStep;
