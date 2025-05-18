import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "./schema";
import { useLoginUser } from "@/shared/api/auth";
import { toast } from "sonner";
import { z } from "zod";
import { useNavigate } from "react-router";
import type { EmailNotConfirmedResponse } from "@/shared/api/auth/types/emailNotConfirmedResponse";
import { isEmailNotConfirmedError } from "@/shared/api/errors";

export const useLogin = () => {
  //   const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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

  const { mutate: loginUser } = useLoginUser({
    mutation: {
      onSuccess: (data) => {
        localStorage.setItem("token", data.accessToken);
        toast.success("Login successful");
      },
      onError: (error, variables) => {

        if (isEmailNotConfirmedError(error)) {
          toast.error("Email not confirmed");
          //   navigate("/register", {
          //     state: { email: variables.data.email },
          //   });
        } else {
          toast.error(error.data.message);
        }
      },
    },
  });

  return { form, onSubmit, loginUser };
};
