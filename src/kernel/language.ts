export const SUPPORTED_LANGUAGES = {
  en: "en",
  pl: "pl",
  ua: "ua",
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;
