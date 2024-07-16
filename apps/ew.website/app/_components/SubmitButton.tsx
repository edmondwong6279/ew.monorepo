"use client";

import { CTA } from "@repo/ui/cta-button";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  // TODO add loading state to buttons
  const { pending } = useFormStatus();

  console.log(pending);

  return (
    <CTA props={{ type: "submit", disabled: pending }} isLoading={pending}>
      Submit
    </CTA>
  );
}
