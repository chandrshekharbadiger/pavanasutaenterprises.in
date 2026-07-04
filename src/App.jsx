import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ButtonLink, LoadingScreen } from './components'
import { SiteLayout } from './layouts/SiteLayout'

const HomePage = lazy(() => import('./pages/HomePage.jsx').then((module) => ({ default: module.HomePage })))
const ServicesIndexPage = lazy(() =>
  import('./pages/ServicesIndexPage.jsx').then((module) => ({ default: module.ServicesIndexPage })),
)
const ServiceDetailPage = lazy(() =>
  import('./pages/ServiceDetailPage.jsx').then((module) => ({ default: module.ServiceDetailPage })),
)
const ProjectsPage = lazy(() =>
  import('./pages/ProjectsPage.jsx').then((module) => ({ default: module.ProjectsPage })),
)
const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage.jsx').then((module) => ({ default: module.ProjectDetailPage })),
)
const AmcPage = lazy(() => import('./pages/AmcPage.jsx').then((module) => ({ default: module.AmcPage })))
const AboutPage = lazy(() =>
  import('./pages/AboutPage.jsx').then((module) => ({ default: module.AboutPage })),
)
const CareersPage = lazy(() =>
  import('./pages/CareersPage.jsx').then((module) => ({ default: module.CareersPage })),
)
const CareersThankYouPage = lazy(() =>
  import('./pages/CareersThankYouPage.jsx').then((module) => ({
    default: module.CareersThankYouPage,
  })),
)
const ContactPage = lazy(() =>
  import('./pages/ContactPage.jsx').then((module) => ({ default: module.ContactPage })),
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage.jsx').then((module) => ({ default: module.NotFoundPage })),
)

class RouteErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="page-stack">
          <section className="thank-you-card not-found-card">
            <p className="eyebrow">Error</p>
            <h1>Something went wrong.</h1>
            <p>Try refreshing the page or head back to the home page.</p>
            <div className="hero-actions">
              <ButtonLink to="/">Home</ButtonLink>
              <ButtonLink to="/contact" variant="outline">
                Contact
              </ButtonLink>
            </div>
          </section>
        </div>
      )
    }

    return this.props.children
  }
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RouteErrorBoundary>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route element={<SiteLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/services" element={<ServicesIndexPage />} />
                <Route path="/services/:slug" element={<ServiceDetailPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectDetailPage />} />
                <Route path="/annual-maintenance-contracts" element={<AmcPage />} />
                <Route path="/amc" element={<Navigate to="/annual-maintenance-contracts" replace />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/careers/thank-you" element={<CareersThankYouPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </RouteErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  )
}
