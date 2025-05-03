
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Language } from "../data/translations";
import translations from "../data/translations";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";
import FormStep from "./FormStep";
import FormField from "./FormField";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import RadioGroup from "./RadioGroup";
import ThankYou from "./ThankYou";
import supabase from "../lib/supabaseClient";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "../hooks/use-mobile";

interface FormData {
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

interface FormErrors {
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

interface RegistrationFormProps {
  language: Language;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ language }) => {
  const { toast } = useToast();
  const t = translations[language];
  const isMobile = useIsMobile();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<"next" | "prev" | "none">("none");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
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
  
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Total number of steps (questions) - now 12 with the new question
  const totalSteps = 12;
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is filled
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };
  
  const handleRadioChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is filled
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
    
    // Clear dependent field values based on selections
    if (name === "learnedProgramming" && value === "no") {
      setFormData((prev) => ({ ...prev, previousCourse: "", courseName: "" }));
    }
    else if (name === "previousCourse" && value === "no") {
      setFormData((prev) => ({ ...prev, courseName: "" }));
    }
  };
  
  const validateStep = (): boolean => {
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
        } else if (!/^\d+$/.test(formData.mobileNumber)) {
          newErrors.mobileNumber = t.errors.invalidPhone;
        }
        break;
      case 2: // WhatsApp Number (optional)
        if (formData.whatsAppNumber && !/^\d+$/.test(formData.whatsAppNumber)) {
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
          const age = parseInt(formData.childAge);
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
  
  const handleNext = () => {
    if (validateStep()) {
      // Handle the various skip logic cases
      if (currentStep === 7 && formData.learnedProgramming === "no") {
        // Skip competition questions if they haven't learned programming
        setAnimationDirection("next");
        setCurrentStep(10); // Jump to computer question
      } 
      else if (currentStep === 8 && formData.previousCourse === "no") {
        // Skip course name question if they haven't taken a course
        setAnimationDirection("next");
        setCurrentStep(10); // Jump to computer question
      } 
      else if (currentStep === totalSteps) {
        handleSubmit();
      } 
      else {
        setAnimationDirection("next");
        setCurrentStep(currentStep + 1);
      }
    }
  };
  
  const handlePrev = () => {
    // Handle backwards navigation with skip logic
    if (currentStep === 10 && formData.learnedProgramming === "no") {
      // Go back to learned programming question
      setAnimationDirection("prev");
      setCurrentStep(7);
    }
    else if (currentStep === 10 && formData.previousCourse === "no") {
      // Go back to previous course question
      setAnimationDirection("prev");
      setCurrentStep(8);
    }
    else if (currentStep === 9 && formData.previousCourse === "no") {
      // Skip course name when going backwards too
      setAnimationDirection("prev");
      setCurrentStep(7);
    }
    else {
      setAnimationDirection("prev");
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    
    if (validateStep()) {
      try {
        setIsSubmitting(true);
        
        // Map form data to database column names
        const dataToInsert = {
          guardianname: formData.guardianName,
          mobilenumber: formData.mobileNumber,
          whatsappnumber: formData.whatsAppNumber || null, // Handle optional field
          email: formData.email || null, // Handle optional field
          childname: formData.childName,
          age: parseInt(formData.childAge),
          grade: formData.childGrade,
          learnedprogramming: formData.learnedProgramming,
          previousprogramming: formData.learnedProgramming === "yes" ? formData.previousCourse : null,
          coursename: formData.previousCourse === "yes" ? formData.courseName : null, // Handle conditional field
          hascomputer: formData.hasComputer,
          preferredcoursetype: formData.courseType,
          contactconsent: formData.contactForDetails,
          agecategory: getAgeCategory(parseInt(formData.childAge))
        };
        
        // Insert data into Supabase
        const { error } = await supabase
          .from('student_registrations')
          .insert([dataToInsert]);
        
        if (error) throw error;
        
        console.log("Form submitted successfully to Supabase");
        toast({
          title: t.success.title,
          description: t.success.message,
        });
        
        setIsComplete(true);
      } catch (error) {
        console.error("Error submitting form:", error);
        toast({
          title: t.errors.submission,
          description: error instanceof Error ? error.message : String(error),
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  // Helper function to categorize age groups
  const getAgeCategory = (age: number): string => {
    if (age >= 6 && age <= 9) return "6-9";
    if (age >= 10 && age <= 13) return "10-13";
    if (age >= 14 && age <= 18) return "14-18";
    return "other";
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
          
          {/* Learned Programming - New Question */}
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
          
          {/* Navigation Buttons */}
          <div className={`mt-6 sm:mt-8 flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} justify-between gap-2 sm:gap-4`}>
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-all duration-200 flex-1 text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {t.prev}
              </button>
            )}
            
            <button
              type="submit"
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg ${
                currentStep === totalSteps
                  ? "bg-white text-[#6455F0] font-medium hover:bg-white/90"
                  : "bg-white text-[#6455F0] font-medium hover:bg-white/90"
              } transition-all duration-200 flex-1 flex justify-center items-center text-sm sm:text-base`}
              disabled={isSubmitting}
            > 
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-[#6455F0]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t.loading}
                </>
              ) : currentStep === totalSteps ? (
                t.submit
              ) : (
                t.next
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
