import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FiMail, FiMapPin, FiPhoneCall, FiMessageCircle, FiClock, FiCheckCircle } from 'react-icons/fi'
import { Breadcrumbs, ButtonLink, FaqAccordion, FormField, Seo, SectionHeading } from '../components'
import { buildUrl, contactMethods, site } from '../siteContent'

const contactFaq = [
  {
    question: 'Do you respond to WhatsApp messages quickly?',
    answer: 'Yes. WhatsApp is monitored for quick enquiry handling and routing to the right team.',
  },
  {
    question: 'Can you handle site visits before quoting?',
    answer: 'Yes. We can schedule a visit when the scope needs a site survey or technical review.',
  },
  {
    question: 'Do you support recurring maintenance visits?',
    answer: 'Yes. AMC and ongoing support are part of the standard service model.',
  },
]

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 700))
    reset()
    setSubmitted(true)
  }

  return (
    <div className="page-stack">
      <Seo
        title="Contact"
        description="Contact AMC MEP Solutions through phone, WhatsApp, email, contact form, or Google Map."
        path="/contact"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: buildUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: buildUrl('/contact') },
            ],
          },
        ]}
      />

      <section className="page-hero">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} />
        <p className="eyebrow">Contact</p>
        <h1>Talk to the team.</h1>
        <p>
          Use the contact options below if you need a project quote, site visit, AMC
          discussion, or a quick technical call.
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
          <ButtonLink href="#contact-form" variant="outline">
            Get Free Quote
          </ButtonLink>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Office Address"
          title="Visit or call during working hours."
          summary="The contact section stays direct and practical for busy users."
        />
        <div className="contact-grid">
          {contactMethods.map((item) => {
            const icons = {
              'Office Address': FiMapPin,
              Phone: FiPhoneCall,
              Email: FiMail,
              'Working Hours': FiClock,
            }
            const Icon = icons[item.title] || FiCheckCircle
            return (
              <motion.article
                key={item.title}
                className="contact-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35 }}
              >
                <Icon aria-hidden="true" />
                <strong>{item.title}</strong>
                {item.phones ? (
                  <span className="contact-phone-list">
                    {item.phones.map((phone, index) => (
                      <span key={phone.digits}>
                        {index > 0 ? ' / ' : null}
                        <a href={`tel:${phone.digits}`}>{phone.number}</a>
                      </span>
                    ))}
                  </span>
                ) : (
                  <span>{item.value}</span>
                )}
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="section-block" id="contact-form">
        <SectionHeading
          eyebrow="Contact Form"
          title="Tell us what you need."
          summary="Validation keeps the form clean and makes it easier to route your enquiry."
        />
        <div className="quote-band quote-band-inline">
          <form className="quote-form" onSubmit={handleSubmit(onSubmit)}>
            <FormField label="Name" error={errors.name?.message}>
              <input
                type="text"
                placeholder="Your name"
                {...register('name', { required: 'Please enter your name.' })}
              />
            </FormField>
            <FormField label="Email" error={errors.email?.message}>
              <input
                type="email"
                placeholder="name@example.com"
                {...register('email', {
                  required: 'Please enter your email.',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please enter a valid email address.',
                  },
                })}
              />
            </FormField>
            <FormField label="Phone" error={errors.phone?.message}>
              <input
                type="tel"
                placeholder="Phone number"
                {...register('phone', { required: 'Please enter your phone number.' })}
              />
            </FormField>
            <FormField label="Message" error={errors.message?.message}>
              <textarea
                rows="5"
                placeholder="Tell us about the project, AMC, or service request."
                {...register('message', { required: 'Please enter a message.' })}
              />
            </FormField>
            <button type="submit" className="button-link button-link-primary" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send enquiry'}</span>
            </button>
            {submitted ? (
              <div className="form-success">
                <FiCheckCircle aria-hidden="true" />
                <span>Thanks. Your enquiry has been received.</span>
              </div>
            ) : null}
          </form>

          <div className="quote-side">
            <h3>Google Map</h3>
            <p>
              The map below opens in a familiar Google Maps frame for quick location
              reference.
            </p>
            <div className="map-frame">
              <iframe
                title="AMC MEP Solutions location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick contact answers."
          summary="A short FAQ helps reduce back-and-forth before the first call."
        />
        <FaqAccordion items={contactFaq} />
      </section>

      <section className="cta-band">
        <div className="cta-band-copy">
          <p className="eyebrow">CTA</p>
          <h2>Need a fast response?</h2>
          <p>Call or WhatsApp and we’ll route the enquiry to the right team.</p>
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
