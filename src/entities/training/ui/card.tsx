import { Check, CircleDot, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import { formatDate, formatTime } from "../domain/format";

import type { SupportedLanguage } from "@/kernel/language";
import { Card } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";

export const TrainingCard = ({
  title,
  date,
  gym,
  group,
  status,
}: {
  title: React.ReactNode;
  date: string;
  gym?: React.ReactNode;
  group?: React.ReactNode;
  status: "pending" | "completed" | "cancelled";
}) => {
  const { i18n } = useTranslation();
  const locale = i18n.language as SupportedLanguage;

  const formattedDate = formatDate(date, { locale });
  const time = formatTime(date, { locale });

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h4 className="text-xl leading-none font-medium">{title}</h4>
          <p className="text-muted-foreground text-sm font-bold">
            {formattedDate}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {time && <div className="text-2xl font-bold">{time}</div>}
          {
            {
              pending: <CircleDot className="h-4 w-4 text-yellow-500" />,
              completed: <Check className="h-4 w-4 text-green-500" />,
              cancelled: <X className="h-4 w-4 text-red-500" />,
            }[status]
          }
        </div>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-sm">
        {gym && (
          <span className="bg-primary rounded-md px-2 py-1 text-white">
            {gym}
          </span>
        )}
        {gym && group && <Separator orientation="vertical" className="w-2" />}
        {group && <span>{group}</span>}
      </div>
    </Card>
  );
};
