
import { Translations } from './types';

const arabicTranslations: Translations = {
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
      title: "هل سبق ان تعلم الطالب البرمجة من قبل؟",
      yes: "نعم",
      no: "لا",
    },
    previousCourse: {
      title: "هل سبق ان شارك الطالب في مسابقات برمجه؟",
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
};

export default arabicTranslations;
