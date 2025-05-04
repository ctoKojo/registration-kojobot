
import { Translations } from './types';

const englishTranslations: Translations = {
  languageSelect: "Choose your language",
  chooseLanguage: "Choose your language / اختر اللغة",
  arabic: "Arabic",
  english: "English",
  next: "Next",
  prev: "Previous",
  submit: "Submit",
  loading: "Loading...",
  thankYou: {
    title: "Thank You!",
    message: "Your registration has been submitted successfully. We will contact you soon.",
  },
  success: {
    title: "Success!",
    message: "Your registration has been submitted successfully.",
  },
  questions: {
    guardianName: {
      title: "What is the full name of the guardian?",
      placeholder: "Enter guardian's full name",
    },
    mobileNumber: {
      title: "What is the guardian's mobile number?",
      placeholder: " 010xxxxxxxx ",
    },
    whatsAppNumber: {
      title: "What is the guardian's WhatsApp number?",
      placeholder: " 010xxxxxxxx ",
      optional: "(Optional if same as mobile)",
    },
    email: {
      title: "What is the guardian's email address?",
      placeholder: "example@gmail.com",
      optional: "(Optional)",
    },
    childName: {
      title: "What is the student's name?",
      placeholder: "Enter student's name",
    },
    childAge: {
      title: "What is the student's age?",
      placeholder: "Enter age",
      range: "(between 6-18)",
    },
    childGrade: {
      title: "What grade is the student in?",
      placeholder: "Select grade",
    },
    learnedProgramming: {
      title: "Has the student learned programming before?",
      yes: "Yes",
      no: "No",
    },
    previousCourse: {
      title: "Has the student participated in programming competitions before?",
      yes: "Yes",
      no: "No",
    },
    courseName: {
      title: "What is the name of the competition and the rank achieved?",
      placeholder: "Enter competition name and rank",
    },
    hasComputer: {
      title: "Does the student have a laptop or computer?",
      yes: "Yes",
      no: "No",
    },
    courseType: {
      title: "Preferred training location?",
      online: "Online",
      offline: "Offline",
      location: "(At our academy in Mansoura)",
    },
    contactForDetails: {
      title: "Would you like us to contact you or provide more details?",
      yes: "Yes",
      no: "No",
    },
  },
  errors: {
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
    invalidPhone: "Please enter a valid phone number",
    invalidPhoneLength: "Phone number must be at least 10 digits",
    invalidAge: "Age must be between 6 and 18",
    submission: "There was an error submitting the form. Please try again.",
  },
  grades: [
    "First Primary",
    "Second Primary",
    "Third Primary",
    "Fourth Primary",
    "Fifth Primary",
    "Sixth Primary",
    "First Preparatory",
    "Second Preparatory",
    "Third Preparatory",
    "First Secondary",
    "Second Secondary",
    "Third Secondary",
  ],
};

export default englishTranslations;
