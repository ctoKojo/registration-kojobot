import React from "react";
import { Language } from "../data/translations";
import translations from "../data/translations";
import Logo from "./Logo";
import { CheckCircle2 } from "lucide-react"; // npm install lucide-react

interface ThankYouProps {
  language: Language;
}

const ThankYou: React.FC<ThankYouProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div
      className={`animate-fade-in flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-10 bg-gradient-radial from-[#a1c4fd] to-[#c2e9fb] ${
        language === "ar" ? "rtl font-cairo" : "ltr font-poppins"
      }`}
    >
      <div className="bg-white/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md text-center border border-white/40">
        <Logo />

        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-500 drop-shadow-md" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white drop-shadow-sm">
          {t.thankYou.title}
        </h1>

        <p className="text-base sm:text-lg text-white/90 leading-relaxed">
          {t.thankYou.message}
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
