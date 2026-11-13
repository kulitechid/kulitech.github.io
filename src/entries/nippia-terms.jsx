import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "../index.css";
import NippiaTermsPage from "../pages/NippiaTermsPage";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <NippiaTermsPage />
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
