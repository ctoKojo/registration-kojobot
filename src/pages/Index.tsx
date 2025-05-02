
import React, { useState, useEffect } from "react";
import { Language } from "../data/translations";
import LanguageSelector from "../components/LanguageSelector";
import RegistrationForm from "../components/RegistrationForm";

const Index: React.FC = () => {
  const [language, setLanguage] = useState<Language | null>(null);
  
  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };
  
  // Set initial direction based on browser language
  useEffect(() => {
    const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    document.documentElement.dir = browserLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = browserLang;
  }, []);
  
  return (
    <div className="min-h-screen w-full">
      {language === null ? (
        <LanguageSelector onSelect={handleLanguageSelect} />
      ) : (
        <RegistrationForm language={language} />
      )}
    </div>
  );
};

export default Index;
