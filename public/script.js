/* ============================================================
   HONEY DO MAN - site logic
   All card content lives in DATA objects below and is rendered
   into the page, so nothing is hand-duplicated per card.
   ============================================================ */

const ICONS = {
  check: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-7.4 7-12.5A7 7 0 0 0 5 9.5C5 14.6 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.4"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></svg>`,
  lawn: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M9 20V6M14 20v-8M19 20V9"/></svg>`,
  spray: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14l6-6 8 8-6 6z"/><path d="M14 4l2 2M18 2l2 2M17 7l3-1"/></svg>`,
  gutter: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M6 6v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6"/><path d="M12 12v9"/></svg>`,
  broom: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 3L9 13"/><path d="M9 13l-5 8 8-3 2-3z"/></svg>`,
  wrench: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-3-3z"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 12.3L12.3 20.6a2 2 0 0 1-2.8 0l-8-8a2 2 0 0 1 0-2.8L9.7 1.4A2 2 0 0 1 11 1h7a2 2 0 0 1 2 2v7a2 2 0 0 1-.4 1.3z"/><circle cx="15.5" cy="7.5" r="1.5"/></svg>`,
  star: `<svg viewBox="0 0 24 24"><path d="M12 2l3.1 6.6 7.2.9-5.3 5 1.4 7.2L12 18.3 5.6 21.7 7 14.5l-5.3-5 7.2-.9z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 2 2.3z"/></svg>`,
  text: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.5 8.5 0 0 1-4-1L3 20l1.1-5A8.4 8.4 0 1 1 21 11.5z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  other: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/></svg>`,
  many: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
};

const SERVICES = [
  { icon:'lawn', name:'Lawn Care', desc:'Mowing, edging and trimming on a schedule your yard can actually keep up with.' },
  { icon:'spray', name:'Pressure Washing', desc:'Driveways, siding, walkways and patios - restored, not just rinsed.' },
  { icon:'gutter', name:'Gutter Cleaning', desc:'Cleared gutters and downspouts so water goes where it should.' },
  { icon:'broom', name:'Yard Cleanup', desc:'Leaves, debris and overgrowth handled in a single visit.' },
  { icon:'wrench', name:'Handyman Services', desc:'The small repairs that have been sitting on the list for months.' },
  { icon:'box', name:'Property Cleanup', desc:'Full-property cleanouts for lots, rentals and vacant homes.' },
  { icon:'home', name:'Move-Out Cleanup', desc:'Leave it ready for the next tenant, buyer or walkthrough.' },
  { icon:'doc', name:'Estate / Inherited Property', desc:'Careful, judgment-free help getting a family property back in order.' },
  { icon:'tag', name:'Pre-Sale Home Preparation', desc:'The cleanup and repairs that help a listing show its best.' },
  { icon:'home', name:'Home Maintenance', desc:'Ongoing upkeep so small issues never turn into big ones.' },
];

const MEMBERSHIP = {
  intro: {
    eyebrow: 'Memberships',
    title: 'Put Your Home On Autopilot.',
    copy: 'Monthly home and property maintenance designed to catch small problems early, keep your home maintained, and take the Honey-Do list off your plate.',
    disclaimer: 'Membership services are subject to the applicable plan\'s service limits and membership agreement. Larger repairs, specialty work, materials, and work outside the included scope are quoted separately.',
  },
  cards: [
    {
      id: 'care',
      name: 'HDM CARE',
      price: '$99',
      tier: 'BASIC CARE',
      badge: 'ENTRY POINT',
      tagline: 'We watch your home.',
      summary: 'A monthly home and property checkup designed to catch small problems before they become bigger headaches.',
      checkoutLabel: 'PAY WITH CARD',
      cta: 'START WITH HDM CARE',
      accent: 'lime',
      featured: false,
      highlights: ['Monthly home checkup', 'HVAC filter service', 'Plumbing/leak checks', 'Lighting & safety checks', 'Exterior home check'],
      groups: [
        {
          title: 'HVAC CARE',
          icon: 'home',
          items: ['HVAC filter check', 'HVAC filter replacement', 'Record filter size', 'Check thermostat appears operational', 'Check accessible vents for obvious blockage or damage', 'Scheduled annual HVAC maintenance/cleaning within HDM\'s defined service scope'],
        },
        {
          title: 'PLUMBING CHECK',
          icon: 'gutter',
          items: ['Check kitchen faucet for visible leaks/drips', 'Check bathroom faucets for visible leaks/drips', 'Check accessible areas underneath sinks for moisture/leaks', 'Check toilets for continuous running or visible leaks', 'Check exterior faucets/spigots', 'Check attached hoses', 'Check hose connections/nozzles for visible leaks'],
        },
        {
          title: 'LIGHTS & BASIC SAFETY',
          icon: 'star',
          items: ['Check accessible interior lights', 'Check accessible exterior lights', 'Replace approved basic burned-out bulbs when appropriate', 'Check accessible switches for obvious damage', 'Check accessible outlets for visible damage', 'Test accessible smoke detectors', 'Test accessible CO detectors when present'],
        },
        {
          title: 'EXTERIOR HOME CHECK',
          icon: 'home',
          items: ['Accessible exterior walk-around', 'Exterior doors', 'Gates', 'Visible siding/brick condition', 'Exterior trim', 'Obvious water damage', 'Drainage/standing water concerns', 'Gutters/downspouts visually checked from ground level', 'Exterior lights', 'Obvious trip hazards', 'Reasonable small debris pickup'],
        },
        {
          title: 'BASIC PREVENTATIVE MAINTENANCE',
          icon: 'wrench',
          items: ['Tighten simple loose handles/hardware when appropriate', 'Address simple maintenance items within HDM\'s defined scope', 'Photograph problems requiring additional work'],
        },
      ],
      report: ['GOOD', 'KEEP AN EYE ON IT', 'NEEDS ATTENTION'],
      note: 'HDM Home Condition Reports create a continuing record of what HDM has observed and maintained during each visit.',
      footerNote: 'Membership services are subject to the applicable plan\'s service limits and membership agreement. Larger repairs, specialty work, materials, and work outside the included scope are quoted separately.',
    },
    {
      id: 'home',
      name: 'HDM HOME',
      price: '$199',
      tier: 'BEST VALUE',
      badge: 'MOST POPULAR',
      tagline: 'We watch it AND maintain it.',
      summary: 'Everything included in HDM CARE, plus additional interior and exterior home maintenance and included Honey-Do time.',
      checkoutLabel: 'PAY WITH CARD',
      cta: 'CHOOSE HDM HOME',
      accent: 'accent',
      featured: true,
      highlights: ['Everything in Care', 'Home maintenance', '30 minutes included', 'Doors/windows/hardware', 'Home upkeep'],
      groups: [
        {
          title: 'EVERYTHING IN HDM CARE',
          icon: 'check',
          items: ['Monthly home and property checkup', 'HVAC filter service', 'Plumbing/leak checks', 'Lighting & basic safety checks', 'Exterior home check', 'Basic preventative maintenance', 'Home condition documentation'],
        },
        {
          title: 'DOORS, WINDOWS & HARDWARE',
          icon: 'home',
          items: ['Accessible interior door checks', 'Exterior door checks', 'Check for sticking/squeaking doors', 'Lubricate appropriate hinges when needed', 'Tighten simple handles/hardware', 'Cabinet doors/handles', 'Visible weather stripping', 'Accessible caulking condition', 'Accessible windows/screens for obvious problems'],
        },
        {
          title: 'INTERIOR HOME MAINTENANCE',
          icon: 'wrench',
          items: ['Ceiling fan visual checks', 'Garbage disposal operation check when present', 'Accessible dishwasher/filter visual check', 'Washing-machine hose/connection visual check', 'Dryer vent connection visual check', 'Refrigerator water connection visual check when present', 'Visible moisture/water staining', 'Wall/ceiling conditions that should be monitored'],
        },
        {
          title: 'HOME UPKEEP',
          icon: 'broom',
          items: ['Spot-clean designated wall scuffs', 'Wipe designated baseboards', 'Wipe dirty door/door-frame areas', 'Wipe designated switches/common touch surfaces', 'Remove accessible porch/exterior cobwebs'],
        },
        {
          title: 'EXTERIOR PROPERTY UPKEEP',
          icon: 'spray',
          items: ['Basic property cleanup', 'Reasonable sticks/debris pickup', 'Blow off designated porch/walkway when appropriate', 'Fence/gate checks', 'Exterior fixture checks', 'Drainage/property concern documentation'],
        },
        {
          title: 'INCLUDED HONEY-DO TIME',
          icon: 'clock',
          items: ['Up to 30 minutes of approved minor Honey-Do work per visit', 'Small hardware adjustments', 'Minor maintenance tasks', 'Simple upkeep tasks', 'Other approved tasks within HDM\'s service scope'],
        },
      ],
      report: ['GOOD', 'KEEP AN EYE ON IT', 'NEEDS ATTENTION'],
      note: 'Honey-Do time applies only to approved minor tasks within HDM\'s defined service scope. Larger repairs, specialty work, materials, and work exceeding included time are quoted separately.',
      footerNote: 'Do not describe HDM HOME as unlimited handyman labor. Honey-Do time is limited to approved minor tasks within HDM\'s defined service scope.',
    },
    {
      id: 'total',
      name: 'HDM TOTAL',
      price: '$299',
      tier: 'PREMIUM',
      badge: 'PREMIUM HOME CARE',
      tagline: 'Complete home care.',
      summary: 'The highest level of HDM membership for homeowners who want more comprehensive monitoring, preventative maintenance, and included Honey-Do time.',
      checkoutLabel: 'PAY WITH CARD',
      cta: 'GO TOTAL',
      accent: 'gold',
      featured: false,
      highlights: ['Everything in Care', 'Everything in Home', '60 minutes included', 'Complete Home Health Check', 'Annual HVAC maintenance'],
      groups: [
        {
          title: 'EVERYTHING IN HDM CARE',
          icon: 'check',
          items: ['Monthly home and property checkup', 'HVAC filter service', 'Plumbing/leak checks', 'Lighting & basic safety checks', 'Exterior home check', 'Basic preventative maintenance', 'Home condition documentation'],
        },
        {
          title: 'EVERYTHING IN HDM HOME',
          icon: 'check',
          items: ['Doors/windows/hardware checks', 'Interior upkeep', 'Exterior property upkeep', 'Included Honey-Do time', 'Priority attention to previous problem areas'],
        },
        {
          title: 'HDM HOME HEALTH CHECK',
          icon: 'star',
          items: ['INTERIOR: Visible ceiling/wall water staining', 'INTERIOR: Accessible under-sink areas', 'INTERIOR: Toilets/faucets', 'INTERIOR: Visible plumbing connections', 'INTERIOR: Doors/hardware', 'INTERIOR: Accessible windows', 'INTERIOR: Visible caulking', 'INTERIOR: Ceiling fans', 'INTERIOR: Accessible lighting', 'INTERIOR: Smoke/CO detectors', 'INTERIOR: Unusual visible moisture/damage', 'INTERIOR: Previous problem areas', 'EXTERIOR: Full accessible perimeter walk', 'EXTERIOR: Exterior doors', 'EXTERIOR: Gates/fencing', 'EXTERIOR: Visible siding/brick', 'EXTERIOR: Visible exterior trim', 'EXTERIOR: Exterior caulking condition', 'EXTERIOR: Gutters/downspouts from ground level', 'EXTERIOR: Drainage/standing water', 'EXTERIOR: Exterior faucets', 'EXTERIOR: Hoses/nozzles', 'EXTERIOR: Exterior lights', 'EXTERIOR: Walkways/driveway for obvious hazards', 'EXTERIOR: Obvious property hazards', 'EXTERIOR: Previous problem areas'],
        },
        {
          title: 'PREVENTATIVE MAINTENANCE',
          icon: 'wrench',
          items: ['HVAC filter service', 'Approved hardware tightening', 'Appropriate lubrication', 'Approved preventative maintenance', 'Scheduled seasonal maintenance', 'Previous problem follow-up', 'Documentation of developing concerns', 'Photo documentation'],
        },
        {
          title: 'ANNUAL HVAC MAINTENANCE',
          icon: 'home',
          items: ['HDM performs scheduled annual HVAC maintenance/cleaning within the defined HDM service scope.'],
        },
        {
          title: 'INCLUDED HONEY-DO TIME',
          icon: 'clock',
          items: ['Up to 60 minutes of approved minor Honey-Do work per visit', 'Your HDM technician can use up to 60 minutes of each visit for approved minor maintenance tasks within the membership scope.', 'Larger repairs, specialty work, materials, and work outside the included scope are quoted separately.'],
        },
      ],
      report: ['GOOD', 'KEEP AN EYE ON IT', 'NEEDS ATTENTION'],
      note: 'Your HDM technician can use up to 60 minutes of each visit for approved minor maintenance tasks within the membership scope.',
      footerNote: 'Do not treat this as a formal real-estate inspection or a licensed home inspection. This is an HDM Home Health Check, preventative home check, and maintenance & condition check within HDM\'s defined scope. Larger repairs, specialty work, materials, and work outside the included scope are quoted separately.',
    },
  ],
  comparisonRows: [
    { label: 'Monthly home checkup', care: '✓', home: '✓', total: '✓' },
    { label: 'HVAC filter service', care: '✓', home: '✓', total: '✓' },
    { label: 'Scheduled annual HVAC maintenance', care: '✓', home: '✓', total: '✓' },
    { label: 'Plumbing/leak checks', care: '✓', home: '✓', total: '✓' },
    { label: 'Lighting & safety checks', care: '✓', home: '✓', total: '✓' },
    { label: 'Exterior home check', care: '✓', home: '✓', total: '✓' },
    { label: 'Basic property cleanup', care: '✓', home: '✓', total: '✓' },
    { label: 'Home maintenance', care: '—', home: '✓', total: '✓' },
    { label: 'Doors/windows/hardware', care: '—', home: '✓', total: '✓' },
    { label: 'Interior upkeep', care: '—', home: '✓', total: '✓' },
    { label: 'Exterior upkeep', care: '—', home: '✓', total: '✓' },
    { label: 'Honey-Do time', care: '—', home: '30 min', total: '60 min', emphasis: true },
    { label: 'Comprehensive Home Health Check', care: '—', home: '—', total: '✓' },
    { label: 'Preventative maintenance', care: '✓', home: '✓', total: '✓' },
    { label: 'Seasonal maintenance', care: '—', home: '—', total: '✓' },
    { label: 'Premium service level', care: '—', home: '—', total: '✓' },
  ],
  exclusions: [
    'Major repairs',
    'Specialty repairs',
    'Major plumbing work',
    'Electrical work outside HDM\'s permitted scope',
    'HVAC repairs outside included maintenance',
    'Refrigerant/service work when applicable',
    'Structural repairs',
    'Roofing repairs',
    'Large landscaping projects',
    'Major pressure washing projects',
    'Materials outside included allowances',
    'Projects exceeding included Honey-Do time',
    'Work outside the membership\'s defined service area or scope',
  ],
  howItWorks: [
    'HDM documents the issue.',
    'HDM photographs it when appropriate.',
    'HDM explains the issue to the homeowner.',
    'HDM provides an estimate when needed.',
    'HDM gets homeowner approval before performing additional work.',
  ],
  benefits: [
    { title: 'Prevent', copy: 'Catch small problems before they become bigger headaches.' },
    { title: 'Save Time', copy: 'Stop spending your weekends chasing the Honey-Do list.' },
    { title: 'Plan Ahead', copy: 'Know what\'s happening around your home before it becomes an emergency.' },
    { title: 'Peace of Mind', copy: 'Have a local HDM team keeping an eye on your property.' },
  ],
  finalCta: {
    title: 'Ready to take the Honey-Do list off your plate?',
    copy: 'Tell us about your home and we\'ll help you find the HDM membership that fits.',
  },
};

const ONE_TIME = [
  { name:'Lawn Cleanup', price:'From $79' },
  { name:'Pressure Washing', price:'From $149' },
  { name:'Gutter Cleaning', price:'From $129' },
  { name:'Yard Cleanup', price:'From $99' },
  { name:'Move-Out / Property Cleanup', price:'From $249' },
  { name:'Handyman Services', price:'From $95/hr' },
  { name:'Pre-Sale Preparation', price:'Free Estimate' },
  { name:'Estate / Inherited Property', price:'Free Estimate' },
  { name:'Large Property Projects', price:'Free Estimate' },
];

const PRESALE_SERVICES = ['Yard cleanup','Pressure washing','Trash removal','Minor repairs','Touch-up work','Gutter cleaning','Exterior cleanup','Move-out cleanup'];
const TOWNS = ['Beaumont','Port Arthur','Nederland','Port Neches','Groves','Orange','Vidor','Lumberton','Silsbee','Bridge City','Kountze','Winnie','Mauriceville'];
const WHY_HDM = [
  { tag:'Local', text:"We're not some faceless national company." },
  { tag:'Simple', text:'One team for the jobs homeowners constantly put off.' },
  { tag:'Upfront', text:'Clear communication before work begins.' },
  { tag:'Reliable', text:'Recurring plans keep your property maintained.' },
  { tag:'Human', text:'Real people. Real local service.' },
];

const TESTIMONIALS = [1,2,3].map(() => ({ quote:'Customer testimonial coming soon.', name:'Verified HDM customer', loc:'409 area' }));
const FAQS = [
  { q:'What areas do you serve?', a:'We serve Beaumont, Port Arthur, Nederland, Port Neches, Groves, Orange, Vidor, Lumberton, Silsbee, Bridge City, Kountze, Winnie, Mauriceville and the surrounding 409 / Golden Triangle communities.' },
  { q:'Do you offer recurring maintenance?', a:'Yes. Our HDM Care, Home and Total plans put lawn care, pressure washing, gutter cleaning and general upkeep on a recurring schedule, so problems get handled before they build up.' },
  { q:'Can I request a one-time service?', a:'Absolutely. You do not need a membership to book a single job - lawn cleanup, pressure washing, gutter cleaning, handyman work and more are all available one-time.' },
  { q:'Do you work with inherited properties?', a:'Yes. We regularly help families and heirs clean up, maintain and prepare inherited or estate properties, whether you are local or managing things from out of town.' },
  { q:'Can you help prepare my house for sale?', a:'Yes. Our pre-sale preparation service covers yard cleanup, pressure washing, trash removal, minor repairs and touch-ups to help your property show its best before it hits the market.' },
  { q:'Do you offer estimates?', a:'Yes, estimates are free. Fill out the estimate form with a few details about your property and what you need, and our team will follow up with next steps.' },
  { q:'Can I cancel my membership?', a:'Yes. Membership terms, including cancellation, are laid out in your membership agreement provided at signup. Reach out to our team any time with questions about your plan.' },
  { q:'What happens if my project is larger than the membership covers?', a:'Larger repairs, materials, specialty work and projects outside your plan\'s scope are quoted separately - your membership covers everything defined in your agreement, and anything beyond that gets a clear, upfront quote first.' },
];

const EF_NEEDS = [
  { key:'lawn', label:'Lawn Care', icon:'lawn' },
  { key:'pressure', label:'Pressure Washing', icon:'spray' },
  { key:'gutters', label:'Gutters', icon:'gutter' },
  { key:'handyman', label:'Handyman', icon:'wrench' },
  { key:'cleanup', label:'Property Cleanup', icon:'box' },
  { key:'estate', label:'Inherited / Estate Property', icon:'doc' },
  { key:'presale', label:'Pre-Sale Preparation', icon:'tag' },
  { key:'moveout', label:'Move-Out', icon:'home' },
  { key:'multiple', label:'Multiple Services', icon:'many' },
  { key:'other', label:'Other', icon:'other' },
];

const EF_PROPERTY_TYPES = ['House','Townhome','Rental','Vacant Property','Inherited Property','Other'];
const EF_SIZES = ['Under 1,000 sqft','1,000-1,500','1,500-2,000','2,000-3,000','3,000+'];
const EF_CONTACT = [
  { key:'phone', label:'Phone', icon:'phone' },
  { key:'text', label:'Text', icon:'text' },
  { key:'email', label:'Email', icon:'mail' },
];
const EF_TIMES = ['Morning','Afternoon','Evening'];
const HDM_ESTIMATE_PHONE = '+13463607235';
const HDM_ESTIMATE_EMAIL = 'honeydoman.service@outlook.com';

const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));
const icon = (name) => ICONS[name] || ICONS.other;

function initNav(){
  const nav = $('#navbar');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });

  const menuBtn = $('#menuBtn');
  const panel = $('#mobilePanel');
  if (!menuBtn || !panel) return;

  menuBtn.addEventListener('click', () => {
    const open = !panel.classList.contains('is-open');
    panel.classList.toggle('is-open', open);
    menuBtn.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  $$('#mobilePanel a').forEach((a) => a.addEventListener('click', () => {
    panel.classList.remove('is-open');
    menuBtn.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  }));
}

function initReveal(){
  const targets = $$('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold:0.14, rootMargin:'0px 0px -40px 0px' });
  targets.forEach((t) => io.observe(t));
}

function renderServices(){
  const grid = $('#servicesGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map((s, i) => `
    <div class="service-card ticket" data-reveal style="transition-delay:${(i % 3) * 70}ms">
      <div class="service-icon">${icon(s.icon)}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <a href="#estimate" class="service-link">Learn More ${icon('arrow')}</a>
    </div>
  `).join('');
}

function renderMembership(){
  const summary = $('#membershipSummary');
  if (summary) {
    summary.innerHTML = [
      { label: '$99 / MONTH', copy: 'Basic care' },
      { label: '$199 / MONTH', copy: 'Best value' },
      { label: '$299 / MONTH', copy: 'Premium' },
    ].map((item) => `
      <div class="membership-summary-chip ticket" data-reveal>
        <div class="membership-summary-label">${item.label}</div>
        <div class="membership-summary-copy">${item.copy}</div>
      </div>
    `).join('');
  }

  const grid = $('#membershipCards');
  if (grid) {
    grid.innerHTML = MEMBERSHIP.cards.map((plan, index) => `
      <article class="membership-card ticket ${plan.featured ? 'is-featured' : ''} is-${plan.accent}" data-reveal="scale" style="transition-delay:${index * 70}ms">
        <div class="membership-card-top">
          <div class="membership-card-meta">
            <span class="membership-tier">${plan.tier}</span>
            ${plan.badge ? `<span class="membership-badge ${plan.featured ? 'featured' : ''}">${plan.badge}</span>` : ''}
          </div>
          <h3>${plan.name}</h3>
          <p class="membership-tagline">${plan.tagline}</p>
          <div class="membership-price"><span class="num">${plan.price}</span><span class="per">/ MONTH</span></div>
          <p class="membership-copy">${plan.summary}</p>
          <div class="membership-highlights">${plan.highlights.map((item) => `<span>${item}</span>`).join('')}</div>
          <div class="membership-card-ctas">
            <button type="button" class="btn btn-primary btn-block js-checkout" data-plan="${plan.id}">
              <span class="spin"></span><span class="btn-label">${plan.checkoutLabel}</span>
            </button>
            <a href="#estimate" class="btn btn-ghost btn-block">${plan.cta}</a>
            <a href="tel:${HDM_ESTIMATE_PHONE}" class="btn btn-ghost btn-block">CALL OR TEXT HDM</a>
          </div>
          <div class="price-note" data-note-for="${plan.id}">Secure Stripe checkout.</div>
        </div>
        <details class="membership-details">
          <summary>VIEW EVERYTHING INCLUDED ↓</summary>
          <div class="membership-details-inner">
            <div class="membership-report">
              <h4>HDM HOME CONDITION REPORT</h4>
              <div class="membership-report-row">${plan.report.map((item, reportIndex) => `<span class="report-pill report-${reportIndex}">${item}</span>`).join('')}</div>
              <p>${plan.note}</p>
            </div>
            ${plan.groups.map((group) => `
              <div class="membership-group">
                <div class="membership-group-title">${icon(group.icon)}<span>${group.title}</span></div>
                <ul>${group.items.map((item) => `<li>${icon('check')}<span>${item}</span></li>`).join('')}</ul>
              </div>
            `).join('')}
            <p class="membership-scope-note">${plan.footerNote}</p>
          </div>
        </details>
      </article>
    `).join('');

    $$('.js-checkout').forEach((btn) => btn.addEventListener('click', onCheckoutClick));
  }

  const comparison = $('#membershipComparison');
  if (comparison) {
    comparison.innerHTML = `
      <div class="membership-section-head" data-reveal>
        <span class="eyebrow muted">What's the difference?</span>
        <h2 class="h-display">Which HDM Membership Is Right For You?</h2>
      </div>
      <div class="membership-table-wrap ticket" data-reveal>
        <table class="membership-table">
          <thead>
            <tr>
              <th>Benefit</th>
              <th>HDM CARE</th>
              <th>HDM HOME</th>
              <th>HDM TOTAL</th>
            </tr>
          </thead>
          <tbody>
            ${MEMBERSHIP.comparisonRows.map((row) => `
              <tr class="${row.emphasis ? 'is-emphasis' : ''}">
                <th scope="row">${row.label}</th>
                <td>${row.care}</td>
                <td>${row.home}</td>
                <td>${row.total}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  const exclusions = $('#membershipExclusions');
  if (exclusions) {
    exclusions.innerHTML = `
      <div class="membership-section-head" data-reveal>
        <span class="eyebrow amber">What doesn't the membership cover?</span>
        <h2 class="h-display">No Surprise Work.<br>No Unlimited Free Labor.</h2>
        <p>Memberships are designed for recurring preventative maintenance and approved services included within each plan.</p>
      </div>
      <div class="membership-exclusions-grid">
        <div class="membership-exclusions-card ticket" data-reveal>
          <ul>
            ${MEMBERSHIP.exclusions.map((item) => `<li>${icon('check')}<span>${item}</span></li>`).join('')}
          </ul>
        </div>
        <div class="membership-approval ticket" data-reveal>
          <div class="membership-approval-kicker">How it works</div>
          <div class="membership-approval-flow">STOP → PHOTO → DOCUMENT → QUOTE → APPROVAL</div>
          <ol>
            ${MEMBERSHIP.howItWorks.map((item) => `<li>${item}</li>`).join('')}
          </ol>
        </div>
      </div>
    `;
  }

  const why = $('#membershipWhy');
  if (why) {
    why.innerHTML = `
      <div class="membership-section-head" data-reveal>
        <span class="eyebrow">Why membership?</span>
        <h2 class="h-display">Why Put Your Home On Autopilot?</h2>
      </div>
      <div class="membership-benefits-grid">
        ${MEMBERSHIP.benefits.map((benefit, index) => `
          <div class="membership-benefit ticket" data-reveal style="transition-delay:${index * 60}ms">
            <div class="membership-benefit-title">${benefit.title}</div>
            <p>${benefit.copy}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  const finalCta = $('#membershipFinalCta');
  if (finalCta) {
    finalCta.innerHTML = `
      <div class="membership-final ticket" data-reveal="scale">
        <div class="membership-final-copy">
          <span class="eyebrow">Start here</span>
          <h2 class="h-display">${MEMBERSHIP.finalCta.title}</h2>
          <p>${MEMBERSHIP.finalCta.copy}</p>
        </div>
        <div class="membership-final-ctas">
          <a href="#estimate" class="btn btn-primary">GET MY FREE HDM PROPERTY CHECK</a>
          <a href="tel:${HDM_ESTIMATE_PHONE}" class="btn btn-ghost">CALL OR TEXT HDM</a>
          <a href="mailto:${HDM_ESTIMATE_EMAIL}" class="btn btn-dark">EMAIL HDM</a>
          <span class="membership-final-meta">honeydoman.co</span>
        </div>
      </div>
    `;
  }
}

async function onCheckoutClick(e){
  const btn = e.currentTarget;
  if (btn.classList.contains('is-loading')) return;
  const plan = btn.dataset.plan;
  const note = $(`[data-note-for="${plan}"]`);
  btn.classList.add('is-loading');
  btn.disabled = true;

  try {
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });

    const data = await res.json();
    if (!res.ok || !data?.url) {
      throw new Error(data?.error || 'Unable to start checkout.');
    }

    window.location.href = data.url;
  } catch (err) {
    btn.classList.remove('is-loading');
    btn.disabled = false;
    if (note) {
      note.textContent = err instanceof Error ? err.message : 'Checkout failed. Please try again.';
      note.style.color = 'var(--danger)';
    }
  }
}

function renderOneTime(){
  const grid = $('#onetimeGrid');
  if (!grid) return;
  grid.innerHTML = ONE_TIME.map((s) => `
    <div class="onetime-card ticket" data-reveal>
      <div>
        <h4>${s.name}</h4>
        <div class="onetime-price">${s.price}</div>
      </div>
      <a href="#estimate" class="btn btn-dark">Get an Estimate -></a>
    </div>
  `).join('');
}

function renderPresale(){
  const wrap = $('#presaleServices');
  if (!wrap) return;
  wrap.innerHTML = PRESALE_SERVICES.map((s) => `<div class="presale-chip ticket" data-reveal>${icon('check')}<span>${s}</span></div>`).join('');
}

function renderArea(){
  const list = $('#areaList');
  const map = $('#areaMap');
  if (!list || !map) return;

  list.innerHTML = TOWNS.map((t) => `<li>${icon('pin')}<span>${t}</span></li>`).join('') + `<li class="more">And surrounding communities</li>`;

  const positions = [[46,30],[62,22],[70,44],[76,55],[80,36],[30,18],[20,50],[38,66],[54,72],[64,64],[16,70],[24,34],[58,48]];
  map.querySelectorAll('.area-pin').forEach((p) => p.remove());
  TOWNS.forEach((t, i) => {
    const pos = positions[i % positions.length];
    const pin = document.createElement('div');
    pin.className = 'area-pin';
    pin.style.left = `${pos[0]}%`;
    pin.style.top = `${pos[1]}%`;
    pin.setAttribute('data-town', t);
    map.appendChild(pin);
  });

  animateCount($('#areaCount'), TOWNS.length);
}

function animateCount(el, target){
  if (!el) return;
  const targetNode = el.querySelector('.n') || el;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    targetNode.textContent = `${target}+`;
    return;
  }
  let start = null;
  const dur = 1100;
  function step(ts){
    if (!start) start = ts;
    const p = Math.min(1, (ts - start) / dur);
    targetNode.textContent = `${Math.floor(p * target)}+`;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initAreaCountTrigger(){
  const el = $('#areaCount');
  if (!el) return;
  let done = false;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !done) {
        done = true;
        animateCount(el, TOWNS.length);
        io.disconnect();
      }
    });
  }, { threshold:0.5 });
  io.observe(el);
}

function renderWhy(){
  const root = $('#whyGrid');
  if (!root) return;
  root.innerHTML = WHY_HDM.map((w) => `<div class="why-card ticket" data-reveal><div class="wc-tag">${w.tag}</div><p>${w.text}</p></div>`).join('');
}

function renderTestimonials(){
  const root = $('#testiGrid');
  if (!root) return;
  root.innerHTML = TESTIMONIALS.map((t) => `
    <div class="testi-card ticket" data-reveal>
      <div class="testi-stars">${icon('star').repeat(5).split('</svg>').filter(Boolean).map((s) => `${s}</svg>`).join('')}</div>
      <p class="testi-quote">"${t.quote}"</p>
      <div class="testi-who"><div class="testi-avatar"></div><div><div class="testi-name">${t.name}</div><div class="testi-loc">${t.loc}</div></div></div>
    </div>
  `).join('');
}

function renderFAQ(){
  const list = $('#faqList');
  if (!list) return;
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item ticket" data-reveal>
      <button class="faq-q" aria-expanded="false" data-idx="${i}"><span>${f.q}</span><span class="plus" aria-hidden="true"></span></button>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>
  `).join('');

  $$('.faq-q', list).forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = $('.faq-a', item);
      const isOpen = item.classList.contains('is-open');
      $$('.faq-item', list).forEach((other) => {
        if (other !== item) {
          other.classList.remove('is-open');
          $('.faq-q', other).setAttribute('aria-expanded','false');
          $('.faq-a', other).style.maxHeight = null;
        }
      });
      item.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.style.maxHeight = !isOpen ? `${answer.scrollHeight}px` : null;
    });
  });
}

const efState = { need:null, address:'', city:'', state:'', zip:'', propertyType:null, size:null, firstName:'', lastName:'', phone:'', email:'', details:'', photos:[], contact:null, time:null };
let efStep = 1;
const EF_TOTAL_STEPS = 6;

function renderEstimateForm(){
  const needGrid = $('#efNeedGrid');
  if (!needGrid) return;

  needGrid.innerHTML = EF_NEEDS.map((n) => `<button type="button" class="ef-option" data-need="${n.key}">${icon(n.icon)}<span>${n.label}</span></button>`).join('');
  $('#efPropertyTypeGrid').innerHTML = EF_PROPERTY_TYPES.map((t) => `<button type="button" class="ef-option" data-ptype="${t}">${icon('home')}<span>${t}</span></button>`).join('');
  $('#efSizeGrid').innerHTML = EF_SIZES.map((s) => `<button type="button" class="ef-option" data-size="${s}">${icon('box')}<span>${s}</span></button>`).join('');
  $('#efContactGrid').innerHTML = EF_CONTACT.map((c) => `<button type="button" class="ef-option" data-contact="${c.key}">${icon(c.icon)}<span>${c.label}</span></button>`).join('');
  $('#efTimeGrid').innerHTML = EF_TIMES.map((t) => `<button type="button" class="ef-option" data-time="${t}">${icon('clock')}<span>${t}</span></button>`).join('');

  buildProgress();
  wireOptionGroups();
  wireUpload();
  wireNav();
  showStep(1);
}

function buildProgress(){
  const el = $('#efProgress');
  if (!el) return;
  el.innerHTML = Array.from({ length: EF_TOTAL_STEPS }).map(() => `<i></i>`).join('');
}

function updateProgress(){
  $$('#efProgress i').forEach((bar, i) => {
    bar.classList.toggle('is-done', i < efStep - 1);
    bar.classList.toggle('is-current', i === efStep - 1);
  });
}

function wireOptionGroups(){
  const groups = [
    { sel:'#efNeedGrid .ef-option', attr:'need', state:'need' },
    { sel:'#efPropertyTypeGrid .ef-option', attr:'ptype', state:'propertyType' },
    { sel:'#efSizeGrid .ef-option', attr:'size', state:'size' },
    { sel:'#efContactGrid .ef-option', attr:'contact', state:'contact' },
    { sel:'#efTimeGrid .ef-option', attr:'time', state:'time' },
  ];

  groups.forEach((g) => {
    $$(g.sel).forEach((btn) => {
      btn.addEventListener('click', () => {
        $$(g.sel).forEach((b) => {
          b.classList.remove('is-selected');
          b.setAttribute('aria-pressed','false');
        });
        btn.classList.add('is-selected');
        btn.setAttribute('aria-pressed','true');
        efState[g.state] = btn.dataset[g.attr];
      });
    });
  });
}

function wireUpload(){
  const drop = $('#efUpload');
  const input = $('#efPhotoInput');
  const list = $('#efUploadList');
  if (!drop || !input || !list) return;

  const render = () => {
    list.innerHTML = efState.photos.map((name) => `<span class="ef-upload-chip">${name}</span>`).join('');
  };

  drop.addEventListener('click', () => input.click());
  drop.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      input.click();
    }
  });

  input.addEventListener('change', () => {
    Array.from(input.files || []).forEach((f) => efState.photos.push(f.name));
    render();
  });

  ['dragover','dragenter'].forEach((evt) => drop.addEventListener(evt, (e) => { e.preventDefault(); drop.classList.add('is-dragover'); }));
  ['dragleave','drop'].forEach((evt) => drop.addEventListener(evt, (e) => { e.preventDefault(); drop.classList.remove('is-dragover'); }));
  drop.addEventListener('drop', (e) => {
    Array.from(e.dataTransfer.files || []).forEach((f) => efState.photos.push(f.name));
    render();
  });
}

function collectFieldsForStep(step){
  if (step === 2) {
    efState.address = $('#efAddress').value.trim();
    efState.city = $('#efCity').value.trim();
    efState.state = $('#efState').value.trim();
    efState.zip = $('#efZip').value.trim();
  }
  if (step === 4) {
    efState.firstName = $('#efFirstName').value.trim();
    efState.lastName = $('#efLastName').value.trim();
    efState.phone = $('#efPhone').value.trim();
    efState.email = $('#efEmail').value.trim();
  }
  if (step === 5) {
    efState.details = $('#efDetails').value.trim();
  }
}

function validateStep(step){
  if (step === 1 && !efState.need) { flash('#efStep1', 'Pick what you need help with.'); return false; }
  if (step === 2 && (!efState.address || !efState.city || !efState.state || !efState.zip)) { flash('#efStep2', 'Fill in your property address.'); return false; }
  if (step === 3 && (!efState.propertyType || !efState.size)) { flash('#efStep3', 'Select a property type and size.'); return false; }
  if (step === 4 && (!efState.firstName || !efState.lastName || !efState.phone || !efState.email)) { flash('#efStep4','Fill in your contact info.'); return false; }
  if (step === 6 && (!efState.contact || !efState.time)) { flash('#efStep6', 'Let us know how and when to reach you.'); return false; }
  return true;
}

function flash(sel, msg){
  const el = $(sel);
  if (!el) return;
  el.animate([{ transform:'translateX(0)' },{ transform:'translateX(-6px)' },{ transform:'translateX(6px)' },{ transform:'translateX(0)' }], { duration:280 });
  let warn = $('.ef-warn', el);
  if (!warn) {
    warn = document.createElement('div');
    warn.className = 'ef-warn';
    warn.style.cssText = 'margin-top:14px;color:var(--accent-2);font-size:13.5px;font-weight:600;';
    el.appendChild(warn);
  }
  warn.textContent = msg;
}

function showStep(n){
  $$('.ef-step').forEach((s) => s.classList.remove('is-active'));
  const target = $(`#efStep${n}`);
  if (target) target.classList.add('is-active');
  updateProgress();
  $('#efBack').classList.toggle('is-hidden', n === 1);
  const nextBtn = $('#efNext');
  nextBtn.querySelector('.btn-label').textContent = n === EF_TOTAL_STEPS ? 'REQUEST MY FREE ESTIMATE ->' : 'CONTINUE ->';
}

function formatEstimateSummary(){
  const need = EF_NEEDS.find((item) => item.key === efState.need)?.label || 'Not provided';
  const contact = EF_CONTACT.find((item) => item.key === efState.contact)?.label || 'Not provided';
  const photos = efState.photos.length ? efState.photos.join(', ') : 'None';

  return [
    'New HDM Estimate Request',
    '',
    `Name: ${efState.firstName || ''} ${efState.lastName || ''}`.trim(),
    `Phone: ${efState.phone || 'Not provided'}`,
    `Email: ${efState.email || 'Not provided'}`,
    '',
    `Service needed: ${need}`,
    `Address: ${efState.address || 'Not provided'}`,
    `City/State/ZIP: ${efState.city || '-'}, ${efState.state || '-'} ${efState.zip || '-'}`,
    `Property type: ${efState.propertyType || 'Not provided'}`,
    `Property size: ${efState.size || 'Not provided'}`,
    `Preferred contact: ${contact}`,
    `Preferred time: ${efState.time || 'Not provided'}`,
    `Photos attached: ${photos}`,
    '',
    `Project details: ${efState.details || 'Not provided'}`,
  ].join('\n');
}

function configureEstimateDeliveryLinks(){
  const ctas = $('#efSuccess .estimate-shell-ctas');
  if (!ctas) return;

  const successCopy = $('#efSuccess p');
  if (successCopy) {
    successCopy.textContent = 'Your estimate is ready. Choose one option below to send it now: Send by Text to 346-360-7235 or Send by Email to honeydoman.service@outlook.com.';
  }

  const message = formatEstimateSummary();
  const encodedMessage = encodeURIComponent(message);
  const encodedSubject = encodeURIComponent('New HDM Estimate Request');

  const textLink = ctas.querySelector('a.btn.btn-primary');
  if (textLink) {
    textLink.id = 'efSendText';
    textLink.textContent = 'Send by Text';
    textLink.href = `sms:${HDM_ESTIMATE_PHONE}?body=${encodedMessage}`;
  }

  let emailLink = $('#efSendEmail');
  if (!emailLink) {
    emailLink = document.createElement('a');
    emailLink.id = 'efSendEmail';
    emailLink.className = 'btn btn-ghost';
    emailLink.textContent = 'Send by Email';
    const backToHome = $('#backToHome');
    if (backToHome) {
      ctas.insertBefore(emailLink, backToHome);
    } else {
      ctas.appendChild(emailLink);
    }
  }

  emailLink.href = `mailto:${HDM_ESTIMATE_EMAIL}?subject=${encodedSubject}&body=${encodedMessage}`;
}

function wireNav(){
  const next = $('#efNext');
  const back = $('#efBack');
  if (!next || !back) return;

  next.addEventListener('click', () => {
    collectFieldsForStep(efStep);
    if (!validateStep(efStep)) return;
    if (efStep === EF_TOTAL_STEPS) { submitEstimate(); return; }
    efStep += 1;
    showStep(efStep);
    $('#estimateShell').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start' });
  });

  back.addEventListener('click', () => {
    if (efStep === 1) return;
    efStep -= 1;
    showStep(efStep);
  });
}

function submitEstimate(){
  const btn = $('#efNext');
  btn.classList.add('is-loading');
  btn.disabled = true;
  setTimeout(() => {
    configureEstimateDeliveryLinks();
    btn.classList.remove('is-loading');
    btn.disabled = false;
    $('#efForm').style.display = 'none';
    $('#efSuccess').classList.add('is-active');
    $('#efSuccess').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start' });
  }, 900);
}

function resetEstimateForm(){
  Object.assign(efState, { need:null, address:'', city:'', state:'', zip:'', propertyType:null, size:null, firstName:'', lastName:'', phone:'', email:'', details:'', photos:[], contact:null, time:null });
  efStep = 1;
  $$('.ef-option').forEach((b) => b.classList.remove('is-selected'));
  $$('.ef-field input, .ef-field textarea').forEach((i) => { i.value = ''; });
  const uploadList = $('#efUploadList');
  if (uploadList) uploadList.innerHTML = '';
  $('#efForm').style.display = '';
  $('#efSuccess').classList.remove('is-active');
  showStep(1);
}

function initSite(){
  renderServices();
  renderMembership();
  renderOneTime();
  renderPresale();
  renderArea();
  renderWhy();
  renderTestimonials();
  renderFAQ();
  renderEstimateForm();

  initNav();
  initReveal();
  initAreaCountTrigger();

  const backToHome = $('#backToHome');
  if (backToHome) backToHome.addEventListener('click', () => resetEstimateForm());
  const year = $('#currentYear');
  if (year) year.textContent = new Date().getFullYear();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}
