
import { Language, Translations } from './types';
import englishTranslations from './english';
import arabicTranslations from './arabic';

const translations: Record<Language, Translations> = {
  en: englishTranslations,
  ar: arabicTranslations,
};

export type { Language, Translations } from './types';
export default translations;
