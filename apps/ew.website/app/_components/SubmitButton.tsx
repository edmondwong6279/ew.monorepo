"use client";

import { CTA } from "@repo/ui/cta-button";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  // TODO add loading state to buttons
  const { pending } = useFormStatus();

  return <CTA props={{ type: "submit", disabled: pending }}>Submit</CTA>;
}
