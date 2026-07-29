import { useEffect, useState } from 'react'
import {
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from 'react-icons/fa'
import { profile, navLinks } from '../data.js'

const iconById = {
  home: FaHome,
  about: FaUser,
  skills: FaTools,
  experience: FaBriefcase,
  projects: FaProjectDiagram,
  contact: FaEnvelope,
}

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const ids = navLinks.map((link) => link.id)
      const position = window.scrollY + window.innerHeight / 3

      for (let i = ids.length - 1; i >= 0; i--) {
        const section = document.getElementById(ids[i])
        if (section && section.offsetTop <= position) {
          setActiveSection(ids[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fab-nav" aria-label="Primary navigation">
      <div className="fab-nav__bar" role="tablist">
        {navLinks.map((link) => {
          const Icon = iconById[link.id]
          const isActive = activeSection === link.id
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`fab-nav__link ${isActive ? 'fab-nav__link--active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              aria-current={isActive ? 'page' : undefined}
              role="tab"
              aria-selected={isActive}
              aria-label={link.label}
              title={link.label}
            >
              {Icon && <Icon className="fab-nav__icon" aria-hidden="true" />}
              <span className="fab-nav__label">{link.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
