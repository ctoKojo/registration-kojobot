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
        title: "الاسم الكامل لولي الامر",
        placeholder: "أدخل الاسم الكامل",
      },
      mobileNumber: {
        title: "رقم الموبايل الخاص بولي الامر",
        placeholder: " 010xxxxxxxx ",
      },
      whatsAppNumber: {
        title: " رقم الواتساب الخاص بولي الامر ",
        placeholder: " 010xxxxxxxx ",
        optional: " (اختياري إذا كان مختلف عن رقم الموبايل) ",
      },
      email: {
        title: " البريد الإلكتروني لولي الأمر ",
        placeholder: "example@gmail.com",
        optional: " (اختياري) ",
      },
      childName: {
        title: "اسم الطالب",
        placeholder: "أدخل اسم الطالب",
      },
      childAge: {
        title: " عمر الطالب ",
        placeholder: "أدخل العمر",
        range: " (بين 6-18) ",
      },
      childGrade: {
        title: "الصف الدراسي للطالب",
        placeholder: "اختر الصف",
      },
      learnedProgramming: {
        title: "هل سبق وتعلم الطالب البرمجة من قبل؟",
        yes: "نعم",
        no: "لا",
      },
      previousCourse: {
        title: "هل سبق وشارك الطالب في مسابقات برمجه؟",
        yes: "نعم",
        no: "لا",
      },
      courseName: {
        title: " اسم المسابقه و المركز الحاصل عليه ",
        placeholder: "أدخل اسم المسابقة والمركز",
      },
      hasComputer: {
        title: "هل لدى الطالب لابتوب أو كمبيوتر؟",
        yes: "نعم",
        no: "لا",
      },
      courseType: {
        title: "مكان التدريب المفضل",
        online: "اونلاين",
        offline: "أوفلاين",
        location: "(في مقر الأكاديمية بالمنصورة)",
      },
      contactForDetails: {
        title: "هل تريد مزيد من التفاصيل او التواصل ؟",
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
