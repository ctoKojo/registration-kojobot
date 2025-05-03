
import React from "react";
import { Language } from "../../data/translations";
import translations from "../../data/translations";
import FormStep from "../FormStep";
import FormField from "../FormField";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import { FormData, FormErrors } from "../../hooks/useFormValidation";

interface ChildInfoStepsProps {
  language: Language;
  currentStep: number;
  animationDirection: "next" | "prev" | "none";
  formData: FormData;
  errors: FormErrors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const ChildInfoSteps: React.FC<ChildInfoStepsProps> = ({
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
      {/* Child Name */}
      <FormStep 
        language={language} 
        isActive={currentStep === 4} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.childName.title} 
          error={errors.childName} 
          language={language}
        >
          <FormInput
            type="text"
            name="childName"
            value={formData.childName}
            onChange={handleInputChange}
            placeholder={t.questions.childName.placeholder}
            required
            dir={language === 'ar' ? "rtl" : "ltr"}
          />
        </FormField>
      </FormStep>
      
      {/* Child Age */}
      <FormStep 
        language={language} 
        isActive={currentStep === 5} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.childAge.title} 
          optional={t.questions.childAge.range}
          error={errors.childAge} 
          language={language}
        >
          <FormInput
            type="number"
            name="childAge"
            value={formData.childAge}
            onChange={handleInputChange}
            placeholder={t.questions.childAge.placeholder}
            required
            min={6}
            max={18}
            dir="ltr" // Numbers are always LTR
          />
        </FormField>
      </FormStep>
      
      {/* Child Grade */}
      <FormStep 
        language={language} 
        isActive={currentStep === 6} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.childGrade.title} 
          error={errors.childGrade} 
          language={language}
        >
          <FormSelect
            name="childGrade"
            value={formData.childGrade}
            onChange={handleInputChange}
            options={t.grades}
            placeholder={t.questions.childGrade.placeholder}
            required
            dir={language === 'ar' ? "rtl" : "ltr"}
          />
        </FormField>
      </FormStep>
    </>
  );
};

export default ChildInfoSteps;
