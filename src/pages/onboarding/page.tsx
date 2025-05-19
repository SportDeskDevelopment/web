import { useTranslation } from "react-i18next";

import { Layout } from "@/shared/components/navigation/layout";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";

function OnboardingPage() {
  const { t } = useTranslation(["common1"]);

  return (
    <Layout withoutFooter>
      <h1>{t("key")}</h1>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
    </Layout>
  );
}

export const Component = OnboardingPage;
