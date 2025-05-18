import { LoginPage } from "@/pages/auth/login/login";
import { HomePage } from "@/pages/home/page";
import { RegisterPage } from "@/pages/auth/register/register";
import { createBrowserRouter } from "react-router";
import { ROUTES } from "@/kernel/routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.login,
    element: <LoginPage />,
  },
  {
    path: ROUTES.signup,
    element: <RegisterPage />,
  },
]);
