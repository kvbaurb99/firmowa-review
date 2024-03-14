import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { phone, message, email, name, file } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "webh",
      host: "smtp.webh.email",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const attachments = file
    ? [
        {
          filename: 'file.pdf',
          content: Buffer.from(file.split('base64,')[1], 'base64'),
        },
      ]
    : [];

    const mailOption = {
      from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      to: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      subject: `<${email}> nowa wiadomość od ${name}`,
      html: `
        <p>Imię: ${name}</p>
        <p>Email: ${email}</p>
        <p>Telefon: ${phone}</p>
        <p>${message}</p>
        `,
        attachments,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Failed to Send Email`, error: error },
      { status: 500 }
    );
  }
}
