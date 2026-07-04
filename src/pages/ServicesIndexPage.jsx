import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGrid, FiSearch } from 'react-icons/fi'
import { Seo, Breadcrumbs, ButtonLink, SectionHeading, ServiceCard } from '../components'
import { services, serviceGroups, buildUrl } from '../siteContent'

export function ServicesIndexPage() {
  const [activeGroup, setActiveGroup] = useState('All')
  const [query, setQuery] = useState('')

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesGroup = activeGroup === 'All' || service.categoryLabel === activeGroup
      const matchesQuery =
        !query ||
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.summary.toLowerCase().includes(query.toLowerCase())
      return matchesGroup && matchesQuery
    })
  }, [activeGroup, query])

  return (
    <div className="page-stack">
      <Seo
        title="Services"
        description="Browse all MEP services including HVAC, fire protection, electrical, plumbing, and AMC-ready support."
        path="/services"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: buildUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Services', item: buildUrl('/services') },
            ],
          },
        ]}
      />

      <section className="page-hero">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services' }]} />
        <p className="eyebrow">Service Catalog</p>
        <h1>Every service page, organized for fast browsing.</h1>
        <p>
          Use the filters to jump between mechanical, electrical, plumbing, and fire
          protection scopes. Each service includes hero copy, features, benefits, process,
          gallery, FAQ, related services, and a quote form.
        </p>
        <div className="page-hero-actions">
          <ButtonLink to="/contact">Request Quote</ButtonLink>
          <ButtonLink to="/projects" variant="outline">
            View Projects
          </ButtonLink>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Filter"
          title="Search by scope."
          summary="The service library is tuned for quick scanning and direct navigation."
        />

        <div className="catalog-toolbar">
          <label className="catalog-search">
            <FiSearch aria-hidden="true" />
            <input
              type="search"
              placeholder="Search HVAC, panels, plumbing, fire systems..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <div className="filter-chip-row">
            {['All', ...serviceGroups.map((group) => group.title)].map((item) => (
              <button
                key={item}
                type="button"
                className={`filter-chip ${activeGroup === item ? 'is-active' : ''}`}
                onClick={() => setActiveGroup(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="service-preview-grid">
          {filteredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Service Groups"
          title="Four operational disciplines."
          summary="The grouping helps larger procurement and delivery teams understand where each scope fits."
        />
        <div className="service-group-grid">
          {serviceGroups.map((group) => (
            <motion.article
              key={group.key}
              className="service-group-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4 }}
            >
              <div className="service-group-head">
                <FiGrid aria-hidden="true" />
                <div>
                  <strong>{group.title}</strong>
                  <span>{group.description}</span>
                </div>
              </div>
              <div className="service-group-links">
                {group.slugs.slice(0, 4).map((slug) => (
                  <span key={slug}>{slug.replace(/-/g, ' ')}</span>
                ))}
              </div>
              <ButtonLink to="/contact" variant="outline">
                Start a conversation
              </ButtonLink>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
