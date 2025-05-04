
import { useState } from "react";
import { FormData } from "./useFormValidation";
import { Language } from "../data/translations";
import translations from "../data/translations";
import supabase from "../lib/supabaseClient";
import { useToast } from "@/hooks/use-toast";

export const useFormSubmission = (language: Language) => {
  const { toast } = useToast();
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Helper function to categorize age groups
  const getAgeCategory = (age: number): string => {
    if (age >= 6 && age <= 9) return "6-9";
    if (age >= 10 && age <= 13) return "10-13";
    if (age >= 14 && age <= 18) return "14-18";
    return "other";
  };

  const submitForm = async (formData: FormData) => {
    try {
      setIsSubmitting(true);
      
      // Map form data to database column names - Fix column names to match database schema
      // Important: previousprogramming stores whether they learned programming before
      // coursename stores the competition details if they participated before
      const dataToInsert = {
        guardianname: formData.guardianName,
        mobilenumber: formData.mobileNumber,
        whatsappnumber: formData.whatsAppNumber || null, // Handle optional field
        email: formData.email || null, // Handle optional field
        childname: formData.childName,
        age: parseInt(formData.childAge),
        grade: formData.childGrade,
        // The database only has previousprogramming field, not learnedprogramming
        previousprogramming: formData.learnedProgramming, // Store if they learned programming before
        coursename: formData.previousCourse === "yes" ? formData.courseName : null, // Store competition details if they participated
        hascomputer: formData.hasComputer,
        preferredcoursetype: formData.courseType,
        contactconsent: formData.contactForDetails,
        agecategory: getAgeCategory(parseInt(formData.childAge))
      };
      
      // For debugging
      console.log("Submitting data to Supabase:", dataToInsert);
      
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
      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      // Improve error handling to prevent [object Object] display
      const errorMessage = error instanceof Error 
        ? error.message 
        : typeof error === 'object' && error !== null
          ? JSON.stringify(error)
          : String(error);
          
      toast({
        title: t.errors.submission,
        description: errorMessage,
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    isComplete,
    submitForm,
    setIsComplete
  };
};
