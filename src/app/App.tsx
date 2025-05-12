import { router } from "@/app/router";
import { RouterProvider } from "react-router";

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
