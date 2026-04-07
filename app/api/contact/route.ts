import { EmailClient } from "@azure/communication-email";
import { NextResponse } from "next/server";

type ContactPayload = {
  email?: string;
  message?: string;
  name?: string;
  subject?: string;
};

const connectionString =
  process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
const senderAddress = process.env.SENDER_EMAIL_ADDRESS;

const emailClient = connectionString
  ? new EmailClient(connectionString)
  : null;

export async function POST(request: Request) {
  const { name, email, subject, message } =
    (await request.json()) as ContactPayload;

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  if (!emailClient || !senderAddress) {
    return NextResponse.json(
      { error: "Server configuration error: email client not ready." },
      { status: 500 },
    );
  }

  try {
    const poller = await emailClient.beginSend({
      senderAddress,
      content: {
        subject: `Portfolio Contact: ${subject}`,
        plainText: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>New Message from Portfolio</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="padding: 10px; border: 1px solid #ccc; background: #f9f9f9;">
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        `,
      },
      recipients: {
        to: [
          { address: "derekmiracledavid@gmail.com" },
          { address: "derek@derekcodes.online" },
        ],
      },
    });

    await poller.pollUntilDone();

    return NextResponse.json(
      { success: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
