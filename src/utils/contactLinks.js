export const MAIL_TO = 'edwardsamuel9697@gmail.com'

function buildMailto({ to, subject, body }) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  return `mailto:${to}?${params.toString()}`
}

function buildGmail({ to, subject, body }) {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to })
  if (subject) params.set('su', subject)
  if (body) params.set('body', body)
  return `https://mail.google.com/mail/?${params.toString()}`
}

export function buildMailtoUrl({ subject = '', body = '' } = {}) {
  return buildMailto({ to: MAIL_TO, subject, body })
}

export function buildGmailUrl({ subject = '', body = '' } = {}) {
  return buildGmail({ to: MAIL_TO, subject, body })
}

/**
 * Open Gmail web compose synchronously in a new tab.
 * Returns true if window.open returned a non-null handle,
 * false if blocked by a popup blocker or otherwise unavailable.
 */
export function openGmailCompose({ subject = '', body = '' } = {}) {
  const url = buildGmailUrl({ subject, body })
  const win = window.open(url, '_blank', 'noopener,noreferrer')
  return !!win
}
