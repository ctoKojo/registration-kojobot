
import { useState } from "react";
import { Language } from "../data/translations";
import translations from "../data/translations";

export interface FormData {
  guardianName: string;
  mobileNumber: string;
  whatsAppNumber: string;
  email: string;
  childName: string;
  childAge: string;
  childGrade: string;
  learnedProgramming: string;
  previousCourse: string;
  courseName: string;
  hasComputer: string;
  courseType: string;
  contactForDetails: string;
}

export interface FormErrors {
  guardianName?: string;
  mobileNumber?: string;
  whatsAppNumber?: string;
  email?: string;
  childName?: string;
  childAge?: string;
  childGrade?: string;
  learnedProgramming?: string;
  previousCourse?: string;
  courseName?: string;
  hasComputer?: string;
  courseType?: string;
  contactForDetails?: string;
}

export const useFormValidation = (language: Language) => {
  const t = translations[language];
  const [errors, setErrors] = useState<FormErrors>({});

  // Helper function to validate phone numbers - accepts both Arabic and English digits
  const isValidPhoneNumber = (phone: string): boolean => {
    // Accept Arabic digits (٠-٩) or English digits (0-9)
    return /^[\u0660-\u0669\d]+$/.test(phone);
  };

  // Helper function to convert Arabic digits to English digits if needed
  const normalizeDigits = (value: string): string => {
    return value.replace(/[\u0660-\u0669]/g, (d) => {
      return String.fromCharCode(d.charCodeAt(0) - 0x0660 + 48);
    });
  };

  const validateStep = (currentStep: number, formData: FormData): boolean => {
    const newErrors: FormErrors = {};
    
    switch (currentStep) {
      case 0: // Guardian Name
        if (!formData.guardianName) {
          newErrors.guardianName = t.errors.required;
        }
        break;
      case 1: // Mobile Number
        if (!formData.mobileNumber) {
          newErrors.mobileNumber = t.errors.required;
        } else if (!isValidPhoneNumber(formData.mobileNumber)) {
          newErrors.mobileNumber = t.errors.invalidPhone;
        }
        break;
      case 2: // WhatsApp Number (optional)
        if (formData.whatsAppNumber && !isValidPhoneNumber(formData.whatsAppNumber)) {
          newErrors.whatsAppNumber = t.errors.invalidPhone;
        }
        break;
      case 3: // Email (optional)
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = t.errors.invalidEmail;
        }
        break;
      case 4: // Child's Name
        if (!formData.childName) {
          newErrors.childName = t.errors.required;
        }
        break;
      case 5: // Child's Age
        if (!formData.childAge) {
          newErrors.childAge = t.errors.required;
        } else {
          // Convert Arabic digits to English digits if present
          const normalizedAge = normalizeDigits(formData.childAge);
          const age = parseInt(normalizedAge);
          if (isNaN(age) || age < 6 || age > 18) {
            newErrors.childAge = t.errors.invalidAge;
          }
        }
        break;
      case 6: // Child's Grade
        if (!formData.childGrade) {
          newErrors.childGrade = t.errors.required;
        }
        break;
      case 7: // Learned Programming
        if (!formData.learnedProgramming) {
          newErrors.learnedProgramming = t.errors.required;
        }
        break;
      case 8: // Previous Course (only if learned programming is "yes")
        if (formData.learnedProgramming === "yes" && !formData.previousCourse) {
          newErrors.previousCourse = t.errors.required;
        }
        break;
      case 9: // Course Name (only if previous course is "yes")
        if (formData.previousCourse === "yes" && !formData.courseName) {
          newErrors.courseName = t.errors.required;
        }
        break;
      case 10: // Has Computer
        if (!formData.hasComputer) {
          newErrors.hasComputer = t.errors.required;
        }
        break;
      case 11: // Course Type
        if (!formData.courseType) {
          newErrors.courseType = t.errors.required;
        }
        break;
      case 12: // Contact For Details
        if (!formData.contactForDetails) {
          newErrors.contactForDetails = t.errors.required;
        }
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (fieldName: keyof FormErrors) => {
    if (errors[fieldName]) {
      setErrors({ ...errors, [fieldName]: undefined });
    }
  };

  return { errors, validateStep, clearError, setErrors };
};
