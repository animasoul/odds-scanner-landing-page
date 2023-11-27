import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');
const TO_EMAIL = process.env.TO_EMAIL ?? 'abel@ajpartnersltd.com';
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'abel@ajpartnersltd.com';

const sendEmail = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { email, name } = req.body;
  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: `New form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${TO_EMAIL}`);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).send(`Error sending email: ${error.message}`);
    } else {
      res.status(500).send('Unknown error sending email');
    }
  }
};

export default sendEmail;
