/* ===== EDITABLE CONTENT (all placeholders – replace with verified info) ===== */
const CONFIG = {
  tagline: "Creative ideas. Smart strategy. Real results.",
  email: "jata@gmail.com", phone: "+254700000000", address: "Kenya (add your full business address)",
  hours: "Mon–Fri: 9:00–17:00 (edit)",
  // Quote/contact form backend: set to a real endpoint (e.g. Formspree https://formspree.io/f/xxxx or your own API).
  // While empty, forms will show an honest error and NEVER claim success.
  formEndpoint: "",
  whatsapp: "https://wa.me/254700000000?text=Hello%20JATAPR",
  // [name, url, simpleicons slug, brand colour] – replace Facebook/TikTok URLs with your real profile links
  social: [["WhatsApp", "https://wa.me/254700000000?text=Hello%20JATAPR", "whatsapp", "#25D366"], ["Facebook", "https://www.facebook.com/", "facebook", "#1877F2"], ["TikTok", "https://www.tiktok.com/", "tiktok", "#000000"]],
  stats: [[0, "Projects completed"], [0, "Clients served"], [0, "Years of experience"], [24, "Services offered"]],
  statNote: "Placeholder figures – replace with verified numbers",
  budgets: ["Budget range 1 (edit)", "Budget range 2 (edit)", "Budget range 3 (edit)", "Not sure yet"],
  testimonials: [{ q: "Your first testimonial goes here once a real client has agreed to share their feedback.", n: "Client name", r: "Role, Company" },
    { q: "Add more testimonials by editing the CONFIG.testimonials list in script.js.", n: "Client name", r: "Role, Company" }]
};
const IMG = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70`;
const PH = { team: "1522071820081-009f0129c71c", data: "1460925895917-afdab827c52f", dash: "1551288049-bebda4e38f71", code: "1498050108023-c5249f4df085", meet: "1556761175-5973dc0f32e7", pres: "1542744173-8e7e53415bb0", create: "1493612276216-ee3925520721", social: "1611162617213-7d7a39e9b1d7", event: "1540575467063-178a50c2df87", cam: "1492691527719-9d1e07e534b4" };

const CATS = [
  { id: "digital", name: "Digital", icon: "📣", img: PH.social, desc: "Social, search and paid media that put your brand in front of the right people.", items: ["Social media marketing", "Google Ads", "Email marketing", "Search and performance ads", "YouTube advertising", "TikTok advertising", "LinkedIn advertising", "Media buying services"] },
  { id: "websites", name: "Websites", icon: "💻", img: PH.code, desc: "Fast, good-looking websites and stores built to turn visitors into customers.", items: ["Web hosting and domain", "Business website design", "E-commerce website design", "Website maintenance", "Web content creation"] },
  { id: "seo", name: "SEO", icon: "🔎", img: PH.data, desc: "Get found on search engines and turn that traffic into enquiries and sales.", items: ["General SEO", "Ecommerce SEO", "Conversion rate optimization", "Local SEO", "On-page SEO", "Technical SEO"] },
  { id: "brand", name: "Brand Activation", icon: "🎯", img: PH.event, desc: "Events, creators, outdoor and content that bring your brand to life offline and online.", items: ["Events marketing", "Influencer marketing", "Billboard advertising", "Roadshow activation", "Documentary production", "Photography services", "PR consultancy services", "Political consultancy"] }
];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const socialLinks = () => CONFIG.social.map(([n, u, i]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${n}"><img src="https://cdn.simpleicons.org/${i}/ffffff" alt=""></a>`).join("");
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const ALL = CATS.flatMap(c => c.items.map(n => ({ name: n, slug: slug(n), cat: c })));
const PROJECTS = [["Sample project one", "Digital", PH.pres], ["Sample project two", "Websites", PH.dash], ["Sample project three", "SEO", PH.data], ["Sample project four", "Brand Activation", PH.event], ["Sample project five", "Digital", PH.social], ["Sample project six", "Websites", PH.code]];
const POSTS = [["Placeholder article: getting started with digital marketing", "Digital", "Date to be added", PH.social], ["Placeholder article: what makes a website convert", "Websites", "Date to be added", PH.code], ["Placeholder article: SEO basics for new businesses", "SEO", "Date to be added", PH.data], ["Placeholder article: planning a brand activation", "Brand Activation", "Date to be added", PH.event]];
const FAQS = [["How do I get a quote?", "Fill in the quote form and the JATAPR team will review your request and get back to you."], ["Which services do you offer?", "Digital marketing, websites, SEO and brand activation. See the Services page for the full list."], ["How long does a project take?", "It depends on the scope. Tell us your timeline in the quote form and we will advise (edit this answer)."], ["Can I combine services?", "Yes. Many projects mix services. Describe what you need and we will suggest a plan (edit this answer)."]];
const STEPS = [["💬", "Discover", "We listen to your goals and challenges."], ["🧭", "Plan", "We shape a clear strategy and scope."], ["🎨", "Create", "We design and build the solution."], ["🚀", "Launch", "We go live and promote your work."], ["📈", "Improve", "We measure results and keep refining."]];
const WHY = [["🎯", "Goal-focused", "Every idea ties back to your business goals."], ["⚡", "Fast and agile", "Clear communication and quick turnarounds."], ["🧩", "Joined-up services", "Digital, web, SEO and brand under one roof."], ["🤝", "Real partnership", "We work as an extension of your team."]];

/* ===== helpers ===== */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const img = (id, alt = "", cls = "") => `<img class="${cls}" src="${IMG(id)}" alt="${alt}" loading="lazy" onerror="this.style.opacity=0">`;
const mask = t => `<span class="mask">${t.split(" ").map((w, i) => `<span style="--i:${i}">${w}&nbsp;</span>`).join("")}</span>`;
const head = (label, title, sub, center) => `<div class="sec-head rv ${center ? "center" : ""}"><span class="label">${label}</span><h2>${title}</h2>${sub ? `<p>${sub}</p>` : ""}</div>`;
const shapes = `<i class="shape" style="width:16px;height:16px;background:var(--orange);left:6%;top:18%;border-radius:3px"></i><i class="shape" style="width:60px;height:60px;border:3px solid rgba(255,255,255,.2);right:8%;bottom:14%;border-radius:50%;animation-delay:1s"></i><i class="shape g" style="width:22px;height:22px;background:var(--green);right:24%;bottom:22%;border-radius:50%;animation-delay:.5s"></i><i class="shape" style="width:12px;height:12px;background:var(--orange);right:30%;top:12%;border-radius:3px;animation-delay:2s"></i>`;
const quoteBtn = (t = "Get a Free Quote", c = "btn-orange") => `<a href="#/quote" class="btn ${c}">${t} <span class="arr">→</span></a>`;
const catCard = c => `<article class="card rv s"><div class="ico">${c.icon}</div><h3>${c.name}</h3><p>${c.desc}</p><a class="link" href="#/services/${c.id}">Learn More <span class="arr">→</span></a></article>`;
const faqHTML = list => `<div class="faq">${list.map(([q, a]) => `<div class="fq rv"><button aria-expanded="false">${q}</button><div><p>${a}</p></div></div>`).join("")}</div>`;
const pageHero = (title, sub, crumb) => `<section class="page-hero"><div class="grid-bg"></div>${shapes}<div class="wrap"><div class="crumbs"><a href="#/">Home</a> / ${crumb || title}</div><h1>${mask(title)}</h1><p class="enter">${sub}</p></div></section>`;
const cta = (t = "Ready to Make Something Great?", s = "Let's talk about your ideas and explore how JATAPR can help.") => `<section class="cta"><div class="grid-bg"></div>${shapes}<div class="wrap rv"><h2>${t}</h2><p>${s}</p>${quoteBtn("Start Your Project")}</div></section>`;
const pCard = ([t, c, i]) => `<article class="card pcard rv s pop" data-cat="${c}"><div class="ph">${img(i, t)}</div><div class="pb"><span class="tag">${c}</span><h3>${t}</h3><p>Short project description to be added.</p><a class="link" href="#/contact">View Project <span class="arr">→</span></a></div></article>`;

const PLANS = [
  { id: "Digital Marketing – Starter Package", name: "Starter Package", price: "KSh35,000", blurb: "Designed to establish a strong digital foundation, the Basic package focuses on brand visibility and consistent online presence.", feats: ["2 platforms managed", "12 posts / month", "Ad spend management up to 50K", "Basic community management", "Monthly reporting"], roi: "2x – 4x Return" },
  { id: "Digital Marketing – Premium Package", name: "Premium Package", price: "KSh78,000", blurb: "This package offers enhanced digital marketing and PR support, helping brands increase engagement, reach, and audience growth.", feats: ["3–4 platforms managed", "20 posts / month", "Ad spend management up to 150K", "Advanced community management", "Bi-weekly reporting"], roi: "3x – 6x Return", hot: true },
  { id: "Digital Marketing – Elite Package", name: "Elite Package", price: "KSh142,000", blurb: "A comprehensive solution for brands seeking maximum visibility, reputation management, and digital growth.", feats: ["All major platforms managed", "30+ posts / month", "Unlimited ad spend management", "24/7 dedicated community management", "Weekly + real-time reporting"], roi: "5x – 10x Return", elite: true }
];
const planLink = p => `#/quote?plan=${encodeURIComponent(p.id)}&service=${encodeURIComponent("Social media marketing")}&group=digital-marketing`;
const planCard = (p, i) => `<article class="card plan rv s ${p.hot ? "hot" : ""} ${p.elite ? "elite" : ""}" style="--d:${i * .15}s">${p.hot ? `<span class="badge">★ Most popular</span><span class="starburst" aria-hidden="true">★</span>` : ""}<h3>${p.name}</h3><div class="amt">${p.price}<small>/month</small></div><p>${p.blurb}</p><ul class="price" style="list-style:none;margin:16px 0 0;padding:0">${p.feats.map(f => `<li style="padding:6px 0;color:var(--muted)"><span style="color:var(--red);font-weight:800">✓</span> ${f}</li>`).join("")}</ul><div class="roi">Estimated ROI: ${p.roi}</div><a class="btn btn-orange" href="${planLink(p)}">Get started <span class="arr">→</span></a></article>`;

/* ===== pages ===== */
const PAGES = {
  "": () => `<div class="page">
<section class="hero"><div class="grid-bg"></div>${shapes}<div class="wrap">
 <div><span class="pill enter" style="--d:.1s">JATAPR · Creative & digital studio</span><h1>${mask("Let's Make Your Next Big Idea Happen.")}</h1>
 <p class="enter" style="--d:.9s">Creative thinking, smart strategies and powerful digital experiences to help your business move forward.</p>
 <div class="hero-btns enter" style="--d:1.2s">${quoteBtn()}<a href="#/services" class="btn btn-ghost">Explore Our Services</a></div><p class="enter" style="--d:1.5s;font-size:.92rem;margin:24px 0 0">📞 ${CONFIG.phone} &nbsp;·&nbsp; ✉ ${CONFIG.email}</p></div>
 <div class="hero-art enter" style="--d:.8s">${img(PH.team, "Creative team at work", "img i1")}${img(PH.create, "Creative workspace", "img i2")}<span class="chip" style="left:2%;top:30px">🚀 Ideas in motion</span><span class="chip" style="right:6%;bottom:30px;animation-delay:1s">📈 Packages from KSh35,000/month</span></div>
</div></section>
<div class="marquee" aria-hidden="true"><div class="track">${[0, 1].map(() => ALL.map(x => `<span>${x.name}</span>`).join("")).join("")}</div></div>
<section><div class="wrap">${head("Our services", "What We Do", "Discover the services and solutions that help turn ideas into meaningful results.", 1)}<div class="cards">${CATS.map(catCard).join("")}</div></div></section>
<section class="alt"><div class="wrap split"><div class="imgwrap rv l">${img(PH.meet, "JATAPR team meeting")}</div><div class="rv r"><span class="label">About JATAPR</span><h2>Ideas with a purpose behind them</h2><p>JATAPR is a creative and digital partner for businesses that want to stand out. (Replace with your company description.)</p><p>Add a supporting paragraph about your approach, values and the clients you love working with.</p><a href="#/about" class="btn btn-navy">Learn More <span class="arr">→</span></a></div></div></section>
<section><div class="wrap">${head("Why choose us", "Why Choose JATAPR", "", 1)}<div class="cards">${WHY.map(([i, t, d], n) => `<div class="card rv" style="--d:${n * .1}s"><div class="ico">${i}</div><h3>${t}</h3><p>${d}</p></div>`).join("")}</div></div></section>
<section class="stats"><div class="grid-bg"></div><div class="wrap"><div class="cards">${CONFIG.stats.map(([n, l], i) => `<div class="stat rv" style="--d:${i * .1}s"><b data-count="${n}">0</b><span>${l}</span></div>`).join("")}</div><p style="text-align:center;margin-top:26px;font-size:.85rem;color:#7f93b8">${CONFIG.statNote}</p></div></section>
<section><div class="wrap">${head("Portfolio", "Recent Work", "Placeholder projects – replace with real case studies.")}<div class="cards">${PROJECTS.slice(0, 3).map(pCard).join("")}</div><p style="margin-top:30px"><a class="link" href="#/portfolio">View full portfolio <span class="arr">→</span></a></p></div></section>
<section class="alt"><div class="wrap">${head("Process", "How We Work", "", 1)}<div class="steps" id="steps">${STEPS.map(([i, t, d], n) => `<div class="step rv" style="--d:${n * .15}s"><div class="ico">${i}</div><h3>${t}</h3><p>${d}</p></div>`).join("")}</div></div></section>
<section class="alt"><div class="wrap">${head("Pricing", "Digital Marketing Packages", "Transparent monthly rates. Pick a plan and request your quote in one click.", 1)}<div class="cards plans">${PLANS.map(planCard).join("")}</div></div></section>
<section><div class="wrap">${head("Testimonials", "What Clients Say", "", 1)}<div class="slider rv" id="slider">${CONFIG.testimonials.map((t, i) => `<div class="slide ${i ? "" : "on"}"><blockquote>“${t.q}”</blockquote><p><b>${t.n}</b> – ${t.r}</p></div>`).join("")}<div class="dots">${CONFIG.testimonials.map((_, i) => `<button class="${i ? "" : "on"}" aria-label="Testimonial ${i + 1}"></button>`).join("")}</div></div></div></section>
${cta()}</div>`,

  services: () => `<div class="page">${pageHero("Our Services", "Everything you need to grow, from first idea to measurable results.")}<section><div class="wrap"><div class="cards">${CATS.map(catCard).join("")}</div></div></section>
<section class="alt"><div class="wrap">${head("All services", "Pick a service", "", 1)}<div class="cards">${ALL.map(s => `<a class="card rv s" href="#/service/${s.slug}"><h3>${s.name}</h3><p>${s.cat.name}</p><span class="link">Learn More <span class="arr">→</span></span></a>`).join("")}</div></div></section>${cta()}</div>`,

  category: id => { const c = CATS.find(x => x.id === id); if (!c) return PAGES.notfound(); return `<div class="page">${pageHero(c.name, c.desc, `<a href="#/services">Services</a> / ${c.name}`)}<section><div class="wrap"><div class="cards">${c.items.map(n => `<a class="card rv s" href="#/service/${slug(n)}"><div class="ico">${c.icon}</div><h3>${n}</h3><span class="link">Learn More <span class="arr">→</span></span></a>`).join("")}</div></div></section>${cta()}</div>`; },

  service: sl => { const s = ALL.find(x => x.slug === sl); if (!s) return PAGES.notfound(); const rel = s.cat.items.filter(n => n !== s.name).slice(0, 3);
    return `<div class="page">${pageHero(s.name, `Part of our ${s.cat.name} services. Description to be added.`, `<a href="#/services">Services</a> / ${s.name}`)}
<section><div class="wrap split"><div class="imgwrap rv l">${img(s.cat.img, s.name)}</div><div class="rv r"><span class="label">Overview</span><h2>About ${s.name}</h2><p>Write a short introduction to this service here: what it is, who it helps and the outcome clients can expect.</p>${quoteBtn()}</div></div></section>
<section class="alt"><div class="wrap">${head("Benefits", "Main benefits", "", 1)}<div class="cards">${["Clear strategy", "Measurable results", "Dedicated support"].map((b, i) => `<div class="card rv" style="--d:${i * .1}s"><div class="ico">✅</div><h3>${b}</h3><p>Edit this benefit description.</p></div>`).join("")}</div></div></section>
<section><div class="wrap">${head("What's included", "What you get", "Edit this list to match the service.")}<div class="cards">${["Discovery and planning", "Execution by specialists", "Reporting and review"].map((b, i) => `<div class="card rv s" style="--d:${i * .1}s"><h3>${b}</h3><p>Describe this deliverable.</p></div>`).join("")}</div></div></section>
<section class="alt"><div class="wrap">${head("FAQ", "Frequently asked questions", "", 1)}${faqHTML(FAQS.slice(0, 3))}</div></section>
<section><div class="wrap">${head("Related", "Related services")}<div class="cards">${rel.map(n => `<a class="card rv s" href="#/service/${slug(n)}"><h3>${n}</h3><span class="link">Learn More <span class="arr">→</span></span></a>`).join("")}</div></div></section>${cta()}</div>`; },

  about: () => `<div class="page">${pageHero("About JATAPR", "Who we are and what drives us. (Replace with your own story.)")}
<section><div class="wrap split"><div class="imgwrap rv l">${img(PH.team, "Team")}</div><div class="rv r"><span class="label">Our story</span><h2>Company story</h2><p>Add JATAPR's real history here. We have not invented any company background.</p></div></div></section>
<section class="alt"><div class="wrap"><div class="cards"><div class="card rv"><div class="ico">🎯</div><h3>Mission</h3><p>Edit mission statement.</p></div><div class="card rv" style="--d:.1s"><div class="ico">🔭</div><h3>Vision</h3><p>Edit vision statement.</p></div></div></div></section>
<section><div class="wrap">${head("Values", "Core values", "", 1)}<div class="cards">${WHY.map(([i, t, d], n) => `<div class="card rv" style="--d:${n * .1}s"><div class="ico">${i}</div><h3>${t}</h3><p>${d}</p></div>`).join("")}</div></div></section>
<section class="alt"><div class="wrap">${head("Team", "Meet the team", "Profiles to be added.", 1)}<div class="cards">${[1, 2, 3].map(n => `<div class="card rv s" style="--d:${n * .1}s"><div class="ico">👤</div><h3>Team member name</h3><p>Role / title</p></div>`).join("")}</div></div></section>${cta()}</div>`,

  pricing: () => `<div class="page">${pageHero("Pricing", "Clear monthly packages in Kenyan shillings, with room for custom work.")}<section><div class="wrap">${head("Digital Marketing Packages", "Choose your package", "Pick a plan and we will carry it straight into your quote request.", 1)}<div class="cards plans">${PLANS.map(planCard).join("")}</div></div></section>
<section class="alt"><div class="wrap split"><div class="rv l"><span class="label">Custom</span><h2>Need something tailored?</h2><p>Websites, SEO and brand activation are quoted per project. Tell us about your goals and budget and we will put together a proposal.</p></div><div class="rv r">${quoteBtn("Request a Custom Quote")}</div></div></section>${cta()}</div>`,

  portfolio: () => `<div class="page">${pageHero("Portfolio", "A look at the kind of work we deliver. Placeholder projects for now.")}<section><div class="wrap"><div class="filters" id="filters">${["All", ...CATS.map(c => c.name)].map((c, i) => `<button class="${i ? "" : "on"}" data-f="${c}">${c}</button>`).join("")}</div><div class="cards" id="grid">${PROJECTS.map(pCard).join("")}</div></div></section>${cta()}</div>`,

  resources: () => `<div class="page">${pageHero("Resources", "Guides and ideas for growing your business. Placeholder articles.")}<section><div class="wrap">
<div class="feature card rv" style="padding:0;overflow:hidden"><div style="padding:34px"><span class="tag">Featured · ${POSTS[0][1]}</span><h2 style="margin:10px 0">${POSTS[0][0]}</h2><p>${POSTS[0][2]}</p><a class="link" href="#/contact" style="margin-top:14px">Read More <span class="arr">→</span></a></div>${img(POSTS[0][3], "Featured article")}</div>
<div class="filters" style="margin-top:40px"><input id="postSearch" type="search" placeholder="Search articles…" aria-label="Search articles" style="max-width:320px"></div>
<div class="cards" id="posts">${POSTS.map(p => `<article class="card pcard rv s" data-t="${p[0].toLowerCase()}"><div class="ph">${img(p[3], p[0])}</div><div class="pb"><span class="tag">${p[1]} · ${p[2]}</span><h3>${p[0]}</h3><a class="link" href="#/contact" style="margin-top:10px">Read More <span class="arr">→</span></a></div></article>`).join("")}</div></div></section></div>`,

  contact: () => `<div class="page">${pageHero("Contact Us", "Questions, ideas or a project in mind? Send us a message.")}<section><div class="wrap split" style="align-items:start"><div class="contact-info rv l"><div class="card"><h3>📧 Email</h3><p><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></p></div><div class="card"><h3>📞 Phone</h3><p><a href="tel:${CONFIG.phone}">${CONFIG.phone}</a></p></div><div class="card"><h3>💬 WhatsApp</h3><p><a class="link" href="${CONFIG.whatsapp}" target="_blank" rel="noopener">Chat with us now →</a></p></div><div class="card"><h3>📍 Location</h3><p>${CONFIG.address}</p></div><div class="card"><h3>🕒 Opening hours</h3><p>${CONFIG.hours}</p></div></div>
<form class="formcard rv r" id="contactForm" novalidate><div class="fgrid">${field("name", "Full Name", "text", 1)}${field("email", "Email Address", "email", 1)}<div class="full"><label for="message">Message *</label><textarea id="message" name="message" rows="5" required></textarea><span class="err"></span></div><input class="hp" name="website_hp" tabindex="-1" autocomplete="off"><div class="full"><button class="btn btn-orange" type="submit">Send Message</button></div></div><div class="msg-area" role="status"></div></form></div></section>
<section class="alt"><div class="wrap">${head("FAQ", "Frequently asked questions", "", 1)}${faqHTML(FAQS)}</div></section>${cta()}</div>`,

  quote: () => `<div class="page">${pageHero("Let's Talk About Your Project.", "Tell us a little about what you need, and the JATAPR team can help you explore the right solution.", "Get a Free Quote")}<section><div class="wrap quote-wrap">
<form class="formcard rv" id="quoteForm" novalidate><div class="fgrid">${QS.get("plan") ? `<div class="plan-banner"><b>Selected package:</b> ${esc(QS.get("plan"))}<a href="#/quote">Remove</a></div><input type="hidden" name="plan" value="${esc(QS.get("plan"))}"><input type="hidden" name="group" value="${esc(QS.get("group") || "")}">` : ""}
${field("name", "Full Name", "text", 1)}${field("email", "Email Address", "email", 1)}${field("phone", "Phone / WhatsApp", "tel")}${field("company", "Company or Business Name", "text")}
<div><label for="service">Service Required *</label><select id="service" name="service" required><option value="">Select a service</option>${CATS.map(c => `<optgroup label="${c.name}">${c.items.map(i => `<option ${(QS.get("service") || "").toLowerCase() === i.toLowerCase() ? "selected" : ""}>${i}</option>`).join("")}</optgroup>`).join("")}<option>Not sure – need advice</option></select><span class="err"></span></div>
<div><label for="budget">Estimated Budget</label><select id="budget" name="budget"><option value="">Select a range</option>${CONFIG.budgets.map(b => `<option>${b}</option>`).join("")}</select></div>
<div><label for="timeline">Project Timeline</label><select id="timeline" name="timeline"><option value="">Select a timeline</option>${["Immediately", "Within a few weeks", "Within one month", "Within three months", "Still planning"].map(b => `<option>${b}</option>`).join("")}</select></div>
${field("url", "Website URL (optional)", "url")}
<div class="full"><label for="details">Project Description *</label><textarea id="details" name="details" rows="5" placeholder="Describe your needs, objectives and expectations" required></textarea><span class="err"></span></div>
<input class="hp" name="website_hp" tabindex="-1" autocomplete="off">
<div class="full"><label style="display:flex;gap:10px;font-weight:500"><input type="checkbox" id="consent" name="consent" style="width:auto;margin-top:5px" required> I agree to be contacted about my request. *</label><span class="err"></span></div>
<div class="full"><button class="btn btn-orange" type="submit">Send My Quote Request</button></div></div><div class="msg-area" role="status"></div></form>
<aside class="q-mascot rv r" id="qMascot"><div class="say" id="qSay">Great! You're one step closer to bringing your idea to life. Let's get started.</div>${MASCOT()}</aside></div></section></div>`,

  notfound: () => `<div class="page">${pageHero("Page not found", "That page does not exist. Try the links in the menu.")}<section><div class="wrap">${quoteBtn("Get a Free Quote")}</div></section></div>`
};
function field(id, label, type, req) { return `<div><label for="${id}">${label}${req ? " *" : ""}</label><input id="${id}" name="${id}" type="${type}" ${req ? "required" : ""} autocomplete="${id === "name" ? "name" : id}"><span class="err"></span></div>`; }

/* ===== mascot SVG ===== */
function MASCOT() { return `<svg viewBox="0 0 120 130" role="img" aria-label="JATAPR mascot">
<line x1="60" y1="12" x2="60" y2="4" stroke="#006B2D" stroke-width="3"/><circle cx="60" cy="5" r="5" fill="#CE1126"/>
<rect x="38" y="82" width="44" height="40" rx="14" fill="#006B2D"/><rect x="50" y="96" width="20" height="9" rx="4" fill="#CE1126"/>
<ellipse cx="42" cy="124" rx="9" ry="5" fill="#0a0a0a"/><ellipse cx="78" cy="124" rx="9" ry="5" fill="#0a0a0a"/>
<circle cx="32" cy="96" r="7" fill="#FFD7A8" stroke="#0a0a0a" stroke-width="2"/>
<g class="wave"><rect x="84" y="86" width="9" height="20" rx="4" fill="#006B2D" transform="rotate(-25 88 90)"/><circle cx="96" cy="80" r="8" fill="#FFD7A8" stroke="#0a0a0a" stroke-width="2"/></g>
<rect x="22" y="14" width="76" height="70" rx="30" fill="#fff" stroke="#006B2D" stroke-width="4"/>
<path d="M22 44 Q22 14 60 14 Q98 14 98 44 Z" fill="#006B2D"/><rect x="22" y="40" width="76" height="6" fill="#CE1126"/>
<g class="blink"><circle cx="46" cy="60" r="7" fill="#0a0a0a"/><circle cx="74" cy="60" r="7" fill="#0a0a0a"/><circle cx="48" cy="58" r="2.5" fill="#fff"/><circle cx="76" cy="58" r="2.5" fill="#fff"/></g>
<path d="M46 72 Q60 84 74 72" stroke="#CE1126" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="36" cy="70" r="4" fill="#CE1126" opacity=".35"/><circle cx="84" cy="70" r="4" fill="#CE1126" opacity=".35"/></svg>`; }

/* ===== shell build ===== */
function buildShell() {
  $("#tagline").textContent = CONFIG.tagline;
  $("#tbContact").innerHTML = `<a href="mailto:${CONFIG.email}">${CONFIG.email}</a> · <a href="tel:${CONFIG.phone}">${CONFIG.phone}</a>`;
  $("#mSocial").innerHTML = CONFIG.social.map(([n, u, i, bg]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${n}" style="background:${bg}"><img src="https://cdn.simpleicons.org/${i}/ffffff" alt=""></a>`).join("");
  $("#tbSocial").innerHTML = socialLinks();
  $("#mega").innerHTML = `<div class="mega-grid">${CATS.map(c => `<div class="mcol"><h4><i>${c.icon}</i>${c.name.toUpperCase()}</h4>${c.items.map(n => `<a href="#/service/${slug(n)}">${n}</a>`).join("")}</div>`).join("")}
<div class="mpromo"><i class="sq" style="width:10px;height:10px;right:20px;top:20px"></i><i class="sq" style="width:6px;height:6px;right:46px;top:34px;animation-delay:1s"></i><i class="sq" style="width:8px;height:8px;right:30px;top:58px;animation-delay:2s"></i><h3>Get a Free Quote</h3><p>Tell us about your goals and let us help you find the right solution.</p><a href="#/quote" class="btn btn-orange">Get a Free Quote <span class="arr">→</span></a></div></div>
<div class="mega-foot"><div><a href="#/services">View All Services →</a><a href="#/pricing">Pricing →</a></div><span>${CONFIG.email}</span></div>`;
  $("#mobile").innerHTML = `<a href="#/">Home</a><details><summary>Services</summary><a href="#/services">All services</a>${CATS.map(c => `<details style="padding-left:12px"><summary>${c.name}</summary>${c.items.map(n => `<a href="#/service/${slug(n)}">${n}</a>`).join("")}</details>`).join("")}</details>
<a href="#/about">About Us</a><a href="#/pricing">Pricing</a><a href="#/portfolio">Portfolio</a><a href="#/resources">Resources</a><a href="#/contact">Contact Us</a><a href="#/quote" class="btn btn-orange" style="margin-top:14px;justify-content:center;border:0">Get a Free Quote</a>`;
  $("#footer").innerHTML = `<div class="wrap"><div class="fgrid4"><div><a href="#/" class="logo" style="color:#fff"><span class="logo-mark">J</span>JATAPR</a><p>Company description placeholder. Edit in script.js.</p><div class="social">${socialLinks()}</div></div>
<div><h4>Services</h4>${CATS.map(c => `<a href="#/services/${c.id}">${c.name}</a>`).join("")}</div>
<div><h4>Quick links</h4><a href="#/about">About Us</a><a href="#/pricing">Pricing</a><a href="#/portfolio">Portfolio</a><a href="#/resources">Resources</a><a href="#/quote">Get a Free Quote</a></div>
<div><h4>Contact</h4><p>${CONFIG.email}<br>${CONFIG.phone}<br>${CONFIG.address}</p></div></div>
<div class="copy"><span>© ${new Date().getFullYear()} JATAPR. All rights reserved.</span><div><a href="#/contact">Privacy Policy</a><a href="#/contact">Terms and Conditions</a></div></div></div>`;
  $("#mascotBtn").innerHTML = MASCOT();
}

/* ===== router ===== */
let QS = new URLSearchParams();
function route() {
  const raw = location.hash.replace(/^#\/?/, ""), qi = raw.indexOf("?"), h = qi < 0 ? raw : raw.slice(0, qi);
  QS = new URLSearchParams(qi < 0 ? "" : raw.slice(qi + 1)); const [a, b] = h.split("/");
  const key = a || "";
  let html;
  if (key === "services" && b) html = PAGES.category(b);
  else if (key === "service") html = PAGES.service(b);
  else html = (PAGES[key] || PAGES.notfound)();
  const app = $("#app"); app.innerHTML = html; window.scrollTo(0, 0);
  document.body.classList.toggle("on-quote", key === "quote");
  $$(".menu a[data-r]").forEach(l => l.classList.toggle("active", l.dataset.r === (key === "service" ? "services" : key)));
  $("#mobile").classList.remove("open"); $("#burger").classList.remove("open"); closeMega(); $("#searchPop").hidden = true;
  const t = $("h1", app); document.title = (t ? t.textContent.trim() + " – " : "") + "JATAPR";
  initPage(key); mascotContext(key);
}

function fx() {
  if (reduce || !matchMedia("(pointer:fine)").matches) return;
  $$(".pcard,.plan:not(.hot)").forEach(c => {
    c.addEventListener("mouseenter", () => c.classList.add("tilt"), { once: true });
    c.addEventListener("mousemove", e => { const r = c.getBoundingClientRect(); c.style.setProperty("--ry", ((e.clientX - r.left) / r.width - .5) * 8 + "deg"); c.style.setProperty("--rx", (.5 - (e.clientY - r.top) / r.height) * 8 + "deg"); });
    c.addEventListener("mouseleave", () => { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); });
  });
  const hero = $(".hero"), art = $(".hero-art");
  if (hero && art) hero.addEventListener("mousemove", e => { const r = hero.getBoundingClientRect(); art.style.setProperty("--mx", ((e.clientX - r.left) / r.width - .5) * 2); art.style.setProperty("--my", ((e.clientY - r.top) / r.height - .5) * 2); });
}
function initPage(key) {
  fx();
  // reveals
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); if (e.target.dataset.count !== undefined) { } } }), { threshold: .15 });
  $$(".rv").forEach(el => reduce ? el.classList.add("in") : io.observe(el));
  // counters
  const cio = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; cio.unobserve(e.target); const n = +e.target.dataset.count; let s = null; const step = t => { s ??= t; const p = Math.min((t - s) / 1600, 1); e.target.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); }; reduce ? e.target.textContent = n : requestAnimationFrame(step); }), { threshold: .5 });
  $$("[data-count]").forEach(el => cio.observe(el));
  // timeline progress
  const st = $("#steps"); if (st) new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { st.style.setProperty("--p", 1); o.disconnect(); } }, { threshold: .4 }).observe(st);
  // faq
  $$(".fq button").forEach(b => b.onclick = () => { const f = b.parentElement, open = f.classList.toggle("open"); b.setAttribute("aria-expanded", open); const d = $("div", f); d.style.maxHeight = open ? d.scrollHeight + 30 + "px" : 0; });
  // slider
  const sl = $("#slider"); if (sl) { const sls = $$(".slide", sl), ds = $$(".dots button", sl); let i = 0; const go = n => { i = n; sls.forEach((s, k) => s.classList.toggle("on", k == n)); ds.forEach((d, k) => d.classList.toggle("on", k == n)); }; ds.forEach((d, k) => d.onclick = () => go(k)); const timer = setInterval(() => { if (!document.body.contains(sl)) return clearInterval(timer); go((i + 1) % sls.length); }, 6000); }
  // portfolio filters
  const fl = $("#filters"); if (fl) fl.onclick = e => { const b = e.target.closest("button"); if (!b) return; $$("button", fl).forEach(x => x.classList.toggle("on", x == b)); $$("#grid .card").forEach(c => { const show = b.dataset.f === "All" || c.dataset.cat === b.dataset.f; c.style.display = show ? "" : "none"; c.classList.remove("pop"); void c.offsetWidth; if (show) c.classList.add("pop"); }); };
  // post search
  const ps = $("#postSearch"); if (ps) ps.oninput = () => $$("#posts .card").forEach(c => c.style.display = c.dataset.t.includes(ps.value.toLowerCase()) ? "" : "none");
  // forms
  const qf = $("#quoteForm"), cf = $("#contactForm");
  qf && wireForm(qf, "quote"); cf && wireForm(cf, "contact");
}

/* ===== forms (real backend only) ===== */
function wireForm(form, type) {
  let busy = false;
  form.onsubmit = async e => {
    e.preventDefault(); if (busy) return;
    const area = $(".msg-area", form); area.innerHTML = "";
    let ok = true;
    $$("[required]", form).forEach(f => { const er = f.closest("div,label")?.parentElement?.querySelector(".err") || f.parentElement.querySelector(".err"); let m = ""; if (f.type === "checkbox" ? !f.checked : !f.value.trim()) m = f.type === "checkbox" ? "Please tick the box to continue." : "This field is required."; else if (f.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value)) m = "Enter a valid email address, e.g. name@example.com."; if (er) er.textContent = m; f.classList.toggle("invalid", !!m); if (m) ok = false; });
    if (!ok) { $(".invalid", form)?.focus(); return; }
    if (form.website_hp.value) return; // spam honeypot
    const btn = $("button[type=submit]", form), label = btn.textContent;
    busy = true; btn.disabled = true; btn.textContent = "Sending…";
    try {
      if (!CONFIG.formEndpoint) throw new Error("not-configured");
      const data = Object.fromEntries(new FormData(form)); delete data.website_hp; data.formType = type;
      const res = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("http " + res.status);
      area.innerHTML = `<div class="msg ok">Thank you for reaching out! Your request has been received.</div>`;
      form.reset(); const q = $("#qMascot"); if (q) { q.classList.add("happy"); $("#qSay").textContent = "Thank you for reaching out! Your request has been received. 🎉"; }
    } catch (err) {
      area.innerHTML = `<div class="msg bad">${err.message === "not-configured" ? "We couldn't send your request because the form is not connected to a backend yet. The site owner needs to set CONFIG.formEndpoint in script.js." : "Something went wrong and your request was not sent. Please check your connection and try again."}</div>`;
    } finally { busy = false; btn.disabled = false; btn.textContent = label; }
  };
}

/* ===== mega menu ===== */
const mw = () => $("#megaWrap");
function openMega() { mw().classList.add("open"); $("#svcTrigger").setAttribute("aria-expanded", "true"); }
function closeMega() { mw().classList.remove("open"); $("#svcTrigger").setAttribute("aria-expanded", "false"); }
let mt;
mw().addEventListener("mouseenter", () => { clearTimeout(mt); openMega(); });
mw().addEventListener("mouseleave", () => { mt = setTimeout(closeMega, 180); });
$("#svcTrigger").addEventListener("click", e => { if (matchMedia("(min-width:1021px)").matches && !mw().classList.contains("open")) { e.preventDefault(); openMega(); } });
document.addEventListener("click", e => { if (!e.target.closest("#megaWrap")) closeMega(); if (!e.target.closest("#searchPop,#searchBtn")) $("#searchPop").hidden = true; });
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeMega(); $("#searchPop").hidden = true; } });

/* ===== header, theme, search, burger ===== */
addEventListener("scroll", () => { $("#header").classList.toggle("scrolled", scrollY > 20); $("#toTop").classList.toggle("show", scrollY > 500); $("#progress").style.transform = `scaleX(${scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)})`; }, { passive: true });
$("#toTop").onclick = () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
$("#burger").onclick = () => { const o = $("#mobile").classList.toggle("open"); $("#burger").classList.toggle("open", o); $("#burger").setAttribute("aria-expanded", o); };
const setTheme = t => { document.documentElement.dataset.theme = t; const b = $("#themeBtn"); b.textContent = t === "dark" ? "☀️" : "🌙"; b.setAttribute("aria-pressed", t === "dark"); b.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme"); try { localStorage.setItem("jt", t); } catch (e) { } };
{ let st = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; try { st = localStorage.getItem("jt") || st; } catch (e) { } setTheme(st); }
$("#themeBtn").onclick = () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
$("#searchBtn").onclick = e => { e.stopPropagation(); const p = $("#searchPop"); p.hidden = !p.hidden; if (!p.hidden) { runSearch(); $("#searchInput").focus(); } };
/* ===== site search ===== */
const searchIndex = () => [
  ...[["Home", "#/"], ["Services", "#/services"], ["About Us", "#/about"], ["Pricing", "#/pricing"], ["Portfolio", "#/portfolio"], ["Resources", "#/resources"], ["Contact Us", "#/contact"], ["Get a Free Quote", "#/quote"]].map(([t, href]) => ({ t, href, type: "Page", k: "" })),
  ...CATS.map(c => ({ t: c.name, href: "#/services/" + c.id, type: "Service category", k: c.desc })),
  ...ALL.map(s => ({ t: s.name, href: "#/service/" + s.slug, type: s.cat.name, k: s.cat.name })),
  ...PLANS.map(p => ({ t: "Digital Marketing – " + p.name, href: planLink(p), type: "Package", k: `${p.price} ksh monthly price ${p.feats.join(" ")}` })),
  ...FAQS.map(([q, a]) => ({ t: q, href: "#/contact", type: "FAQ", k: a })),
  ...PROJECTS.map(p => ({ t: p[0], href: "#/portfolio", type: "Project", k: p[1] })),
  ...POSTS.map(p => ({ t: p[0], href: "#/resources", type: "Article", k: p[1] }))
];
let sIdx = null, sSel = -1;
const hl = (t, terms) => { let o = esc(t); terms.forEach(w => { if (w) o = o.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); }); return o; };
function runSearch() {
  const q = $("#searchInput").value.toLowerCase().trim(), box = $("#searchRes"); sSel = -1;
  if (!q) { box.innerHTML = "<p class='s-hint'>Type to search services, packages, pages and articles.</p>"; return; }
  sIdx ??= searchIndex(); const terms = q.split(/\s+/);
  const res = sIdx.map(i => { const t = i.t.toLowerCase(), k = (i.k || "").toLowerCase(); if (!terms.every(w => t.includes(w) || k.includes(w) || i.type.toLowerCase().includes(w))) return null; return { i, sc: (t.startsWith(q) ? 0 : t.includes(q) ? 1 : terms.every(w => t.includes(w)) ? 2 : 3) }; }).filter(Boolean).sort((a, b) => a.sc - b.sc).slice(0, 8);
  box.innerHTML = res.length ? res.map(({ i }) => `<a href="${i.href}" role="option"><span>${hl(i.t, terms)}</span><small>${esc(i.type)}</small></a>`).join("") : `<p class="s-hint">No results for “${esc(q)}”. Try “SEO”, “website” or “pricing”.</p>`;
}
const searchMove = d => { const items = $$("#searchRes a"); if (!items.length) return; items.forEach(a => a.classList.remove("sel")); sSel = (sSel + d + items.length) % items.length; items[sSel].classList.add("sel"); items[sSel].scrollIntoView({ block: "nearest" }); };
$("#searchInput").oninput = runSearch;
$("#searchInput").onkeydown = e => {
  if (e.key === "ArrowDown") { e.preventDefault(); searchMove(1); }
  else if (e.key === "ArrowUp") { e.preventDefault(); searchMove(-1); }
  else if (e.key === "Enter") { e.preventDefault(); const a = $$("#searchRes a")[Math.max(sSel, 0)]; if (a) { location.hash = a.getAttribute("href"); $("#searchPop").hidden = true; $("#searchInput").value = ""; } }
};
$("#searchRes").onclick = e => { if (e.target.closest("a")) { $("#searchPop").hidden = true; $("#searchInput").value = ""; } };

/* ===== mascot behaviour ===== */
const M = { bubble: $("#bubble"), panel: $("#panel"), btn: $("#mascotBtn") };
const ss = { get: k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) { } } };
const MSG = { "": "Welcome to JATAPR! Let's make something amazing happen.", services: "Not sure what you need? Explore our services and find the right solution.", portfolio: "Take a look at what creative ideas can become!", pricing: "Want something tailored to your budget? Let's talk!", contact: "Have a question? I'd love to help!", quote: "You're in the right place! Tell us what you need." };
let bubbleTimer, shown = {};
function say(html, ms = 7000) { if (ss.get("jt-dismissed") === "1" && !html.includes("data-force")) return; M.panel.hidden = true; M.bubble.hidden = false; M.bubble.innerHTML = `<button class="x" aria-label="Dismiss message">×</button>${html}`; $(".x", M.bubble).onclick = dismiss; clearTimeout(bubbleTimer); if (ms) bubbleTimer = setTimeout(() => M.bubble.hidden = true, ms); }
function dismiss() { M.bubble.hidden = true; ss.set("jt-dismissed", "1"); }
function welcome() {
  M.btn.classList.add("enter-m");
  if (ss.get("jt-welcomed") || ss.get("jt-dismissed")) return;
  ss.set("jt-welcomed", "1");
  setTimeout(() => say("Hey there! 👋 Welcome to JATAPR!", 3200), 1100);
  setTimeout(() => say(`Looking to grow your business or bring your ideas to life? I can help you get started!<a class="btn btn-orange" href="#/quote">Get Your Free Quote</a><a class="sec" href="#/services">Explore our services</a>`, 14000), 4600);
}
function mascotContext(key) {
  if (key === "" || !MSG[key] || shown[key] || ss.get("jt-dismissed") === "1") return;
  if (key === "quote") { shown[key] = 1; setTimeout(() => say(MSG[key], 5000), 800); return; }
  shown[key] = 1; setTimeout(() => say(MSG[key], 5000), 1800);
}
M.btn.onclick = () => {
  M.bubble.hidden = true; M.panel.hidden = !M.panel.hidden; if (M.panel.hidden) return;
  M.panel.innerHTML = `<button class="x" aria-label="Close assistant">×</button>Hi! I'm the JATAPR assistant. What would you like to do?<a class="btn btn-orange" href="#/quote">Get a Free Quote</a><div class="opts"><a href="#/services">Explore services</a><a href="#/pricing">View pricing</a><a href="#/contact">Contact JATAPR</a><a href="${CONFIG.whatsapp}" target="_blank" rel="noopener">Chat on WhatsApp</a></div>`;
  $(".x", M.panel).onclick = () => M.panel.hidden = true;
  const w = $(".wave", M.btn); w.style.animation = "none"; void w.getBoundingClientRect(); w.style.animation = "";
};
document.addEventListener("click", e => { if (e.target.closest(".bubble a,.panel a")) { M.bubble.hidden = true; M.panel.hidden = true; } });
// section-aware messages on the home page
addEventListener("scroll", () => {
  if (location.hash.replace(/^#\/?/, "") !== "" || ss.get("jt-dismissed") === "1") return;
  const y = scrollY + innerHeight * .6; const secs = $$("#app section");
  const find = (re) => secs.find(s => re.test(s.textContent.slice(0, 80)));
  [["services", /What We Do/], ["portfolio", /Recent Work/], ["pricing", /Why Choose/]].forEach(([k, re]) => { const s = find(re); if (s && !shown["h" + k] && y > s.offsetTop + 120 && y < s.offsetTop + s.offsetHeight) { shown["h" + k] = 1; say(k === "pricing" ? MSG.pricing : MSG[k], 5000); } });
}, { passive: true });

buildShell(); addEventListener("hashchange", route); route(); welcome();

// button ripple
document.addEventListener("click", e => { const b = e.target.closest(".btn"); if (!b || reduce) return; const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height), sp = document.createElement("span"); sp.className = "ripple"; sp.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`; b.appendChild(sp); setTimeout(() => sp.remove(), 650); });
