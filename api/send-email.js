import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let body = {}
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body ?? {})
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' })
  }

  const { name, email, subject, message } = body
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const html = [
    '<p><strong>New portfolio message</strong></p>',
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>`,
    '<p><strong>Message:</strong></p>',
    `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  ].join('\n')

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_TO || 'yonglyhor379@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html,
    })

    if (error) {
      return res.status(400).json({ error })
    }
    return res.status(200).json({ data })
  } catch {
    return res.status(500).json({ error: 'Failed to send email' })
  }
}