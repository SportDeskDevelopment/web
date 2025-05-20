import { LanguagesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { LangSwitchCarousel } from "@/features/language-switcher/ui/carousel";
import { type SupportedLanguage } from "@/kernel/language";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Separator } from "@/shared/ui/separator";

export function SmallScreenLangSwitchView({
  currentLanguage,
  onLanguageChange,
}: {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (language: SupportedLanguage) => void;
}) {
  const { t } = useTranslation("common");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <LanguagesIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{t("changeLanguageMobile")}</DialogTitle>
          <Separator />
        </DialogHeader>
        <LangSwitchCarousel
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
      </DialogContent>
    </Dialog>
  );
}
