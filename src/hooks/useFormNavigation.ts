
import { useState } from "react";
import { FormData } from "./useFormValidation";

export const useFormNavigation = (totalSteps: number) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<"next" | "prev" | "none">("none");

  const getNextStep = (currentStep: number, formData: FormData): number => {
    // Handle the various skip logic cases
    if (currentStep === 7 && formData.learnedProgramming === "no") {
      // Skip competition questions if they haven't learned programming
      return 10; // Jump to computer question
    } 
    else if (currentStep === 8 && formData.previousCourse === "no") {
      // Skip course name question if they haven't taken a course
      return 10; // Jump to computer question
    } 
    else {
      return currentStep + 1;
    }
  };

  const getPrevStep = (currentStep: number, formData: FormData): number => {
    // Handle backwards navigation with skip logic
    if (currentStep === 10 && formData.learnedProgramming === "no") {
      // Go back to learned programming question
      return 7;
    }
    else if (currentStep === 10 && formData.previousCourse === "no") {
      // Go back to previous course question
      return 8;
    }
    else if (currentStep === 9 && formData.previousCourse === "no") {
      // Skip course name when going backwards too
      return 7;
    }
    else {
      return currentStep - 1;
    }
  };

  const goToNextStep = (formData: FormData) => {
    const nextStep = getNextStep(currentStep, formData);
    setAnimationDirection("next");
    setCurrentStep(nextStep);
  };

  const goToPrevStep = (formData: FormData) => {
    const prevStep = getPrevStep(currentStep, formData);
    setAnimationDirection("prev");
    setCurrentStep(prevStep);
  };

  return {
    currentStep,
    animationDirection,
    goToNextStep,
    goToPrevStep,
    setCurrentStep,
    setAnimationDirection
  };
};
