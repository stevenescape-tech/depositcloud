import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TermsOfService } from "./screens/TermsOfService";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TermsOfService />
  </StrictMode>,
);
