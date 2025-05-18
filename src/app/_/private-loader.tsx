import { Outlet } from "react-router";

export const PrivateLoader = () => {
  //   const { isAuthenticated } = useAuth();
  //   if (!isAuthenticated) {
  //     return <Navigate to={ROUTES.login} />;
  //   }

  return (
    <>
      <Outlet />
    </>
  );
};
