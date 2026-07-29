import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { bio, profile } from '../data.js'
import Reveal from './Reveal.jsx'

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">About Me</h2>
          <div className="section__underline" />
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__content">
            <p className="about__text">{bio.paragraph}</p>

            <div className="about__education">
              <h3 className="about__subheading">Education</h3>
              <p className="about__degree">{bio.education.degree}</p>
              <p className="about__college">{bio.education.college}</p>
              <p className="about__duration">{bio.education.duration}</p>
            </div>

            <div className="about__socials">
              {profile.linkedIn && (
                <a
                  href={profile.linkedIn}
                  className="about__social-link"
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
                  className="about__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube channel"
                >
                  <FaYoutube />
                </a>
              )}
              <a
                href={`mailto:${profile.email}`}
                className="about__social-link"
                aria-label="Email"
              >
                <MdEmail />
              </a>
            </div>
          </Reveal>

          <Reveal className="about__summary-card" delay={150}>
            <div className="about__photo">
              <img
                src={profile.photo}
                alt={`${profile.firstName} ${profile.lastName}`}
                className="about__photo-img"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div className="about__photo-fallback" aria-hidden="true">
                <span className="about__photo-initials">{profile.initials}</span>
              </div>
            </div>
            <h3 className="about__subheading">At a glance</h3>
            <ul className="about__summary-list">
              <li>BTech AI & Data Science · CIT ’26</li>
              <li>Hands-on AI/ML & Full-Stack experience</li>
              <li>Healthcare, EdTech & Tourism tech focus</li>
              <li>Coimbatore, Tamil Nadu, India</li>
            </ul>
            <div className="about__socials">
              {profile.github && (
                <a
                  href={profile.github}
                  className="about__social-link"
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
                  className="about__social-link"
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
                  className="about__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube channel"
                >
                  <FaYoutube />
                </a>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="about__address" delay={200}>
          <MdLocationOn className="about__address-icon" />
          <span>{profile.location}</span>
        </Reveal>
      </div>
    </section>
  )
}

export default About
