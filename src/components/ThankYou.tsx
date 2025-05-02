
import React from "react";
import { Language } from "../data/translations";
import translations from "../data/translations";
import Logo from "./Logo";

interface ThankYouProps {
  language: Language;
}

const ThankYou: React.FC<ThankYouProps> = ({ language }) => {
  const t = translations[language];
  
  return (
    <div className={`animate-fade-in flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 ${language === 'ar' ? 'rtl font-cairo' : 'ltr font-poppins'}`}>
      <div className="bg-white/20 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <Logo />
        
        <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">✅</div>
        
        <h1 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">{t.thankYou.title}</h1>
        <p className="text-base sm:text-lg opacity-90">{t.thankYou.message}</p>
      </div>
    </div>
  );
};

export default ThankYou;
