export const ROUTES = {
  home: "/",
  login: "/login",
  signup: "/signup",
  otp: "/otp",
  test: "/test/:id",
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
