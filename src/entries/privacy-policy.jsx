import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "../index.css";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <PrivacyPolicyPage />
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
