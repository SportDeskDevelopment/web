import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

import { formSchema } from "./schema";

import { ROUTES } from "@/kernel/routes";
import { appSessionStore } from "@/kernel/session";
import { getApiError } from "@/shared/api/errors";
import { publicAuthApi } from "@/shared/api/public-auth";

export const useLogin = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: loginUser, isPending } = publicAuthApi.useLoginUser({
    mutation: {
      onSuccess(data) {
        appSessionStore.setSessionToken(data.accessToken);
        toast.success("Login successful");
        if (data.isFirstLogin) {
          navigate(ROUTES.onboarding);
          return;
        }
        navigate(ROUTES.home);
      },
      onError: (err, variables) => {
        const error = getApiError(err);

        if (error.status === 403) {
          toast.error("Email not confirmed. Please check your email.");
          navigate(ROUTES.otp, {
            state: { email: variables.data.email },
          });
          return;
        }

        toast.error(error.message);
      },
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    loginUser({
      data: {
        email: data.email,
        password: data.password,
      },
    });
  };

  return { form, onSubmit, loginUser, isLoading: isPending };
};
