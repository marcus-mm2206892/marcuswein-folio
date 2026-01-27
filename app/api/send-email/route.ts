import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/molecules/email-template";
import { CONTACT_DETAILS } from "../../config/data";
import { formSchema } from "../../../lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = formSchema.parse(body);

    // Check if environment variables are set
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      console.error("RESEND_FROM_EMAIL is not set");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Portfolio <${process.env.RESEND_FROM_EMAIL}>`,
      to: [CONTACT_DETAILS.email],
      replyTo: validatedData.email,
      subject: `New message from ${validatedData.name} – Portfolio Contact`,
      react: EmailTemplate({
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("API route error:", error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
