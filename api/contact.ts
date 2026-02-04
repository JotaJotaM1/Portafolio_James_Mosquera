import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, subject, message, company } = req.body || {};

  if (company) {
    return res.status(200).json({ message: "OK" });
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!to || !from) {
    return res.status(500).json({ message: "Email configuration missing" });
  }

  try {
    await resend.emails.send({
      from,
      to,
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });

    return res.status(200).json({ message: "Email sent" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to send" });
  }
}
