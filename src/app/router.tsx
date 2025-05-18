import { LoginPage } from "@/pages/auth/login/login";
import { HomePage } from "@/pages/home/page";
import { RegisterPage } from "@/pages/auth/register/register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
]);
