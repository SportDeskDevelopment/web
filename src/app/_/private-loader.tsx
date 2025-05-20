import { ROUTES } from "@/kernel/routes";
import { appSessionStore } from "@/kernel/session";
import { redirect } from "react-router";

export const authGuard = () => {
    if (!appSessionStore.getSessionToken()) {
      return redirect(ROUTES.login);
    }
    return null;
};
