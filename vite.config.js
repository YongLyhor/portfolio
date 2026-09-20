import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { Resend } from 'resend'

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

function resendMiddleware(env) {
  let resend = null
  return async (req, res) => {
    if (req.method !== 'POST') {
      res.statusCode = 405
      return res.end(JSON.stringify({ error: 'Method not allowed' }))
    }
    let raw = ''
    for await (const chunk of req) raw += chunk
    let payload
    try {
      payload = JSON.parse(raw || '{}')
    } catch {
      res.statusCode = 400
      return res.end(JSON.stringify({ error: 'Invalid JSON body' }))
    }
    const { name, email, subject, message } = payload ?? {}
    if (!name || !email || !subject || !message) {
      res.statusCode = 400
      return res.end(JSON.stringify({ error: 'Missing required fields' }))
    }
    try {
      resend ??= new Resend(env.RESEND_API_KEY)
      const html = [
        '<p><strong>New portfolio message</strong></p>',
        `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
        `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>`,
        '<p><strong>Message:</strong></p>',
        `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      ].join('\n')
      const { data, error } = await resend.emails.send({
        from: env.RESEND_FROM || 'Portfolio <onboarding@resend.dev>',
        to: env.CONTACT_TO || 'yonglyhor379@gmail.com',
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        html,
      })
      if (error) {
        res.statusCode = 400
        return res.end(JSON.stringify({ error }))
      }
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ data }))
    } catch {
      res.statusCode = 500
      res.end(JSON.stringify({ error: 'Failed to send email' }))
    }
  }
}

function resendLocalApi(env) {
  return {
    name: 'resend-local-api',
    configureServer(server) {
      server.middlewares.use('/api/send-email', resendMiddleware(env))
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue(), tailwindcss(), resendLocalApi(env)],
  }
})