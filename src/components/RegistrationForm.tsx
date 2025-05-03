
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Language } from "../data/translations";
import translations from "../data/translations";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";
import ThankYou from "./ThankYou";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "../hooks/use-mobile";
import { FormData, useFormValidation } from "../hooks/useFormValidation";
import { useFormNavigation } from "../hooks/useFormNavigation";
import { useFormSubmission } from "../hooks/useFormSubmission";

// Import Form Step Components
import GuardianInfoSteps from "./FormSteps/GuardianInfoSteps";
import ChildInfoSteps from "./FormSteps/ChildInfoSteps";
import ProgrammingExperienceSteps from "./FormSteps/ProgrammingExperienceSteps";
import PreferenceSteps from "./FormSteps/PreferenceSteps";
import NavigationButtons from "./FormSteps/NavigationButtons";

interface RegistrationFormProps {
  language: Language;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ language }) => {
  const t = translations[language];
  const isMobile = useIsMobile();
  
  // Total number of steps (questions)
  const totalSteps = 12;
  
  // Form state management
  const [formData, setFormData] = useState<FormData>({
    guardianName: "",
    mobileNumber: "",
    whatsAppNumber: "",
    email: "",
    childName: "",
    childAge: "",
    childGrade: "",
    learnedProgramming: "",
    previousCourse: "",
    courseName: "",
    hasComputer: "",
    courseType: "",
    contactForDetails: "",
  });
  
  // Custom hooks for form management
  const { errors, validateStep, clearError } = useFormValidation(language);
  const { currentStep, animationDirection, goToNextStep, goToPrevStep } = useFormNavigation(totalSteps);
  const { isSubmitting, isComplete, submitForm } = useFormSubmission(language);
  
  // Input change handlers
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is filled
    clearError(name as keyof FormData);
  };
  
  const handleRadioChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is filled
    clearError(name);
    
    // Clear dependent field values based on selections
    if (name === "learnedProgramming" && value === "no") {
      setFormData((prev) => ({ ...prev, previousCourse: "", courseName: "" }));
    }
    else if (name === "previousCourse" && value === "no") {
      setFormData((prev) => ({ ...prev, courseName: "" }));
    }
  };
  
  const handleNext = () => {
    if (validateStep(currentStep, formData)) {
      if (currentStep === totalSteps) {
        handleSubmit();
      } else {
        goToNextStep(formData);
      }
    }
  };
  
  const handlePrev = () => {
    goToPrevStep(formData);
  };
  
  const handleSubmit = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    
    if (validateStep(currentStep, formData)) {
      await submitForm(formData);
    }
  };
  
  if (isComplete) {
    return <ThankYou language={language} />;
  }
  
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-3 sm:p-6 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
        <Logo />
        
        <ProgressBar 
          currentStep={currentStep} 
          totalSteps={totalSteps + 1} 
          language={language} 
        />
        
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="mt-4">
          {/* Guardian Information Steps */}
          <GuardianInfoSteps
            language={language}
            currentStep={currentStep}
            animationDirection={animationDirection}
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />
          
          {/* Child Information Steps */}
          <ChildInfoSteps
            language={language}
            currentStep={currentStep}
            animationDirection={animationDirection}
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />
          
          {/* Programming Experience Steps */}
          <ProgrammingExperienceSteps
            language={language}
            currentStep={currentStep}
            animationDirection={animationDirection}
            formData={formData}
            errors={errors}
            handleRadioChange={handleRadioChange}
            handleInputChange={handleInputChange}
          />
          
          {/* Preference Steps */}
          <PreferenceSteps
            language={language}
            currentStep={currentStep}
            animationDirection={animationDirection}
            formData={formData}
            errors={errors}
            handleRadioChange={handleRadioChange}
          />
          
          {/* Navigation Buttons */}
          <NavigationButtons
            language={language}
            currentStep={currentStep}
            totalSteps={totalSteps}
            isSubmitting={isSubmitting}
            onPrev={handlePrev}
            onSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
