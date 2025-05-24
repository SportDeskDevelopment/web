import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router";

import { rolesOptions } from "./model/constants";

import { ROUTES } from "@/kernel/routes";
import { RoleType } from "@/kernel/user";
import { useInitRole } from "@/pages/initiate-role/model/use-init-role";
import { useSubmitInitRole } from "@/pages/initiate-role/view-model/use-submit";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Card, CardHeader } from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";
import { PageLayout } from "@/shared/ui/page-layout";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { Header } from "@/widgets/header";

export function InitiateRolePage() {
  const { t } = useTranslation("onboarding");

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const listTitleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  const initRole = useInitRole();
  const submit = useSubmitInitRole({
    elements: [
      titleRef,
      subtitleRef,
      listTitleRef,
      listRef,
      buttonContainerRef,
    ],
  });

  if (initRole.isInitialized) {
    return <Navigate to={ROUTES.home} />;
  }

  return (
    <PageLayout header={<Header />}>
      <h1
        ref={titleRef}
        className="animate-fade-in-scale text-center text-3xl font-bold"
      >
        {t("title")}
      </h1>
      <h2
        ref={subtitleRef}
        className="animate-fade-in-scale text-muted-foreground mb-7 text-center text-xl [animation-duration:0.7s]"
      >
        {t("subtitle")}
      </h2>

      <p
        ref={listTitleRef}
        className="animate-fade-in-scale text-muted-foreground mb-4 text-center text-sm [animation-duration:1.2s]"
      >
        {t("selectRole")}
      </p>

      <div
        ref={listRef}
        className="animate-fade-in-scale mb-4 [animation-duration:1.5s]"
      >
        <RadioGroup
          onValueChange={(value) => submit.onChangeRole(value as RoleType)}
          value={submit.selectedRole}
        >
          {rolesOptions.map((role) => (
            <Card
              key={role.value}
              className={cn(
                "cursor-pointer transition-colors",
                submit.selectedRole === role.value && "bg-primary/10",
              )}
              onClick={() => submit.onChangeRole(role.value)}
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

      <div
        ref={buttonContainerRef}
        className="animate-fade-in-scale fixed right-0 bottom-10 left-0 px-4 [animation-duration:1.8s]"
      >
        <Button
          className="w-full"
          disabled={!submit.selectedRole}
          onClick={submit.handleContinue}
          isLoading={submit.isPending}
        >
          {t("continue")}
        </Button>
      </div>
    </PageLayout>
  );
}

// export const Component = InitiateRolePage;
