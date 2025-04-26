import nodemailer from 'nodemailer';

// Create reusable transporter
let transporter: nodemailer.Transporter | null = null;

/**
 * Initialize the email transporter with credentials
 */
export function initEmailTransporter(config: {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  }
}) {
  try {
    transporter = nodemailer.createTransport(config);
    console.log('Email transporter initialized');
    return true;
  } catch (error) {
    console.error('Error initializing email transporter:', error);
    return false;
  }
}

/**
 * Send an email
 */
export async function sendEmail({
  to,
  subject,
  text,
  html,
  from = process.env.EMAIL_FROM || 'noreply@brilvix.com'
}: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  from?: string;
}): Promise<boolean> {
  if (!transporter) {
    console.error('Email transporter not initialized');
    return false;
  }

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html
    });

    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}