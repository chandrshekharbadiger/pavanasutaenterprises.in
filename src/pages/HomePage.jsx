import { motion, useReducedMotion } from 'framer-motion'
import {
  FiCheckCircle,
  FiClock,
  FiMessageCircle,
  FiPhoneCall,
  FiShield,
  FiStar,
  FiTool,
} from 'react-icons/fi'
import {
  Seo,
  SectionHeading,
  ButtonLink,
  CountUpStat,
  ServiceCard,
  ProjectCard,
  FaqAccordion,
  Timeline,
  MiniGallery,
} from '../components'
import {
  site,
  trustedSectors,
  heroStats,
  industries,
  whyChooseUs,
  companyOverview,
  workProcess,
  testimonials,
  certificates,
  safetyStandards,
  homeFaq,
  projects,
  services,
  serviceHighlights,
  buildUrl,
} from '../siteContent'

const featuredServices = services.slice(0, 8)
const featuredProjects = projects.slice(0, 4)
const latestProjects = projects.slice(2, 6)

function PageHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero-section home-hero">
      <Seo
        title="MEP Engineering Solutions"
        description="Complete MEP engineering solutions for HVAC, fire protection, electrical, plumbing, AMC, and responsive field support."
        path="/"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: site.name,
            url: buildUrl('/'),
            telephone: site.phone,
            email: site.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: site.address,
              addressCountry: 'IN',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homeFaq.map((item) => ({
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

      <motion.div
        className="hero-copy hero-glass"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <p className="eyebrow">Corporate Engineering</p>
        <h1>MEP Engineering Solutions</h1>
        <p className="hero-summary">
          Sales, installation, testing, commissioning, and annual maintenance contracts
          delivered with a premium engineering standard for commercial and industrial, residential
          buildings.
        </p>

        <div className="hero-tags">
          {['Sales', 'Installation', 'Testing', 'Commissioning', 'Annual Maintenance Contracts'].map(
            (item) => (
              <span key={item}>{item}</span>
            ),
          )}
        </div>

        <div className="hero-actions">
          <ButtonLink href={`tel:${site.phoneDigits}`} variant="primary" icon={FiPhoneCall}>
            Call Now
          </ButtonLink>
          <ButtonLink
            href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}`}
            variant="secondary"
            icon={FiMessageCircle}
          >
            WhatsApp
          </ButtonLink>
          <ButtonLink to="/contact" variant="outline">
            Get Free Quote
          </ButtonLink>
        </div>

        <div className="hero-proof">
          <span>
            <FiShield aria-hidden="true" />
            Premium compliance-first delivery
          </span>
          <span>
            <FiClock aria-hidden="true" />
            Responsive support and maintenance
          </span>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual-panel"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={site.accentImage}
          alt="Industrial HVAC and MEP engineering background"
          className="hero-image"
          loading="eager"
          decoding="async"
        />
        <div className="hero-image-overlay" aria-hidden="true" />
        <div className="hero-image-card hero-image-card-top">
          <FiTool aria-hidden="true" />
          <div>
            <strong>Modern engineering</strong>
            <span>HVAC, electrical, plumbing, and fire systems</span>
          </div>
        </div>
        <div className="hero-image-card hero-image-card-bottom">
          <FiStar aria-hidden="true" />
          <div>
            <strong>Enterprise ready</strong>
            <span>Testing, commissioning, AMC, and service support</span>
          </div>
        </div>
        {!reduceMotion ? <motion.div className="hero-orbit" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} /> : null}
      </motion.div>

      <div className="hero-stats">
        {heroStats.map((item) => (
          <CountUpStat
            key={item.label}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
          />
        ))}
      </div>
    </section>
  )
}

function TrustStrip() {
  return (
    <section className="section-block trust-strip">
      <SectionHeading
        eyebrow="Trusted Companies"
        title="Trusted by demanding teams and facility owners."
        summary="We work with organizations that need engineering, reliability, and maintenance discipline across living buildings and critical infrastructure."
      />
      <div className="chip-rail">
        {trustedSectors.map((item) => (
          <span key={item} className="trust-chip">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

function IndustriesSection() {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="Industries Served"
        title="Built for places where uptime matters."
        summary="The delivery style adapts to the setting while keeping the same clarity, safety, and handover discipline."
      />
      <div className="icon-card-grid">
        {industries.map((item) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.title}
              className="icon-card"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <Icon aria-hidden="true" />
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

function WhyChooseSection() {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Premium execution with a practical maintenance mindset."
        summary="The site feels corporate and modern, but the real value is the way the team handles coordination, documentation, and support after the handover."
      />
      <div className="feature-grid">
        {whyChooseUs.map((item) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.title}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Icon aria-hidden="true" />
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

function CompanySection() {
  return (
    <section className="section-block company-section">
      <SectionHeading
        eyebrow="Company Overview"
        title={companyOverview.heading}
        summary="A short story with a long operational tail: the work does not end when the tools go away."
      />
      <div className="company-layout">
        <motion.div
          className="company-copy surface-panel"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          {companyOverview.paragraphs.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <div className="company-badges">
            {serviceHighlights.map((item) => (
              <span key={item.title}>
                <FiCheckCircle aria-hidden="true" />
                {item.title}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="stats-panel">
          <CountUpStat value={420} suffix="+" label="Projects delivered" tone="quiet" />
          <CountUpStat value={24} suffix="+" label="Cities served" tone="quiet" />
          <CountUpStat value={99} suffix=".2%" label="Uptime focus" tone="quiet" />
          <CountUpStat value={92} suffix="%" label="Retention" tone="quiet" />
        </div>
      </div>
    </section>
  )
}

function WorkProcessSection() {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="Work Process"
        title="A clear path from brief to handover."
        summary="The sequence is easy to follow and easy to explain, which is exactly what project teams need when work gets busy."
      />
      <Timeline items={workProcess} />
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="Projects"
        title="Featured project stories."
        summary="The project cards highlight a mix of completed and active work across different disciplines and building types."
        action={<ButtonLink to="/projects">View all projects</ButtonLink>}
      />
      <div className="project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="Testimonials"
        title="Clients value the calm, not just the finish."
        summary="The tone of feedback matters here because the work touches live buildings, coordinated teams, and operational stakes."
      />
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <motion.article
            key={item.quote}
            className="testimonial-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FiStar aria-hidden="true" />
            <p>{item.quote}</p>
            <strong>{item.role}</strong>
            <span>{item.context}</span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function CertificatesSection() {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="Certificates"
        title="Quality, safety, and documented assurance."
        summary="The company story is strengthened by formal controls that make the site easier to trust and easier to audit."
      />
      <div className="certificate-grid">
        {certificates.map((item) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.title}
              className="certificate-card"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Icon aria-hidden="true" />
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

function SafetySection() {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="Safety Standards"
        title="Safety is built into the rhythm of the work."
        summary="A premium finish only matters if the team on site can work cleanly and the end user can operate safely."
      />
      <div className="safety-grid">
        {safetyStandards.map((item) => (
          <motion.article
            key={item.title}
            className="safety-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <FiShield aria-hidden="true" />
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function LatestProjectsSection() {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="Latest Projects"
        title="Recent momentum across active sites."
        summary="The latest work shows how the team balances live operations, phased delivery, and practical support."
      />
      <MiniGallery
        image={site.accentImage}
        items={latestProjects.map((project) => ({
          title: project.title,
          caption: `${project.category} - ${project.status}`,
        }))}
      />
    </section>
  )
}

function ServicesPreview() {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="Service Stack"
        title="A deep bench of MEP capability."
        summary="The catalog previews the discipline depth, while the detailed service pages handle the full scope and enquiry flow."
        action={<ButtonLink to="/services">Browse all services</ButtonLink>}
      />
      <div className="service-preview-grid">
        {featuredServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="FAQ"
        title="Straight answers for busy teams."
        summary="Questions tend to center on delivery, maintenance, and coordination. These answers keep the conversation moving."
      />
      <FaqAccordion items={homeFaq} />
    </section>
  )
}

function CTASection() {
  return (
    <section className="cta-band">
      <div className="cta-band-copy">
        <p className="eyebrow">Call To Action</p>
        <h2>Ready to scope a project, AMC, or service request?</h2>
        <p>
          Talk to the team about mechanical, electrical, plumbing, or fire-protection
          work and get a clear next step.
        </p>
      </div>
      <div className="cta-band-actions">
        <ButtonLink to="/contact" variant="primary">
          Get Free Quote
        </ButtonLink>
        <ButtonLink href={`tel:${site.phoneDigits}`} variant="outline">
          Call Now
        </ButtonLink>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <div className="page-stack">
      <PageHero />
      <TrustStrip />
      <ServicesPreview />
      <IndustriesSection />
      <WhyChooseSection />
      <CompanySection />
      <WorkProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CertificatesSection />
      <SafetySection />
      <LatestProjectsSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
