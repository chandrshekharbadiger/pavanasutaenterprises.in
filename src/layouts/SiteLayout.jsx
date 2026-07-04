import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  FiChevronDown,
  FiChevronRight,
  FiGrid,
  FiMenu,
  FiPhoneCall,
  FiX,
} from 'react-icons/fi'
import {
  navLinks,
  serviceGroups,
  serviceLookup,
  site,
  footerLinks,
  socialLinks,
  contactMethods,
} from '../siteContent'
import {
  BackToTop,
  ButtonLink,
  CookieBanner,
  FloatingContacts,
  LoadingScreen,
} from '../components'

function useScrollState() {
  const [state, setState] = useState({ top: true, visibleTop: false })

  useEffect(() => {
    const update = () => {
      const y = window.scrollY || 0
      setState({ top: y < 24, visibleTop: y > 700 })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return state
}

function ServicesMegaMenu({ onNavigate, onClose }) {
  return (
    <motion.div
      className="services-mega"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22 }}
    >
      <div className="services-mega-inner">
        <div className="services-mega-intro">
          <p className="eyebrow">Services</p>
          <h3>MEP engineering solutions</h3>
          <p>
            Explore the full mechanical, electrical, plumbing, and fire-protection
            scope, grouped so teams can move from browsing to quoting quickly.
          </p>
          <ButtonLink to="/services" variant="secondary" onClick={onClose}>
            View all services
          </ButtonLink>
        </div>

        <div className="services-mega-grid">
          {serviceGroups.map((group) => (
            <div key={group.key} className="services-mega-column">
              <div className="services-mega-column-head">
                <group.icon aria-hidden="true" />
                <div>
                  <strong>{group.title}</strong>
                  <span>{group.description}</span>
                </div>
              </div>
              <div className="services-mega-links">
                {group.slugs.slice(0, 5).map((slug) => (
                  <NavLink
                    key={slug}
                    to={`/services/${slug}`}
                    className="services-mega-link"
                    onClick={onNavigate}
                  >
                    <span>{serviceLookup[slug]?.title || slug.replace(/-/g, ' ')}</span>
                    <FiChevronRight aria-hidden="true" />
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22 }}
        >
          <div className="mobile-menu-inner">
            <div className="mobile-menu-links">
              {navLinks.map((item) => (
                <NavLink key={item.path} to={item.path} onClick={onClose}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mobile-menu-services">
              <strong>Services</strong>
              {serviceGroups.map((group) => (
                <div key={group.key} className="mobile-service-group">
                  <span>{group.title}</span>
                  <div className="mobile-service-links">
                    {group.slugs.slice(0, 4).map((slug) => (
                      <NavLink key={slug} to={`/services/${slug}`} onClick={onClose}>
                        {serviceLookup[slug]?.title || slug.replace(/-/g, ' ')}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mobile-menu-actions">
              <ButtonLink to="/contact" variant="primary" onClick={onClose}>
                Get Free Quote
              </ButtonLink>
              <ButtonLink href={`tel:${site.phoneDigits}`} variant="outline">
                Call Now
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export function SiteLayout() {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()
  const { top, visibleTop } = useScrollState()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cookiesAccepted, setCookiesAccepted] = useState(
    () => window.localStorage.getItem('amc-cookies') === 'accepted',
  )
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 650)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    window.requestAnimationFrame(() => {
      setServicesOpen(false)
      setMenuOpen(false)
    })
  }, [pathname, reduceMotion])

  const acceptCookies = () => {
    window.localStorage.setItem('amc-cookies', 'accepted')
    setCookiesAccepted(true)
  }

  const headerClass = useMemo(
    () => `site-header ${top ? 'is-top' : 'is-scrolled'}`,
    [top],
  )

  return (
    <div className="site-shell">
      {!ready ? <LoadingScreen /> : null}

      <header className={headerClass}>
        <div className="site-header-inner">
          <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">
              <FiGrid aria-hidden="true" />
            </span>
            <span className="brand-copy">
              <strong>{site.shortName}</strong>
              <span>{site.tagline}</span>
            </span>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((item) =>
              item.label === 'Services' ? (
                <button
                  key={item.path}
                  type="button"
                  className="nav-trigger"
                  onClick={() => setServicesOpen((value) => !value)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  <span>{item.label}</span>
                  <FiChevronDown aria-hidden="true" />
                </button>
              ) : (
                <NavLink key={item.path} to={item.path} className="nav-link">
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="header-actions">
            <ButtonLink href={`tel:${site.phoneDigits}`} variant="outline" icon={FiPhoneCall}>
              Call Now
            </ButtonLink>
            <ButtonLink
              href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}`}
              variant="primary"
            >
              WhatsApp
            </ButtonLink>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-label="Open menu"
            >
              {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {servicesOpen ? (
            <ServicesMegaMenu
              onNavigate={() => setServicesOpen(false)}
              onClose={() => setServicesOpen(false)}
            />
          ) : null}
        </AnimatePresence>

        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-shell">
          <div className="footer-brand">
            <Link className="brand" to="/">
              <span className="brand-mark">
                <FiGrid aria-hidden="true" />
              </span>
              <span className="brand-copy">
                <strong>{site.shortName}</strong>
                <span>Premium corporate engineering</span>
              </span>
            </Link>
            <p>{site.description}</p>
          </div>

          <div className="footer-column">
            <strong>Quick Links</strong>
            {footerLinks.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <strong>Contact</strong>
            {contactMethods.map((item) => (
              <div key={item.title} className="footer-contact-line">
                <span>{item.title}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="footer-column">
            <strong>Newsletter</strong>
            <p>Get updates on projects, maintenance planning, and service availability.</p>
            <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
              <input type="email" placeholder="Email address" aria-label="Email address" />
              <button type="submit">Subscribe</button>
            </form>
            <div className="footer-social">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <FloatingContacts />
      <BackToTop visible={visibleTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      <CookieBanner accepted={cookiesAccepted} onAccept={acceptCookies} />
    </div>
  )
}
