// import the original type declarations
import "i18next";

import coachRoom from "../../public/locales/en/coach-room.json";
import common from "../../public/locales/en/common.json";
import onboarding from "../../public/locales/en/onboarding.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
      onboarding: typeof onboarding;
      "coach-room": typeof coachRoom;
    };
  }
}
