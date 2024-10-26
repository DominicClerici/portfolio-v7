import * as React from "react"

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ message, name, email }) => (
  <div>
    <h1>
      Sent from {name}, {email}
    </h1>
    <p>{message}</p>
  </div>
)
