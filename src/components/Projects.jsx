import {
  FaUserMd,
  FaStethoscope,
  FaLeaf,
  FaChrome,
  FaMapMarkedAlt,
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import { projects } from '../data.js'
import Reveal from './Reveal.jsx'

const iconMap = {
  FaUserMd,
  FaStethoscope,
  FaLeaf,
  FaChrome,
  FaMapMarkedAlt,
}

function ProjectCard({ project, index }) {
  const Icon = iconMap[project.icon]
  const { overview } = project

  return (
    <Reveal
      key={project.title}
      className="project-card"
      delay={index * 100}
    >
      {!overview && Icon && (
        <div className="project-card__header">
          <Icon className="project-card__icon" aria-hidden="true" />
        </div>
      )}

      {overview && (
        <div className="project-card__media">
          <img
            src={overview.src}
            alt={overview.alt}
            className="project-card__image"
            style={{ objectFit: overview.fit }}
            loading="lazy"
            width="640"
            height="360"
          />
          <span className="project-card__label">{overview.label}</span>
          <div className="project-card__media-overlay" aria-hidden="true" />
        </div>
      )}

      <div className="project-card__body">
        {project.client && (
          <div className="project-card__client">
            <img
              src={project.client.logo}
              alt={project.client.alt}
              className="project-card__client-logo"
              loading="lazy"
              width="24"
              height="24"
            />
            <span className="project-card__client-name">{project.client.name}</span>
          </div>
        )}
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span
              key={`${project.title}-${tag}`}
              className="project-card__tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card__actions">
        <a
          href={project.github}
          className="project-card__button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} repository on GitHub`}
        >
          <FaGithub aria-hidden="true" />
          Repository
        </a>
        {project.live && (
          <a
            href={project.live}
            className="project-card__button project-card__button--live"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
          >
            <FaExternalLinkAlt aria-hidden="true" />
            Live Demo
          </a>
        )}
      </div>
    </Reveal>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">Projects</h2>
          <div className="section__underline" />
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
