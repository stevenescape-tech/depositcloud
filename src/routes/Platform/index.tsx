import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Platform } from "./screens/Platform";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Platform />
  </StrictMode>,
);
