import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { SmallScreenLangSwitchView } from "@/features/language-switcher/ui/small-screen-view";
import { WideScreenLangSwitchView } from "@/features/language-switcher/ui/wide-screen-view";
import type { SupportedLanguage } from "@/kernel/language";
import { useMediaQuery } from "@/shared/lib/media-query";

export function LanguageSwitcher() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  console.log("===isDesktop===", isDesktop);

  const { i18n } = useTranslation("common");

  const handleLanguageChange = useCallback(
    async (language: SupportedLanguage) => {
      await i18n.changeLanguage(language);
    },
    [i18n],
  );

  if (!isDesktop) {
    return (
      <SmallScreenLangSwitchView
        currentLanguage={i18n.language as SupportedLanguage}
        onLanguageChange={handleLanguageChange}
      />
    );
  }

  return (
    <WideScreenLangSwitchView
      currentLanguage={i18n.language as SupportedLanguage}
      onLanguageChange={handleLanguageChange}
    />
  );
}
