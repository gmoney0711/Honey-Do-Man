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

const PLANS = [
  { id:'care', name:'HDM Care', price:99, popular:false, features:['Lawn maintenance','Trimming & edging','Basic yard cleanup','Monthly HVAC filter replacement','Priority scheduling','Member pricing'], cta:'Start Care Plan' },
  { id:'home', name:'HDM Home', price:199, popular:true, features:['Everything in Care','Pressure washing','Gutter cleaning','Seasonal cleanup','Minor handyman tasks','Priority service'], cta:'Start Home Plan' },
  { id:'total', name:'HDM Total', price:299, popular:false, features:['Everything in Home','Larger recurring maintenance','Exterior property maintenance','Seasonal property inspection','Priority scheduling','Best member pricing'], cta:'Start Total Plan' },
];

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

function renderPricing(){
  const grid = $('#pricingGrid');
  if (!grid) return;
  grid.innerHTML = PLANS.map((p) => `
    <div class="price-card ticket ${p.popular ? 'is-popular' : ''}" data-reveal="scale" data-plan="${p.id}">
      ${p.popular ? `<span class="price-popular-badge">Most Popular</span>` : ''}
      <div class="price-plan-name">${p.name}</div>
      <div class="price-amount"><span class="num">$${p.price}</span><span class="per">/ month</span></div>
      <ul class="price-features">${p.features.map((f) => `<li>${icon('check')}<span>${f}</span></li>`).join('')}</ul>
      <button class="btn btn-primary btn-block js-checkout" data-plan="${p.id}"><span class="spin"></span><span class="btn-label">${p.cta.toUpperCase()} -></span></button>
      <div class="price-note" data-note-for="${p.id}"></div>
    </div>
  `).join('');

  $$('.js-checkout').forEach((btn) => btn.addEventListener('click', onCheckoutClick));
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
  renderPricing();
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
