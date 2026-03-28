import { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext();

const LANGUAGES = ['en', 'de', 'ru'];
const LANGUAGE_LABELS = { en: 'EN', de: 'DE', ru: 'RU' };
const STORAGE_KEY = 'apex-lang';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = window?.localStorage?.getItem?.(STORAGE_KEY);
      return LANGUAGES.includes(saved) ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = useCallback((lang) => {
    if (LANGUAGES.includes(lang)) {
      setLanguageState(lang);
      try { window?.localStorage?.setItem?.(STORAGE_KEY, lang); } catch {}
      document.documentElement.lang = lang;
    }
  }, []);

  const t = useCallback((obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[language] || obj.en || '';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, LANGUAGES, LANGUAGE_LABELS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

// UI translations
export const UI_TEXT = {
  nav: {
    news: { en: 'News', de: 'Nachrichten', ru: 'Новости' },
    fighters: { en: 'Fighters', de: 'Kämpfer', ru: 'Бойцы' },
    events: { en: 'Events', de: 'Events', ru: 'События' },
    rankings: { en: 'Rankings', de: 'Rangliste', ru: 'Рейтинг' },
  },
  home: {
    latestIntel: { en: 'Latest Intelligence', de: 'Neueste Berichte', ru: 'Последние новости' },
    p4pTop: { en: 'Pound for Pound Top', de: 'Pfund für Pfund Top', ru: 'Лучшие P4P' },
    upcomingFixtures: { en: 'Upcoming Fixtures', de: 'Kommende Kämpfe', ru: 'Предстоящие события' },
    readMore: { en: 'Read More', de: 'Weiterlesen', ru: 'Читать далее' },
    allArticles: { en: 'All Articles', de: 'Alle Artikel', ru: 'Все статьи' },
    mmaFighter: { en: 'MMA Fighter', de: 'MMA-Kämpfer', ru: 'Боец ММА' },
    record: { en: 'Record', de: 'Bilanz', ru: 'Рекорд' },
    reach: { en: 'Reach', de: 'Reichweite', ru: 'Размах рук' },
    stance: { en: 'Stance', de: 'Haltung', ru: 'Стойка' },
  },
  article: {
    backToNews: { en: '← Back to News', de: '← Zurück zu Nachrichten', ru: '← Назад к новостям' },
    minRead: { en: 'min read', de: 'Min. Lesezeit', ru: 'мин. чтения' },
    relatedArticles: { en: 'Related Articles', de: 'Verwandte Artikel', ru: 'Похожие статьи' },
    share: { en: 'Share', de: 'Teilen', ru: 'Поделиться' },
  },
  fighters: {
    title: { en: 'Fighter Profiles', de: 'Kämpferprofile', ru: 'Профили бойцов' },
    division: { en: 'Division', de: 'Gewichtsklasse', ru: 'Дивизион' },
    allDivisions: { en: 'All Divisions', de: 'Alle Klassen', ru: 'Все дивизионы' },
  },
  footer: {
    privacy: { en: 'Privacy Policy', de: 'Datenschutz', ru: 'Конфиденциальность' },
    imprint: { en: 'Imprint', de: 'Impressum', ru: 'Импрессум' },
    terms: { en: 'Terms', de: 'AGB', ru: 'Условия' },
    tagline: { en: 'Independent MMA Analysis & Coverage', de: 'Unabhängige MMA-Analyse & Berichterstattung', ru: 'Независимый анализ и освещение ММА' },
  },
  legal: {
    impressumTitle: { en: 'Legal Notice (Impressum)', de: 'Impressum', ru: 'Импрессум (юридическое уведомление)' },
    datenschutzTitle: { en: 'Privacy Policy', de: 'Datenschutzerklärung', ru: 'Политика конфиденциальности' },
    agbTitle: { en: 'Terms and Conditions', de: 'Allgemeine Geschäftsbedingungen', ru: 'Условия использования' },
  },
  categories: {
    EVENT_RECAP: { en: 'Event Recap', de: 'Event-Rückblick', ru: 'Обзор события' },
    BREAKING: { en: 'Breaking', de: 'Eilmeldung', ru: 'Срочно' },
    DEEP_DIVE: { en: 'Deep Dive', de: 'Tiefenanalyse', ru: 'Глубокий анализ' },
    PREVIEW: { en: 'Preview', de: 'Vorschau', ru: 'Превью' },
    SYS_UPDATE: { en: 'Update', de: 'Update', ru: 'Обновление' },
  },
};
