import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email("Invalid email."),
    username: z.string().min(3, "Min 3 characters."),
    name: z.string().min(3, "Min 3 characters."),
    // password: z.string().min(8, "Min 8 characters."),
    // confirmPassword: z.string().min(8, "Min 8 characters."),
    password: z.string().min(1, "Min 1 character."),
    confirmPassword: z.string().min(1, "Min 1 character."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const otpSchema = z.object({
  otp: z.string().min(6, "Min 6 characters."),
});
