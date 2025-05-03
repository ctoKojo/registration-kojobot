
import React from "react";
import { Language } from "../../data/translations";
import translations from "../../data/translations";
import FormStep from "../FormStep";
import FormField from "../FormField";
import RadioGroup from "../RadioGroup";
import { FormData, FormErrors } from "../../hooks/useFormValidation";

interface PreferenceStepsProps {
  language: Language;
  currentStep: number;
  animationDirection: "next" | "prev" | "none";
  formData: FormData;
  errors: FormErrors;
  handleRadioChange: (name: keyof FormData, value: string) => void;
}

const PreferenceSteps: React.FC<PreferenceStepsProps> = ({
  language,
  currentStep,
  animationDirection,
  formData,
  errors,
  handleRadioChange
}) => {
  const t = translations[language];

  return (
    <>
      {/* Has Computer */}
      <FormStep 
        language={language} 
        isActive={currentStep === 10} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.hasComputer.title} 
          error={errors.hasComputer} 
          language={language}
        >
          <RadioGroup
            name="hasComputer"
            options={[
              { value: "yes", label: t.questions.hasComputer.yes },
              { value: "no", label: t.questions.hasComputer.no }
            ]}
            selectedValue={formData.hasComputer}
            onChange={(value) => handleRadioChange("hasComputer", value)}
            language={language}
          />
        </FormField>
      </FormStep>
      
      {/* Course Type */}
      <FormStep 
        language={language} 
        isActive={currentStep === 11} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.courseType.title} 
          error={errors.courseType} 
          language={language}
        >
          <RadioGroup
            name="courseType"
            options={[
              { value: "online", label: t.questions.courseType.online },
              { value: "offline", label: `${t.questions.courseType.offline} ${t.questions.courseType.location}` }
            ]}
            selectedValue={formData.courseType}
            onChange={(value) => handleRadioChange("courseType", value)}
            language={language}
          />
        </FormField>
      </FormStep>
      
      {/* Contact For Details */}
      <FormStep 
        language={language} 
        isActive={currentStep === 12} 
        direction={animationDirection}
      >
        <FormField 
          label={t.questions.contactForDetails.title} 
          error={errors.contactForDetails} 
          language={language}
        >
          <RadioGroup
            name="contactForDetails"
            options={[
              { value: "yes", label: t.questions.contactForDetails.yes },
              { value: "no", label: t.questions.contactForDetails.no }
            ]}
            selectedValue={formData.contactForDetails}
            onChange={(value) => handleRadioChange("contactForDetails", value)}
            language={language}
          />
        </FormField>
      </FormStep>
    </>
  );
};

export default PreferenceSteps;
