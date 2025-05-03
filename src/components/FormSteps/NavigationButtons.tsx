
import React from "react";
import { Language } from "../../data/translations";
import translations from "../../data/translations";

interface NavigationButtonsProps {
  language: Language;
  currentStep: number;
  totalSteps: number;
  isSubmitting: boolean;
  onPrev: () => void;
  onSubmit: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  language,
  currentStep,
  totalSteps,
  isSubmitting,
  onPrev,
  onSubmit
}) => {
  const t = translations[language];

  return (
    <div className={`mt-6 sm:mt-8 flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} justify-between gap-2 sm:gap-4`}>
      {currentStep > 0 && (
        <button
          type="button"
          onClick={onPrev}
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-all duration-200 flex-1 text-sm sm:text-base"
          disabled={isSubmitting}
        >
          {t.prev}
        </button>
      )}
      
      <button
        type="submit"
        className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg ${
          currentStep === totalSteps
            ? "bg-white text-[#6455F0] font-medium hover:bg-white/90"
            : "bg-white text-[#6455F0] font-medium hover:bg-white/90"
        } transition-all duration-200 flex-1 flex justify-center items-center text-sm sm:text-base`}
        disabled={isSubmitting}
      > 
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-[#6455F0]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t.loading}
          </>
        ) : currentStep === totalSteps ? (
          t.submit
        ) : (
          t.next
        )}
      </button>
    </div>
  );
};

export default NavigationButtons;
