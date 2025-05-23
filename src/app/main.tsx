import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./_/app.tsx";

import "./_/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
