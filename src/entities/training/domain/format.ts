import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "@/kernel/language";

type FormatOptions = {
  locale?: SupportedLanguage;
};

export const formatTime = (date?: string, options?: FormatOptions) => {
  if (!date) return;

  const locale = {
    [SUPPORTED_LANGUAGES.en]: "en-US",
    [SUPPORTED_LANGUAGES.pl]: "pl-PL",
    [SUPPORTED_LANGUAGES.ua]: "uk-UA",
  }[options?.locale ?? SUPPORTED_LANGUAGES.ua];

  return new Date(date).toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDate = (date?: string, options?: FormatOptions) => {
  if (!date) return;

  const locale = {
    [SUPPORTED_LANGUAGES.en]: "en-US",
    [SUPPORTED_LANGUAGES.pl]: "pl-PL",
    [SUPPORTED_LANGUAGES.ua]: "uk-UA",
  }[options?.locale ?? SUPPORTED_LANGUAGES.ua];

  return new Date(date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
  });
};
