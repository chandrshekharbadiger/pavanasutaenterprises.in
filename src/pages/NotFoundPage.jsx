import { FiArrowRight } from 'react-icons/fi'
import { ButtonLink, Seo } from '../components'

export function NotFoundPage() {
  return (
    <div className="page-stack">
      <Seo
        title="Page Not Found"
        description="The requested page could not be found."
        path="/404"
        noIndex
      />

      <section className="thank-you-card not-found-card">
        <p className="eyebrow">404</p>
        <h1>We could not find that page.</h1>
        <p>Use the links below to get back to the home page, services, or contact form.</p>
        <div className="hero-actions">
          <ButtonLink to="/" icon={FiArrowRight}>
            Home
          </ButtonLink>
          <ButtonLink to="/services" variant="outline">
            Services
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}

