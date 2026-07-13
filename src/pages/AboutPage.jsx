import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle, FiShield, FiUsers } from 'react-icons/fi'
import {
  Breadcrumbs,
  ButtonLink,
  CountUpStat,
  Seo,
  SectionHeading,
  Timeline,
} from '../components'
import {
  aboutStats,
  certificates,
  companyStory,
  coreValues,
  industries,
  missionVision,
  qualityPolicy,
  team,
  timeline,
  whyChooseUs,
  buildUrl,
} from '../siteContent'

export function AboutPage() {
  return (
    <div className="page-stack">
      <Seo
        title="About Us"
        description="Learn about Pavanasuta Enterprises, our mission, values, engineers, quality policy, safety standards, and track record."
        path="/about-us"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: buildUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'About Us', item: buildUrl('/about-us') },
            ],
          },
        ]}
      />

      <section className="page-hero">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'About Us' }]} />
        <p className="eyebrow">About Us</p>
        <h1>A premium engineering partner with operational discipline.</h1>
        <p>
          The company story is built around dependable delivery, strong documentation, and
          maintenance support that continues long after installation.
        </p>
        <div className="hero-actions">
          <ButtonLink to="/contact">Talk to Us</ButtonLink>
          <ButtonLink to="/projects" variant="outline">
            View Projects
          </ButtonLink>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Company Story"
          title="How the team grew."
          summary="The story stays short because the work is more important than the slogan."
        />
        <div className="story-grid">
          <motion.div
            className="surface-panel detail-text"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
          >
            {companyStory.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </motion.div>
          <div className="stats-panel stats-panel-about">
            {aboutStats.map((item) => (
              <CountUpStat key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Mission and Vision"
          title="What guides the work."
          summary="The mission and vision keep the team focused on clarity, uptime, and client trust."
        />
        <div className="feature-grid">
          {missionVision.map((item) => (
            <motion.article
              key={item.title}
              className="feature-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4 }}
            >
              <FiAward aria-hidden="true" />
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Core Values"
          title="How the team works."
          summary="The values are practical enough to measure in the field."
        />
        <div className="feature-grid">
          {coreValues.map((item) => (
            <motion.article
              key={item.title}
              className="feature-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35 }}
            >
              <FiCheckCircle aria-hidden="true" />
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind the delivery."
          summary="The site highlights roles and capabilities rather than trying to overproduce personalities."
        />
        <div className="team-grid">
          {team.map((item) => (
            <motion.article
              key={item.name}
              className="team-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4 }}
            >
              <FiUsers aria-hidden="true" />
              <strong>{item.name}</strong>
              <span>{item.role}</span>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Our Engineers"
          title="Discipline coverage across the MEP stack."
          summary="The page gives a clear view of who handles what without a heavy corporate directory."
        />
        <div className="feature-grid">
          {[
            'Mechanical engineers focus on cooling, ventilation, plant rooms, and commissioning.',
            'Electrical engineers work on distribution, controls, monitoring, and lighting systems.',
            'Fire and safety engineers keep compliance, alarm logic, and response paths clear.',
            'Service engineers keep AMC visits, breakdown response, and reporting consistent.',
          ].map((item) => (
            <motion.article
              key={item}
              className="feature-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35 }}
            >
              <FiShield aria-hidden="true" />
              <strong>{item}</strong>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A quick reminder of the value proposition."
          summary="These same qualities carry across the home page and the service pages."
        />
        <div className="feature-grid">
          {whyChooseUs.map((item) => (
            <motion.article
              key={item.title}
              className="feature-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35 }}
            >
              <FiCheckCircle aria-hidden="true" />
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Quality Policy"
          title="A practical quality standard."
          summary="The quality policy is less about language and more about the routine that keeps the work reliable."
        />
        <div className="quality-panel surface-panel">
          {qualityPolicy.map((item) => (
            <span key={item}>
              <FiCheckCircle aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Safety"
          title="Safety is part of the promise."
          summary="The team treats safe execution as a core delivery requirement."
        />
        <div className="feature-grid">
          {[
            'Permit control and isolation',
            'Toolbox talks and PPE discipline',
            'Work area housekeeping and access control',
            'Testing and commissioning done with traceable sign-off',
          ].map((item) => (
            <motion.article
              key={item}
              className="feature-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35 }}
            >
              <FiShield aria-hidden="true" />
              <strong>{item}</strong>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Certificates"
          title="Documents that support the story."
          summary="The site displays the disciplines behind quality, safety, and structured service."
        />
        <div className="certificate-grid">
          {certificates.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                className="certificate-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35 }}
              >
                <Icon aria-hidden="true" />
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Timeline"
          title="Milestones with a real operational arc."
          summary="A timeline helps a visitor understand how the company evolved without reading a long essay."
        />
        <Timeline items={timeline} />
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Industries Served"
          title="Sector breadth matters."
          summary="Different sectors need different delivery rhythms, but the same quality standard."
        />
        <div className="icon-card-grid">
          {industries.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                className="icon-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35 }}
              >
                <Icon aria-hidden="true" />
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band-copy">
          <p className="eyebrow">Call To Action</p>
          <h2>We’d be glad to scope your next project.</h2>
          <p>Start with a call, a WhatsApp message, or a quick quote form.</p>
        </div>
        <div className="cta-band-actions">
          <ButtonLink to="/contact" variant="primary">
            Get Free Quote
          </ButtonLink>
          <ButtonLink to="/careers" variant="outline">
            Careers
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}
