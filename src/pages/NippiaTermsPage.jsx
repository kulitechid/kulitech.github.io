import React from "react";
import LegalDocumentLayout from "../components/LegalDocumentLayout";
import { NIPPIA_META, NIPPIA_TERMS_DATA } from "../data/nippiaLegal";

export default function NippiaTermsPage() {
  return (
    <LegalDocumentLayout
      documentData={NIPPIA_TERMS_DATA}
      meta={NIPPIA_META}
    />
  );
}
