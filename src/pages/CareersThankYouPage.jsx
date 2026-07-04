import { useLocation } from 'react-router-dom'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import { ButtonLink, Seo } from '../components'
import { buildUrl } from '../siteContent'

export function CareersThankYouPage() {
  const location = useLocation()
  const applicant = location.state?.applicant || 'there'
  const role = location.state?.role || 'your selected role'

  return (
    <div className="page-stack">
      <Seo
        title="Application Received"
        description="Thank you for applying. Your application has been received and will be reviewed."
        path="/careers/thank-you"
        noIndex
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: buildUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Careers', item: buildUrl('/careers') },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Thank You',
                item: buildUrl('/careers/thank-you'),
              },
            ],
          },
        ]}
      />

      <section className="thank-you-card">
        <FiCheckCircle aria-hidden="true" />
        <p className="eyebrow">Thank You</p>
        <h1>Application received, {applicant}.</h1>
        <p>
          Thanks for applying for {role}. We’ll review the details and reach out if the
          role is a good fit.
        </p>
        <div className="hero-actions">
          <ButtonLink to="/careers" variant="outline">
            Back to Careers
          </ButtonLink>
          <ButtonLink to="/" icon={FiArrowRight}>
            Go Home
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}
