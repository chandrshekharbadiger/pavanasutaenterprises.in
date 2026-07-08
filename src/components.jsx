import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  FiArrowRight,
  FiBriefcase,
  FiChevronDown,
  FiChevronRight,
  FiClipboard,
  FiMessageCircle,
  FiMapPin,
  FiPhone,
  FiStar,
  FiShield,
  FiTool,
  FiWind,
} from 'react-icons/fi'
import { buildUrl, site } from './siteContent'

export function Seo({
  title,
  description,
  path = '/',
  image = site.accentImage,
  schema,
  noIndex = false,
}) {
  const canonical = buildUrl(path)
  const fullTitle = title ? `${title} | ${site.shortName}` : site.shortName

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || site.description} />
      <link rel="canonical" href={canonical} />
      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || site.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={buildUrl(image)} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || site.description} />
      <meta name="twitter:image" content={buildUrl(image)} />
      {Array.isArray(schema)
        ? schema.map((item) => (
            <script
              key={item['@type'] || item.name || item.id}
              type="application/ld+json"
            >
              {JSON.stringify(item)}
            </script>
          ))
        : schema
          ? (
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
            )
          : null}
    </Helmet>
  )
}

export function SectionHeading({ eyebrow, title, summary, action }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="section-heading-row">
        <div>
          <h2>{title}</h2>
          {summary ? <p className="section-summary">{summary}</p> : null}
        </div>
        {action ? <div className="section-action">{action}</div> : null}
      </div>
    </div>
  )
}

export function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const last = index === items.length - 1
        return (
          <span key={`${item.label}-${item.path || index}`} className="breadcrumb-item">
            {item.path && !last ? (
              <Link to={item.path}>
                {item.label}
                <FiChevronRight aria-hidden="true" />
              </Link>
            ) : (
              <span aria-current={last ? 'page' : undefined}>{item.label}</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export function ButtonLink({
  to,
  href,
  variant = 'primary',
  children,
  icon: Icon = FiArrowRight,
  className = '',
  ...rest
}) {
  const [ripple, setRipple] = useState(null)
  const classes = `button-link button-link-${variant} ${className}`.trim()
  const createRipple = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 1.15
    const x = (event.clientX || rect.left + rect.width / 2) - rect.left - size / 2
    const y = (event.clientY || rect.top + rect.height / 2) - rect.top - size / 2
    setRipple({
      key: `${Date.now()}-${Math.random()}`,
      size,
      x,
      y,
    })
  }

  useEffect(() => {
    if (!ripple) {
      return undefined
    }

    const timer = window.setTimeout(() => setRipple(null), 520)
    return () => window.clearTimeout(timer)
  }, [ripple])

  const content = (
    <>
      <span className="button-link-shine" aria-hidden="true" />
      {ripple ? (
        <span
          key={ripple.key}
          className="button-link-ripple"
          aria-hidden="true"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ) : null}
      <span className="button-link-label">{children}</span>
      {Icon ? (
        <span className="button-link-icon" aria-hidden="true">
          <Icon />
        </span>
      ) : null}
    </>
  )

  if (to) {
    return (
      <Link className={classes} to={to} onPointerDown={createRipple} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <a className={classes} href={href} onPointerDown={createRipple} {...rest}>
      {content}
    </a>
  )
}

export function ActionButton({
  type = 'button',
  variant = 'primary',
  children,
  icon: Icon = FiArrowRight,
  className = '',
  ...rest
}) {
  const [ripple, setRipple] = useState(null)
  const classes = `button-link button-link-${variant} ${className}`.trim()

  const createRipple = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 1.15
    const x = (event.clientX || rect.left + rect.width / 2) - rect.left - size / 2
    const y = (event.clientY || rect.top + rect.height / 2) - rect.top - size / 2
    setRipple({
      key: `${Date.now()}-${Math.random()}`,
      size,
      x,
      y,
    })
  }

  useEffect(() => {
    if (!ripple) {
      return undefined
    }

    const timer = window.setTimeout(() => setRipple(null), 520)
    return () => window.clearTimeout(timer)
  }, [ripple])

  return (
    <button type={type} className={classes} onPointerDown={createRipple} {...rest}>
      <span className="button-link-shine" aria-hidden="true" />
      {ripple ? (
        <span
          key={ripple.key}
          className="button-link-ripple"
          aria-hidden="true"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ) : null}
      <span className="button-link-label">{children}</span>
      {Icon ? (
        <span className="button-link-icon" aria-hidden="true">
          <Icon />
        </span>
      ) : null}
    </button>
  )
}

export function IconLink({ href, label, icon: Icon, className = '' }) {
  return (
    <a className={`icon-link ${className}`.trim()} href={href}>
      <Icon aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}

export function CountUpStat({ value, suffix = '', label, tone = 'default' }) {
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (reduceMotion) {
      return undefined
    }

    let raf = 0
    const start = performance.now()
    const duration = 1200

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.round(value * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduceMotion, value])

  return (
    <motion.article
      className={`stat-card stat-card-${tone}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </motion.article>
  )
}

export function ServiceCard({ service }) {
  const serviceIcons = {
    mechanical: FiWind,
    fire: FiShield,
    electrical: FiBriefcase,
    plumbing: FiTool,
  }
  const Icon = serviceIcons[service.group] || FiClipboard

  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45 }}
    >
      <div className="service-card-top">
        <span>{service.categoryLabel}</span>
        <div className="service-card-media" aria-hidden="true">
          <div className="service-card-media-ring" />
          <Icon />
        </div>
      </div>
      <div className="service-card-copy">
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
      </div>
      <ul>
        {service.features.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ButtonLink to={`/services/${service.slug}`} variant="outline" className="service-card-cta">
        Explore service
      </ButtonLink>
    </motion.article>
  )
}

export function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45 }}
    >
      <div className="project-card-image">
        <img src={project.image || site.accentImage} alt="" loading="lazy" decoding="async" />
        <div className="project-card-overlay" aria-hidden="true" />
        <span className={`project-status project-status-${project.status.toLowerCase()}`}>
          {project.status}
        </span>
      </div>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.location}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-info">
          <span>
            <FiMapPin aria-hidden="true" /> {project.client}
          </span>
          <span>
            <FiStar aria-hidden="true" /> {project.duration}
          </span>
        </div>
        {project.technology ? (
          <div className="project-tech">
            {project.technology.slice(0, 3).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}
        <ButtonLink to={`/projects/${project.slug}`} variant="outline">
          View details
        </ButtonLink>
      </div>
    </motion.article>
  )
}

export function MiniGallery({ items, image = site.accentImage }) {
  return (
    <div className="mini-gallery">
      {items.map((item, index) => (
        <motion.figure
          key={`${item.title}-${index}`}
          className="mini-gallery-card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4, delay: index * 0.04 }}
        >
          <img src={item.image || image} alt="" loading="lazy" decoding="async" />
          <figcaption>
            <strong>{item.title}</strong>
            <span>{item.caption}</span>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  )
}

export function GalleryStrip({ items, image = site.accentImage }) {
  return (
    <div className="gallery-strip">
      {items.map((item, index) => (
        <motion.figure
          key={`${item}-${index}`}
          className="gallery-strip-card"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.35, delay: index * 0.04 }}
        >
          <img src={image} alt="" loading="lazy" decoding="async" />
          <figcaption>{item}</figcaption>
        </motion.figure>
      ))}
    </div>
  )
}

export function FaqAccordion({ items, openIndex = 0 }) {
  const [active, setActive] = useState(openIndex)

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = active === index

        return (
          <motion.article
            key={item.question}
            className={`faq-item ${isOpen ? 'is-open' : ''}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
          >
            <button type="button" onClick={() => setActive(isOpen ? -1 : index)}>
              <span>{item.question}</span>
              <FiChevronDown aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.article>
        )
      })}
    </div>
  )
}

export function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <motion.article
          key={item.title}
          className="timeline-item"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-body">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

export function ProcessTimeline({ items }) {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.35'],
  })
  const lineFill = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={timelineRef} className="process-timeline">
      <div className="process-track" aria-hidden="true">
        <motion.span className="process-track-fill" style={{ scaleX: lineFill, scaleY: lineFill }} />
      </div>
      {items.map((item, index) => {
        const Icon = item.icon || FiClipboard

        return (
          <motion.article
            key={item.title}
            className="process-step"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -10 }}
          >
            <motion.div
              className="process-step-number"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.32, delay: index * 0.06 }}
            >
              {String(index + 1).padStart(2, '0')}
            </motion.div>
            <motion.div
              className="process-step-icon"
              whileHover={{ rotate: 8, scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 220, damping: 14 }}
            >
              <Icon aria-hidden="true" />
            </motion.div>
            <div className="process-step-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.article>
        )
      })}
    </div>
  )
}

export function PriceTable({ plans }) {
  return (
    <div className="price-table">
      {plans.map((plan) => (
        <motion.article
          key={plan.name}
          className="price-card"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.35 }}
        >
          <div className="price-card-head">
            <strong>{plan.name}</strong>
            <span>{plan.price}</span>
          </div>
          <div className="price-meta">
            <span>Contract duration: {plan.duration}</span>
            <span>Response time: {plan.response}</span>
          </div>
          <p>{plan.idealFor}</p>
          <ul>
            {plan.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  )
}

export function FormField({ label, error, children, hint }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {children}
      {hint ? <small>{hint}</small> : null}
      {error ? <em>{error}</em> : null}
    </label>
  )
}

export function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-shell">
        <div className="loading-brand">
          <span className="loading-mark" />
          <div>
            <strong>{site.shortName}</strong>
            <span>Loading premium engineering experience</span>
          </div>
        </div>
        <div className="loading-grid">
          <div className="skeleton skeleton-hero" />
          <div className="skeleton skeleton-card" />
          <div className="skeleton skeleton-card" />
          <div className="skeleton skeleton-card" />
          <div className="skeleton skeleton-card" />
        </div>
      </div>
    </div>
  )
}

export function BackToTop({ visible, onClick }) {
  return (
    <motion.button
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={onClick}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
      transition={{ duration: 0.2 }}
      aria-label="Back to top"
    >
      <FiChevronRight aria-hidden="true" />
    </motion.button>
  )
}

export function CookieBanner({ accepted, onAccept }) {
  if (accepted) return null

  return (
    <motion.aside
      className="cookie-banner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <p>
        We use lightweight cookies to improve navigation, remember your preferences, and
        keep the experience smooth.
      </p>
      <button type="button" onClick={onAccept}>
        Accept
      </button>
    </motion.aside>
  )
}

export function FloatingContacts() {
  return (
    <div className="floating-contacts" aria-label="Quick contact buttons">
      <a className="floating-contact call" href={`tel:${site.phoneDigits}`} aria-label="Call now">
        <FiPhone aria-hidden="true" />
      </a>
      <a
        className="floating-contact whatsapp"
        href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <FiMessageCircle aria-hidden="true" />
      </a>
    </div>
  )
}

export function PageShell({ children }) {
  return <div className="page-shell">{children}</div>
}
