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
    'Premium MEP engineering for HVAC, fire protection, electrical, plumbing, AMC, and facility operations.',
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
  accentImage:
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
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
  { label: 'Projects Completed', value: 420, suffix: '+' },
  { label: 'Years Experience', value: 18, suffix: '+' },
  { label: 'Clients', value: 150, suffix: '+' },
  { label: 'Engineers', value: 64, suffix: '+' },
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
  heading: 'Purpose-built engineering for demanding buildings.',
  paragraphs: [
    'AMC MEP Solutions delivers complete mechanical, electrical, and plumbing systems with a premium delivery standard. We work on projects where reliability, operational clarity, and clean handover matter just as much as installation quality.',
    'Our team supports clients from early sales discussions through commissioning and long-term maintenance. That means less friction between design intent, field work, and the realities of operations once the building is live.',
  ],
}

export const workProcess = [
  {
    title: 'Discovery',
    description: 'We review drawings, site conditions, load demands, utility constraints, and delivery timelines.',
  },
  {
    title: 'Design Alignment',
    description: 'Layouts, equipment selections, and coordination notes are aligned with the project and budget.',
  },
  {
    title: 'Execution',
    description: 'Site teams install, coordinate, and document the work with structured QA checkpoints.',
  },
  {
    title: 'Testing & Handover',
    description: 'Systems are tested, balanced, commissioned, and handed over with operation guidance.',
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
      'Cooling and ventilation systems built for stable comfort, energy discipline, and maintainable plant rooms.',
    features: [
      'Load-based equipment sizing and plant selection',
      'Air-side and water-side coordination',
      'Controls ready for commissioning and monitoring',
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
      'Life-safety systems that address detection, suppression, and emergency communication with code-aware discipline.',
    features: [
      'Alarm logic, zoning, and cause-and-effect planning',
      'Suppression, hydrant, and extinguisher coverage',
      'Emergency communication and monitoring integration',
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
      'Reliable distribution and intelligent power systems planned for clarity, safety, and long-term operation.',
    features: [
      'Distribution boards, switchgear, and protection coordination',
      'Lighting, power, and automation planning',
      'Monitoring, metering, and solar integration support',
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
      'Water supply, treatment, drainage, and hot-water systems designed for clean routing and dependable service.',
    features: [
      'Pressure-balanced supply and drainage planning',
      'Treatment, filtration, and water quality support',
      'Hot-water, rainwater, and harvesting coordination',
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
    slug: 'central-plant-modernization',
    title: 'Central Plant Modernization',
    category: 'HVAC',
    status: 'Completed',
    location: 'Bengaluru',
    client: 'Speciality Hospital Group',
    duration: '14 months',
    technology: ['Chilled water plant', 'AHUs', 'BMS integration', 'TAB'],
    summary: 'A central plant upgrade with improved cooling efficiency, cleaner control logic, and a clearer maintenance path.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { title: 'Plant room', caption: 'Equipment arrangement and access planning' },
      { title: 'Air handling', caption: 'Air-side coordination and airflow control' },
      { title: 'Commissioning', caption: 'Final testing and balance records' },
    ],
  },
  {
    slug: 'tower-fire-life-safety',
    title: 'Tower Fire Life Safety Upgrade',
    category: 'Fire Protection',
    status: 'Completed',
    location: 'Hyderabad',
    client: 'Commercial Tower Operator',
    duration: '8 months',
    technology: ['Hydrant network', 'Fire alarm', 'PA system', 'Extinguishers'],
    summary: 'A life-safety refresh covering alarm devices, emergency communication, and protection coverage across public areas.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { title: 'Alarm room', caption: 'Zoning and panel coordination' },
      { title: 'Emergency devices', caption: 'Accessible life-safety coverage' },
      { title: 'Handover pack', caption: 'Commissioning and inspection notes' },
    ],
  },
  {
    slug: 'campus-electrical-retrofit',
    title: 'Campus Electrical Retrofit',
    category: 'Electrical',
    status: 'Ongoing',
    location: 'Pune',
    client: 'IT Campus Owner',
    duration: '11 months',
    technology: ['LT panels', 'Switchgear', 'Lighting controls', 'Solar-ready design'],
    summary: 'A phased retrofit to improve power distribution clarity, safety, and operating visibility in an occupied campus.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { title: 'Panel room', caption: 'Distribution and protection updates' },
      { title: 'Lighting', caption: 'Interior and exterior lighting upgrades' },
      { title: 'Monitoring', caption: 'Energy and load visibility' },
    ],
  },
  {
    slug: 'pharma-plumbing-upgrade',
    title: 'Pharma Plumbing Upgrade',
    category: 'Plumbing',
    status: 'Completed',
    location: 'Ahmedabad',
    client: 'Pharmaceutical Unit',
    duration: '6 months',
    technology: ['Water treatment', 'Cold water network', 'Hot water loop', 'Rainwater routing'],
    summary: 'A utility upgrade focused on clean water, better pressure balance, and maintainable routing across production spaces.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { title: 'Treatment plant', caption: 'Water quality planning and treatment' },
      { title: 'Piping', caption: 'Utility routes and leak testing' },
      { title: 'Testing', caption: 'Pressure and flow verification' },
    ],
  },
  {
    slug: 'warehouse-vrf-cooling',
    title: 'Warehouse VRF Cooling',
    category: 'HVAC',
    status: 'Ongoing',
    location: 'Chennai',
    client: 'Logistics Park',
    duration: '9 months',
    technology: ['VRF zoning', 'Hiwall units', 'Controls', 'Commissioning'],
    summary: 'A fast-track cooling solution designed for distribution areas, offices, and support rooms with efficient zoning.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { title: 'Outdoor units', caption: 'Compact equipment arrangement' },
      { title: 'Indoor zoning', caption: 'Room-by-room comfort planning' },
      { title: 'Controls', caption: 'Simple daily operation' },
    ],
  },
  {
    slug: 'mixed-use-fire-and-cctv',
    title: 'Mixed-Use Security and Fire Package',
    category: 'Fire Protection',
    status: 'Completed',
    location: 'Kochi',
    client: 'Mixed-Use Developer',
    duration: '7 months',
    technology: ['CCTV', 'VESDA', 'Voice alarm', 'Access control'],
    summary: 'A safety and security package spanning monitoring, early warning, and emergency communication.',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { title: 'Security room', caption: 'Operator visibility and response' },
      { title: 'Critical zones', caption: 'Early warning and suppression logic' },
      { title: 'Access points', caption: 'Visitor verification and control' },
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
    title: 'Preventive Maintenance',
    description: 'Regular visits to keep systems efficient, clean, and ready for demand spikes.',
  },
  {
    title: 'Emergency Breakdown Support',
    description: 'Fast response for unexpected failures, alarms, and operational interruptions.',
  },
  {
    title: 'Routine Inspection',
    description: 'Structured checks that catch wear, drift, and safety issues before they grow.',
  },
  {
    title: 'Response Time',
    description: 'Defined escalation paths and response windows for different asset priorities.',
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
  'AMC MEP Solutions was built around a simple idea: engineering services should feel organized, responsive, and dependable from the first call to the last inspection.',
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
    title: 'Accountability',
    description: 'We own the result, not just the task list.',
  },
  {
    title: 'Clarity',
    description: 'Documentation and communication stay simple, direct, and usable.',
  },
  {
    title: 'Safety',
    description: 'Every site decision respects people, assets, and operations.',
  },
  {
    title: 'Craft',
    description: 'Details matter in routing, access, finishing, and handover.',
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
  'Structured project exposure across multiple disciplines',
  'Supportive team culture with clear ownership',
  'On-site learning and practical commissioning experience',
  'Growth path from delivery to operations support',
]

export const cultureNotes = [
  'We value steady communication over noisy process.',
  'We prefer clean handovers, visible documentation, and practical problem solving.',
  'We work best with people who take pride in the work and the team around it.',
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
