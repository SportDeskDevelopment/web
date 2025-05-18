import { createBrowserRouter } from "react-router";

import { PrivateLoader } from "@/app/_/private-loader";
import { ROUTES } from "@/kernel/routes";
import { prefetchOnboarding } from "@/pages/onboarding";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <PrivateLoader />,
    children: [
      {
        path: ROUTES.home,
        lazy: () => import("@/pages/home/page"),
      },
      {
        path: ROUTES.settings,
        lazy: () => import("@/pages/settings/page"),
      },
      {
        path: ROUTES.onboarding,
        loader: prefetchOnboarding,
        lazy: () => import("@/pages/onboarding/page"),
      },
    ],
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
