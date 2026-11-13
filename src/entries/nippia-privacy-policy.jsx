import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "../index.css";
import NippiaPrivacyPolicyPage from "../pages/NippiaPrivacyPolicyPage";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <NippiaPrivacyPolicyPage />
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
