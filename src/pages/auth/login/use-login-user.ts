import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "./schema";
import { useLoginUser } from "@/shared/api/auth";
import { toast } from "sonner";
import { z } from "zod";
import { getApiError } from "@/shared/api/errors";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const navigate = useNavigate();
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
      onError: (err, variables) => {
        const error = getApiError(err);

        if (error.status === 403) {
          toast.error("Email not confirmed");
          navigate("/otp", {
            state: { email: variables.data.email },
          });
          return;
        }

        toast.error(error.message);
      },
    },
  });

  return { form, onSubmit, loginUser };
};
