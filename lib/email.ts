"use server";
import { formSchema } from "./schemas";
import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "../app/components/molecules/email-template";
import { CONTACT_DETAILS } from "../app/config/data";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: z.infer<typeof formSchema>) => {
  const { data, error } = await resend.emails.send({
    from: `Portfolio <${process.env.RESEND_FROM_EMAIL}>`,
    to: [CONTACT_DETAILS.email],
    replyTo: emailFormData.email,
    subject: `New message from ${emailFormData.name} – Portfolio Contact`,
    react: EmailTemplate({
      name: emailFormData.name,
      email: emailFormData.email,
      message: emailFormData.message,
    }),
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
