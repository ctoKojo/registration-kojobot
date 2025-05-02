export type Language = 'en' | 'ar';

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
  questions: {
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
  };
  errors: {
    required: string;
    invalidEmail: string;
    invalidPhone: string;
    invalidAge: string;
    submission: string;
  };
  grades: string[];
}

const translations: Record<Language, Translations> = {
  en: {
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
        title: "What is your full name?",
        placeholder: "Enter your full name",
      },
      mobileNumber: {
        title: "What is your mobile number?",
        placeholder: "Enter your mobile number",
      },
      whatsAppNumber: {
        title: "What is your WhatsApp number? (if different)",
        placeholder: "Enter your WhatsApp number",
        optional: "(Optional if same as mobile)",
      },
      email: {
        title: "What is your email address?",
        placeholder: "Enter your email address",
        optional: "(Optional)",
      },
      childName: {
        title: "What is your child's name?",
        placeholder: "Enter child's name",
      },
      childAge: {
        title: "How old is your child?",
        placeholder: "Enter age",
        range: "(between 6-18)",
      },
      childGrade: {
        title: "What grade is your child in?",
        placeholder: "Select grade",
      },
      previousCourse: {
        title: "Has your child taken a programming course before?",
        yes: "Yes",
        no: "No",
      },
      courseName: {
        title: "What was the course name or provider?",
        placeholder: "Enter course name/provider",
      },
      hasComputer: {
        title: "Does your child have a personal computer or laptop?",
        yes: "Yes",
        no: "No",
      },
      courseType: {
        title: "What type of course are you interested in?",
        online: "Online",
        offline: "Offline",
        location: "(Mansoura academy)",
      },
      contactForDetails: {
        title: "Would you like us to contact you for more details?",
        yes: "Yes",
        no: "No",
      },
    },
    errors: {
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
      invalidPhone: "Please enter a valid phone number",
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
  },
  ar: {
    languageSelect: "اختر اللغة",
    chooseLanguage: "اختر اللغة / Choose your language",
    arabic: "عربي",
    english: "English",
    next: "التالي",
    prev: "السابق",
    submit: "إرسال",
    loading: "جاري التحميل...",
    thankYou: {
      title: "شكرا لك!",
      message: "تم تسجيل طلبك بنجاح. سنتواصل معك قريبا.",
    },
    success: {
      title: "تم بنجاح!",
      message: "تم تسجيل طلبك بنجاح.",
    },
    questions: {
      guardianName: {
        title: "ما هو الاسم الكامل لولي الأمر؟",
        placeholder: "أدخل الاسم الكامل",
      },
      mobileNumber: {
        title: "ما هو رقم الموبايل الخاص بك؟",
        placeholder: "أدخل رقم الموبايل",
      },
      whatsAppNumber: {
        title: "ما هو رقم الواتساب الخاص بك؟ (إذا كان مختلفًا)",
        placeholder: "أدخل رقم الواتساب",
        optional: "(اختياري إذا كان هو نفس رقم الموبايل)",
      },
      email: {
        title: "ما هو عنوان البريد الإلكتروني الخاص بك؟",
        placeholder: "أدخل البريد الإلكتروني",
        optional: "(اختياري)",
      },
      childName: {
        title: "ما هو اسم طفلك؟",
        placeholder: "أدخل اسم الطفل",
      },
      childAge: {
        title: "كم عمر طفلك؟",
        placeholder: "أدخل العمر",
        range: "(بين 6-18)",
      },
      childGrade: {
        title: "ما هو الصف الدراسي لطفلك؟",
        placeholder: "اختر الصف",
      },
      previousCourse: {
        title: "هل سبق وشارك الطفل في كورسات برمجة؟",
        yes: "نعم",
        no: "لا",
      },
      courseName: {
        title: "ما هو اسم الكورس أو الجهة؟",
        placeholder: "أدخل اسم الكورس/الجهة",
      },
      hasComputer: {
        title: "هل الطفل عنده لابتوب أو كمبيوتر؟",
        yes: "نعم",
        no: "لا",
      },
      courseType: {
        title: "ما هو نوع الكورس المطلوب؟",
        online: "اونلاين",
        offline: "أوفلاين",
        location: "(في مقر الأكاديمية بالمنصورة)",
      },
      contactForDetails: {
        title: "هل تحب نكلمك لمزيد من التفاصيل؟",
        yes: "نعم",
        no: "لا",
      },
    },
    errors: {
      required: "هذا الحقل مطلوب",
      invalidEmail: "الرجاء إدخال بريد إلكتروني صحيح",
      invalidPhone: "الرجاء إدخال رقم هاتف صحيح",
      invalidAge: "يجب أن يكون العمر بين 6 و 18 سنة",
      submission: "حدث خطأ أثناء تقديم النموذج. الرجاء المحاولة مرة أخرى.",
    },
    grades: [
      "الأول الابتدائي",
      "الثاني الابتدائي",
      "الثالث الابتدائي",
      "الرابع الابتدائي",
      "الخامس الابتدائي",
      "السادس الابتدائي",
      "الأول الإعدادي",
      "الثاني الإعدادي",
      "الثالث الإعدادي",
      "الأول الثانوي",
      "الثاني الثانوي",
      "الثالث الثانوي",
    ],
  },
};

export default translations;
