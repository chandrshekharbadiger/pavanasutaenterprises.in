import { motion } from 'framer-motion'
import {
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhoneCall,
  FiShield,
} from 'react-icons/fi'
import { Breadcrumbs, ButtonLink, FaqAccordion, Seo, SectionHeading } from '../components'
import { ContactInquiryForm } from '../inquiryComponents'
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

      <section className="page-hero contact-hero">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} />
        <p className="eyebrow">Contact</p>
        <h1>Start the conversation with the engineering team.</h1>
        <p>
          Use the modern enquiry flow below for project quotes, site visits, AMC discussions,
          or a quick technical call. The layout stays simple, but the routing is built for
          enterprise-grade follow-up.
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
            Send Inquiry
          </ButtonLink>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Contact Points"
          title="Visit, call, or write to us."
          summary="The details stay practical and direct while the presentation feels more premium and structured."
        />
        <div className="contact-grid">
          {contactMethods.map((item) => {
            const icons = {
              'Office Address': FiMapPin,
              Phone: FiPhoneCall,
              Email: FiMail,
              'Working Hours': FiClock,
            }
            const Icon = icons[item.title] || FiShield

            return (
              <motion.article
                key={item.title}
                className="contact-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
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
          eyebrow="Enquiries"
          title="Share the brief and we will route it properly."
          summary="The form keeps validation, privacy consent, spam protection, and response expectations in one place."
        />
        <div className="contact-inquiry-layout">
          <motion.div
            className="contact-inquiry-copy"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
          >
            <div className="contact-copy-card">
              <p className="enterprise-kicker">Why teams use this form</p>
              <h3>Structured fields make faster follow-up possible.</h3>
              <p>
                From service selection to state and city routing, the information comes
                through in a format the engineering team can act on quickly without extra
                back-and-forth.
              </p>
            </div>
            <div className="enterprise-promise-list">
              {[
                'Inline validation keeps submissions clean and complete',
                'Cloudflare Turnstile support is built in for production spam protection',
                'Customers receive a professional confirmation email automatically',
              ].map((item) => (
                <span key={item}>
                  <FiShield aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
            <div className="map-frame contact-map-frame">
              <iframe
                title="AMC MEP Solutions location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <div className="enterprise-form-shell">
            <ContactInquiryForm />
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
          <p className="eyebrow">Response Support</p>
          <h2>Need a faster response path?</h2>
          <p>Call or WhatsApp and we will route the enquiry to the right team immediately.</p>
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
