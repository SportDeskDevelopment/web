import type { TFunction } from "i18next";

import { RoleType } from "@/kernel/user";

export const rolesOptions: {
  value: RoleType;
  label: (t: TFunction<"onboarding", undefined>) => string;
}[] = [
  {
    value: RoleType.TRAINEE,
    label: (t) => t("options.trainee"),
  },
  {
    value: RoleType.TRAINER,
    label: (t) => t("options.trainer"),
  },
  {
    value: RoleType.PARENT,
    label: (t) => t("options.parent"),
  },
] as const;
