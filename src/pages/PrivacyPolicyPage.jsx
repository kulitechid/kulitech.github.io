import React from "react";
import LegalDocumentLayout from "../components/LegalDocumentLayout";
import { PRIVACY_POLICY_DATA } from "../data/kanguruSiagaLegal";

export default function PrivacyPolicyPage() {
  return <LegalDocumentLayout documentData={PRIVACY_POLICY_DATA} />;
}
