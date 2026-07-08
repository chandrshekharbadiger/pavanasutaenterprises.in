import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useController, useForm, useWatch } from 'react-hook-form'
import {
  FiAlertCircle,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiLoader,
  FiMapPin,
  FiShield,
  FiX,
} from 'react-icons/fi'
import { ActionButton, ButtonLink, SectionHeading } from './components'
import {
  budgetOptions,
  contactServiceOptions,
  countryOptions,
  getCityOptions,
  inquiryCategoryOptions,
  projectTypeOptions,
  stateOptions,
} from './inquiryData'
import {
  honeypotFieldName,
  normalizeFormValues,
  submitInquiry,
  validators,
} from './inquiryService'
import { site } from './siteContent'

const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

let turnstileScriptPromise

const loadTurnstileScript = () => {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  if (window.turnstile) {
    return Promise.resolve()
  }

  if (!turnstileScriptPromise) {
    turnstileScriptPromise = new Promise((resolve, reject) => {
      const existingScript = document.getElementById('cf-turnstile-script')

      if (existingScript) {
        existingScript.addEventListener('load', resolve, { once: true })
        existingScript.addEventListener('error', reject, { once: true })
        return
      }

      const script = document.createElement('script')
      script.id = 'cf-turnstile-script'
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      script.async = true
      script.defer = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Unable to load spam protection.'))
      document.head.append(script)
    })
  }

  return turnstileScriptPromise
}

function FloatingInput({
  label,
  error,
  filled,
  registration,
  className = '',
  as = 'input',
  ...props
}) {
  const id = useId()
  const Element = as

  return (
    <div className={`floating-field ${filled ? 'is-filled' : ''} ${error ? 'has-error' : ''} ${className}`.trim()}>
      <Element
        id={id}
        className="floating-control"
        placeholder=" "
        aria-invalid={Boolean(error)}
        {...registration}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
      {error ? (
        <span className="field-error" role="alert">
          <FiAlertCircle aria-hidden="true" />
          {error}
        </span>
      ) : null}
    </div>
  )
}

function CheckboxField({ label, error, registration }) {
  return (
    <div className={`checkbox-field ${error ? 'has-error' : ''}`.trim()}>
      <label>
        <input type="checkbox" {...registration} />
        <span>{label}</span>
      </label>
      {error ? (
        <span className="field-error" role="alert">
          <FiAlertCircle aria-hidden="true" />
          {error}
        </span>
      ) : null}
    </div>
  )
}

function SearchableSelect({
  name,
  control,
  rules,
  options,
  label,
  placeholder,
  disabled = false,
}) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  })
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const rootRef = useRef(null)
  const inputRef = useRef(null)
  const listboxId = useId()
  const inputId = useId()

  const selectedOption = useMemo(
    () => options.find((option) => option.value === field.value),
    [field.value, options],
  )

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return options
    }

    return options.filter((option) => option.label.toLowerCase().includes(normalizedQuery))
  }, [options, query])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleOutsideClick = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setIsOpen(false)
        field.onBlur()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [field, isOpen])

  const handleSelect = (option) => {
    field.onChange(option.value)
    setQuery(option.label)
    setHighlightedIndex(0)
    setIsOpen(false)
    window.setTimeout(() => inputRef.current?.blur(), 0)
  }

  const handleKeyDown = (event) => {
    if (disabled) {
      return
    }

    if (!isOpen && (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault()
      setIsOpen(true)
      setQuery(selectedOption?.label || '')
      setHighlightedIndex(0)
      return
    }

    if (!isOpen) {
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setHighlightedIndex((index) => Math.min(index + 1, Math.max(filteredOptions.length - 1, 0)))
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setHighlightedIndex((index) => Math.max(index - 1, 0))
    }

    if (event.key === 'Enter') {
      event.preventDefault()
      if (filteredOptions[highlightedIndex]) {
        handleSelect(filteredOptions[highlightedIndex])
      }
    }

    if (event.key === 'Escape') {
      event.preventDefault()
      setIsOpen(false)
      field.onBlur()
    }
  }

  return (
    <div
      ref={rootRef}
      className={`floating-field searchable-select ${isOpen ? 'is-open' : ''} ${selectedOption ? 'is-filled' : ''} ${error ? 'has-error' : ''}`.trim()}
    >
      <div className="searchable-control-shell">
        <input
          id={inputId}
          ref={inputRef}
          className="floating-control searchable-control"
          type="text"
          role="combobox"
          placeholder=" "
          value={isOpen ? query : selectedOption?.label || ''}
          autoComplete="off"
          disabled={disabled}
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={
            isOpen && filteredOptions[highlightedIndex]
              ? `${listboxId}-${filteredOptions[highlightedIndex].value}`
              : undefined
          }
          aria-invalid={Boolean(error)}
          onChange={(event) => {
            setQuery(event.target.value)
            setIsOpen(true)
            setHighlightedIndex(0)
            if (!event.target.value.trim()) {
              field.onChange('')
            }
          }}
          onFocus={() => {
            setIsOpen(true)
            setQuery(selectedOption?.label || '')
            setHighlightedIndex(0)
          }}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            window.setTimeout(() => {
              if (!rootRef.current?.contains(document.activeElement)) {
                setIsOpen(false)
                field.onBlur()
              }
            }, 0)
          }}
        />
        <label htmlFor={inputId}>{label}</label>
        <button
          type="button"
          className="searchable-toggle"
          aria-label={placeholder || label}
          tabIndex={-1}
          onClick={() => {
            if (disabled) {
              return
            }

            setIsOpen((open) => !open)
            setHighlightedIndex(0)
            window.setTimeout(() => inputRef.current?.focus(), 0)
          }}
        >
          <FiChevronDown aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={listboxId}
            className="searchable-menu"
            role="listbox"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
          >
            {filteredOptions.length ? (
              filteredOptions.map((option, index) => {
                const isSelected = option.value === field.value
                const isHighlighted = index === highlightedIndex

                return (
                  <button
                    id={`${listboxId}-${option.value}`}
                    key={option.value}
                    type="button"
                    role="option"
                    className={`searchable-option ${isSelected ? 'is-selected' : ''} ${isHighlighted ? 'is-highlighted' : ''}`.trim()}
                    aria-selected={isSelected}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => handleSelect(option)}
                  >
                    <span>{option.label}</span>
                    {isSelected ? <FiCheck aria-hidden="true" /> : null}
                  </button>
                )
              })
            ) : (
              <div className="searchable-empty">No matches found.</div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>

      {error ? (
        <span className="field-error" role="alert">
          <FiAlertCircle aria-hidden="true" />
          {error.message}
        </span>
      ) : null}
    </div>
  )
}

function TurnstileField({ onTokenChange, error, resetSignal = 0 }) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const [localError, setLocalError] = useState('')

  useEffect(() => {
    if (!turnstileSiteKey || !containerRef.current) {
      return undefined
    }

    let isMounted = true

    loadTurnstileScript()
      .then(() => {
        if (!isMounted || !window.turnstile || !containerRef.current) {
          return
        }

        if (widgetIdRef.current !== null) {
          window.turnstile.remove(widgetIdRef.current)
          widgetIdRef.current = null
        }

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: turnstileSiteKey,
          theme: 'auto',
          size: 'flexible',
          callback: (token) => {
            setLocalError('')
            onTokenChange(token)
          },
          'expired-callback': () => onTokenChange(''),
          'error-callback': () => {
            setLocalError('Spam protection could not be verified. Please try again.')
            onTokenChange('')
          },
        })
      })
      .catch((scriptError) => {
        setLocalError(scriptError.message)
      })

    return () => {
      isMounted = false

      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [onTokenChange, resetSignal])

  if (!turnstileSiteKey) {
    return (
      <div className="turnstile-shell turnstile-fallback">
        <FiShield aria-hidden="true" />
        <div>
          <strong>Spam protection ready</strong>
          <span>Connect `VITE_TURNSTILE_SITE_KEY` to enable Cloudflare Turnstile in production.</span>
        </div>
      </div>
    )
  }

  return (
    <div className="turnstile-shell">
      <div ref={containerRef} className="turnstile-widget" />
      {localError || error ? (
        <span className="field-error" role="alert">
          <FiAlertCircle aria-hidden="true" />
          {localError || error}
        </span>
      ) : null}
    </div>
  )
}

function SuccessModal({ open, onClose, onReset }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="success-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.24 }}
          >
            <button type="button" className="success-close" onClick={onClose} aria-label="Close success dialog">
              <FiX aria-hidden="true" />
            </button>

            <div className="success-confetti" aria-hidden="true">
              {Array.from({ length: 10 }).map((_, index) => (
                <span key={index} style={{ '--delay': `${index * 0.08}s` }} />
              ))}
            </div>

            <motion.div
              className="success-check"
              initial={{ scale: 0.8, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
            >
              <FiCheckCircle aria-hidden="true" />
            </motion.div>
            <p className="eyebrow">Submission Complete</p>
            <h3 id="success-modal-title">Thank You!</h3>
            <p>
              Your inquiry has been submitted successfully. Our team will contact you within
              24 business hours.
            </p>
            <div className="success-actions">
              <ButtonLink to="/" variant="outline">
                Back Home
              </ButtonLink>
              <ActionButton type="button" variant="primary" onClick={onReset}>
                Submit Another Inquiry
              </ActionButton>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function EnterpriseFormNotice({ serverError }) {
  return (
    <>
      {serverError ? (
        <div className="submission-error" role="alert">
          <FiAlertCircle aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      ) : null}
      <div className="submission-meta">
        <FiShield aria-hidden="true" />
        <span>Protected submission with validation, consent handling, and enterprise-ready routing.</span>
      </div>
    </>
  )
}

export function QuoteInquiryForm() {
  const [serverError, setServerError] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [turnstileResetKey, setTurnstileResetKey] = useState(0)
  const defaultValues = {
    fullName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    category: '',
    state: '',
    city: '',
    projectLocation: '',
    projectType: '',
    budget: '',
    message: '',
    turnstileToken: '',
    [honeypotFieldName]: '',
  }

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
  })

  const watchedValues = useWatch({ control })
  const selectedState = useWatch({ control, name: 'state' })
  const selectedCity = useWatch({ control, name: 'city' })
  const cityOptions = useMemo(() => getCityOptions(selectedState), [selectedState])

  useEffect(() => {
    if (selectedCity && !cityOptions.some((option) => option.value === selectedCity)) {
      setValue('city', '')
    }
  }, [cityOptions, selectedCity, setValue])

  const onSubmit = async (formValues) => {
    if (formValues[honeypotFieldName]) {
      return
    }

    setServerError('')

    try {
      const values = normalizeFormValues(formValues)
      await submitInquiry({
        type: 'quote',
        values,
        turnstileToken: values.turnstileToken,
      })
      reset(defaultValues)
      setTurnstileResetKey((value) => value + 1)
      setModalOpen(true)
    } catch (error) {
      setServerError(error.message)
    }
  }

  return (
    <>
      <form className="enterprise-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="enterprise-form-grid">
          <FloatingInput
            label="Full Name"
            type="text"
            autoComplete="name"
            filled={Boolean(watchedValues.fullName?.trim())}
            error={errors.fullName?.message}
            registration={register('fullName', validators.requiredText('Please enter your full name.'))}
          />
          <FloatingInput
            label="Company Name"
            type="text"
            autoComplete="organization"
            filled={Boolean(watchedValues.companyName?.trim())}
            error={errors.companyName?.message}
            registration={register('companyName')}
          />
          <FloatingInput
            label="Phone Number"
            type="tel"
            autoComplete="tel"
            filled={Boolean(watchedValues.phoneNumber?.trim())}
            error={errors.phoneNumber?.message}
            registration={register('phoneNumber', validators.phone)}
          />
          <FloatingInput
            label="Email"
            type="email"
            autoComplete="email"
            filled={Boolean(watchedValues.email?.trim())}
            error={errors.email?.message}
            registration={register('email', validators.email)}
          />
          <SearchableSelect
            name="category"
            control={control}
            rules={{ required: 'Please select a category.' }}
            options={inquiryCategoryOptions}
            label="Select Category"
            placeholder="Search categories"
          />
          <SearchableSelect
            name="state"
            control={control}
            rules={{ required: 'Please select a state.' }}
            options={stateOptions}
            label="State"
            placeholder="Search states"
          />
          <SearchableSelect
            name="city"
            control={control}
            rules={{ required: 'Please select a city.' }}
            options={cityOptions}
            label="City"
            placeholder={selectedState ? 'Search cities' : 'Select a state first'}
            disabled={!selectedState}
          />
          <FloatingInput
            label="Project Location"
            type="text"
            autoComplete="street-address"
            filled={Boolean(watchedValues.projectLocation?.trim())}
            error={errors.projectLocation?.message}
            registration={register(
              'projectLocation',
              validators.requiredText('Please enter the project location.'),
            )}
          />
          <SearchableSelect
            name="projectType"
            control={control}
            rules={{ required: 'Please select a project type.' }}
            options={projectTypeOptions}
            label="Project Type"
            placeholder="Search project types"
          />
          <SearchableSelect
            name="budget"
            control={control}
            rules={{ required: 'Please select a budget.' }}
            options={budgetOptions}
            label="Budget"
            placeholder="Search budget ranges"
          />
          <FloatingInput
            className="field-span-full"
            label="Message"
            as="textarea"
            rows="5"
            filled={Boolean(watchedValues.message?.trim())}
            error={errors.message?.message}
            registration={register(
              'message',
              validators.requiredText('Please tell us about your project.'),
            )}
          />
        </div>

        <input
          type="hidden"
          {...register('turnstileToken', turnstileSiteKey
            ? {
                validate: (value) =>
                  value ? true : 'Please complete the spam protection check.',
              }
            : {})}
        />
        <input
          type="text"
          className="honeypot-field"
          tabIndex={-1}
          autoComplete="off"
          {...register(honeypotFieldName)}
        />

        <TurnstileField
          resetSignal={turnstileResetKey}
          error={errors.turnstileToken?.message}
          onTokenChange={(token) => setValue('turnstileToken', token, { shouldValidate: true })}
        />

        <EnterpriseFormNotice serverError={serverError} />

        <ActionButton
          type="submit"
          variant="primary"
          className="button-link-submit"
          disabled={isSubmitting}
          icon={isSubmitting ? null : undefined}
        >
          {isSubmitting ? (
            <>
              <FiLoader className="spin-icon" aria-hidden="true" />
              <span>Submitting...</span>
            </>
          ) : (
            'Submit Quote Request'
          )}
        </ActionButton>
      </form>

      <SuccessModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onReset={() => setModalOpen(false)}
      />
    </>
  )
}

export function ContactInquiryForm() {
  const [serverError, setServerError] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [turnstileResetKey, setTurnstileResetKey] = useState(0)
  const defaultValues = {
    fullName: '',
    company: '',
    designation: '',
    country: 'india',
    state: '',
    city: '',
    address: '',
    pincode: '',
    email: '',
    mobileNumber: '',
    telephone: '',
    service: '',
    productService: '',
    message: '',
    consent: false,
    turnstileToken: '',
    [honeypotFieldName]: '',
  }

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
  })

  const watchedValues = useWatch({ control })
  const selectedState = useWatch({ control, name: 'state' })
  const selectedCity = useWatch({ control, name: 'city' })
  const cityOptions = useMemo(() => getCityOptions(selectedState), [selectedState])

  useEffect(() => {
    if (selectedCity && !cityOptions.some((option) => option.value === selectedCity)) {
      setValue('city', '')
    }
  }, [cityOptions, selectedCity, setValue])

  const onSubmit = async (formValues) => {
    if (formValues[honeypotFieldName]) {
      return
    }

    setServerError('')

    try {
      const values = normalizeFormValues(formValues)
      await submitInquiry({
        type: 'contact',
        values,
        turnstileToken: values.turnstileToken,
      })
      reset(defaultValues)
      setTurnstileResetKey((value) => value + 1)
      setModalOpen(true)
    } catch (error) {
      setServerError(error.message)
    }
  }

  return (
    <>
      <form className="enterprise-form enterprise-form-contact" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="enterprise-form-grid contact-form-grid">
          <FloatingInput
            label="Full Name"
            type="text"
            autoComplete="name"
            filled={Boolean(watchedValues.fullName?.trim())}
            error={errors.fullName?.message}
            registration={register('fullName', validators.requiredText('Please enter your full name.'))}
          />
          <FloatingInput
            label="Company"
            type="text"
            autoComplete="organization"
            filled={Boolean(watchedValues.company?.trim())}
            error={errors.company?.message}
            registration={register('company', validators.requiredText('Please enter your company name.'))}
          />
          <FloatingInput
            label="Designation (Optional)"
            type="text"
            filled={Boolean(watchedValues.designation?.trim())}
            error={errors.designation?.message}
            registration={register('designation')}
          />
          <SearchableSelect
            name="country"
            control={control}
            rules={{ required: 'Please select your country.' }}
            options={countryOptions}
            label="Country"
            placeholder="Search countries"
          />
          <SearchableSelect
            name="state"
            control={control}
            rules={{ required: 'Please select a state.' }}
            options={stateOptions}
            label="State"
            placeholder="Search states"
          />
          <SearchableSelect
            name="city"
            control={control}
            rules={{ required: 'Please select a city.' }}
            options={cityOptions}
            label="City"
            placeholder={selectedState ? 'Search cities' : 'Select a state first'}
            disabled={!selectedState}
          />
          <FloatingInput
            label="Address"
            type="text"
            autoComplete="street-address"
            filled={Boolean(watchedValues.address?.trim())}
            error={errors.address?.message}
            registration={register('address', validators.requiredText('Please enter your address.'))}
          />
          <FloatingInput
            label="Pincode"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            filled={Boolean(watchedValues.pincode?.trim())}
            error={errors.pincode?.message}
            registration={register('pincode', validators.pincode)}
          />
          <FloatingInput
            label="Email"
            type="email"
            autoComplete="email"
            filled={Boolean(watchedValues.email?.trim())}
            error={errors.email?.message}
            registration={register('email', validators.email)}
          />
          <FloatingInput
            label="Mobile Number"
            type="tel"
            autoComplete="tel"
            filled={Boolean(watchedValues.mobileNumber?.trim())}
            error={errors.mobileNumber?.message}
            registration={register('mobileNumber', validators.mobile)}
          />
          <FloatingInput
            label="Telephone (Optional)"
            type="tel"
            filled={Boolean(watchedValues.telephone?.trim())}
            error={errors.telephone?.message}
            registration={register('telephone')}
          />
          <SearchableSelect
            name="service"
            control={control}
            rules={{ required: 'Please select a service.' }}
            options={contactServiceOptions}
            label="Select Service"
            placeholder="Search services"
          />
          <FloatingInput
            label="Product / Service"
            type="text"
            filled={Boolean(watchedValues.productService?.trim())}
            error={errors.productService?.message}
            registration={register(
              'productService',
              validators.requiredText('Please enter the product or service.'),
            )}
          />
          <FloatingInput
            className="field-span-full"
            label="Message"
            as="textarea"
            rows="5"
            filled={Boolean(watchedValues.message?.trim())}
            error={errors.message?.message}
            registration={register('message', validators.requiredText('Please enter your message.'))}
          />
        </div>

        <CheckboxField
          label="By submitting this form, you consent to our team contacting you and to our Privacy Policy handling your information."
          error={errors.consent?.message}
          registration={register('consent', {
            required: 'Please accept the terms and privacy notice to continue.',
          })}
        />

        <input
          type="hidden"
          {...register('turnstileToken', turnstileSiteKey
            ? {
                validate: (value) =>
                  value ? true : 'Please complete the spam protection check.',
              }
            : {})}
        />
        <input
          type="text"
          className="honeypot-field"
          tabIndex={-1}
          autoComplete="off"
          {...register(honeypotFieldName)}
        />

        <TurnstileField
          resetSignal={turnstileResetKey}
          error={errors.turnstileToken?.message}
          onTokenChange={(token) => setValue('turnstileToken', token, { shouldValidate: true })}
        />

        <EnterpriseFormNotice serverError={serverError} />

        <ActionButton
          type="submit"
          variant="primary"
          className="button-link-submit"
          disabled={isSubmitting}
          icon={isSubmitting ? null : undefined}
        >
          {isSubmitting ? (
            <>
              <FiLoader className="spin-icon" aria-hidden="true" />
              <span>Submitting...</span>
            </>
          ) : (
            'Submit Inquiry'
          )}
        </ActionButton>
      </form>

      <SuccessModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onReset={() => setModalOpen(false)}
      />
    </>
  )
}

export function QuoteRequestSection() {
  return (
    <section className="section-block quote-request-section" id="get-quote">
      <SectionHeading
        eyebrow="Get A Free Quote"
        title="Tell us about your project."
        summary="A modern enterprise quote flow with fast routing, location-aware selections, and clean handoff to the engineering team."
      />
      <div className="enterprise-band quote-request-shell">
        <div className="enterprise-side-panel">
          <div className="enterprise-panel-copy">
            <p className="enterprise-kicker">Response Window</p>
            <h3>Built for project teams that need clarity fast.</h3>
            <p>
              Share the scope, location, and budget band. We will route your request to the
              right specialist and come back with a clear next step within one business day.
            </p>
          </div>
          <div className="enterprise-mini-grid">
            <div className="enterprise-mini-card">
              <strong>24 Hours</strong>
              <span>Typical response time</span>
            </div>
            <div className="enterprise-mini-card">
              <strong>India Wide</strong>
              <span>State and city based routing</span>
            </div>
          </div>
          <div className="enterprise-promise-list">
            {[
              'Mechanical, electrical, plumbing, fire protection, and AMC scopes',
              'Searchable dropdowns for faster project classification',
              'Professional HTML email notifications with customer confirmation',
            ].map((item) => (
              <span key={item}>
                <FiCheckCircle aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
          <div className="enterprise-panel-contact">
            <FiMapPin aria-hidden="true" />
            <div>
              <strong>{site.name}</strong>
              <span>{site.address}</span>
            </div>
          </div>
        </div>
        <div className="enterprise-form-shell">
          <QuoteInquiryForm />
        </div>
      </div>
    </section>
  )
}
