
export type Language = 'en' | 'ar';

export interface TranslationQuestions {
  guardianName: {
    title: string;
    placeholder: string;
  };
  mobileNumber: {
    title: string;
    placeholder: string;
  };
  whatsAppNumber: {
    title: string;
    placeholder: string;
    optional: string;
  };
  email: {
    title: string;
    placeholder: string;
    optional: string;
  };
  childName: {
    title: string;
    placeholder: string;
  };
  childAge: {
    title: string;
    placeholder: string;
    range: string;
  };
  childGrade: {
    title: string;
    placeholder: string;
  };
  learnedProgramming: {
    title: string;
    yes: string;
    no: string;
  };
  previousCourse: {
    title: string;
    yes: string;
    no: string;
  };
  courseName: {
    title: string;
    placeholder: string;
  };
  hasComputer: {
    title: string;
    yes: string;
    no: string;
  };
  courseType: {
    title: string;
    online: string;
    offline: string;
    location: string;
  };
  contactForDetails: {
    title: string;
    yes: string;
    no: string;
  };
}

export interface TranslationErrors {
  required: string;
  invalidEmail: string;
  invalidPhone: string;
  invalidPhoneLength: string;
  invalidAge: string;
  submission: string;
}

export interface Translations {
  languageSelect: string;
  chooseLanguage: string;
  arabic: string;
  english: string;
  next: string;
  prev: string;
  submit: string;
  loading: string;
  thankYou: {
    title: string;
    message: string;
  };
  success: {
    title: string;
    message: string;
  };
  questions: TranslationQuestions;
  errors: TranslationErrors;
  grades: string[];
}
