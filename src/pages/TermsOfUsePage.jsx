import React from "react";
import LegalDocumentLayout from "../components/LegalDocumentLayout";
import { TERMS_OF_USE_DATA } from "../data/kanguruSiagaLegal";

export default function TermsOfUsePage() {
  return <LegalDocumentLayout documentData={TERMS_OF_USE_DATA} />;
}
