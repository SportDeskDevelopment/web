import { LoginPage } from "@/pages/auth/login/login";
import { HomePage } from "@/pages/home/page";
import { RegisterPage } from "@/pages/auth/register/register";
import { createBrowserRouter } from "react-router";
import { routes } from "@/kernel/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: routes.login(),
    element: <LoginPage />,
  },
  {
    path: routes.signup(),
    element: <RegisterPage />,
  },
]);
