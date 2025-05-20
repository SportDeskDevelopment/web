import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { ROUTES } from "@/kernel/routes";
import { RoleType } from "@/kernel/user";
import { getApiError } from "@/shared/api/errors";
import { userApi } from "@/shared/api/user";
import { waitAnimationEnd } from "@/shared/lib/animation";

export const useSubmitInitRole = ({
  elements,
}: {
  elements: React.RefObject<HTMLElement | null>[];
}) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<RoleType>();

  const initRole = userApi.useInitializeUserRole({
    mutation: {
      async onSuccess(_, variables) {
        await Promise.all(
          elements.map((el) => {
            el.current?.classList.add("animate-fade-out-scale");

            return waitAnimationEnd(el.current).then(() => {
              el.current?.classList.add("opacity-0");
            });
          }),
        );

        navigate(
          {
            [RoleType.SUPERADMIN]: ROUTES.home,
            // TODO: add routes for other roles
            [RoleType.TRAINER]: ROUTES.trainerOnboarding,
            [RoleType.TRAINEE]: ROUTES.home,
            [RoleType.PARENT]: ROUTES.home,
            [RoleType.ADMIN]: ROUTES.home,
          }[variables.data.role],
        );
      },
      onError(error) {
        toast.error(getApiError(error).message);
      },
    },
  });

  const handleContinue = () => {
    if (!selectedRole || selectedRole === RoleType.SUPERADMIN) return;
    initRole.mutate({ data: { role: selectedRole } });
  };

  return {
    handleContinue,
    selectedRole,
    onChangeRole: setSelectedRole,
    isPending: initRole.isPending,
  };
};
