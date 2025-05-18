import { createBrowserRouter } from "react-router";

import { ROUTES } from "@/kernel/routes";
import { HomePage } from "@/pages/home/page";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.login,
    lazy: () => import("@/pages/auth/login/login.page"),
  },
  {
    path: ROUTES.signup,
    lazy: () => import("@/pages/auth/register/register.page"),
  },
]);
