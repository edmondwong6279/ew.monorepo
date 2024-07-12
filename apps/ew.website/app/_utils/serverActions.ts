"use server";

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { contactSchema, sleep } from "@/utils";

export const createMessage = async (_prev: any, formData: FormData) => {
  console.log("Received contact me form submission");

  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validatedFields = contactSchema.safeParse({
    name: rawFormData.name,
    email: rawFormData.email,
    message: rawFormData.message,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      isSuccess: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // vercel closes this so we need to await
  await send({ ...validatedFields.data });

  return {
    isSuccess: true,
    errors: {
      message: undefined,
      name: undefined,
      email: undefined,
    },
  };
};

/**
 * This is where server actions are defined, specifically for
 * the contact form
 */

const transport = nodemailer.createTransport({
  service: "gmail",
  /* 
      setting service as 'gmail' is same as providing these setings:

      host: "smtp.gmail.com",
      port: 465,
      secure: true
      
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  },
});

export async function send({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  console.log("Trying to send form");

  try {
    // send email via nodemailer
    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      // cc: email, // for sending a copy to the sender
      subject: `Message from ${name} (${email})`,
      text: message.toString(),
    };

    console.log("Created mail options", mailOptions);

    await transport.sendMail(mailOptions);
    console.log("successfully sent email");
  } catch (error) {
    console.error("Error in sending form: ", error);
    throw error;
  }
}
