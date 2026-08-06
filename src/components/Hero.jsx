import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaYoutube, FaChevronDown, FaFilePdf } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { greetings, profile } from '../data.js'
import { buildGmailUrl } from '../utils/contactLinks.js'
import AvatarModel from './AvatarModel.jsx'

function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const handleScrollDown = () => {
    const about = document.getElementById('about')
    if (about) about.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="hero__photo">
          <AvatarModel />
        </div>

        <div className="hero__text">
          <div className="hero__greeting">
            {greetings.map((greeting, i) => (
              <span
                key={greeting}
                className={`hero__greeting-text ${i === index ? 'hero__greeting-text--active' : ''}`}
                aria-hidden={i !== index}
              >
                {greeting}
              </span>
            ))}
          </div>

          <h1 className="hero__name">
            <span className="hero__name-line">{profile.firstName}</span>
            <span className="hero__name-line hero__name-line--accent">{profile.lastName}</span>
          </h1>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a
              href={profile.resume}
              className="hero__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFilePdf aria-hidden="true" />
              VIEW RESUME
            </a>
            <div className="hero__socials">
              <a
                href={profile.github}
                className="hero__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={profile.linkedIn}
                className="hero__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              {profile.youtube && (
                <a
                  href={profile.youtube}
                  className="hero__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube channel"
                >
                  <FaYoutube />
                </a>
              )}
              <a
                href={buildGmailUrl({ subject: "Hi Edward — Let's connect" })}
                className="hero__social-link"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        className="hero__scroll"
        type="button"
        aria-label="Scroll down"
        onClick={handleScrollDown}
      >
        <FaChevronDown className="hero__scroll-icon" />
      </button>
    </section>
  )
}

export default Hero
