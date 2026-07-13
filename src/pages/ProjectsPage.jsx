import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiFilter, FiImage } from 'react-icons/fi'
import {
  Breadcrumbs,
  ButtonLink,
  MiniGallery,
  ProjectCard,
  ProjectCarousel,
  Seo,
  SectionHeading,
} from '../components'
import { buildUrl, projectFilters, projects, site } from '../siteContent'

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const completed = filteredProjects.filter((project) => project.status === 'Completed')
  const ongoing = filteredProjects.filter((project) => project.status === 'Ongoing')
  const galleryItems = filteredProjects.slice(0, 3).flatMap((project) => project.gallery.slice(0, 1))
  const carouselItems = filteredProjects.map((project) => ({
    title: project.title,
    caption: project.summary,
    eyebrow: `${project.category} / ${project.status}`,
    meta: `${project.location} / ${project.stage}`,
    image: project.image,
  }))

  return (
    <div className="page-stack">
      <Seo
        title="Projects"
        description="Premium MEP projects with completed and ongoing work across HVAC, fire protection, electrical, and plumbing."
        path="/projects"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: buildUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: buildUrl('/projects') },
            ],
          },
        ]}
      />

      <section className="page-hero">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Projects' }]} />
        <p className="eyebrow">Projects</p>
        <h1>Completed and ongoing project references from real field work.</h1>
        <p>
          Browse completed and ongoing projects across HVAC, fire protection, electrical,
          and plumbing. Each project card now reflects the updated project list, real site
          visuals, location, client, gallery, technology, stage, and status.
        </p>
        <div className="page-hero-actions">
          <ButtonLink to="/contact">Start a Project</ButtonLink>
          <ButtonLink to="/annual-maintenance-contracts" variant="outline">
            AMC Support
          </ButtonLink>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Category Filters"
          title="Switch between disciplines."
          summary="The filters keep the list manageable without hiding the project mix."
        />
        <div className="catalog-toolbar">
          <div className="filter-chip-row">
            {projectFilters.map((item) => (
              <button
                key={item}
                type="button"
                className={`filter-chip ${activeFilter === item ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(item)}
              >
                <FiFilter aria-hidden="true" />
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Project Carousel"
          title="A moving view of live project visuals."
          summary="The carousel adds motion while keeping the imagery tied to the supplied project set."
        />
        <ProjectCarousel items={carouselItems} label="Project highlights carousel" />
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Completed Projects"
          title={`${completed.length} delivered projects in the current filter`}
          summary="Completed work shows the range of building types and handover quality."
        />
        <div className="project-grid">
          {completed.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Ongoing Projects"
          title={`${ongoing.length} active projects under delivery`}
          summary="Ongoing work highlights live coordination, staged execution, and active support."
        />
        <div className="project-grid">
          {ongoing.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Image Gallery"
          title="A visual preview of representative project scenes."
          summary="The gallery keeps the page dynamic while staying aligned with the engineering theme."
        />
        <MiniGallery
          image={site.accentImage}
          items={galleryItems.length
            ? galleryItems.slice(0, 6).map((item) => ({
                title: item.title,
                caption: item.caption,
                image: item.image,
              }))
            : [{ title: 'Engineering', caption: 'Representative project view' }]}
        />
      </section>

      <section className="section-block project-summary-band">
        <motion.div
          className="summary-panel"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4 }}
        >
          <FiImage aria-hidden="true" />
          <strong>Project detail pages now include real project images, gallery views, technology lists, stage updates, and status.</strong>
        </motion.div>
      </section>
    </div>
  )
}
