import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Invalid Name",
      required_error: "Please provide your name",
    })
    .min(1, {
      message: "Please provide your name",
    }),
  email: z
    .string({
      invalid_type_error: "Invalid Email",
      required_error: "Please provide your email",
    })
    .min(1, {
      message: "Please provide your email",
    }),

  message: z
    .string({
      invalid_type_error: "Invalid Message",
      required_error: "Please provide your message",
    })
    .min(1, {
      message: "Please provide your message",
    }),
});
