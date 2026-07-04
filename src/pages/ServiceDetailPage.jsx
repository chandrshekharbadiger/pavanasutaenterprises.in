import { Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCheckCircle,
  FiMessageCircle,
  FiPhoneCall,
  FiStar,
} from 'react-icons/fi'
import {
  Breadcrumbs,
  ButtonLink,
  FaqAccordion,
  GalleryStrip,
  MiniGallery,
  Seo,
  SectionHeading,
  ServiceCard,
  FormField,
} from '../components'
import { serviceLookup, site, buildUrl } from '../siteContent'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = serviceLookup[slug]

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const related = service.related.map((item) => serviceLookup[item]).filter(Boolean)

  return (
    <div className="page-stack">
      <Seo
        title={`${service.title} Service`}
        description={service.summary}
        path={`/services/${service.slug}`}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: service.title,
            provider: {
              '@type': 'Organization',
              name: site.name,
              url: buildUrl('/'),
            },
            areaServed: 'India',
            description: service.summary,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: buildUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Services', item: buildUrl('/services') },
              {
                '@type': 'ListItem',
                position: 3,
                name: service.title,
                item: buildUrl(`/services/${service.slug}`),
              },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: service.faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          },
        ]}
      />

      <section className="detail-hero">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Services', path: '/services' },
            { label: service.title },
          ]}
        />
        <div className="detail-hero-grid">
          <motion.div
            className="detail-hero-copy"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">{service.categoryLabel}</p>
            <h1>{service.title}</h1>
            <p>{service.summary}</p>
            <div className="hero-tags">
              {service.features.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-actions">
              <ButtonLink href={`tel:${site.phoneDigits}`} icon={FiPhoneCall}>
                Call Now
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}`}
                variant="secondary"
                icon={FiMessageCircle}
              >
                WhatsApp
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline" icon={FiArrowRight}>
                Get Free Quote
              </ButtonLink>
            </div>
            <div className="hero-bullets">
              {service.benefits.map((item) => (
                <span key={item}>
                  <FiCheckCircle aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="detail-hero-visual surface-panel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <img
              src={site.accentImage}
              alt={`${service.title} engineering background`}
              loading="eager"
              decoding="async"
            />
            <div className="detail-hero-card detail-hero-card-top">
              <strong>Specialty</strong>
              <span>{service.specialty}</span>
            </div>
            <div className="detail-hero-card detail-hero-card-bottom">
              <strong>Service model</strong>
              <span>Sales, installation, testing, commissioning, and AMC support</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Description"
          title={`Why ${service.title} matters`}
          summary={service.categoryIntro}
        />
        <div className="detail-text-grid">
          <motion.div
            className="surface-panel detail-text"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
          >
            <p>
              {service.title} projects work best when the building use case, operational
              load, and maintenance access are considered together. The team keeps the
              scope practical, inspectable, and ready for long-term service.
            </p>
            <p>
              We support the full delivery chain: design assistance, procurement support,
              installation, testing, commissioning, and the maintenance contract that
              follows handover.
            </p>
          </motion.div>

          <motion.div
            className="surface-panel detail-checklist"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
          >
            {service.features.map((item) => (
              <span key={item}>
                <FiCheckCircle aria-hidden="true" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Features"
          title="Built around real site conditions."
          summary="The details below are written for teams that need to compare scopes, not just skim them."
        />
        <div className="feature-grid">
          {service.features.map((item) => (
            <motion.article
              key={item}
              className="feature-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35 }}
            >
              <FiCheckCircle aria-hidden="true" />
              <strong>{item}</strong>
              <p>Selected to fit a premium delivery model with a clean operational handover.</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Benefits"
          title="What the client gets after handover."
          summary="Benefits stay focused on operations, compliance, and the day-to-day reality of running the building."
        />
        <div className="benefit-grid">
          {service.benefits.map((item) => (
            <motion.article
              key={item}
              className="benefit-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35 }}
            >
              <FiStar aria-hidden="true" />
              <strong>{item}</strong>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Process"
          title="A four-step delivery rhythm."
          summary="The sequence keeps the scope organized from discovery through commissioning."
        />
        <div className="timeline">
          {service.process.map((item) => (
            <motion.article
              key={item.title}
              className="timeline-item"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35 }}
            >
              <div className="timeline-year">{item.title}</div>
              <div className="timeline-body">
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Gallery"
          title="Representative project views."
          summary="The gallery gives the page visual depth while keeping the focus on the engineering scope."
        />
        <MiniGallery
          image={site.accentImage}
          items={service.galleryCaptions.map((caption) => ({
            title: caption.split(' - ')[0],
            caption: caption.split(' - ')[1],
          }))}
        />
        <GalleryStrip items={service.gallery} image={site.accentImage} />
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions that usually come up on service scopes."
          summary="These answers keep the conversation focused and help procurement teams move faster."
        />
        <FaqAccordion items={service.faq} />
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Related Services"
          title="Keep the package aligned."
          summary="These related scopes commonly sit alongside the current service in real projects."
        />
        <div className="service-preview-grid">
          {related.map((item) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </div>
      </section>

      <section className="quote-band">
        <div>
          <p className="eyebrow">Quote Form</p>
          <h2>Tell us what the system needs to do.</h2>
          <p>
            Share the project type, timeline, and any site constraints. We’ll come back
            with a clear next step.
          </p>
        </div>
        <form className="quote-form" onSubmit={(event) => event.preventDefault()}>
          <FormField label="Project name">
            <input type="text" placeholder={`${service.title} package`} />
          </FormField>
          <FormField label="Contact email">
            <input type="email" placeholder="name@company.com" />
          </FormField>
          <FormField label="Scope notes">
            <textarea rows="4" placeholder="Add the building type, location, and timeline." />
          </FormField>
          <ButtonLink to="/contact" variant="primary">
            Submit quote request
          </ButtonLink>
        </form>
      </section>
    </div>
  )
}
