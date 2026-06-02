import { Consultation } from "../validations/consultation";

export const getAdminEmail = (consultation: Consultation) => ({
  from: "onboarding@resend.dev",

  to: "marehamza8@gmail.com",

  subject: "New Consultation Request",

  html: `
    <h2>New Consultation Request</h2>

    <p><strong>Name:</strong> ${consultation.fullName}</p>

    <p><strong>Email:</strong> ${consultation.email}</p>

    <p><strong>Phone:</strong> ${consultation.phone}</p>

    <p><strong>Business:</strong> ${consultation.businessName}</p>

    <p><strong>Industry:</strong> ${consultation.industry}</p>

    <p><strong>Services:</strong>
      ${consultation.services?.join(", ")}
    </p>

    <p><strong>Message:</strong></p>

    <p>${consultation.message}</p>

    <p>
  <strong>Submitted:</strong>
  ${new Date().toLocaleString()}
</p>
  `,
});

export const clientNotificationEmail = (email: string, fullName: string) => ({
  from: "onboarding@resend.dev",

  to: email,

  subject: "HM digital - Consultation Request received",

  html: `
    <h2>Thank You for Contacting HM Digital Solutions</h2>

<p>
Hello ${fullName},
</p>

<p>
We've received your consultation request and will review it shortly.
A member of our team will contact you within 24 hours.
</p>

<p>
We appreciate the opportunity to learn about your business.
</p>

<p>
— HM Digital Solutions
</p>
  `,
});
