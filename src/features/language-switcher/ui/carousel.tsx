import { useEffect, useState } from "react";

import { languages } from "@/features/language-switcher/model/constants";
import { type SupportedLanguage } from "@/kernel/language";
import { cn } from "@/shared/lib/utils";
import { Card } from "@/shared/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/shared/ui/carousel";

const getLanguageIndex = (language: SupportedLanguage) => {
  const index = languages.findIndex((lang) => lang.value === language);
  if (index === -1) {
    return 0;
  }
  return index;
};

export function LangSwitchCarousel({
  currentLanguage,
  onLanguageChange,
}: {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (language: SupportedLanguage) => void;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const currentIndex = getLanguageIndex(currentLanguage);
    api.scrollTo(currentIndex);
    setCurrent(currentIndex);

    const subscription = (api: CarouselApi) => {
      setCurrent(api?.selectedScrollSnap() ?? 0);
      const currentLanguage = languages[api?.selectedScrollSnap() ?? 0].value;
      onLanguageChange(currentLanguage);
    };

    api.on("select", subscription);
    return () => {
      api.off("select", subscription);
    };
  }, [api, current, currentLanguage, onLanguageChange]);

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      orientation="vertical"
      className="w-full max-w-xs"
      setApi={setApi}
    >
      <CarouselContent className="mt-2 h-[140px]">
        {languages.map((language, index) => (
          <CarouselItem key={index} className="p-0.5 pt-1">
            <div className="p-2">
              <Card
                className={cn(
                  "flex h-full items-center justify-center rounded-md p-4 transition-all",
                  current === index && "bg-primary/20",
                )}
              >
                <span className="text-sm font-semibold">{language.label}</span>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
