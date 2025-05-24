import { createBrowserRouter, Outlet } from "react-router";

import { authGuard } from "./private-loader";

import { ROUTES } from "@/kernel/routes";
import { appSessionStore } from "@/kernel/session";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Outlet />,
    loader: authGuard,
    children: [
      {
        path: ROUTES.home,
        lazy: {
          Component: async () => (await import("@/pages/home/page")).HomePage,
        },
      },
      {
        path: ROUTES.settings,
        lazy: {
          Component: async () =>
            (await import("@/pages/settings/page")).SettingsPage,
        },
      },
      {
        path: ROUTES.initiateRole,
        lazy: {
          loader: async () =>
            (await import("@/pages/initiate-role/pre-loader"))
              .prefetchOnboarding,
          Component: async () =>
            (await import("@/pages/initiate-role/page")).InitiateRolePage,
        },
      },
      {
        path: ROUTES.trainerOnboarding,
        lazy: {
          Component: async () =>
            (await import("@/pages/trainer-onboarding/page"))
              .TrainerOnboardingPage,
        },
      },
    ],
  },
  {
    path: ROUTES.login,
    lazy: {
      Component: async () =>
        (await import("@/pages/auth/login/login.page")).LoginPage,
    },
  },
  {
    path: ROUTES.signup,
    lazy: {
      Component: async () =>
        (await import("@/pages/auth/register/register.page")).RegisterPage,
    },
  },
]);

appSessionStore.updateSessionSteam.listen((event) => {
  console.log(event);
  if (event.type === "remove") {
    router.navigate("/login");
  }
});
