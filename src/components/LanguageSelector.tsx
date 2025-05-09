
import React from "react";
import { Language } from "../data/translations";
import translations from "../data/translations";
import { useIsMobile } from "../hooks/use-mobile";

interface LanguageSelectorProps {
  onSelect: (lang: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="bg-white/20 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-center text-xl sm:text-2xl mb-6 sm:mb-8 font-bold">
          {translations.en.chooseLanguage}
        </h2>
        
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => onSelect("ar")}
            className="py-3 sm:py-4 px-6 rounded-lg bg-white/20 text-white text-lg sm:text-xl hover:bg-white/30 transition-all duration-300 ease-in-out font-cairo hover:scale-105 active:scale-95"
          >
            عربي
          </button>
          
          <button
            onClick={() => onSelect("en")}
            className="py-3 sm:py-4 px-6 rounded-lg bg-white/20 text-white text-lg sm:text-xl hover:bg-white/30 transition-all duration-300 ease-in-out font-poppins hover:scale-105 active:scale-95"
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
