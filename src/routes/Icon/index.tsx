import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Icon } from "./screens/Icon";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Icon />
  </StrictMode>,
);
