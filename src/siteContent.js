import {
    FiActivity,
    FiBookOpen,
    FiBriefcase,
    FiCheckCircle,
    FiCpu,
    FiDroplet,
    FiHardDrive,
    FiHeadphones,
    FiHome,
    FiLayers,
    FiLock,
    FiMonitor,
    FiShield,
    FiTool,
    FiWind,
} from 'react-icons/fi'

export const site = {
  name: 'PAVANASUTA ENTERPRISES',
  shortName: 'Pavanasuta',
  tagline: 'Complete MEP engineering solutions for commercial, industrial, and residential projects.',
  description:
    'Pavanasuta Enterprises provides comprehensive Mechanical, Electrical, and Plumbing (MEP) engineering solutions for residential, commercial, industrial, healthcare, hospitality, and infrastructure projects. Our services are designed to deliver reliable, efficient, and sustainable building systems that meet the highest standards of quality and safety.',
  phone: '6361999504 / 8147838964',
  phones: [
    { number: '6361999504', digits: '+916361999504' },
    { number: '8147838964', digits: '+918147838964' },
  ],
  phoneDigits: '+916361999504',
  whatsapp: '+916361999504',
  email: 'tanuja.pavanasuta@gmail.com',
  address: '#84, Marikunte, Davangere—577513',
  workingHours: 'Mon - Sat, 8:30 AM - 7:00 PM',
  siteUrl: import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
  logo: '/assets/projects/pavanasuta-logo.png',
  accentImage: '/assets/projects/ongoing-hospital-road.jpeg',
}

export const buildUrl = (path = '/') => {
  const root = site.siteUrl.replace(/\/$/, '')
  const suffix = path.startsWith('/') ? path : `/${path}`
  return `${root}${suffix}`
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about-us' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'AMC', path: '/annual-maintenance-contracts' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

export const trustedSectors = [
  'Hospitals',
  'Commercial Towers',
  'Industrial Plants',
  'IT Parks',
  'Retail Campuses',
  'Educational Institutions',
  'Data Centers',
  'Hospitality Groups',
]

export const heroStats = [
  { label: 'Completed Projects', value: 10, suffix: '' },
  { label: 'Ongoing Projects', value: 5, suffix: '' },
  { label: 'Project Categories', value: 4, suffix: '' },
  { label: 'Cities Covered', value: 10, suffix: '' },
]

export const industries = [
  {
    title: 'Healthcare',
    description: 'Hospitals, diagnostics, and critical care environments with strict uptime and hygiene needs.',
    icon: FiShield,
  },
  {
    title: 'Commercial Real Estate',
    description: 'Office towers, mixed-use developments, and business parks that need comfort and control.',
    icon: FiBriefcase,
  },
  {
    title: 'Manufacturing',
    description: 'Plant environments that demand reliable utilities, safe operations, and process continuity.',
    icon: FiTool,
  },
  {
    title: 'Education',
    description: 'Schools, universities, and training campuses that benefit from energy-aware infrastructure.',
    icon: FiBookOpen,
  },
  {
    title: 'Retail and Hospitality',
    description: 'Guest-facing environments where comfort, presentation, and maintenance response matter daily.',
    icon: FiHome,
  },
  {
    title: 'Data and Technology',
    description: 'Mission-critical spaces that rely on precision cooling, power quality, and early warnings.',
    icon: FiHardDrive,
  },
]

export const whyChooseUs = [
  {
    title: 'Single partner ownership',
    description: 'Sales, design support, execution, testing, and AMC sit under one disciplined team.',
    icon: FiLayers,
  },
  {
    title: 'Engineering-led delivery',
    description: 'We plan around load, maintainability, safety, and commissioning from the start.',
    icon: FiActivity,
  },
  {
    title: 'Transparent documentation',
    description: 'Submittals, handover packs, checklists, and maintenance records stay audit-friendly.',
    icon: FiCheckCircle,
  },
  {
    title: 'Responsive support',
    description: 'Fast turnaround on service calls, breakdown response, and planned maintenance cycles.',
    icon: FiHeadphones,
  },
]

export const companyOverview = {
  heading: 'Professional MEP Engineering You Can Trust',
  paragraphs: [
    'Pavanasuta Enterprises is a professional Mechanical, Electrical, and Plumbing (MEP) engineering company dedicated to delivering reliable, efficient, and high-quality building services solutions.',
    'We specialize in the design, installation, testing, commissioning, operation, and maintenance of MEP systems for residential, commercial, industrial, healthcare, hospitality, and infrastructure projects.',
    'With a commitment to engineering excellence, safety, and customer satisfaction, we provide innovative and cost-effective solutions tailored to the unique requirements of every project. Our experienced team combines technical expertise with industry best practices to ensure every project is completed on time, within budget, and to the highest quality standards.',
    'At Pavanasuta Enterprises, we believe that successful projects are built on trust, integrity, and collaboration. By embracing modern technologies and sustainable engineering practices, we help create safe, energy-efficient, and future-ready buildings that deliver long-term value to our clients.',
  ],
}

export const workProcess = [
  {
    title: 'Requirement Discussion',
    description: 'Understand client requirements and project scope.',
  },
  {
    title: 'Site Inspection',
    description: 'Visit project location and evaluate technical requirements.',
  },
  {
    title: 'Design & Planning',
    description: 'Prepare engineering drawings and execution plan.',
  },
  {
    title: 'Quotation & Approval',
    description: 'Submit detailed quotation and receive approval.',
  },
  {
    title: 'Execution',
    description: 'Professional installation by certified engineers.',
  },
  {
    title: 'Testing & Commissioning',
    description: 'Complete testing and quality verification.',
  },
  {
    title: 'Handover & AMC Support',
    description: 'Deliver project with warranty and annual maintenance support.',
  },
]

export const testimonials = [
  {
    quote:
      'The commissioning process was clear and disciplined. Their team kept everyone aligned from plant-room works to final handover.',
    role: 'Facilities Director',
    context: 'Speciality Hospital',
  },
  {
    quote:
      'They handled coordination across electrical and HVAC scopes without the usual back-and-forth. That saved time on our fit-out.',
    role: 'Project Head',
    context: 'Commercial Tower',
  },
  {
    quote:
      'AMC response times have been consistent, and their preventive maintenance documentation makes audits easier every quarter.',
    role: 'Operations Manager',
    context: 'Manufacturing Unit',
  },
]

export const certificates = [
  {
    title: 'ISO 9001 Quality Management',
    description: 'Structured QA processes for design, installation, testing, and handover.',
    icon: FiCheckCircle,
  },
  {
    title: 'ISO 45001 Safety Management',
    description: 'Permit-to-work, toolbox talks, and site safety control at every stage.',
    icon: FiShield,
  },
  {
    title: 'OEM Authorized Partnerships',
    description: 'Trusted equipment relationships that support warranty and service continuity.',
    icon: FiCpu,
  },
  {
    title: 'Electrical and Fire Compliance',
    description: 'Documentation aligned to code, inspection, and commissioning requirements.',
    icon: FiLock,
  },
]

export const safetyStandards = [
  {
    title: 'Permit to work',
    description: 'Job cards, clearances, and access control for critical site tasks.',
  },
  {
    title: 'PPE and toolbox talks',
    description: 'Daily safety briefings and personal protective equipment for each crew.',
  },
  {
    title: 'Lockout and isolation',
    description: 'Verified isolation for electrical and mechanical systems before intervention.',
  },
  {
    title: 'Commissioning checklists',
    description: 'Structured sign-offs to keep testing traceable and repeatable.',
  },
]

export const homeFaq = [
  {
    question: 'Do you support both design assistance and execution?',
    answer:
      'Yes. We can work from employer requirements, consultant drawings, or on-site studies and then carry the scope through installation, testing, commissioning, and AMC support.',
  },
  {
    question: 'Can you handle multi-discipline coordination?',
    answer:
      'We regularly coordinate mechanical, electrical, plumbing, and fire protection scopes so equipment access, routing, and handover stay controlled.',
  },
  {
    question: 'Do you take up maintenance contracts after installation?',
    answer:
      'Yes. AMC support is a major part of the business and includes preventive maintenance, breakdown response, inspections, and reporting.',
  },
  {
    question: 'Which project types do you serve?',
    answer:
      'We serve hospitals, commercial towers, industrial plants, campuses, retail spaces, hospitality projects, and critical infrastructure.',
  },
]

const categoryTemplates = {
  mechanical: {
    label: 'Mechanical Services',
    intro:
      'Heating, Ventilation, and Air Conditioning (HVAC) systems designed for reliable, efficient, and sustainable performance.',
    features: [
      'Heating, Ventilation, and Air Conditioning (HVAC)',
      'Ventilation and Exhaust Systems',
      'Chilled Water and Refrigerant Piping',
      'Equipment Installation and Commissioning',
      'Mechanical Maintenance Services',
    ],
    benefits: [
      'Lower energy consumption and better uptime',
      'Clearer maintenance access and documentation',
      'Stable indoor comfort for occupied spaces',
    ],
    gallery: ['Plant room', 'Air side', 'Controls'],
  },
  fire: {
    label: 'Fire Protection',
    intro:
      'Comprehensive fire protection systems designed to keep your building and occupants safe.',
    features: [
      'Fire Hydrant Systems',
      'Automatic Sprinkler Systems',
      'Fire Alarm and Detection Systems',
      'Fire Pumps and Associated Piping',
      'Testing and Commissioning',
      'CCTV Surveillance Systems',
      'Access Control Systems',
      'Public Address Systems',
      'Structured Cabling and Networking',
      'Building Management Systems (BMS)',
    ],
    benefits: [
      'Faster response in critical situations',
      'Clearer compliance and inspection records',
      'Safer evacuation and occupant protection',
    ],
    gallery: ['Alarm room', 'Suppression zone', 'Emergency devices'],
  },
  electrical: {
    label: 'Electrical',
    intro:
      'Complete electrical installations and systems for all types of buildings and projects.',
    features: [
      'HT & LT Electrical Installations',
      'Internal and External Electrification',
      'Power Distribution Systems',
      'Lighting and Lighting Control Systems',
      'Earthing and Lightning Protection',
      'DG Set Installation',
      'Electrical Testing and Commissioning',
    ],
    benefits: [
      'Safer power distribution across the facility',
      'Better visibility on loads and performance',
      'Scalable infrastructure for future growth',
    ],
    gallery: ['Panel room', 'Lighting', 'Monitoring'],
  },
  plumbing: {
    label: 'Plumbing',
    intro:
      'Full plumbing and water management systems for clean, reliable, and sustainable water supply and drainage.',
    features: [
      'Water Supply and Distribution Systems',
      'Drainage and Sewerage Systems',
      'Storm Water Drainage',
      'Pump Installation and Piping Works',
      'Water Treatment and Plumbing Maintenance',
    ],
    benefits: [
      'Consistent water quality and pressure',
      'Lower leakage and better maintainability',
      'Cleaner utility routing for the building',
    ],
    gallery: ['Pump room', 'Piping', 'Water treatment'],
  },
}

const makeService = (service) => ({
  ...service,
  categoryLabel: categoryTemplates[service.group].label,
  categoryIntro: categoryTemplates[service.group].intro,
  features: [service.specialty, ...categoryTemplates[service.group].features],
  benefits: categoryTemplates[service.group].benefits,
  gallery: categoryTemplates[service.group].gallery,
  process: [
    {
      title: 'Discovery',
      description: `We review the ${service.title} brief, site conditions, and operational targets before selecting the right delivery approach.`,
    },
    {
      title: 'Design',
      description: `Layouts, routing, controls, and interfaces are coordinated to keep the ${service.title} scope maintainable and buildable.`,
    },
    {
      title: 'Execution',
      description: `Installation is phased with QA checks so the ${service.title} package stays aligned with the broader MEP plan.`,
    },
    {
      title: 'Commissioning',
      description: `Testing, balancing, and handover close out the ${service.title} scope with documented operation guidance.`,
    },
  ],
  faq: [
    {
      question: `Can ${service.title} be delivered as part of a larger MEP package?`,
      answer:
        'Yes. We routinely bundle it with adjacent mechanical, electrical, plumbing, and fire scopes so interfaces remain clean.',
    },
    {
      question: `Do you support testing and commissioning for ${service.title}?`,
      answer:
        'Yes. We handle pre-commissioning, final testing, balancing, and operational handover with clear records.',
    },
    {
      question: `Can ${service.title} be phased for occupied buildings?`,
      answer:
        'Yes. We can stage works around tenant access, shutdown windows, and live-operations constraints.',
    },
    {
      question: 'Is AMC available after handover?',
      answer:
        'Absolutely. We provide preventive maintenance, breakdown response, inspection visits, and reporting after project completion.',
    },
  ],
  galleryCaptions: categoryTemplates[service.group].gallery.map((item) => `${service.title} - ${item}`),
})

const mechanicalServices = [
  {
    slug: 'hvac',
    title: 'HVAC',
    group: 'mechanical',
    summary: 'Full-spectrum cooling, ventilation, ducting, and controls for occupiable and critical environments.',
    specialty: 'Chilled-water plants, air handling, ducting, TAB, and BMS integration.',
    related: ['hiwall', 'dx-units', 'vrf-system', 'chilled-water-system'],
  },
  {
    slug: 'hiwall',
    title: 'Hiwall',
    group: 'mechanical',
    summary: 'Compact wall-mounted comfort with quick installation and low noise.',
    specialty: 'Space-saving room cooling for cabins, offices, and smaller zones.',
    related: ['hvac', 'dx-units', 'vrf-system'],
  },
  {
    slug: 'dx-units',
    title: 'DX Units',
    group: 'mechanical',
    summary: 'Direct-expansion comfort solutions for retail, offices, and compact facilities.',
    specialty: 'Split and packaged units with quick-fit delivery and service access.',
    related: ['hiwall', 'vrf-system', 'hvac'],
  },
  {
    slug: 'vrf-system',
    title: 'VRF/VRV System',
    group: 'mechanical',
    summary: 'Multi-zone comfort with low energy use and precise refrigerant-based zoning for offices, hotels, and mixed-use buildings.',
    specialty: 'Multi-zone refrigerant routing, long piping runs, indoor unit selection, and controls.',
    related: ['dx-units', 'hiwall', 'hvac'],
  },
  {
    slug: 'chilled-water-system',
    title: 'Chilled Water System',
    group: 'mechanical',
    summary: 'Efficient chilled-water plant planning with pumps, piping, and commissioning support.',
    specialty: 'Equipment sizing, plant room layout, chilled-water piping, and optimization.',
    related: ['hvac', 'vrf-system', 'dx-units'],
  },
]

const fireServices = [
  {
    slug: 'fire-protection',
    title: 'Fire Protection',
    group: 'fire',
    summary: 'Code-driven protection strategies that cover detection, containment, and life safety.',
    specialty: 'End-to-end fire system coordination and compliance support.',
    related: ['fire-detection', 'fire-fighting', 'fire-suppression'],
  },
  {
    slug: 'fire-fighting',
    title: 'Fire Fighting',
    group: 'fire',
    summary: 'Hydrant, hose reel, and pump systems designed for rapid emergency response.',
    specialty: 'Fire pumps, risers, hydrants, and brigade interface planning.',
    related: ['fire-protection', 'fire-extinguishers', 'fire-suppression'],
  },
  {
    slug: 'fire-detection',
    title: 'Fire Detection',
    group: 'fire',
    summary: 'Addressable alarm systems with zoned notification and clean control logic.',
    specialty: 'Panels, devices, zoning, and alarm matrix coordination.',
    related: ['vesda', 'pa-system', 'fire-protection'],
  },
  {
    slug: 'fire-suppression',
    title: 'Fire Suppression',
    group: 'fire',
    summary: 'Special hazard suppression systems for sensitive rooms and high-value assets.',
    specialty: 'Clean-agent, gas-based, and area-specific suppression design.',
    related: ['vesda', 'fire-detection', 'fire-protection'],
  },
  {
    slug: 'fire-extinguishers',
    title: 'Fire Extinguishers',
    group: 'fire',
    summary: 'Placement, selection, and service planning for portable fire safety equipment.',
    specialty: 'Risk-based extinguisher selection, tagging, and refill planning.',
    related: ['fire-protection', 'fire-fighting', 'pa-system'],
  },
  {
    slug: 'pa-system',
    title: 'PA System',
    group: 'fire',
    summary: 'Voice evacuation and paging systems that keep announcements clear under pressure.',
    specialty: 'Paging zones, voice evacuation, and emergency broadcast logic.',
    related: ['fire-detection', 'two-way-communication', 'cctv'],
  },
  {
    slug: 'two-way-communication',
    title: 'Two Way Communication',
    group: 'fire',
    summary: 'Instant communication points for high-risk, restricted, and emergency zones.',
    specialty: 'Hands-free emergency call points and response routing.',
    related: ['pa-system', 'fire-detection', 'vesda'],
  },
  {
    slug: 'cctv',
    title: 'CCTV',
    group: 'fire',
    summary: 'Camera networks, storage, and remote access for secure operations and monitoring.',
    specialty: 'Camera layouts, recording strategy, and secure monitoring.',
    related: ['video-door-phone', 'rodent-system', 'fire-protection'],
  },
  {
    slug: 'video-door-phone',
    title: 'Video Door Phone',
    group: 'fire',
    summary: 'Visitor verification and secure access control for residential and office entries.',
    specialty: 'Door stations, indoor monitors, and entry verification.',
    related: ['cctv', 'fire-detection', 'rodent-system'],
  },
  {
    slug: 'rodent-system',
    title: 'Rodent System',
    group: 'fire',
    summary: 'Perimeter deterrence and entry-point control for cleaner facilities and cable routes.',
    specialty: 'Deterrent routing and maintenance-friendly perimeter control.',
    related: ['cctv', 'video-door-phone', 'vesda'],
  },
  {
    slug: 'vesda',
    title: 'VESDA',
    group: 'fire',
    summary: 'Early-warning smoke detection for data rooms, archives, and critical infrastructure.',
    specialty: 'High-sensitivity air sampling and alarm staging.',
    related: ['fire-detection', 'fire-suppression', 'pa-system'],
  },
  {
    slug: 'nurse-calling-system',
    title: 'Nurse Calling System',
    group: 'fire',
    summary: 'Patient call and workflow systems that improve response and coordination.',
    specialty: 'Bed-to-station communication and duty response management.',
    related: ['cctv', 'pa-system', 'two-way-communication'],
  },
]

const electricalServices = [
  {
    slug: 'lt-panels',
    title: 'LT Panels',
    group: 'electrical',
    summary: 'Low-tension distribution panels with safe segregation and protection logic.',
    specialty: 'Incomer and feeder panels with safe, serviceable arrangement.',
    related: ['switch-gears', 'power-panels', 'control-panels'],
  },
  {
    slug: 'switch-gears',
    title: 'Switch Gears',
    group: 'electrical',
    summary: 'Reliable switching and protection for demanding electrical distribution.',
    specialty: 'Protection coordination and switching equipment selection.',
    related: ['lt-panels', 'power-panels', 'control-panels'],
  },
  {
    slug: 'power-panels',
    title: 'Power Panels',
    group: 'electrical',
    summary: 'Power distribution boards built for load clarity, metering, and maintainability.',
    specialty: 'Distribution clarity, metering, and future-ready spare capacity.',
    related: ['lt-panels', 'switch-gears', 'control-panels'],
  },
  {
    slug: 'control-panels',
    title: 'Control Panels',
    group: 'electrical',
    summary: 'Automation panels with clear logic, safer operation, and clean documentation.',
    specialty: 'Start-stop logic, sequencing, and operator-friendly controls.',
    related: ['lt-panels', 'power-panels', 'av-system'],
  },
  {
    slug: 'street-lighting',
    title: 'Street Lighting',
    group: 'electrical',
    summary: 'Exterior lighting systems that balance visibility, safety, and energy use.',
    specialty: 'Pole layout, photometric planning, and nighttime visibility.',
    related: ['building-lighting', 'solar-system', 'site-layout-electrical'],
  },
  {
    slug: 'building-lighting',
    title: 'Building Lighting',
    group: 'electrical',
    summary: 'Interior and façade lighting with intelligent control and consistent output.',
    specialty: 'Interior, façade, emergency, and control-lighting planning.',
    related: ['street-lighting', 'av-system', 'sound-system'],
  },
  {
    slug: 'solar-system',
    title: 'Solar System',
    group: 'electrical',
    summary: 'Grid-tied and hybrid solar systems built around energy savings and monitoring.',
    specialty: 'PV sizing, inverter coordination, and monitoring dashboards.',
    related: ['street-lighting', 'site-layout-electrical', 'lt-panels'],
  },
  {
    slug: 'site-layout-electrical',
    title: 'Site Layout Electrical',
    group: 'electrical',
    summary: 'Cable routing, earthing, and utility planning for orderly site infrastructure.',
    specialty: 'Underground routing, earthing, and utility coordination.',
    related: ['street-lighting', 'solar-system', 'lt-panels'],
  },
  {
    slug: 'av-system',
    title: 'AV System',
    group: 'electrical',
    summary: 'Presentation and collaboration systems that make communication effortless.',
    specialty: 'Signal routing, room control, and conference-ready integration.',
    related: ['audio-video', 'sound-system', 'building-lighting'],
  },
  {
    slug: 'audio-video',
    title: 'Audio Video',
    group: 'electrical',
    summary: 'Corporate AV integration for meeting rooms, training spaces, and lobbies.',
    specialty: 'Displays, cameras, microphones, and collaboration flow.',
    related: ['av-system', 'sound-system', 'control-panels'],
  },
  {
    slug: 'sound-system',
    title: 'Sound System',
    group: 'electrical',
    summary: 'Speech-focused audio systems with zoning and emergency override support.',
    specialty: 'Intelligibility, zoning, background music, and emergency override.',
    related: ['av-system', 'audio-video', 'building-lighting'],
  },
]

const plumbingServices = [
  {
    slug: 'water-treatment-plant',
    title: 'Water Treatment Plant',
    group: 'plumbing',
    summary: 'Treatment and quality-control systems for process water and domestic supply.',
    specialty: 'Filtration, softening, dosing, and monitoring for water quality.',
    related: ['sanitary-works', 'cold-water-piping', 'solar-water-heater'],
  },
  {
    slug: 'sanitary-works',
    title: 'Sanitary Works',
    group: 'plumbing',
    summary: 'Drainage, fixtures, and venting coordinated for reliable bathroom and utility performance.',
    specialty: 'Sanitary fixture layouts, drainage slopes, and venting.',
    related: ['water-treatment-plant', 'cold-water-piping', 'rain-water-piping'],
  },
  {
    slug: 'cold-water-piping',
    title: 'Cold Water Piping',
    group: 'plumbing',
    summary: 'Pressure-balanced water distribution with leak-tested routing and insulation.',
    specialty: 'Pressure zoning, insulation, and leak-tested distribution.',
    related: ['hot-water-piping', 'rain-water-piping', 'water-treatment-plant'],
  },
  {
    slug: 'hot-water-piping',
    title: 'Hot Water Piping',
    group: 'plumbing',
    summary: 'Recirculating hot water networks designed for comfort and energy stability.',
    specialty: 'Hot-water circulation, temperature retention, and safety control.',
    related: ['cold-water-piping', 'solar-water-heater', 'sanitary-works'],
  },
  {
    slug: 'rain-water-piping',
    title: 'Rain Water Piping',
    group: 'plumbing',
    summary: 'Stormwater capture, discharge, and harvesting-ready rainwater routing.',
    specialty: 'Roof drainage, stormwater discharge, and harvesting coordination.',
    related: ['water-treatment-plant', 'cold-water-piping', 'solar-water-heater'],
  },
  {
    slug: 'solar-water-heater',
    title: 'Solar Water Heater',
    group: 'plumbing',
    summary: 'Solar thermal systems with storage and backup integration for efficient hot water.',
    specialty: 'Collector sizing, storage integration, and backup planning.',
    related: ['hot-water-piping', 'water-treatment-plant', 'rain-water-piping'],
  },
]

export const services = [...mechanicalServices, ...fireServices, ...electricalServices, ...plumbingServices].map(makeService)

export const serviceGroups = [
  {
    key: 'mechanical',
    title: 'Mechanical Services',
    description: categoryTemplates.mechanical.intro,
    slugs: mechanicalServices.map((item) => item.slug),
    icon: FiWind,
  },
  {
    key: 'fire',
    title: 'Fire Protection',
    description: categoryTemplates.fire.intro,
    slugs: fireServices.map((item) => item.slug),
    icon: FiShield,
  },
  {
    key: 'electrical',
    title: 'Electrical',
    description: categoryTemplates.electrical.intro,
    slugs: electricalServices.map((item) => item.slug),
    icon: FiMonitor,
  },
  {
    key: 'plumbing',
    title: 'Plumbing',
    description: categoryTemplates.plumbing.intro,
    slugs: plumbingServices.map((item) => item.slug),
    icon: FiDroplet,
  },
]

export const serviceLookup = Object.fromEntries(services.map((item) => [item.slug, item]))

export const serviceCatalog = services.map((item) => ({
  slug: item.slug,
  title: item.title,
  group: item.group,
  categoryLabel: item.categoryLabel,
  summary: item.summary,
  specialty: item.specialty,
  path: `/services/${item.slug}`,
}))

export const serviceHighlights = [
  { title: 'Sales support', description: 'Early engagement that aligns scope, budget, and delivery expectations.' },
  { title: 'Installation', description: 'Field execution with clear coordination and disciplined quality checks.' },
  { title: 'Testing and commissioning', description: 'Structured verification so the system performs as intended.' },
  { title: 'Annual maintenance', description: 'Ongoing support to keep the asset reliable after handover.' },
]

export const projects = [
  {
    slug: 'bs-channabasappa-fire-fighting-davanagere',
    title: 'Fire Fighting System at BS Channabasappa & Sons',
    category: 'Fire Protection',
    status: 'Completed',
    location: 'Davanagere',
    client: 'BS Channabasappa & Sons',
    stage: 'Operational handover complete',
    technology: ['Fire fighting system', 'Hydrant coverage', 'Fire piping', 'Final testing'],
    summary: 'Delivered a complete fire-fighting package with field coordination, clean routing, and handover-ready life-safety support.',
    image: '/assets/projects/fire-hose-cabinet.jpeg',
    gallery: [
      {
        title: 'Fire cabinet installation',
        caption: 'Finished hose cabinet and access arrangement on site.',
        image: '/assets/projects/fire-hose-cabinet.jpeg',
      },
      {
        title: 'Ceiling interface',
        caption: 'Coordinated ceiling services for protection coverage and inspection access.',
        image: '/assets/projects/ceiling-corridor.jpeg',
      },
      {
        title: 'Service coordination',
        caption: 'Routing discipline that keeps the fire-protection network organized.',
        image: '/assets/projects/electrical-conduits.jpeg',
      },
    ],
  },
  {
    slug: 'bkg-group-vrf-sandur',
    title: 'HVAC VRF System at BKG Group',
    category: 'HVAC',
    status: 'Completed',
    location: 'Sandur',
    client: 'BKG Group',
    stage: 'Commissioned and delivered',
    technology: ['VRF system', 'Cassette indoor units', 'Ceiling coordination', 'Control commissioning'],
    summary: 'Installed and commissioned a VRF cooling solution for reliable zoning, neat finishing, and day-to-day operating simplicity.',
    image: '/assets/projects/cassette-close.jpeg',
    gallery: [
      {
        title: 'Cassette unit finish',
        caption: 'Installed cassette unit with clean panel fit and ceiling alignment.',
        image: '/assets/projects/cassette-close.jpeg',
      },
      {
        title: 'Corridor execution',
        caption: 'Long-run indoor coverage arranged for even comfort distribution.',
        image: '/assets/projects/cassette-corridor.jpeg',
      },
      {
        title: 'Air distribution',
        caption: 'Completed ceiling diffusers and outlet layout for balanced airflow.',
        image: '/assets/projects/ceiling-corridor.jpeg',
      },
    ],
  },
  {
    slug: 'mango-hotel-fire-hydrant-alarm-extinguishers-davanagere',
    title: 'Fire Hydrant, Fire Alarm and Fire Extinguisher at Mango Hotel',
    category: 'Fire Protection',
    status: 'Completed',
    location: 'Davanagere',
    client: 'Mango Hotel',
    stage: 'Protection package completed',
    technology: ['Fire hydrant', 'Fire alarm', 'Extinguishers', 'Life-safety checks'],
    summary: 'Executed a combined hydrant, alarm, and extinguisher package for dependable life-safety coverage in a hospitality environment.',
    image: '/assets/projects/fire-hose-cabinet.jpeg',
    gallery: [
      {
        title: 'Hydrant point',
        caption: 'Accessible fire-hose cabinet installation for quick emergency response.',
        image: '/assets/projects/fire-hose-cabinet.jpeg',
      },
      {
        title: 'Detection coverage',
        caption: 'Ceiling-level device integration aligned with the finished corridor ceiling.',
        image: '/assets/projects/ceiling-corridor.jpeg',
      },
      {
        title: 'Final readiness',
        caption: 'Completed interior coordination for protection devices and service visibility.',
        image: '/assets/projects/hvac-duct-corridor.jpeg',
      },
    ],
  },
  {
    slug: 'max-showroom-intrusion-alarm-fire-fighting-davanagere',
    title: 'Intrusion Alarm and Fire Fighting System at Max Show Room',
    category: 'Fire Protection',
    status: 'Completed',
    location: 'Davanagere',
    client: 'Max Show Room',
    stage: 'Operational handover complete',
    technology: ['Intrusion alarm', 'Fire fighting system', 'Monitoring devices', 'Integrated coordination'],
    summary: 'Delivered a combined security and fire-fighting scope with organized routing and a simple monitoring-ready installation.',
    image: '/assets/projects/fire-hose-cabinet.jpeg',
    gallery: [
      {
        title: 'Fire and security point',
        caption: 'Wall-mounted fire-protection hardware integrated into the finished interior.',
        image: '/assets/projects/fire-hose-cabinet.jpeg',
      },
      {
        title: 'Cable routing',
        caption: 'Neat conduit routing for device connectivity and future access.',
        image: '/assets/projects/electrical-conduits.jpeg',
      },
      {
        title: 'Ceiling coordination',
        caption: 'Service alignment that keeps detection and route access practical.',
        image: '/assets/projects/ceiling-corridor.jpeg',
      },
    ],
  },
  {
    slug: 'upperigenahalli-led-street-lighting',
    title: 'LED Street Lighting for the Agriculture Field',
    category: 'Electrical',
    status: 'Completed',
    location: 'Upperigenahalli',
    client: 'Agriculture Field Site',
    stage: 'Installed and energized',
    technology: ['LED street lighting', 'Outdoor wiring', 'Field-side electrification', 'Support installation'],
    summary: 'Installed a practical LED lighting setup for field access routes with dependable electrical routing and outdoor-ready execution.',
    image: '/assets/projects/electrical-conduits.jpeg',
    gallery: [
      {
        title: 'Electrical routing',
        caption: 'Structured conduit runs that support a reliable outdoor lighting network.',
        image: '/assets/projects/electrical-conduits.jpeg',
      },
      {
        title: 'Field-side access',
        caption: 'Representative site environment for the completed outdoor lighting work.',
        image: '/assets/projects/ongoing-hospital-road.jpeg',
      },
      {
        title: 'Power organization',
        caption: 'Execution focused on maintainability and straightforward future servicing.',
        image: '/assets/projects/hospital-exterior-close.jpeg',
      },
    ],
  },
  {
    slug: 'chitradurga-house-building-electrification',
    title: 'Building Electrification at Chitradurga House',
    category: 'Electrical',
    status: 'Completed',
    location: 'Chitradurga',
    client: 'Chitradurga House',
    stage: 'Electrification completed',
    technology: ['Building electrification', 'Internal wiring', 'Switch points', 'Service routing'],
    summary: 'Completed building electrification with organized wiring routes, distribution clarity, and ready-to-use interior service points.',
    image: '/assets/projects/electrical-conduits.jpeg',
    gallery: [
      {
        title: 'Wiring layout',
        caption: 'Clean vertical and horizontal routing for multiple points and controls.',
        image: '/assets/projects/electrical-conduits.jpeg',
      },
      {
        title: 'Ceiling coordination',
        caption: 'Integrated electrical work through the interior ceiling grid.',
        image: '/assets/projects/ceiling-corridor.jpeg',
      },
      {
        title: 'Final finish',
        caption: 'Finished interior route planning that supports maintenance access.',
        image: '/assets/projects/cassette-corridor.jpeg',
      },
    ],
  },
  {
    slug: 'mylar-sugars-house-dx-hubli',
    title: 'HVAC DX System Works for Mylar Sugars House',
    category: 'HVAC',
    status: 'Completed',
    location: 'Hubli',
    client: 'Mylar Sugars House',
    stage: 'Commissioned and handed over',
    technology: ['DX system', 'Air-side coordination', 'Indoor units', 'Cooling distribution'],
    summary: 'Delivered a DX cooling installation designed for dependable room-level comfort and straightforward operation after handover.',
    image: '/assets/projects/cassette-corridor.jpeg',
    gallery: [
      {
        title: 'Indoor cooling coverage',
        caption: 'Finished DX unit installation along a large internal circulation zone.',
        image: '/assets/projects/cassette-corridor.jpeg',
      },
      {
        title: 'Unit close-up',
        caption: 'Cassette finish arranged for clean ceiling integration and service access.',
        image: '/assets/projects/cassette-close.jpeg',
      },
      {
        title: 'Air distribution',
        caption: 'Balanced output layout through the completed ceiling pattern.',
        image: '/assets/projects/ceiling-corridor.jpeg',
      },
    ],
  },
  {
    slug: 'vishwaradya-cancer-hospital-plumbing-davanagere',
    title: 'Plumbing Work for Vishwaradya Cancer Hospital',
    category: 'Plumbing',
    status: 'Completed',
    location: 'Davanagere',
    client: 'Vishwaradya Cancer Hospital',
    stage: 'Plumbing scope completed',
    technology: ['Plumbing work', 'Pipe routing', 'Hospital utility support', 'Service coordination'],
    summary: 'Delivered hospital plumbing work with disciplined pipe routing, access-aware coordination, and a clean utility installation path.',
    image: '/assets/projects/plant-piping-grid.jpeg',
    gallery: [
      {
        title: 'Pipe routing',
        caption: 'Exposed service layout showing clean support spacing and routing order.',
        image: '/assets/projects/plant-piping-grid.jpeg',
      },
      {
        title: 'Coordination zone',
        caption: 'Hospital service corridor prepared for multi-discipline utility distribution.',
        image: '/assets/projects/hvac-duct-corridor.jpeg',
      },
      {
        title: 'Site infrastructure',
        caption: 'Representative healthcare-campus exterior from the supplied project set.',
        image: '/assets/projects/hospital-exterior-close.jpeg',
      },
    ],
  },
  {
    slug: 'fuego-solutions-hiwall-sindanur',
    title: 'HVAC Hiwall System for Fuego Solutions',
    category: 'HVAC',
    status: 'Completed',
    location: 'Sindanur',
    client: 'Fuego Solutions',
    stage: 'Installation completed',
    technology: ['Hiwall system', 'Indoor unit installation', 'Room cooling', 'Finishing coordination'],
    summary: 'Installed a hiwall air-conditioning solution with a simple maintenance approach and clean room-side presentation.',
    image: '/assets/projects/hiwall-indoor-unit.jpeg',
    gallery: [
      {
        title: 'Hiwall indoor unit',
        caption: 'Wall-mounted cooling unit installed and aligned for direct room service.',
        image: '/assets/projects/hiwall-indoor-unit.jpeg',
      },
      {
        title: 'Ceiling service zone',
        caption: 'Interior ceiling coordination supporting the final HVAC fit-out.',
        image: '/assets/projects/ceiling-corridor.jpeg',
      },
      {
        title: 'Air-side execution',
        caption: 'Representative HVAC fit-out scene from the supplied project images.',
        image: '/assets/projects/hvac-duct-room.jpeg',
      },
    ],
  },
  {
    slug: 'malatesh-traders-house-dx-hubli',
    title: 'HVAC DX System for Malatesh Traders House',
    category: 'HVAC',
    status: 'Completed',
    location: 'Hubli',
    client: 'Malatesh Traders House',
    stage: 'Commissioned and delivered',
    technology: ['DX system', 'Cassette units', 'Interior cooling', 'Final testing'],
    summary: 'Completed a DX air-conditioning scope with clean cassette placement and a practical cooling layout for occupied interiors.',
    image: '/assets/projects/cassette-close.jpeg',
    gallery: [
      {
        title: 'Cassette installation',
        caption: 'Close-up of the installed cassette unit and finished panel fit.',
        image: '/assets/projects/cassette-close.jpeg',
      },
      {
        title: 'Interior coverage',
        caption: 'Large corridor run showing the reach of the cooling layout.',
        image: '/assets/projects/cassette-corridor.jpeg',
      },
      {
        title: 'Distribution point',
        caption: 'Completed diffuser layout that supports even airflow across the ceiling grid.',
        image: '/assets/projects/ceiling-corridor.jpeg',
      },
    ],
  },
  {
    slug: 'sri-jayadeva-heart-sciences-chilled-water-hubli',
    title: 'HVAC 500 TR Chilled Water System at Sri Jayadeva Heart Sciences and Research Organisation Regional Heart Centre',
    category: 'HVAC',
    status: 'Ongoing',
    location: 'Hubli',
    client: 'Sri Jayadeva Heart Sciences and Research Organisation Regional Heart Centre',
    stage: 'Installation in progress',
    technology: ['500 TR chilled water system', 'Ducting', 'Pipe coordination', 'Healthcare HVAC'],
    summary: 'A large healthcare HVAC installation progressing through chilled-water distribution, ducting, and coordinated hospital fit-out.',
    image: '/assets/projects/ongoing-hospital-road.jpeg',
    gallery: [
      {
        title: 'Project exterior',
        caption: 'Regional heart-centre building frontage from the active project photo set.',
        image: '/assets/projects/ongoing-hospital-road.jpeg',
      },
      {
        title: 'Duct corridor',
        caption: 'Long HVAC duct run under execution across the circulation corridor.',
        image: '/assets/projects/hvac-duct-corridor.jpeg',
      },
      {
        title: 'Pipe coordination',
        caption: 'Service-grid view showing the piping and ceiling coordination still underway.',
        image: '/assets/projects/plant-piping-grid.jpeg',
      },
    ],
  },
  {
    slug: 'sri-cv-raman-general-hospital-dx-bangalore-urban',
    title: 'HVAC 100 TR DX System for 100 Bedded Critical Care Unit at Sri CV Raman General Hospital Premises',
    category: 'HVAC',
    status: 'Ongoing',
    location: 'Bangalore Urban',
    client: 'Sri CV Raman General Hospital',
    stage: 'Interior fit-out in progress',
    technology: ['100 TR DX system', 'Critical care cooling', 'Ceiling grid integration', 'Hospital interiors'],
    summary: 'Ongoing DX system execution for a critical-care block with active coordination between cooling hardware, ceiling finishing, and services.',
    image: '/assets/projects/ongoing-hospital-front.jpeg',
    gallery: [
      {
        title: 'Hospital frontage',
        caption: 'Site exterior from the live project image set supplied for healthcare work.',
        image: '/assets/projects/ongoing-hospital-front.jpeg',
      },
      {
        title: 'Interior corridor',
        caption: 'Ceiling and services progressing through the hospital circulation zone.',
        image: '/assets/projects/ceiling-corridor.jpeg',
      },
      {
        title: 'DX indoor coverage',
        caption: 'Cassette-based cooling work advancing across the main interior corridor.',
        image: '/assets/projects/cassette-corridor.jpeg',
      },
    ],
  },
  {
    slug: 'hotel-green-vrf-ankola',
    title: 'HVAC 116 HP VRF System at Hotel Green',
    category: 'HVAC',
    status: 'Ongoing',
    location: 'Ankola',
    client: 'Hotel Green',
    stage: 'Installation and finishing',
    technology: ['116 HP VRF system', 'Cassette units', 'Hospitality cooling', 'Room-by-room zoning'],
    summary: 'A VRF installation for hospitality spaces with ongoing indoor-unit finishing, ceiling integration, and air-distribution setup.',
    image: '/assets/projects/cassette-close.jpeg',
    gallery: [
      {
        title: 'Cassette unit',
        caption: 'Installed indoor unit selected as the main visual for the VRF hospitality scope.',
        image: '/assets/projects/cassette-close.jpeg',
      },
      {
        title: 'Long corridor coverage',
        caption: 'Continuous interior run prepared for comfort distribution across a large occupied zone.',
        image: '/assets/projects/cassette-corridor.jpeg',
      },
      {
        title: 'Ceiling finish',
        caption: 'Visible ceiling-grid coordination supporting the final hospitality fit-out.',
        image: '/assets/projects/ceiling-corridor.jpeg',
      },
    ],
  },
  {
    slug: 'sudhiksha-multi-speciality-hospital-vrf-siruguppa',
    title: 'HVAC 222 HP VRF System at Sudhiksha Multi-speciality Hospital',
    category: 'HVAC',
    status: 'Ongoing',
    location: 'Siruguppa',
    client: 'Sudhiksha Multi-speciality Hospital',
    stage: 'Execution in progress',
    technology: ['222 HP VRF system', 'Hospital HVAC', 'Cassette units', 'Ceiling services'],
    summary: 'Ongoing VRF execution for a hospital environment where comfort delivery, service coordination, and maintainability all matter.',
    image: '/assets/projects/hospital-exterior-close.jpeg',
    gallery: [
      {
        title: 'Site exterior',
        caption: 'Healthcare building exterior from the supplied active project visuals.',
        image: '/assets/projects/hospital-exterior-close.jpeg',
      },
      {
        title: 'Ceiling and services',
        caption: 'In-progress ceiling coordination supporting the larger hospital cooling scope.',
        image: '/assets/projects/ceiling-corridor.jpeg',
      },
      {
        title: 'Indoor cooling setup',
        caption: 'Cassette-based execution aligned with the interior circulation layout.',
        image: '/assets/projects/cassette-corridor.jpeg',
      },
    ],
  },
  {
    slug: 'bmcrc-vims-critical-care-vrf-bellary',
    title: 'HVAC 115 HP VRF System at 50 Bedded Critical Care Block Hospital in the Premises of BMCRC/VIMS',
    category: 'HVAC',
    status: 'Ongoing',
    location: 'Bellary',
    client: 'BMCRC/VIMS Critical Care Block',
    stage: 'Mechanical and ceiling coordination',
    technology: ['115 HP VRF system', 'Critical care block', 'Duct support works', 'Indoor unit fit-out'],
    summary: 'A hospital VRF package moving through active coordination between HVAC services, ceiling interfaces, and critical-care interior requirements.',
    image: '/assets/projects/ongoing-hospital-road.jpeg',
    gallery: [
      {
        title: 'Campus approach',
        caption: 'Representative healthcare-campus approach shot from the active site set.',
        image: '/assets/projects/ongoing-hospital-road.jpeg',
      },
      {
        title: 'Duct execution',
        caption: 'Mechanical works progressing through the corridor service zone.',
        image: '/assets/projects/hvac-duct-room.jpeg',
      },
      {
        title: 'Indoor distribution',
        caption: 'Cooling hardware and ceiling coordination continuing toward final fit-out.',
        image: '/assets/projects/cassette-close.jpeg',
      },
    ],
  },
]

export const projectFilters = ['All', 'HVAC', 'Fire Protection', 'Electrical', 'Plumbing']
export const projectLookup = Object.fromEntries(projects.map((item) => [item.slug, item]))

export const amcPlans = [
  {
    name: 'Essential',
    price: 'Custom quote',
    duration: '12 months',
    response: 'Same business day',
    idealFor: 'Smaller facilities and predictable asset lists',
    features: ['Preventive maintenance', 'Inspection reports', 'Spare parts planning', 'Remote support'],
  },
  {
    name: 'Priority',
    price: 'Custom quote',
    duration: '12 months',
    response: 'Priority dispatch',
    idealFor: 'Commercial buildings with active operations',
    features: ['Quarterly preventive cycles', 'Breakdown response', 'Performance logging', 'Dedicated service contact'],
  },
  {
    name: 'Enterprise',
    price: 'Custom quote',
    duration: '24 months',
    response: '24/7 escalation',
    idealFor: 'Hospitals, campuses, and mission-critical sites',
    features: ['Critical asset tracking', 'Emergency response', 'Monthly reviews', 'Compliance documentation'],
  },
]

export const amcMaintenance = [
  {
    title: 'MEP Testing and Commissioning',
    description: 'Complete testing and commissioning of all MEP systems.',
  },
  {
    title: 'Preventive and Corrective Maintenance',
    description: 'Regular visits to keep systems efficient, clean, and ready for demand spikes.',
  },
  {
    title: 'Annual Maintenance Contracts (AMC)',
    description: 'Comprehensive annual maintenance contracts for all your systems.',
  },
  {
    title: 'Energy Optimization and System Performance Assessment',
    description: 'Optimize energy usage and assess overall system performance.',
  },
]

export const amcFaq = [
  {
    question: 'Can AMC begin before the original project is complete?',
    answer:
      'Yes. We can prepare the contract structure in parallel with commissioning so the handover into maintenance is seamless.',
  },
  {
    question: 'Do you support multi-site contracts?',
    answer:
      'Yes. We can manage one location or a portfolio of buildings with common reporting and response rules.',
  },
  {
    question: 'Is spare parts planning included?',
    answer:
      'We can include spare parts strategy, critical consumables, and replacement recommendations based on the asset base.',
  },
]

export const companyStory = [
  'Pavanasuta Enterprises was built around a simple idea: engineering services should feel organized, responsive, and dependable from the first call to the last inspection.',
  'Our ongoing projects are managed with a strong focus on planning, technical excellence, timely execution, and strict adherence to quality and safety standards.',
  'We work closely with clients, consultants, and contractors to ensure seamless coordination and successful project delivery.',
  'Our completed projects reflect our expertise in delivering reliable Mechanical, Electrical, and Plumbing systems that are efficient, sustainable, and built to perform.',
  'Every completed project demonstrates our commitment to customer satisfaction, engineering excellence, and long-term value.',
  'The team works across mechanical, electrical, plumbing, fire protection, and AMC delivery so clients do not have to manage fragmented vendors for critical building systems.',
]

export const missionVision = [
  {
    title: 'Mission',
    description: 'Deliver disciplined MEP solutions that make buildings safer, more efficient, and easier to operate.',
  },
  {
    title: 'Vision',
    description: 'Be the first partner clients trust for premium engineering execution and reliable maintenance support.',
  },
]

export const coreValues = [
  {
    title: 'Engineering Excellence',
    description: 'We deliver top-notch engineering solutions that meet the highest industry standards.',
  },
  {
    title: 'Quality Assurance',
    description: 'We ensure every aspect of our work meets and exceeds quality expectations.',
  },
  {
    title: 'Safety First',
    description: 'Safety is our top priority in every project we undertake.',
  },
  {
    title: 'Timely Project Delivery',
    description: 'We are committed to completing every project on time, every time.',
  },
  {
    title: 'Customer-Centric Solutions',
    description: 'We tailor our services to meet the unique needs of each client.',
  },
  {
    title: 'Sustainable and Energy-Efficient Practices',
    description: 'We prioritize eco-friendly and energy-efficient solutions in all our work.',
  },
]

export const team = [
  {
    name: 'Project Leadership',
    role: 'MEP Delivery',
    description: 'Coordinates scope, schedule, approvals, and stakeholder communication.',
  },
  {
    name: 'Mechanical Engineers',
    role: 'HVAC and Plant Systems',
    description: 'Focus on cooling loads, plant rooms, and efficient operating strategies.',
  },
  {
    name: 'Electrical Engineers',
    role: 'Power and Controls',
    description: 'Manage distribution, safety, automation, and monitoring layers.',
  },
  {
    name: 'Service Team',
    role: 'AMC and Response',
    description: 'Handles preventive cycles, breakdown support, and routine inspections.',
  },
]

export const qualityPolicy = [
  'We verify drawings, equipment data, and site interfaces before work begins.',
  'We document installation, testing, and commissioning so handover is traceable.',
  'We respond quickly to defects and maintain a clear path for corrective action.',
]

export const timeline = [
  { year: '2007', title: 'Engineering team formed', description: 'Focused on building services execution and plant room delivery.' },
  { year: '2012', title: 'Multi-discipline expansion', description: 'Mechanical, electrical, plumbing, and fire scopes came under one roof.' },
  { year: '2018', title: 'AMC and service growth', description: 'Expanded into long-term maintenance and response contracts.' },
  { year: '2025', title: 'Premium digital experience', description: 'Launched a modern website and stronger project storytelling.' },
]

export const aboutStats = [
  { label: 'Projects Delivered', value: 420, suffix: '+' },
  { label: 'Cities Served', value: 24, suffix: '+' },
  { label: 'Uptime Focus', value: 99, suffix: '.2%' },
  { label: 'Client Retention', value: 92, suffix: '%' },
]

export const careerOpenings = [
  {
    title: 'MEP Project Engineer',
    location: 'On-site',
    type: 'Full-time',
    summary: 'Coordinates execution, approvals, documentation, and commissioning support.',
    requirements: ['MEP site delivery experience', 'Drawing coordination', 'Client communication'],
  },
  {
    title: 'HVAC Site Supervisor',
    location: 'On-site',
    type: 'Full-time',
    summary: 'Leads mechanical installation teams and quality checks in the field.',
    requirements: ['HVAC installation experience', 'Crew coordination', 'Safety awareness'],
  },
  {
    title: 'Electrical Design Engineer',
    location: 'Hybrid',
    type: 'Full-time',
    summary: 'Supports load studies, panel layouts, and coordination drawings.',
    requirements: ['Electrical design fundamentals', 'Panel and lighting design', 'Documentation discipline'],
  },
  {
    title: 'AMC Service Technician',
    location: 'Field-based',
    type: 'Full-time',
    summary: 'Performs preventive maintenance, breakdown checks, and response support.',
    requirements: ['Service mindset', 'Troubleshooting', 'Customer communication'],
  },
]

export const careerBenefits = [
  'Professional growth and career development',
  'Exposure to diverse MEP projects',
  'Safe, inclusive, and collaborative work environment',
  'Continuous learning and technical training',
  'Performance-driven culture with opportunities for advancement',
]

export const cultureNotes = [
  'At Pavanasuta Enterprises, we believe our people are the foundation of our success.',
  'We are committed to creating a workplace that encourages learning, innovation, teamwork, and professional growth.',
  'We welcome passionate, skilled, and motivated individuals who are eager to build a rewarding career in the MEP industry.',
  'Whether you are an experienced professional or a recent graduate, we offer opportunities to develop your technical expertise, take on challenging projects, and grow within a supportive and collaborative environment.',
  'If you are committed to excellence and ready to contribute to high-quality engineering solutions, we invite you to become part of the Pavanasuta Enterprises team.',
  'Join us and help build the future through engineering excellence.',
]

export const hiringProcess = [
  { title: 'Apply online', description: 'Submit the form and attach a current resume.' },
  { title: 'Screening call', description: 'We confirm experience, role fit, and expectations.' },
  { title: 'Technical discussion', description: 'The team reviews scope knowledge and working style.' },
  { title: 'Offer and onboarding', description: 'Selected candidates receive the next steps and joining plan.' },
]

export const contactMethods = [
  {
    title: 'Office Address',
    value: site.address,
  },
  {
    title: 'Phone',
    value: site.phone,
    phones: site.phones,
  },
  {
    title: 'Email',
    value: site.email,
  },
  {
    title: 'Working Hours',
    value: site.workingHours,
  },
]

export const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about-us' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'AMC', path: '/annual-maintenance-contracts' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

export const socialLinks = [
  { label: 'Call now', href: `tel:${site.phoneDigits}` },
  { label: 'WhatsApp', href: `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}` },
]
