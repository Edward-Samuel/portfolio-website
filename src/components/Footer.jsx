import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { profile } from '../data.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__copy">
          © 2026 {profile.firstName} {profile.lastName}. Built with React.
        </p>

        <div className="footer__socials">
          {profile.github && (
            <a
              href={profile.github}
              className="footer__social-link"
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
              className="footer__social-link"
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
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube channel"
            >
              <FaYoutube />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="footer__social-link"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
