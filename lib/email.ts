"use server";
import { formSchema } from "./schemas";
import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "../app/components/molecules/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: z.infer<typeof formSchema>) => {
  const { data, error } = await resend.emails.send({
    from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
    to: [emailFormData.email],
    subject: `New message from ${emailFormData.name} - Portfolio Contact`,
    react: EmailTemplate({ firstName: emailFormData.name }),
  });
};
