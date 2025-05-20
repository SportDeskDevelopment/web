export const ROUTES = {
  home: "/",
  login: "/login",
  signup: "/signup",
  otp: "/otp",
  test: "/test/:id",
  settings: "/settings",
  initiateRole: "/initiate-role",
  trainerOnboarding: "/onboarding",
} as const;

export type PathParams = {
  [ROUTES.test]: {
    id: string;
  };
};

declare module "react-router" {
  interface Register {
    params: PathParams;
  }
}
