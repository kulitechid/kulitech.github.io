import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "../index.css";
import NippiaLandingPage from "../pages/NippiaLandingPage";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <NippiaLandingPage />
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
