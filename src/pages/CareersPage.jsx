import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FiBriefcase, FiCheckCircle, FiUpload, FiUsers } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import {
    Breadcrumbs,
    ButtonLink,
    FormField,
    ProcessTimeline,
    SectionHeading,
    Seo,
} from '../components'
import {
    buildUrl,
    careerBenefits,
    careerOpenings,
    cultureNotes,
    hiringProcess,
} from '../siteContent'

export function CareersPage() {
  const navigate = useNavigate()
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
      role: '',
      experience: '',
      note: '',
    },
  })

  const onSubmit = async (data) => {
    await new Promise((resolve) => window.setTimeout(resolve, 700))
    reset()
    navigate('/careers/thank-you', { state: { applicant: data.name, role: data.role } })
  }

  return (
    <div className="page-stack">
      <Seo
        title="Careers"
        description="Explore current openings, company culture, hiring process, and apply online with resume upload."
        path="/careers"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: buildUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Careers', item: buildUrl('/careers') },
            ],
          },
        ]}
      />

      <section className="page-hero">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Careers' }]} />
        <p className="eyebrow">Careers</p>
        <h1>Join a team that likes organized work and real outcomes.</h1>
        <p>
          The careers page highlights current openings, the way the team works, and a
          straightforward application flow with resume upload and validation.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#apply" variant="primary">
            Apply Online
          </ButtonLink>
          <ButtonLink to="/contact" variant="outline">
            Contact HR
          </ButtonLink>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Current Openings"
          title="Open roles across delivery and service."
          summary="The openings reflect the team’s core disciplines and how the business operates in the field."
        />
        <div className="opening-grid">
          {careerOpenings.map((item) => (
            <motion.article
              key={item.title}
              className="opening-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35 }}
            >
              <div className="opening-head">
                <FiBriefcase aria-hidden="true" />
                <div>
                  <strong>{item.title}</strong>
                  <span>
                    {item.location} - {item.type}
                  </span>
                </div>
              </div>
              <p>{item.summary}</p>
              <ul>
                {item.requirements.map((req) => (
                  <li key={req}>{req}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Benefits"
          title="Why people stay."
          summary="The focus is on meaningful field exposure, support, and the opportunity to grow in a real engineering environment."
        />
        <div className="feature-grid">
          {careerBenefits.map((item) => (
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
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Company Culture"
          title="Calm, practical, and accountable."
          summary="Culture here is less about slogans and more about how the work gets done."
        />
        <div className="culture-grid">
          {cultureNotes.map((item) => (
            <motion.article
              key={item}
              className="culture-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35 }}
            >
              <FiUsers aria-hidden="true" />
              <p>{item}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Hiring Process"
          title="Simple, transparent, and respectful."
          summary="Candidates should know where they stand and what happens next."
        />
        <ProcessTimeline items={hiringProcess} />
      </section>

      <section className="section-block" id="apply">
        <SectionHeading
          eyebrow="Apply Online"
          title="Send your details and resume."
          summary="The form includes validation and a dedicated thank-you route after submission."
        />
        <div className="quote-band quote-band-inline">
          <form className="quote-form" onSubmit={handleSubmit(onSubmit)}>
            <FormField label="Full name" error={errors.name?.message}>
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
            <FormField label="Role" error={errors.role?.message}>
              <select {...register('role', { required: 'Please choose a role.' })}>
                <option value="">Select a role</option>
                {careerOpenings.map((item) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField label="Experience" error={errors.experience?.message}>
              <input
                type="text"
                placeholder="Years of relevant experience"
                {...register('experience', { required: 'Please add your experience.' })}
              />
            </FormField>
            <FormField label="Resume upload" error={errors.resume?.message}>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                {...register('resume', { required: 'Please upload a resume.' })}
              />
            </FormField>
            <FormField label="Short note" error={errors.note?.message}>
              <textarea
                rows="4"
                placeholder="Tell us what kind of role you are looking for."
                {...register('note', { required: 'Please share a short note.' })}
              />
            </FormField>
            <button type="submit" className="button-link button-link-primary" disabled={isSubmitting}>
              <FiUpload aria-hidden="true" />
              <span>{isSubmitting ? 'Submitting...' : 'Submit application'}</span>
            </button>
          </form>
          <div className="quote-side">
            <h3>Application notes</h3>
            <p>
              We review applications in order and contact shortlisted candidates with the
              next step. Use the thank-you page to confirm the submission flow.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
