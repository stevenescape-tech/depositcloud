import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LegalNotices } from "./screens/LegalNotices";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LegalNotices />
  </StrictMode>,
);
