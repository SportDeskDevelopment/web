import { createBrowserRouter, Outlet } from "react-router";
import { ROUTES } from "@/kernel/routes";
import { prefetchOnboarding } from "@/pages/onboarding";
import { appSessionStore } from "@/kernel/session";
import { authGuard } from "./private-loader";

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


appSessionStore.updateSessionSteam.listen((event) => {
  console.log(event);
  if (event.type === "remove") {
    router.navigate("/login");
  }
});