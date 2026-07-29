import { useState } from 'react'
import { skills } from '../data.js'
import Reveal from './Reveal.jsx'

function Skills() {
  const [active, setActive] = useState(skills[0].category)

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">Skills</h2>
          <div className="section__underline" />
        </Reveal>

        <Reveal className="skills__tabs" delay={100}>
          {skills.map((group) => (
            <button
              key={group.category}
              type="button"
              className={`skills__tab ${active === group.category ? 'skills__tab--active' : ''}`}
              onClick={() => setActive(group.category)}
              aria-pressed={active === group.category}
            >
              {group.category}
            </button>
          ))}
        </Reveal>

        <div className="skills__panel">
          {skills.map((group) => (
            <div
              key={group.category}
              className={`skills__tab-panel ${active === group.category ? 'skills__tab-panel--active' : ''}`}
              role="tabpanel"
              aria-hidden={active !== group.category}
            >
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={`${group.category}-${item}`} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
