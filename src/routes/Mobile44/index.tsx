import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Mobile44 } from "./screens/Mobile44";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Mobile44 />
  </StrictMode>,
);
