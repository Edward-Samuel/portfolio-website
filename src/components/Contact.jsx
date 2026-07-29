import { useState } from 'react'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { profile } from '../data.js'
import {
  MAIL_TO,
  buildGmailUrl,
  buildMailtoUrl,
  openGmailCompose,
} from '../utils/contactLinks.js'
import Reveal from './Reveal.jsx'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setStatus('idle')
  }

  const showCopied = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(MAIL_TO)
      showCopied()
    } catch {
      // deliberate: ignore clipboard errors; the address is visible
    }
  }

  const composedSubject = () =>
    form.name
      ? `Portfolio Contact from ${form.name}`
      : "Hi Edward — Let's connect"

  const composedBody = () =>
    `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`

  const gmailUrl = () =>
    buildGmailUrl({ subject: composedSubject(), body: composedBody() })

  const mailtoUrl = () =>
    buildMailtoUrl({ subject: composedSubject(), body: composedBody() })

  const handleSubmit = (e) => {
    e.preventDefault()

    const gmail = gmailUrl()
    const win = window.open(gmail, '_blank', 'noopener,noreferrer')

    if (win) {
      setStatus('opened')
    } else {
      setStatus('blocked')
    }
  }

  const resetForm = () => {
    setStatus('idle')
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">Contact Me</h2>
          <div className="section__underline" />
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info">
            <h3 className="contact__heading">Let's connect</h3>
            <p className="contact__text">
              I'm open to internships, freelance projects, and collaborations. Reach out and I'll get back to you as soon as possible.
            </p>

            <div className="contact__email-row">
              <a href={`mailto:${MAIL_TO}`} className="contact__email">
                <MdEmail className="contact__email-icon" />
                {MAIL_TO}
              </a>
              <button
                type="button"
                className="contact__copy-button"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? 'Copied!' : 'Copy email'}
              </button>
            </div>

            <div className="contact__location">
              <MdLocationOn className="contact__location-icon" />
              {profile.location}
            </div>

            <div className="contact__socials">
              {profile.github && (
                <a
                  href={profile.github}
                  className="contact__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              )}
              {profile.linkedIn && (
                <a
                  href={profile.linkedIn}
                  className="contact__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
              {profile.youtube && (
                <a
                  href={profile.youtube}
                  className="contact__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube channel"
                >
                  <FaYoutube />
                </a>
              )}
              <a
                href={`mailto:${MAIL_TO}`}
                className="contact__social-link"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </div>
          </Reveal>

          <Reveal className="contact__form-wrapper" delay={150}>
            {status === 'opened' ? (
              <div className="contact__success" role="status" aria-live="polite">
                <h3 className="contact__success-title">
                  Gmail compose opened
                </h3>
                <p className="contact__success-text">
                  Review and send your message there. Your form information is still below if you need it.
                </p>
                <button
                  type="button"
                  className="contact__button contact__button--ghost"
                  onClick={resetForm}
                >
                  Back to form
                </button>
              </div>
            ) : status === 'blocked' ? (
              <div className="contact__success" role="alert" aria-live="polite">
                <h3 className="contact__success-title">
                  Could not open Gmail
                </h3>
                <p className="contact__success-text">
                  Your browser may have blocked the pop-up. Choose an option below or send the message from your own email app.
                </p>

                <div className="contact__fallback-actions">
                  <a
                    href={gmailUrl()}
                    className="contact__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdEmail className="contact__button-icon" aria-hidden="true" />
                    Open Gmail
                  </a>
                  <a
                    href={mailtoUrl()}
                    className="contact__copy-button contact__copy-button--inline"
                  >
                    Try mailto
                  </a>
                </div>

                <p className="contact__success-text">
                  Or email me directly at{' '}
                  <a href={`mailto:${MAIL_TO}`} className="contact__success-link">
                    {MAIL_TO}
                  </a>.
                </p>

                <div className="contact__fallback-actions">
                  <button
                    type="button"
                    className="contact__copy-button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                  >
                    {copied ? 'Copied!' : 'Copy email address'}
                  </button>
                  <button
                    type="button"
                    className="contact__button contact__button--ghost"
                    onClick={resetForm}
                  >
                    Back to form
                  </button>
                </div>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <label htmlFor="name" className="contact__label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email" className="contact__label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="message" className="contact__label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__textarea"
                  rows="5"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />

                <button type="submit" className="contact__button">
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
