import { Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiStar } from 'react-icons/fi'
import {
  Breadcrumbs,
  ButtonLink,
  GalleryStrip,
  MiniGallery,
  ProjectCard,
  Seo,
  SectionHeading,
} from '../components'
import { buildUrl, projectLookup, projects, site } from '../siteContent'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projectLookup[slug]

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3)

  return (
    <div className="page-stack">
      <Seo
        title={project.title}
        description={project.summary}
        path={`/projects/${project.slug}`}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: buildUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: buildUrl('/projects') },
              {
                '@type': 'ListItem',
                position: 3,
                name: project.title,
                item: buildUrl(`/projects/${project.slug}`),
              },
            ],
          },
        ]}
      />

      <section className="detail-hero">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Projects', path: '/projects' },
            { label: project.title },
          ]}
        />
        <div className="detail-hero-grid">
          <motion.div
            className="detail-hero-copy"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="hero-tags">
              <span>{project.status}</span>
              <span>{project.location}</span>
              <span>{project.duration}</span>
            </div>
            <div className="hero-bullets">
              {project.technology.map((item) => (
                <span key={item}>
                  <FiCheckCircle aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <ButtonLink to="/contact" icon={FiArrowRight}>
                Discuss a similar project
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}`}
                variant="outline"
              >
                WhatsApp
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            className="detail-hero-visual surface-panel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <img
              src={site.accentImage}
              alt={`${project.title} visual`}
              loading="eager"
              decoding="async"
            />
            <div className="detail-hero-card detail-hero-card-top">
              <strong>Client</strong>
              <span>{project.client}</span>
            </div>
            <div className="detail-hero-card detail-hero-card-bottom">
              <strong>Delivery</strong>
              <span>{project.status} - {project.duration}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Project Overview"
          title="Scope, coordination, and handover in one view."
          summary="Project pages should help a visitor understand what was delivered, where, and with what technical stack."
        />
        <div className="detail-text-grid">
          <motion.div
            className="surface-panel detail-text"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
          >
            <p>
              The delivery approach focused on buildability, clear access, and a practical
              commissioning path. That combination keeps the project easier to operate
              after the construction team demobilizes.
            </p>
            <p>
              Location: {project.location}. Client: {project.client}. Duration:{' '}
              {project.duration}. Category: {project.category}.
            </p>
          </motion.div>

          <motion.div
            className="surface-panel detail-checklist"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
          >
            {project.technology.map((item) => (
              <span key={item}>
                <FiStar aria-hidden="true" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Gallery"
          title="Representative visual set."
          summary="A project detail page needs visuals, even when the emphasis stays on the technical narrative."
        />
        <MiniGallery
          image={site.accentImage}
          items={project.gallery}
        />
        <GalleryStrip
          items={project.gallery.map((item) => `${item.title} - ${item.caption}`)}
          image={site.accentImage}
        />
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Project Technology"
          title="Technical stack used on this project."
          summary="The stack list helps the reader see the engineering direction immediately."
        />
        <div className="feature-grid">
          {project.technology.map((item) => (
            <motion.article
              key={item}
              className="feature-card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35 }}
            >
              <FiCheckCircle aria-hidden="true" />
              <strong>{item}</strong>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Related Projects"
          title="More delivery references."
          summary="A quick way to move between project stories."
        />
        <div className="project-grid">
          {related.map((item) => (
            <ProjectCard key={item.slug} project={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

