
import React, { useState } from "react";
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
