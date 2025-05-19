import { useState } from "react";
import { useTranslation } from "react-i18next";

import { rolesOptions } from "./model/constants";

import { RoleType } from "@/kernel/user";
import { Layout } from "@/shared/components/navigation/layout";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Card, CardHeader } from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";

function OnboardingPage() {
  const { t } = useTranslation("onboarding");

  const [selectedRole, setSelectedRole] = useState<RoleType>();

  return (
    <Layout withoutFooter>
      <h1 className="animate-fade-in-scale text-center text-3xl font-bold">
        {t("title")}
      </h1>
      <h2 className="animate-fade-in-scale text-muted-foreground mb-7 text-center text-xl [animation-duration:0.7s]">
        {t("subtitle")}
      </h2>

      <p className="animate-fade-in-scale text-muted-foreground mb-4 text-center text-sm [animation-duration:1.2s]">
        {t("selectRole")}
      </p>

      <div className="animate-fade-in-scale mb-4 [animation-duration:1.5s]">
        <RadioGroup
          onValueChange={(value) => setSelectedRole(value as RoleType)}
          value={selectedRole}
        >
          {rolesOptions.map((role) => (
            <Card
              key={role.value}
              className={cn(
                "cursor-pointer transition-colors",
                selectedRole === role.value && "bg-primary/10",
              )}
              onClick={() => setSelectedRole(role.value)}
            >
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={role.value} id={role.value} />
                  <Label htmlFor={role.value}>{role.label(t)}</Label>
                </div>
              </CardHeader>
            </Card>
          ))}
        </RadioGroup>
      </div>

      {/* keep on the bottom of the page */}
      <div className="animate-fade-in-scale fixed right-0 bottom-10 left-0 px-4 [animation-duration:1.8s]">
        <Button className="w-full" disabled={!selectedRole}>
          Continue
        </Button>
      </div>
    </Layout>
  );
}

export const Component = OnboardingPage;
