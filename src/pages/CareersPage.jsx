import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiBriefcase, FiCheckCircle as FiCheck, FiCheckCircle, FiLoader, FiUpload, FiUsers } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import {
  Breadcrumbs,
  ButtonLink,
  FormField,
  ProcessTimeline,
  SectionHeading,
  Seo,
} from '../components'
import { submitInquiry } from '../inquiryService'
import {
  buildUrl,
  careerBenefits,
  cultureNotes,
  hiringProcess
} from '../siteContent'

export function CareersPage() {
  const navigate = useNavigate()
  const [toast, setToast] = useState(null)
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
    try {
      await submitInquiry({ type: 'careers', values: data })
      reset()
      navigate('/careers/thank-you', { state: { applicant: data.name, role: data.role } })
    } catch (error) {
      setToast({ type: 'error', message: error.message || 'Something went wrong. Please try again.' })
      setTimeout(() => setToast(null), 5000)
    }
  }

  return (
    <div className="page-stack">
      {toast && (
        <div className={`toast toast-${toast.type}`} style={{ position: 'fixed', bottom: '2rem', right: '2rem', padding: '1rem 1.5rem', borderRadius: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'center', zIndex: '9999', background: toast.type === 'success' ? '#d1fae5' : '#fee2e2', border: '1px solid ' + (toast.type === 'success' ? '#059669' : '#dc2626') }}>
          {toast.type === 'success' ? <FiCheck /> : <FiCheckCircle />}
          <span style={{ color: toast.type === 'success' ? '#065f46' : '#991b1b' }}>{toast.message}</span>
        </div>
      )}
      <Seo
        title="Careers at Pavanasuta Enterprises | MEP Engineering Jobs"
        description="Join Pavanasuta Enterprises and build a career in MEP engineering, site execution, safety, quality, and project delivery."
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
        <p className="eyebrow">Careers at Pavanasuta Enterprises</p>
        <h1>Help build the future through engineering excellence.</h1>
        <p>
          At Pavanasuta Enterprises, we believe our people are the foundation of our success. We welcome passionate, skilled, and motivated individuals who are eager to build a rewarding career in the MEP industry.
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
          title="Thank you for your interest."
          summary="We are not actively hiring at this time. However, we always welcome talented individuals to share their profiles — when new openings appear, we review our submissions first."
        />
        <motion.article
          className="opening-card"
          style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', padding: '48px 36px' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4 }}
        >
          <div style={{ width: '80px', height: '80px', margin: '0 auto 20px', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(176,122,50,0.14), rgba(201,162,91,0.22))', display: 'grid', placeItems: 'center', color: 'var(--primary)', border: '1px solid rgba(176,122,50,0.18)' }}>
            <FiBriefcase aria-hidden="true" style={{ width: '36px', height: '36px' }} />
          </div>
          <h3 style={{ fontSize: 'clamp(1.8rem, 2.4vw, 2.4rem)', color: 'var(--secondary)', marginBottom: '12px', fontFamily: 'var(--heading)' }}>
            No active openings right now
          </h3>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '56ch', margin: '0 auto 28px' }}>
            We appreciate your interest in Pavanasuta Enterprises. Our team is currently focused on delivering our active project pipeline. Please feel free to share your resume below — we keep all profiles on file and will reach out directly when matching opportunities open up.
          </p>
          <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <ButtonLink href="#apply" variant="primary">
              Submit your profile
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline">
              Talk to our team
            </ButtonLink>
          </div>
        </motion.article>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Benefits"
          title="Why join us?"
          summary=""
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
          title="Safe, inclusive, and collaborative."
          summary="Culture here is rooted in continuous learning, technical training, and a performance-driven environment with clear opportunities for advancement."
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
          eyebrow="Submit Profile"
          title="Share your profile with us."
          summary="Even though we don't have active openings right now, we keep every profile on file. When roles open up that match your background, we'll contact you directly."
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
            <FormField label="Role / area of interest" error={errors.role?.message}>
              <input
                type="text"
                placeholder="e.g. HVAC Site Engineer, Fire Protection Supervisor"
                {...register('role', { required: 'Please specify your area of interest.' })}
              />
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
                placeholder="Tell us about your background, what kind of roles you're interested in, and your preferred locations."
                {...register('note', { required: 'Please share a short note.' })}
              />
            </FormField>
            <button type="submit" className="button-link button-link-primary" disabled={isSubmitting}>
              {isSubmitting ? <FiLoader style={{ animation: 'spin 1s linear infinite' }} /> : <FiUpload aria-hidden="true" />}
              <span>{isSubmitting ? 'Submitting...' : 'Submit profile for future openings'}</span>
            </button>
          </form>
          <div className="quote-side">
            <h3>About this submission</h3>
            <p>
              Your profile will be stored in our candidate database and reviewed against openings as they become available. If a role matches your skills and preferences, the HR team will reach out directly to schedule a discussion.
            </p>
            <p style={{ marginTop: '16px', color: 'var(--muted)', fontSize: '0.92rem' }}>
              We do not share or sell any candidate information. All submissions are treated as confidential and for internal recruitment use only.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}