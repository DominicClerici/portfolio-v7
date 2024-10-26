"use server"
import { Resend } from "resend"
import { EmailTemplate } from "./EmailTemplate"

const resend = new Resend(process.env.RESEND_KEY)

export default async function sendEmail(fd: FormData) {
  const values = Object.fromEntries(fd.entries())
  const { name, email, message } = values as { name: string; email: string; message: string }
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["dclerici77@gmail.com"],
      subject: `Portfolio form message from ${name}`,
      react: EmailTemplate({ message: message, email: email, name: name }),
    })

    if (error) {
      return 1
    }

    return 0
  } catch (error) {
    return 1
  }
}
