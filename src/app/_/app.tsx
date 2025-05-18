import { RouterProvider } from "react-router";

import { Providers } from "@/app/_/providers";
import { router } from "@/app/_/router";

export function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}
