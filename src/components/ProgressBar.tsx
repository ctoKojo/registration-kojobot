
import React from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  language: 'en' | 'ar';
} 

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, language }) => {
  const progress = (currentStep / (totalSteps - 1)) * 100;
  
  return (
    <div className={`w-full mt-2 mb-4 sm:mb-6 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="flex justify-between mb-1 text-xs text-white/70">
        <span>{language === 'en' ? 'Progress' : 'التقدم'}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div
          className="bg-white h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
