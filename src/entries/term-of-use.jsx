import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "../index.css";
import TermsOfUsePage from "../pages/TermsOfUsePage";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <TermsOfUsePage />
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
