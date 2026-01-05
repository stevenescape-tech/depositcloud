import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Tablet } from "./screens/Tablet";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Tablet />
  </StrictMode>,
);
