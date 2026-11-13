import React from "react";
import LegalDocumentLayout from "../components/LegalDocumentLayout";
import { NIPPIA_META, NIPPIA_PRIVACY_POLICY_DATA } from "../data/nippiaLegal";

export default function NippiaPrivacyPolicyPage() {
  return (
    <LegalDocumentLayout
      documentData={NIPPIA_PRIVACY_POLICY_DATA}
      meta={NIPPIA_META}
    />
  );
}
