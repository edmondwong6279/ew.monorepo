"use client";

import { CTA } from "@repo/ui/cta-button";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <CTA props={{ type: "submit", disabled: pending }} isLoading={pending}>
      Submit
    </CTA>
  );
}
