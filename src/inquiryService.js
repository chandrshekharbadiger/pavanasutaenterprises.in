import { site } from './siteContent'

export const honeypotFieldName = 'website'

const companyEmail = import.meta.env.VITE_INQUIRY_COMPANY_EMAIL || site.email
const inquiryEndpoint = import.meta.env.VITE_INQUIRY_ENDPOINT
const inquiryApiKey = import.meta.env.VITE_INQUIRY_API_KEY

const htmlEscape = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const collapseWhitespace = (value) => value.replace(/\s+/g, ' ').trim()

export const normalizeFormValues = (values) =>
  Object.fromEntries(
    Object.entries(values).map(([key, value]) => {
      if (typeof value !== 'string') {
        return [key, value]
      }

      if (key === 'message' || key === 'address') {
        return [key, value.trim()]
      }

      return [key, collapseWhitespace(value)]
    }),
  )

const formatSubmissionDate = (date) =>
  new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'long',
    timeZone: 'Asia/Kolkata',
  }).format(date)

const formatSubmissionTime = (date) =>
  new Intl.DateTimeFormat('en-IN', {
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  }).format(date)

const baseEmailStyles = {
  outer: 'margin:0;padding:24px;background:#eef4f8;font-family:Segoe UI,Arial,sans-serif;color:#102a43;',
  card: 'max-width:720px;margin:0 auto;background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid rgba(16,42,67,0.08);box-shadow:0 24px 60px rgba(16,42,67,0.08);',
  header:
    'padding:28px 32px;background:linear-gradient(135deg,#0f2942,#102a43 65%,#173a5e 100%);color:#ffffff;',
  goldPill:
    'display:inline-block;margin-bottom:12px;padding:8px 14px;border-radius:999px;background:rgba(201,162,39,0.18);color:#f7d577;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;',
  title: 'margin:0;font-size:28px;line-height:1.15;font-weight:800;',
  subtitle: 'margin:10px 0 0;color:rgba(255,255,255,0.82);font-size:15px;line-height:1.65;',
  section: 'padding:28px 32px;',
  grid:
    'display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:18px 0 0;',
  label: 'display:block;margin-bottom:6px;color:#6b7d90;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;',
  value:
    'display:block;padding:14px 16px;border-radius:16px;background:#f7fafc;border:1px solid rgba(16,42,67,0.08);font-size:14px;line-height:1.5;color:#102a43;',
  block:
    'margin-top:16px;padding:18px 20px;border-radius:18px;background:linear-gradient(180deg,#ffffff,#f8fbfd);border:1px solid rgba(16,42,67,0.08);',
  footer:
    'padding:22px 32px;background:#f8fbfd;color:#6b7d90;font-size:13px;line-height:1.7;border-top:1px solid rgba(16,42,67,0.08);',
}

const renderFieldGrid = (fields) =>
  fields
    .map(
      ({ label, value }) =>
        `<div><span style="${baseEmailStyles.label}">${htmlEscape(label)}</span><span style="${baseEmailStyles.value}">${htmlEscape(value || 'Not provided')}</span></div>`,
    )
    .join('')

const renderMessageBlock = (label, value) => {
  if (!value) {
    return ''
  }

  return `
    <div style="${baseEmailStyles.block}">
      <span style="${baseEmailStyles.label}">${htmlEscape(label)}</span>
      <div style="color:#102a43;font-size:15px;line-height:1.75;white-space:pre-wrap;">${htmlEscape(value)}</div>
    </div>
  `
}

const buildCompanyFields = (type, values, metadata) => {
  if (type === 'quote') {
    return [
      { label: 'Customer Name', value: values.fullName },
      { label: 'Company', value: values.companyName },
      { label: 'Phone', value: values.phoneNumber },
      { label: 'Email', value: values.email },
      { label: 'Category', value: values.category },
      { label: 'State', value: values.state },
      { label: 'City', value: values.city },
      { label: 'Project Type', value: values.projectType },
      { label: 'Budget', value: values.budget },
      { label: 'Project Location', value: values.projectLocation },
      { label: 'Submission Date', value: metadata.date },
      { label: 'Submission Time', value: metadata.time },
    ]
  }

  return [
    { label: 'Customer Name', value: values.fullName },
    { label: 'Company', value: values.company },
    { label: 'Designation', value: values.designation },
    { label: 'Mobile Number', value: values.mobileNumber },
    { label: 'Telephone', value: values.telephone },
    { label: 'Email', value: values.email },
    { label: 'Country', value: values.country },
    { label: 'State', value: values.state },
    { label: 'City', value: values.city },
    { label: 'Pincode', value: values.pincode },
    { label: 'Select Service', value: values.service },
    { label: 'Product/Service', value: values.productService },
    { label: 'Submission Date', value: metadata.date },
    { label: 'Submission Time', value: metadata.time },
  ]
}

const buildCustomerFields = (type, values, metadata) => {
  if (type === 'quote') {
    return [
      { label: 'Name', value: values.fullName },
      { label: 'Company', value: values.companyName },
      { label: 'Category', value: values.category },
      { label: 'State', value: values.state },
      { label: 'City', value: values.city },
      { label: 'Project Type', value: values.projectType },
      { label: 'Budget', value: values.budget },
      { label: 'Received On', value: `${metadata.date} at ${metadata.time}` },
    ]
  }

  return [
    { label: 'Name', value: values.fullName },
    { label: 'Company', value: values.company },
    { label: 'Service', value: values.service },
    { label: 'State', value: values.state },
    { label: 'City', value: values.city },
    { label: 'Received On', value: `${metadata.date} at ${metadata.time}` },
  ]
}

const buildCompanyEmailHtml = (type, values, metadata) => `
  <div style="${baseEmailStyles.outer}">
    <div style="${baseEmailStyles.card}">
      <div style="${baseEmailStyles.header}">
        <span style="${baseEmailStyles.goldPill}">${type === 'quote' ? 'New Quote Request' : 'New Contact Inquiry'}</span>
        <h1 style="${baseEmailStyles.title}">${htmlEscape(site.name)}</h1>
        <p style="${baseEmailStyles.subtitle}">
          A new ${type === 'quote' ? 'project quote' : 'contact'} submission has been received from the website.
        </p>
      </div>
      <div style="${baseEmailStyles.section}">
        <div style="${baseEmailStyles.grid}">
          ${renderFieldGrid(buildCompanyFields(type, values, metadata))}
        </div>
        ${values.address ? renderMessageBlock('Address', values.address) : ''}
        ${renderMessageBlock('Message', values.message)}
      </div>
      <div style="${baseEmailStyles.footer}">
        Reply directly to this email to continue the conversation with ${htmlEscape(values.fullName)}.
      </div>
    </div>
  </div>
`

const buildCustomerEmailHtml = (type, values, metadata) => `
  <div style="${baseEmailStyles.outer}">
    <div style="${baseEmailStyles.card}">
      <div style="${baseEmailStyles.header}">
        <span style="${baseEmailStyles.goldPill}">Inquiry Received</span>
        <h1 style="${baseEmailStyles.title}">Thank You for Contacting Pavanasuta Enterprises</h1>
        <p style="${baseEmailStyles.subtitle}">
          Thank you for contacting us. We have successfully received your inquiry and our engineering team will contact you within 24 business hours.
        </p>
      </div>
      <div style="${baseEmailStyles.section}">
        <div style="padding:18px 20px;border-radius:18px;background:linear-gradient(135deg,rgba(201,162,39,0.12),rgba(15,76,129,0.06));border:1px solid rgba(16,42,67,0.08);color:#102a43;font-size:15px;line-height:1.75;">
          Hello ${htmlEscape(values.fullName)},<br /><br />
          Your ${type === 'quote' ? 'quote request' : 'contact inquiry'} is now in our queue. A specialist from the Pavanasuta team will review it and get back to you with the next steps.
        </div>
        <div style="${baseEmailStyles.grid}">
          ${renderFieldGrid(buildCustomerFields(type, values, metadata))}
        </div>
        ${renderMessageBlock('Inquiry Summary', values.message)}
      </div>
      <div style="${baseEmailStyles.footer}">
        Pavanasuta Enterprises<br />
        ${htmlEscape(site.address)}<br />
        ${htmlEscape(site.phone)} | ${htmlEscape(companyEmail)}
      </div>
    </div>
  </div>
`

const parseResponse = async (response) => {
  const text = await response.text()

  if (!text) {
    return {}
  }

  try {
    return JSON.parse(text)
  } catch {
    return { message: text }
  }
}

export const validators = {
  requiredText: (message) => ({
    validate: (value) => (value && value.trim() ? true : message),
  }),
  email: {
    required: 'Please enter your email address.',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address.',
    },
  },
  phone: {
    validate: (value) => {
      const digits = value.replace(/\D/g, '')

      if (!digits) {
        return 'Please enter your phone number.'
      }

      return digits.length >= 10 && digits.length <= 13
        ? true
        : 'Please enter a valid phone number.'
    },
  },
  mobile: {
    validate: (value) => {
      const digits = value.replace(/\D/g, '')

      if (!digits) {
        return 'Please enter your mobile number.'
      }

      return digits.length >= 10 && digits.length <= 13
        ? true
        : 'Please enter a valid mobile number.'
    },
  },
  pincode: {
    validate: (value) => {
      if (!value || !value.trim()) {
        return 'Please enter your pincode.'
      }

      return /^[1-9][0-9]{5}$/.test(value.trim())
        ? true
        : 'Please enter a valid 6 digit pincode.'
    },
  },
}

export async function submitInquiry({ type, values, turnstileToken }) {
  if (!inquiryEndpoint) {
    throw new Error('Inquiry endpoint is not configured. Add VITE_INQUIRY_ENDPOINT to continue.')
  }

  const metadataDate = new Date()
  const metadata = {
    date: formatSubmissionDate(metadataDate),
    time: formatSubmissionTime(metadataDate),
    iso: metadataDate.toISOString(),
  }

  const payload = {
    apiKey: inquiryApiKey || '',
    type,
    companyEmail,
    customerEmail: values.email,
    customerName: values.fullName,
    subject:
      type === 'quote'
        ? `New Quote Request from ${values.fullName}`
        : `New Contact Inquiry from ${values.fullName}`,
    customerSubject: 'Thank You for Contacting Pavanasuta Enterprises',
    replyTo: values.email,
    metadata,
    turnstileToken,
    fields: values,
    html: {
      company: buildCompanyEmailHtml(type, values, metadata),
      customer: buildCustomerEmailHtml(type, values, metadata),
    },
  }

  const response = await fetch(inquiryEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(inquiryApiKey ? { 'x-api-key': inquiryApiKey } : {}),
    },
    body: JSON.stringify(payload),
  })

  const result = await parseResponse(response)

  if (!response.ok) {
    throw new Error(result.message || 'Unable to submit your inquiry right now. Please try again.')
  }

  return result
}
