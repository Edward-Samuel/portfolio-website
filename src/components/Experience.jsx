import { experiences } from '../data.js'
import Reveal from './Reveal.jsx'

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">Experience</h2>
          <div className="section__underline" />
        </Reveal>

        <div className="experience__timeline">
          {experiences.map((entry, index) => (
            <Reveal key={`${entry.company}-${entry.role}-${index}`} className="experience__entry" delay={index * 100}>
              <div className="experience__marker" />
              <div className="experience__card">
                <div className="experience__header">
                  <h3 className="experience__role">{entry.role}</h3>
                  <span className="experience__company">{entry.company}</span>
                </div>
                <div className="experience__meta">
                  <span className="experience__duration">{entry.duration}</span>
                  {entry.location && (
                    <span className="experience__location">{entry.location}</span>
                  )}
                </div>
                {entry.description && (
                  <div className="experience__description">
                    {entry.description.split('\n').map((line, i) =>
                      line.trim() ? <p key={i}>{line}</p> : null
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
