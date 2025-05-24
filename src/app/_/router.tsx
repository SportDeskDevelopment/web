import { createBrowserRouter, Outlet } from "react-router";

import { authGuard } from "./private-loader";

import { ROUTES } from "@/kernel/routes";
import { appSessionStore } from "@/kernel/session";
import { prefetchOnboarding } from "@/pages/initiate-role";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Outlet />,
    loader: authGuard,
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
        path: ROUTES.initiateRole,
        loader: prefetchOnboarding,
        lazy: () => import("@/pages/initiate-role/page"),
      },
      {
        path: ROUTES.trainerOnboarding,
        lazy: () => import("@/pages/trainer-onboarding/page"),
      },
      {
        path: ROUTES.coachRoom,
        lazy: {
          Component: async () =>
            (await import("@/pages/coach-room/page")).Component,
        },
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

appSessionStore.updateSessionSteam.listen((event) => {
  console.log(event);
  if (event.type === "remove") {
    router.navigate("/login");
  }
});
