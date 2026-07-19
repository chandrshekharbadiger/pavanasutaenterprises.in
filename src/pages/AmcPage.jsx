import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiCheckCircle, FiClock, FiMessageCircle, FiPhoneCall, FiShield, FiTool } from 'react-icons/fi'
import {
    Breadcrumbs,
    ButtonLink,
    FaqAccordion,
    FormField,
    PriceTable,
    SectionHeading,
    Seo,
} from '../components'
import { submitInquiry } from '../inquiryService'
import { amcFaq, amcMaintenance, amcPlans, buildUrl, site } from '../siteContent'

export function AmcPage() {
  const [toast, setToast] = useState(null)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    defaultValues: {
      fullName: '',
      companyName: '',
      phoneNumber: '',
      email: '',
      assets: '',
      notes: '',
    },
  })

  const onSubmit = async (values) => {
    try {
      await submitInquiry({ type: 'amc', values })
      setToast({ type: 'success', message: 'Thank you! Your AMC request has been submitted successfully.' })
      reset()
      setTimeout(() => setToast(null), 5000)
    } catch (error) {
      setToast({ type: 'error', message: error.message || 'Something went wrong. Please try again.' })
      setTimeout(() => setToast(null), 5000)
    }
  }

  return (
    <div className="page-stack">
      {toast && (
        <div className={`toast toast-${toast.type}`} style={{ position: 'fixed', bottom: '2rem', right: '2rem', padding: '1rem 1.5rem', borderRadius: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'center', zIndex: '9999', background: toast.type === 'success' ? '#d1fae5' : '#fee2e2', border: '1px solid ' + (toast.type === 'success' ? '#059669' : '#dc2626') }}>
          {toast.type === 'success' ? <FiCheckCircle /> : <FiShield />}
          <span style={{ color: toast.type === 'success' ? '#065f46' : '#991b1b' }}>{toast.message}</span>
        </div>
      )}
      <Seo
        title="Annual Maintenance Contracts"
        description="Modern AMC plans for preventive maintenance, emergency breakdown support, response time management, and operational continuity."
        path="/annual-maintenance-contracts"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: buildUrl('/') },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Annual Maintenance Contracts',
                item: buildUrl('/annual-maintenance-contracts'),
              },
            ],
          },
        ]}
      />

      <section className="page-hero">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'AMC' }]} />
        <p className="eyebrow">Annual Maintenance Contracts</p>
        <h1>Maintenance planning that protects uptime.</h1>
        <p>
          The AMC page keeps the long-term support model clear: preventive maintenance,
          emergency breakdown response, routine inspections, and defined response times.
        </p>
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
          <ButtonLink to="/contact" variant="outline">
            Request AMC Quote
          </ButtonLink>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="AMC Plans"
          title="Clear support tiers."
          summary="Each plan keeps the scope understandable, with response levels that match the operational risk of the facility."
        />
        <PriceTable plans={amcPlans} />
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Maintenance Scope"
          title="What the contract covers."
          summary="The support model is built around the real maintenance cycle rather than a vague promise of availability."
        />
        <div className="feature-grid">
          {amcMaintenance.map((item, index) => {
            const icons = [FiTool, FiShield, FiClock, FiTool]
            const Icon = icons[index] || FiTool
            return (
              <motion.article
                key={item.title}
                className="feature-card"
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
          eyebrow="Benefits"
          title="Why clients choose AMC support."
          summary="The value is not just cheaper breakdown handling. It is cleaner planning, faster response, and better records."
        />
        <div className="benefit-grid">
          {[
            'Predictable maintenance cycles and reduced surprises',
            'Faster escalation when the building is under pressure',
            'Cleaner compliance records and service documentation',
            'Longer asset life through proactive care',
          ].map((item) => (
            <motion.article
              key={item}
              className="benefit-card"
              initial={{ opacity: 0, y: 14 }}
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
          eyebrow="Contract Duration"
          title="Plan by the year, review by the quarter."
          summary="Most contracts work best with annual structure and quarterly reviews."
        />
        <div className="timeline">
          {[
            { title: '12 months', description: 'Common contract term for operational continuity and budgeting.' },
            { title: '24 months', description: 'A stronger fit for mission-critical facilities and multi-site portfolios.' },
            { title: 'Quarterly review', description: 'Service results, parts planning, and priority items stay visible.' },
          ].map((item) => (
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
          eyebrow="Request AMC Quote"
          title="Tell us what needs to stay running."
          summary="Use this form to outline your assets, support expectations, and response requirements."
        />
        <div className="quote-band quote-band-inline">
          <form className="quote-form" onSubmit={handleSubmit(onSubmit)}>
            <FormField label="Full Name" error={errors.fullName?.message}>
              <input type="text" placeholder="Your full name" {...register('fullName', validators.requiredText('Please enter your name.'))} />
            </FormField>
            <FormField label="Company name">
              <input type="text" placeholder="Facility owner or operator" {...register('companyName')} />
            </FormField>
            <FormField label="Phone" error={errors.phoneNumber?.message}>
              <input type="tel" placeholder="Phone number" {...register('phoneNumber', validators.phone)} />
            </FormField>
            <FormField label="Email" error={errors.email?.message}>
              <input type="email" placeholder="name@company.com" {...register('email', validators.email)} />
            </FormField>
            <FormField label="Assets to cover" error={errors.assets?.message}>
              <input type="text" placeholder="HVAC, panels, fire systems, plumbing" {...register('assets', validators.requiredText('Please list the assets to cover.'))} />
            </FormField>
            <FormField label="Scope notes">
              <textarea rows="4" placeholder="Add service level expectations, site count, or response needs." {...register('notes')} />
            </FormField>
            <button type="submit" className="button-link button-link-primary" disabled={isSubmitting}>
              {isSubmitting ? <FiLoader style={{ animation: 'spin 1s linear infinite' }} /> : null}
              <span>{isSubmitting ? 'Submitting...' : 'Submit AMC request'}</span>
            </button>
          </form>
          <div className="quote-side">
            <h3>Expected response time</h3>
            <p>
              Response windows are aligned with the plan tier and asset criticality.
              Priority and enterprise contracts can include stronger escalation paths.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="FAQ"
          title="Typical AMC questions."
          summary="A small set of direct answers helps operations teams make the next step quickly."
        />
        <FaqAccordion items={amcFaq} />
      </section>

      <section className="cta-band">
        <div className="cta-band-copy">
          <p className="eyebrow">Call To Action</p>
          <h2>Keep the building protected with a planned support path.</h2>
          <p>Let’s scope the assets, response windows, and maintenance cadence together.</p>
        </div>
        <div className="cta-band-actions">
          <ButtonLink href={`tel:${site.phoneDigits}`} variant="primary">
            Call Now
          </ButtonLink>
          <ButtonLink
            href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}`}
            variant="outline"
          >
            WhatsApp
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}
