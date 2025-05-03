
import React from "react";
import { Language } from "../../data/translations";
import translations from "../../data/translations";
import FormStep from "../FormStep";
import FormField from "../FormField";
import FormInput from "../FormInput";
import { FormData, FormErrors } from "../../hooks/useFormValidation";

interface GuardianInfoStepsProps {
  language: Language;
  currentStep: number;
  animationDirection: "next" | "prev" | "none";
  formData: FormData;
  errors: FormErrors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const GuardianInfoSteps: React.FC<GuardianInfoStepsProps> = ({
  language,
  currentStep,
  animationDirection,
  formData,
  errors,
  handleInputChange
}) => {
  const t = translations[language];

  return (
    <>
      {/* Guardian Name */}
      <FormStep 
        language={language} 
        isActive={currentStep === 0} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.guardianName.title} 
          error={errors.guardianName} 
          language={language}
        >
          <FormInput
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleInputChange}
            placeholder={t.questions.guardianName.placeholder}
            required
            dir={language === 'ar' ? "rtl" : "ltr"}
          />
        </FormField>
      </FormStep>
      
      {/* Mobile Number */}
      <FormStep 
        language={language} 
        isActive={currentStep === 1} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.mobileNumber.title} 
          error={errors.mobileNumber} 
          language={language}
        >
          <FormInput
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            placeholder={t.questions.mobileNumber.placeholder}
            required
            dir="ltr" // Phone numbers are always LTR
          />
        </FormField>
      </FormStep>
      
      {/* WhatsApp Number */}
      <FormStep 
        language={language} 
        isActive={currentStep === 2} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.whatsAppNumber.title} 
          optional={t.questions.whatsAppNumber.optional}
          error={errors.whatsAppNumber} 
          language={language}
        >
          <FormInput
            type="tel"
            name="whatsAppNumber"
            value={formData.whatsAppNumber}
            onChange={handleInputChange}
            placeholder={t.questions.whatsAppNumber.placeholder}
            dir="ltr" // Phone numbers are always LTR
          />
        </FormField>
      </FormStep>
      
      {/* Email */}
      <FormStep 
        language={language} 
        isActive={currentStep === 3} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.email.title} 
          optional={t.questions.email.optional}
          error={errors.email} 
          language={language}
        >
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t.questions.email.placeholder}
            dir="ltr" // Emails are always LTR
          />
        </FormField>
      </FormStep>
    </>
  );
};

export default GuardianInfoSteps;
