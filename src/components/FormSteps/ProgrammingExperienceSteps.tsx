
import React from "react";
import { Language } from "../../data/translations";
import translations from "../../data/translations";
import FormStep from "../FormStep";
import FormField from "../FormField";
import FormInput from "../FormInput";
import RadioGroup from "../RadioGroup";
import { FormData, FormErrors } from "../../hooks/useFormValidation";

interface ProgrammingExperienceStepsProps {
  language: Language;
  currentStep: number;
  animationDirection: "next" | "prev" | "none";
  formData: FormData;
  errors: FormErrors;
  handleRadioChange: (name: keyof FormData, value: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const ProgrammingExperienceSteps: React.FC<ProgrammingExperienceStepsProps> = ({
  language,
  currentStep,
  animationDirection,
  formData,
  errors,
  handleRadioChange,
  handleInputChange
}) => {
  const t = translations[language];

  return (
    <>
      {/* Learned Programming */}
      <FormStep 
        language={language} 
        isActive={currentStep === 7} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.learnedProgramming.title} 
          error={errors.learnedProgramming} 
          language={language}
        >
          <RadioGroup
            name="learnedProgramming"
            options={[
              { value: "yes", label: t.questions.learnedProgramming.yes },
              { value: "no", label: t.questions.learnedProgramming.no }
            ]}
            selectedValue={formData.learnedProgramming}
            onChange={(value) => handleRadioChange("learnedProgramming", value)}
            language={language}
          />
        </FormField>
      </FormStep>
      
      {/* Previous Course (only if learned programming is "yes") */}
      <FormStep 
        language={language} 
        isActive={currentStep === 8 && formData.learnedProgramming === "yes"} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.previousCourse.title} 
          error={errors.previousCourse} 
          language={language}
        >
          <RadioGroup
            name="previousCourse"
            options={[
              { value: "yes", label: t.questions.previousCourse.yes },
              { value: "no", label: t.questions.previousCourse.no }
            ]}
            selectedValue={formData.previousCourse}
            onChange={(value) => handleRadioChange("previousCourse", value)}
            language={language}
          />
        </FormField>
      </FormStep>
      
      {/* Course Name (only if previous course is "yes") */}
      <FormStep 
        language={language} 
        isActive={currentStep === 9 && formData.previousCourse === "yes"} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.courseName.title} 
          error={errors.courseName} 
          language={language}
        >
          <FormInput
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            placeholder={t.questions.courseName.placeholder}
            required
            dir={language === 'ar' ? "rtl" : "ltr"}
          />
        </FormField>
      </FormStep>
    </>
  );
};

export default ProgrammingExperienceSteps;
