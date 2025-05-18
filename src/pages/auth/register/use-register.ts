import { useConfirmEmail } from "@/shared/api/auth";

import { useRegisterUser } from "@/shared/api/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { otpSchema, registerSchema } from "./schema";
import { toast } from "sonner";
import { z } from "zod";
import { useNavigate } from "react-router";
import { ROUTES } from "@/kernel/routes";

export const useRegister = () => {
  const [step, setStep] = useState<"register" | "otp">("register");

  const navigate = useNavigate();

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const { mutate: registerUser } = useRegisterUser({
    mutation: {
      onSuccess: () => {
        toast.success("Confirmation code sent to your email");
        setStep("otp");
      },
    },
  });

  const handleRegister = (data: z.infer<typeof registerSchema>) => {
    registerUser({
      data: {
        email: data.email,
        username: data.username,
        name: data.name,
        password: data.password,
      },
    });
  };

  const { mutate: confirmEmail } = useConfirmEmail({
    mutation: {
      onSuccess: (data) => {
        toast.success("User confirmed");
        localStorage.setItem("token", data.accessToken);
        navigate(ROUTES.home);
      },
    },
  });

  const handleConfirmEmail = (data: z.infer<typeof otpSchema>) => {
    confirmEmail({
      data: {
        email: registerForm.getValues("email"),
        code: data.otp,
      },
    });
  };

  return {
    registerForm,
    otpForm,
    handleRegister,
    handleConfirmEmail,
    step,
  };
};
