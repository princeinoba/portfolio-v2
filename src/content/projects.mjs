const modern = (record) => ({ featured: false, originalRoute: null, demoStatus: "verified-live", status: "Live portfolio demo", demoChecked: "July 29, 2026", ...record });

export const projects = [
  modern({
    id: "teoyube-scripture-intelligence", title: "Teoyube Scripture Intelligence",
    tagline: "Scripture-first conversational guidance with visible sources and private reflection tools.",
    summary: "A privacy-conscious Scripture intelligence demonstration combining conversational discovery, guided reflection, source tracing, and a browser-local Journey without presenting generated guidance as pastoral care.",
    details: ["The Teo Guide retrieves from a curated local Scripture and guidance corpus, preserves references, and falls back to a deterministic safety-aware response path.", "Twenty generated documents cover conversations, searchable references, reflection, safety, privacy, offline use, and designed error states."],
    caseStudy: {
      problem: "Scripture-search experiences can lose context, obscure sources, or imply more authority than the software can responsibly provide.",
      solution: "Keep references visible, separate retrieval from optional synthesis, and pair responses with reflection steps and explicit safety boundaries.",
      features: ["Conversational Teo Guide with source traces", "Scripture and guidance search", "Guided reflection and local Journey", "Deterministic fallback responses", "Offline-capable shell"],
      implementation: ["A dependency-free generator produces 20 canonical documents.", "Three functions expose health, search, and guide endpoints.", "Guarded AI Gateway synthesis is optional and disabled by default."],
      architecture: "Static pages and local state are delivered from the Vercel CDN with narrow Node.js functions for health, retrieval, and guide responses.",
      integrations: ["Vercel Functions", "Optional Vercel AI Gateway"], boundaries: ["No accounts, database, analytics, uploads, or public chat", "Not a substitute for pastoral, medical, or emergency support"]
    },
    categories: ["AI", "Full stack", "Faith technology"], technologies: ["JavaScript", "Node.js", "Vercel Functions", "PWA", "AI Gateway"],
    sourceUrl: "https://github.com/princeinoba/teoyube-scripture-intelligence", demoUrl: "https://teoyube-scripture-intelligence.vercel.app",
    image: "teoyube-scripture-intelligence", imageAlt: "Teoyube Scripture Intelligence home screen with a Scripture-focused guide and reflection entry points", featured: true
  }),
  modern({
    id: "ai-car-marketplace", title: "DriveLens Market Lab",
    tagline: "Explainable vehicle discovery with private comparison and optional image-assisted matching.",
    summary: "A fictional Canadian vehicle marketplace lab with a twelve-car catalogue, filters, comparisons, finance education, and explainable Smart Match that remains useful without an AI provider.",
    details: ["Visitors can search, filter, compare, save, and inspect durable vehicle pages, then see why catalogue records fit their priorities.", "An optional same-origin image flow analyzes visible attributes and returns catalogue similarities without storing the image."],
    caseStudy: {
      problem: "Vehicle marketplaces can hide why recommendations fit, while image-recognition demos can imply unsupported capability or retention.",
      solution: "Combine a fictional catalogue with explainable matching, educational tools, clear boundaries, and a deterministic non-AI path.",
      features: ["Search, filters, saves, and comparison", "Explainable Smart Match", "Educational finance planner", "Local test-drive reminders", "Read-only admin demo"],
      implementation: ["A dependency-free build generates 28 documents.", "Browser storage preserves saved, comparison, and reminder state.", "A same-origin function validates optional images under 4 MB before guarded analysis."],
      architecture: "Static catalogue and planning pages use three narrow functions for health, vehicle data, and optional image-assisted matching.",
      integrations: ["Vercel Functions", "Optional Google Gemini API"], boundaries: ["All vehicles, prices, dealerships, and availability are fictional", "No sales, reservations, payments, financing applications, accounts, or VIN verification"]
    },
    categories: ["AI", "Marketplace", "Full stack"], technologies: ["JavaScript", "Node.js", "Vercel Functions", "Gemini API", "PWA"],
    sourceUrl: "https://github.com/princeinoba/ai-car-marketplace", demoUrl: "https://drivelens-market-lab.vercel.app",
    image: "ai-car-marketplace", imageAlt: "DriveLens Market Lab landing page presenting explainable vehicle discovery tools", featured: true
  }),
  modern({
    id: "real-estate-hub", title: "CedarKey Property Lab",
    tagline: "Verification-first property discovery and housing planning for fictional Canadian listings.",
    summary: "A fictional Canadian property discovery and planning demo with search, shortlists, comparisons, budget education, visit reminders, and a local owner studio without presenting itself as a brokerage.",
    details: ["The customer experience spans twelve property pages, detailed filters, saved homes, comparison, deterministic Home Match, and inquiry preparation.", "Owner Studio keeps fictional listing drafts and synthetic inquiry state in the browser and never publishes, uploads, books, or sends anything."],
    caseStudy: {
      problem: "Property demos often blur discovery software with regulated brokerage, booking, lending, or property-management services.",
      solution: "Preserve useful research workflows while labelling every record fictional and keeping all mutations local.",
      features: ["Property catalogue and detailed filters", "Saved homes and three-home comparison", "Explainable Home Match", "Purchase and rental budget education", "Local Owner Studio"],
      implementation: ["A zero-dependency generator produces 28 documents.", "Pure modules handle matching, budgeting, and scoped state.", "Read-only functions return health and fictional catalogue data."],
      architecture: "Generated customer and owner pages run with local state and two read-only Node.js functions.",
      integrations: ["Vercel Functions"], boundaries: ["Every property, price, status, inquiry, and visit plan is fictional", "No brokerage, booking, payment, mortgage, credit, account, database, upload, or messaging service"]
    },
    categories: ["Marketplace", "Product design", "Full stack"], technologies: ["JavaScript", "Node.js", "Vercel Functions", "Local Storage", "PWA"],
    sourceUrl: "https://github.com/princeinoba/real-estate-hub", demoUrl: "https://cedarkey-property-lab.vercel.app",
    image: "real-estate-hub", imageAlt: "CedarKey Property Lab home screen with fictional Canadian property discovery options", featured: true
  }),
  modern({
    id: "teoyube-frontend", title: "Teoyube Frontend", status: "Live prototype",
    tagline: "A self-contained ministry product prototype spanning promises, calling, study, and reflection.",
    summary: "A large static Teoyube prototype bringing Scripture promises, calling tools, a personal canon, reflection, and the Book of the Saint into one navigable browser application.",
    details: ["The build contains more than two hundred local files and data-driven surfaces without a framework, database, authentication, or protected source media.", "When approved media is absent, that surface explains nothing is published while the rest of the application remains functional."],
    caseStudy: {
      problem: "A broad ministry vision needed a coherent frontend without depending on unfinished backend or media workflows.",
      solution: "Package the public experience, local assets, runtime data, and read-only fallbacks into a deterministic static release.",
      features: ["Daily Scripture experience", "TeoyubeSearch, Canon, and Promise Table", "Calling Compass and Book of the Saint", "Reflection and testimony", "Optional-media unavailable state"],
      implementation: ["A custom deterministic script assembles the static release.", "Browser-readable JSON drives product surfaces.", "Two read-only functions provide promise seed and YouTube fallback data."],
      architecture: "A self-contained HTML, CSS, and JavaScript app is deployed with two read-only fallback functions.",
      integrations: ["Vercel Functions"], boundaries: ["No owner tools, protected media, approvals, local paths, or secrets", "No claim that optional media is published"]
    },
    categories: ["Front end", "Faith technology", "Product concept"], technologies: ["JavaScript", "CSS", "HTML", "Vercel Functions", "Static JSON"],
    sourceUrl: "https://github.com/princeinoba/teoyube-frontend", demoUrl: "https://teoyube-frontend-css.vercel.app/",
    image: "teoyube-frontend", imageAlt: "Teoyube frontend Today screen with Scripture promise and ministry navigation"
  }),
  modern({
    id: "ikea-clone-marketplace", title: "Nordly Home Market",
    tagline: "A multi-surface furniture marketplace demonstration for customers, vendors, and operators.",
    summary: "An original IKEA-inspired fictional marketplace unifying a customer storefront, vendor studio, and admin console while keeping cart, order, and moderation changes in browser storage.",
    details: ["Customers browse rooms and products, compare offers, save favourites, build a multi-vendor cart, and complete local-only checkout.", "Vendor and admin surfaces use fictional products, inventory, applications, orders, commissions, and settings without real commerce."],
    caseStudy: {
      problem: "Marketplace prototypes often show only the storefront and leave customer, vendor, and operator relationships unexplained.",
      solution: "Use one fictional catalogue and consistent rules across three surfaces without pretending to operate commerce.",
      features: ["Searchable storefront and product pages", "Wishlist and multi-vendor local cart", "Local-only checkout", "Vendor inventory studio", "Admin moderation console"],
      implementation: ["A dependency-free generator creates customer, vendor, and admin documents.", "Pure modules handle catalogue, cart, and operations rules.", "Read-only functions expose health and catalogue data."],
      architecture: "Static generated surfaces share fictional content and local state with read-only catalogue functions.",
      integrations: ["Vercel Functions"], boundaries: ["Not affiliated with IKEA or Mercur", "No real payment, account, order, onboarding, fulfilment, payout, or messaging"]
    },
    categories: ["Marketplace", "Full stack", "E-commerce"], technologies: ["JavaScript", "Node.js", "Vercel Functions", "Local Storage", "PWA"],
    sourceUrl: "https://github.com/princeinoba/ikea-clone-marketplace", demoUrl: "https://nordly-home-market.vercel.app",
    image: "ikea-clone-marketplace", imageAlt: "Nordly Home Market storefront with furniture categories and shopping entry points"
  }),
  modern({
    id: "noel-college", title: "Noel College Digital Campus",
    tagline: "A privacy-first school information site with a clearly separated synthetic portal demo.",
    summary: "An independent Noel College digital-campus concept organizing public information, academics, admissions preparation, verified contacts, consent-gated media, and a synthetic browser-only portal.",
    details: ["Public facts retain source notes and uncertainty instead of filling gaps with unsupported school claims.", "Admissions preparation stays in the browser until a visitor opens email or copies a summary; remote media loads only with consent."],
    caseStudy: {
      problem: "A generic school-management template created unsafe expectations around private records while public information contained gaps.",
      solution: "Narrow the clean-room release to public information and enquiry preparation, with a separate synthetic portal demo.",
      features: ["Public school and academic pages", "Admissions enquiry preparation", "Verified contact routes", "Consent-gated media", "Synthetic local portal"],
      implementation: ["An ES-module generator produces 18 documents.", "School facts and synthetic portal data are separate.", "Native modules manage admissions, portal state, PWA, and offline behavior."],
      architecture: "Static public and portal-demo pages run without an application server, database, secret, or authentication.",
      integrations: ["Email handoff", "Consent-gated remote media"], boundaries: ["Independent concept, not the school’s live portal", "No live login, payment, result, attendance, fee, health, safeguarding, or messaging system"]
    },
    categories: ["Education", "Front end", "Product design"], technologies: ["JavaScript", "Node.js", "Static generation", "Local Storage", "PWA"],
    sourceUrl: "https://github.com/princeinoba/noel-college", demoUrl: "https://noel-college.vercel.app",
    image: "noel-college", imageAlt: "Noel College Digital Campus home page with school information and admissions navigation"
  }),
  modern({
    id: "nominate-it", title: "Nominate It", status: "Live application", originalRoute: "/portfolio/nominate-it",
    tagline: "Search, rank, publish, and explore personal top-five movie lists.",
    summary: "A Vercel-native movie-ranking product where visitors search OMDb, build exactly five nominations, arrange them accessibly, publish an immutable snapshot, and explore shared rankings.",
    details: ["The draft stays in the browser and supports accessible ranking controls, an optional title, and an optional display name without accounts.", "Functions keep OMDb private and use configured Upstash storage for durable public lists and shared rate limits."],
    caseStudy: {
      problem: "The original MERN project needed accessible ranking, private credentials, and durable sharing without introducing accounts.",
      solution: "Use static documents, local drafts, focused functions, immutable URLs, and explicit loading, offline, error, and configuration states.",
      features: ["Paginated OMDb search", "Exactly-five local draft", "Accessible ranking controls", "Immutable public list URLs", "Explore feed and leaderboard"],
      implementation: ["Static documents use no external build dependencies.", "Functions validate search, publish, list, and explore requests.", "Live health confirms OMDb and durable Upstash publishing."],
      architecture: "A static app talks to narrow functions backed by server-side OMDb and Upstash REST storage.",
      integrations: ["OMDb API", "Upstash Redis", "Vercel Functions"], boundaries: ["No accounts, comments, social feed, ads, analytics, AI recommendations, or email collection", "Public UGC still requires moderation and deletion processes"]
    },
    categories: ["Full stack", "API", "Entertainment"], technologies: ["JavaScript", "Node.js", "Vercel Functions", "OMDb API", "Upstash Redis", "PWA"],
    sourceUrl: "https://github.com/princeinoba/nominate-it", demoUrl: "https://nominate-it.vercel.app",
    image: "nominate-it", imageAlt: "Nominate It home screen inviting visitors to build and rank a top-five movie list"
  }),
  modern({
    id: "bookie", title: "Bookie Reading Lab", originalRoute: "/portfolio/bookie",
    tagline: "Private book discovery, reading paths, shelf tracking, and personal progress.",
    summary: "A privacy-first reading demo with twelve classics, four guided paths, optional Google Books discovery, a local shelf, annual goals, notes, ratings, and JSON portability.",
    details: ["Readers can discover curated titles, optionally search a wider catalogue, and track reading state without an account.", "Progress, ratings, notes, palette, and goals stay in scoped storage and can be exported or imported deliberately."],
    caseStudy: {
      problem: "The earlier concept tied a personal reading experience to unnecessary account and database assumptions.",
      solution: "Center a useful curated library, keep personal state local, and make server-side search an optional enhancement.",
      features: ["Twelve-title library", "Four reading paths", "Optional Google Books search", "Local shelf, progress, ratings, and notes", "Annual goal and JSON portability"],
      implementation: ["Static routes and PWA provide the curated experience.", "Scoped storage holds personal reading data.", "A read-only function proxies optional Google Books search."],
      architecture: "Static reading surfaces use read-only health and search functions with no account or shared database.",
      integrations: ["Google Books API", "Vercel Functions"], boundaries: ["No account, shared database, analytics, or advertising", "The curated library works without live catalogue search"]
    },
    categories: ["Productivity", "API", "Front end"], technologies: ["JavaScript", "Node.js", "Google Books API", "Local Storage", "PWA"],
    sourceUrl: "https://github.com/princeinoba/bookie", demoUrl: "https://bookie-ashen.vercel.app",
    image: "bookie", imageAlt: "Bookie Reading Lab home page with curated reading paths and library tools"
  }),
  modern({
    id: "bitgora", title: "BitGora Market Lab", collaborators: ["Ziyong He"],
    tagline: "A privacy-first, Bitcoin-priced marketplace concept with local seller and buyer workflows.",
    summary: "A non-custodial fictional marketplace with twelve Bitcoin-priced listings, discovery filters, optional BTC/CAD reference data, a local watchlist, seller drafts, inquiries, and synthetic messages.",
    details: ["Visitors filter and inspect listings, save items, and view on-demand reference conversion without connecting a wallet.", "Listings, inquiries, and messages are local or synthetic; the release does not operate a marketplace or transfer funds."],
    caseStudy: {
      problem: "A Bitcoin marketplace concept can imply real users, chat, wallets, custody, or payments that a portfolio build does not operate.",
      solution: "Keep catalogue and negotiation-preparation ideas while making every listing fictional, mutation local, and rate integration read-only.",
      features: ["Twelve fictional listings", "Marketplace filters", "Listing details and watchlist", "Local seller and inquiry flows", "On-demand BTC/CAD reference"],
      implementation: ["A static generator produces marketplace and safety pages.", "Scoped storage holds local workflows.", "Read-only health and rate functions accept no mutations."],
      architecture: "Static marketplace pages and local workflows use narrow read-only functions.",
      integrations: ["Read-only public BTC ticker", "Vercel Functions"], boundaries: ["No real users, listings, chat, wallets, payments, escrow, custody, database, uploads, analytics, or ads", "Conversion is reference information, not financial advice"]
    },
    categories: ["Marketplace", "Full stack", "Fintech"], technologies: ["JavaScript", "Node.js", "Vercel Functions", "Local Storage", "PWA"],
    sourceUrl: "https://github.com/princeinoba/bitGora", demoUrl: "https://bitgora.vercel.app",
    image: "bitgora", imageAlt: "BitGora Market Lab home page presenting a Bitcoin-priced fictional marketplace"
  }),
  modern({
    id: "eat-local", title: "Eat Local", originalRoute: "/portfolio/eat-local", collaborators: ["Ziyong He", "Natallie M’bayo"],
    tagline: "Private restaurant discovery and local-only ordering for six fictional Ottawa kitchens.",
    summary: "A privacy-first restaurant discovery and ordering demo with six fictional kitchens, thirty-six menu items, filters, favourites, local distance estimates, and an expiring one-restaurant cart.",
    details: ["Visitors browse menus, configure items, estimate distance locally, and prepare an order through an accessible cart.", "Checkout and the session receipt are demonstrations: no restaurant receives an order and no payment occurs."],
    caseStudy: {
      problem: "The original API-dependent finder relied on discontinued data paths and could not demonstrate ordering without implying real transactions.",
      solution: "Use a fictional Ottawa catalogue and local-only state so discovery and ordering remain reliable, private, and honest.",
      features: ["Six kitchens and thirty-six items", "Search, filters, and favourites", "Local distance estimate", "Configurable expiring cart", "Local-only checkout"],
      implementation: ["A dependency-free build generates restaurant routes.", "Scoped local and session storage preserve state.", "PWA assets provide an offline-capable shell."],
      architecture: "The experience is static and browser-local with no runtime server, database, restaurant API, or transactional backend.",
      integrations: [], boundaries: ["All restaurant and order data is fictional", "No real order, payment, reservation, account, or delivery service"]
    },
    categories: ["Front end", "Food", "Product design"], technologies: ["JavaScript", "Static generation", "Local Storage", "Session Storage", "PWA"],
    sourceUrl: "https://github.com/princeinoba/eat-local", demoUrl: "https://eat-local-psi.vercel.app",
    image: "eat-local", imageAlt: "Eat Local home screen with fictional Ottawa restaurant discovery and ordering options"
  }),
  modern({
    id: "teoyube-cooperation", title: "Teoyube Cooperation", demoChecked: "July 30, 2026",
    tagline: "Purpose-led software. Intelligent products. Built with clarity.",
    summary: "A dependency-free company portfolio presenting Teoyube Cooperation's positioning, services, working process, founder story, selected projects, and evidence-labelled case studies without overstating business maturity.",
    details: ["Thirty generated documents cover the company, seven service areas, projects, case studies, insights, contact, and quote preparation.", "A guarded contact function validates consent and input before an optional CRM webhook or Resend handoff; the public site remains useful without either integration."],
    caseStudy: {
      problem: "An early-stage software company needs a credible public presence while legal status, client outcomes, team scale, and long-term product plans may still be unverified.",
      solution: "Separate confirmed product evidence from company aspirations, label case studies carefully, and pair a complete static experience with a narrow optional contact handoff.",
      features: ["Company positioning and founder story", "Seven service-area pages", "Evidence-labelled project case studies", "Process, technology, and vision pages", "Consent-aware contact and quote preparation"],
      implementation: ["A dependency-free generator creates 30 canonical documents and an offline-capable shell.", "Content and claims are encoded as reviewable source records.", "The contact function applies validation, request-size limits, a honeypot, and a rate guard before optional delivery."],
      architecture: "Static generated pages are served from Vercel with browser-side progressive enhancement and one narrow Node.js contact function.",
      integrations: ["Vercel Functions", "Optional Resend or CRM webhook"], boundaries: ["No verified claim of legal registration, clients, testimonials, revenue, adoption, team size, awards, or certifications", "Long-term Teoyube concepts are not presented as shipped products"]
    },
    categories: ["Full stack", "Product design", "Corporate website"], technologies: ["JavaScript", "Node.js", "Static generation", "Vercel Functions", "PWA"],
    sourceUrl: "https://github.com/princeinoba/teoyube-cooperation", demoUrl: "https://teoyube-cooperation.vercel.app",
    image: "teoyube-cooperation", imageAlt: "Teoyube Cooperation home page presenting purpose-led software services and selected work"
  }),
  modern({
    id: "pantrylens-ai", title: "PantryLens AI", demoChecked: "July 30, 2026",
    tagline: "See what you have. Plan what to cook.",
    summary: "A local-first pantry and meal-planning product that turns reviewed ingredients into recipe discovery, exactly three explainable meal proposals, a private saved library, and a practical weekly plan.",
    details: ["The complete experience works without secrets using eight original recipes, deterministic proposals, local pantry state, and JSON portability.", "Optional TheMealDB discovery, image assistance, and AI Gateway generation enhance the product without autonomously changing the pantry or plan."],
    caseStudy: {
      problem: "Meal-planning tools can require accounts, upload household data, or hide how suggestions were produced before users can get practical value.",
      solution: "Keep pantry, saved recipes, ratings, notes, and plans in the browser; make every assisted result reviewable; and provide deterministic proposals when external services are absent.",
      features: ["Local pantry with import and export", "Recipe search and optional catalogue discovery", "Exactly three reviewable meal proposals", "Private saved recipes, ratings, and notes", "Seven-day meal plan and shopping list"],
      implementation: ["A dependency-free generator produces 20 canonical documents.", "Four functions expose health, optional recipe discovery, proposal generation, and image assistance.", "Input limits, ingredient review, deterministic fallbacks, and scoped storage keep optional assistance controlled."],
      architecture: "Static generated pages and versioned local state form the base product, with four narrow Vercel Functions for optional external assistance.",
      integrations: ["Vercel Functions", "Optional TheMealDB", "Optional Vercel AI Gateway"], boundaries: ["No accounts, database, billing, cloud pantry, public recipe publishing, analytics, or ads", "No nutrition, allergen, medical, or autonomous pantry-mutation claims"]
    },
    categories: ["AI", "Food", "Productivity"], technologies: ["JavaScript", "Node.js", "Vercel Functions", "Local Storage", "PWA"],
    sourceUrl: "https://github.com/princeinoba/pantrylens-ai", demoUrl: "https://pantrylens-ai.vercel.app",
    image: "pantrylens-ai", imageAlt: "PantryLens AI home page with pantry, recipe discovery, and meal-planning entry points"
  }),
  modern({
    id: "rj-rogers-digital-demo", title: "RJ Rogers Landscaping Digital Experience", status: "Live portfolio demonstration", demoChecked: "August 21, 2026",
    tagline: "A connected landscaping customer journey and synthetic field-operations concept for Ottawa.",
    summary: "An independent portfolio demonstration connecting responsive landscaping discovery, a guided project request, and a synthetic operations workspace without presenting itself as an affiliated or production service.",
    details: ["Public service, project, process, community, FAQ, and contact routes lead into a reviewable three-step project request that remains non-binding.", "A clearly labelled Directors AI Workspace and Field Desk use fictional records to explore leads, scheduling, jobs, customers, materials, invoices, and bounded assistance."],
    caseStudy: {
      users: "Prospective Ottawa landscaping customers, plus fictional directors and field teams evaluating a connected operations concept.",
      problem: "A landscaping website needs to move visitors from visual discovery to a useful project conversation while keeping operational and AI demonstrations separate from real business systems.",
      solution: "Connect a responsive public journey to a consent-aware request flow, then place the deeper operations concept behind explicit portfolio-demo labelling and synthetic data.",
      features: ["Responsive service and project discovery", "Three-step project request review", "Project stories and process guidance", "Synthetic Directors AI Workspace", "Mobile Field Desk and accessible interaction states"],
      implementation: ["Next.js App Router composes the public and workspace routes.", "TypeScript models shared project, lead, scheduling, job, material, and invoice concepts.", "The request and workspace flows use synthetic or client-side state rather than claiming production persistence."],
      architecture: "A Next.js and React application delivers public marketing routes and a separate synthetic operations workspace, with Drizzle models documenting a future persistence boundary.",
      integrations: ["Vercel deployment"], boundaries: ["Independent portfolio demonstration with no affiliation or endorsement by RJ Rogers Landscaping", "No production database, private uploads, real authentication, email delivery, Redis, or live AI is enabled"]
    },
    categories: ["Full stack", "Business operations", "Product design"], technologies: ["Next.js", "React", "TypeScript", "Drizzle ORM", "Tailwind CSS"],
    sourceUrl: "https://github.com/princeinoba/rj-rogers-digital-demo", demoUrl: "https://rj-rogers-digital-demo.vercel.app/",
    image: "rj-rogers-digital-demo", imageAlt: "RJ Rogers landscaping portfolio demonstration home page with an Ottawa outdoor-space project and quote entry points"
  }),
  modern({
    id: "dutchgreen-digital-demo", title: "DutchGreen Digital Demo", status: "Live portfolio demonstration", demoChecked: "August 21, 2026",
    tagline: "A connected landscaping estimate journey and synthetic operations workspace for Ottawa.",
    summary: "An independent DutchGreen portfolio demonstration pairing responsive landscape-service discovery with a guided estimate flow and a clearly separated fictional customer and field-operations workspace.",
    details: ["Visitors can explore services and projects before preparing a three-step estimate request with validation, review, and explicit demonstration boundaries.", "A cookie-gated portfolio workspace presents synthetic leads, customers, jobs, schedules, crews, materials, invoices, and deterministic assistance without real authentication."],
    caseStudy: {
      users: "Prospective Ottawa landscaping customers and fictional operations staff reviewing estimate, scheduling, and field-work workflows.",
      problem: "A public landscaping experience and an internal operations concept needed to feel connected without implying that estimates, accounts, notifications, or customer records were operating in production.",
      solution: "Build one coherent responsive journey, label the workspace as a portfolio demonstration, validate requests at the API boundary, and keep all operational records fictional.",
      features: ["Service and project discovery", "Three-step estimate preparation", "Responsive customer and operations workspace", "Lead, job, crew, material, and invoice views", "Deterministic and clearly labelled assistance"],
      implementation: ["Next.js Server Components provide the route foundation with small interactive client islands.", "Zod validates and limits the estimate request handled by the same-origin API.", "A local HttpOnly cookie opens the synthetic workspace while persistence and notification delivery remain disabled."],
      architecture: "A Next.js and React application separates public routes, a validation-focused estimate endpoint, and cookie-gated synthetic workspace routes without a production data backend.",
      integrations: ["Vercel deployment"], boundaries: ["Independent portfolio demonstration with synthetic records and photos, not an affiliated DutchGreen service", "No real customer data, identity provider, persistence, appointments, notifications, or remote AI"]
    },
    categories: ["Full stack", "Business operations", "Product design"], technologies: ["Next.js", "React", "TypeScript", "Zod", "Vercel"],
    sourceUrl: "https://github.com/princeinoba/dutchgreen-digital-demo", demoUrl: "https://dutchgreen-digital-demo.vercel.app/",
    image: "dutchgreen-digital-demo", imageAlt: "DutchGreen digital demo home page with Ottawa landscaping services, a project image, and estimate actions"
  }),
  modern({
    id: "garderie-oasis-digital-demo", title: "Garderie Oasis Digital Experience", status: "Live portfolio demonstration", demoChecked: "August 21, 2026",
    tagline: "A bilingual childcare discovery, tour-preview, and synthetic director-workflow demonstration.",
    summary: "An independent bilingual childcare portfolio experience combining public program information, a privacy-minimized tour preview, a bounded content guide, and a protected synthetic director workflow.",
    details: ["Families can switch languages, explore programs and daily experience, prepare a three-step tour preview, and follow the official City of Ottawa Registry boundary.", "The director demonstration uses fictional inquiries, schedules, notes, staff, settings, and reviewed FAQ proposals; no request is submitted to a childcare operator."],
    caseStudy: {
      users: "Families exploring bilingual childcare information and fictional childcare directors or staff evaluating inquiry and scheduling workflows.",
      problem: "Phone-and-email-only tour discovery and an earlier blank route made it difficult to understand programs, next steps, and the distinction between a digital preview and Ottawa's official childcare process.",
      solution: "Create a mobile-first bilingual path from program discovery to a privacy-minimized tour preview, keep official registry guidance visible, and isolate the synthetic director workflow.",
      features: ["English and French public experience", "Three-step tour preview", "Official City of Ottawa Registry handoff", "Synthetic inquiry and calendar workflow", "Bounded approved-content Oasis Guide"],
      implementation: ["Next.js and React compose bilingual public and protected demonstration routes.", "Zod validation and request limits constrain the tour-preview API.", "The PWA caches the public shell while private routes and fictional workflow state remain outside offline storage."],
      architecture: "A Next.js application combines bilingual public content, a narrow tour-preview endpoint, a deterministic content guide, and a cookie-protected synthetic director workspace.",
      integrations: ["City of Ottawa Registry links"], boundaries: ["Not a childcare operator, application, waitlist, booking service, or Garderie-operated product", "No persistence, delivery, Supabase connection, remote AI, email, SMS, analytics, or real child and family records"]
    },
    categories: ["Education", "Full stack", "Product design"], technologies: ["Next.js", "React", "TypeScript", "Zod", "PWA"],
    sourceUrl: "https://github.com/princeinoba/garderie-oasis-digital-demo", demoUrl: "https://garderie-oasis-digital-demo.vercel.app/",
    image: "garderie-oasis-digital-demo", imageAlt: "Garderie Oasis bilingual childcare demo home page with a bright classroom and tour and program actions"
  }),
  modern({
    id: "nurtureops-ai", title: "NurtureOps AI", status: "Live synthetic-data demo", demoChecked: "August 21, 2026",
    tagline: "Human-centred childcare operations with explainable, approval-first assistance.",
    summary: "A synthetic-data childcare operations demonstration spanning attendance, room planning, family updates, billing, role-aware workflows, and a proposal-first Care Copilot without handling real childcare records.",
    details: ["Director, educator, and guardian route shells frame idempotent attendance, correction history, bounded offline queuing, care logs, and deterministic billing with synthetic invoices.", "Care Copilot exposes typed read and proposal tools with evidence, warnings, sensitive-field controls, approval steps, and no autonomous mutation."],
    caseStudy: {
      users: "Synthetic childcare directors, educators, and guardians evaluating role-aware operational workflows without real family or child data.",
      problem: "Childcare teams coordinate time-sensitive attendance, care, family, and billing work, but a portfolio demonstration must not imply compliance, safeguarding, payments, or real-data handling.",
      solution: "Model operational workflows with synthetic identities, relationship-aware access rules, deterministic domain logic, and human-reviewed AI proposals that cannot write directly.",
      features: ["Role-aware director, educator, and guardian surfaces", "Idempotent attendance and correction history", "Deterministic billing and synthetic invoices", "Bounded offline workflow queue", "Evidence-backed proposal-first Care Copilot"],
      implementation: ["Next.js App Router and TypeScript organize public, role-specific, and operational routes.", "PostgreSQL migrations define row-level security across the synthetic multi-role data model.", "Vercel AI SDK tool contracts enforce sensitive-field filtering, review steps, and a bounded no-mutation assistant loop."],
      architecture: "A Next.js and React PWA combines browser-side synthetic workflows with a Supabase and PostgreSQL security model and an optional, disabled-by-default remote AI boundary.",
      integrations: ["Supabase", "Vercel AI SDK"], boundaries: ["Synthetic-data portfolio demonstration only, not a live childcare, medical, safeguarding, compliance, messaging, or payment system", "No public signup, real child or family data, production payments, cloud document storage, analytics, or autonomous AI writes"]
    },
    categories: ["AI", "Full stack", "Education"], technologies: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel AI SDK", "PWA"],
    sourceUrl: "https://github.com/princeinoba/nurtureops-ai", demoUrl: "https://nurtureops-ai.vercel.app/",
    image: "nurtureops-ai", imageAlt: "NurtureOps AI home page presenting a synthetic childcare operations workspace and human-reviewed assistance"
  }),
  modern({
    id: "hearthops-ai", title: "HearthOps AI", status: "Live synthetic-data demo", demoChecked: "August 21, 2026",
    tagline: "Home-care scheduling, field coordination, and handoffs in one calm operating rhythm.",
    summary: "A synthetic home-care operations demonstration connecting an agency hub, caregiver field application, consent-scoped care-circle portal, and optional proposal-first operations copilot.",
    details: ["Agency, caregiver, and care-circle surfaces cover schedules, visits, recipients, workforce, requests, messages, billing, reports, consent, and a bounded offline queue.", "The optional copilot uses typed read, proposal, and draft tools with evidence and approval boundaries; it does not write records or provide clinical guidance."],
    caseStudy: {
      users: "Synthetic home-care agency coordinators, caregivers, and consent-scoped care-circle members evaluating coordinated operational workflows.",
      problem: "Home-care coordination spans agency dispatch, field execution, family visibility, and handoffs, while a portfolio product must avoid implying clinical, EHR, EVV, payment, or compliance capability.",
      solution: "Unify the three operational perspectives around deterministic scheduling and consent-aware information, then constrain assistance to explainable drafts and proposals requiring human action.",
      features: ["Agency scheduling and operations hub", "Caregiver field workflow and offline queue", "Consent-scoped care-circle portal", "Deterministic scheduling and travel buffers", "Typed proposal-first operations copilot"],
      implementation: ["Next.js and React provide distinct agency, field, and care-circle route groups.", "Supabase Auth, PostgreSQL row-level security, tenant keys, and private storage define the production-oriented security boundary.", "Vercel AI SDK tools remain optional and guarded, with no direct record mutations."],
      architecture: "A Next.js PWA separates agency, caregiver, and care-circle experiences over a tenant-aware Supabase and PostgreSQL model with optional proposal-only AI assistance.",
      integrations: ["Supabase", "Vercel AI SDK"], boundaries: ["Synthetic clean-room demonstration, not a clinical system, EHR, certified EVV product, payment service, or compliance guarantee", "No real PHI, exact travel calculation, autonomous scheduling, production messaging, or AI record writes"]
    },
    categories: ["AI", "Full stack", "Business operations"], technologies: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel AI SDK", "PWA"],
    sourceUrl: "https://github.com/princeinoba/hearthops-ai", demoUrl: "https://hearthops-ai.vercel.app/",
    image: "hearthops-ai", imageAlt: "HearthOps AI dark home page presenting synthetic home-care operations and an agency workspace preview"
  }),
  {
    id: "teoyube", title: "Teoyube App", tagline: "An earlier Scripture-focused concept for personalized discovery and animated guidance.",
    summary: "The original portfolio describes Teoyube as a Bible research and animation application connecting Scripture promises with a user's circumstances and purpose.",
    details: ["The concept combines personalization, Scripture search, animated media, saved research, and prayer-oriented prompts.", "The original data describes an intended React, Express, MongoDB, authentication, media-storage, and real-time architecture."],
    categories: ["Full stack", "Product concept", "Faith technology"], technologies: ["React", "Express", "MongoDB", "Passport", "Cloudinary", "Socket.io"],
    sourceUrl: "https://github.com/princeinoba/teoyube-app", demoUrl: null, demoStatus: "unavailable", status: "Source available", demoChecked: "July 29, 2026",
    image: "teoyube", imageAlt: "Earlier Teoyube application concept interface", featured: false, originalRoute: "/portfolio/bitgora"
  },
  modern({
    id: "daypilot-ai", title: "DayPilot AI", originalRoute: "/portfolio/good-games", demoChecked: "July 30, 2026",
    tagline: "Plan the day. Understand the trade-offs. Stay in control.",
    summary: "A local-first, weather-aware workday planner with flexible tasks, date isolation, conflict and free-window analysis, and review-only planning proposals.",
    details: ["Tasks support fifteen-minute timing, priority, category, notes, status, and weather sensitivity while versioned local storage provides migration, import, export, and undo.", "Open-Meteo context and optional AI wording feed a guarded proposal flow that must be previewed and revalidated before the user applies it."],
    caseStudy: {
      problem: "Simple hourly schedulers do not explain overlaps, workload, weather trade-offs, or what an automated planning suggestion would change.",
      solution: "Model the workday as local user-owned data, calculate conflicts and free windows deterministically, and keep every suggested schedule change behind explicit review.",
      features: ["Flexible fifteen-minute tasks", "Conflict, workload, and free-window analysis", "Opt-in weather and air-quality context", "Reviewable planning proposals", "Versioned local data with import, export, and undo"],
      implementation: ["Next.js App Router and TypeScript separate planner-domain logic from presentation.", "Server route handlers normalize Open-Meteo data without exposing credentials.", "A deterministic assistant remains available when the optional AI SDK path is disabled."],
      architecture: "A Next.js application keeps planner data in the browser and uses narrow route handlers for normalized weather context and optional proposal wording.",
      integrations: ["Open-Meteo", "Optional Vercel AI SDK"], boundaries: ["No accounts, database, analytics, ads, background location, or assistant history", "The assistant cannot autonomously change a calendar and weather context is not an official warning"]
    },
    categories: ["AI", "Productivity", "Full stack"], technologies: ["Next.js", "React", "TypeScript", "Open-Meteo", "Local Storage"],
    sourceUrl: "https://github.com/princeinoba/daypilot-ai", demoUrl: "https://daypilot-ai-dusky.vercel.app",
    image: "daypilot-ai", imageAlt: "DayPilot AI planner showing a weather-aware schedule, task controls, and workload guidance"
  }),
  modern({
    id: "burgerforge-ai", title: "BurgerForge AI", originalRoute: "/portfolio/eat-da-burger", demoChecked: "July 30, 2026",
    tagline: "Build it. Stack it. Devour it.",
    summary: "A playful local-first burger idea builder with exactly three explainable suggestions, a Devour Board, and a private Tasting Journal that works without an AI provider.",
    details: ["Eight curated blueprints and deterministic suggestion logic keep the core builder complete without secrets.", "Visitors review suggestions before adding them to a local board, then move ideas from queued to devoured and record ratings or notes privately."],
    caseStudy: {
      problem: "A novelty burger logger offered little guidance and depended on a server-backed data model for a workflow that could remain private and portable.",
      solution: "Turn the concept into a complete idea-to-tasting flow with local state, deterministic creativity, optional guarded AI, and explicit food-safety limits.",
      features: ["Manual burger idea builder", "Exactly three reviewable suggestions", "Eight curated burger blueprints", "Queued and devoured board", "Private ratings, notes, import, and export"],
      implementation: ["A dependency-free generator creates the static experience and offline shell.", "Scoped browser storage holds the board, journal, theme, and settings.", "Health and suggestion functions support optional AI while preserving deterministic fallback results."],
      architecture: "Static generated pages use local state for all personal workflows and two narrow Vercel Functions for health and optional suggestions.",
      integrations: ["Vercel Functions", "Optional Vercel AI Gateway"], boundaries: ["Creative inspiration only; no nutrition, allergen, medical, cooking-temperature, or cross-contact guidance", "No restaurant, ordering, account, database, analytics, or food-safety verification"]
    },
    categories: ["AI", "Food", "Product design"], technologies: ["JavaScript", "Node.js", "Vercel Functions", "Local Storage", "PWA"],
    sourceUrl: "https://github.com/princeinoba/burgerforge-ai", demoUrl: "https://burgerforge-ai.vercel.app",
    image: "burgerforge-ai", imageAlt: "BurgerForge AI home page with burger idea generation, Devour Board, and Tasting Journal"
  }),
  modern({
    id: "codeclarity-ai", title: "CodeClarity AI", originalRoute: "/portfolio/code-quiz", demoChecked: "July 30, 2026",
    tagline: "Test your skills. Understand every answer.",
    summary: "A privacy-first JavaScript practice lab with a timed ten-question sprint, a searchable thirty-six-question bank, answer review, local progress, and an explainable Study Coach.",
    details: ["The ninety-second sprint and broader practice mode preserve detailed review while progress and a personal leaderboard stay in the browser.", "The Study Coach builds deterministic study plans from local performance and can optionally refine wording through Vercel AI Gateway."],
    caseStudy: {
      problem: "A short timed quiz measured recall but did not support deeper review, repeat practice, explainable study planning, or portable local progress.",
      solution: "Combine a focused sprint with a searchable practice bank and use transparent performance signals to generate a reviewable study plan.",
      features: ["Ninety-second ten-question sprint", "Searchable thirty-six-question bank", "Answer review and explanations", "Local progress and personal leaderboard", "Deterministic Study Coach"],
      implementation: ["A zero-dependency generator produces twelve canonical documents.", "Three functions expose health, question data, and optional coach wording.", "Versioned local storage keeps attempts, progress, and preferences private."],
      architecture: "Static learning pages and local progress use narrow read-only or optional-assistance functions without a shared learner backend.",
      integrations: ["Vercel Functions", "Optional Vercel AI Gateway"], boundaries: ["No account, database, analytics, cloud profile, public ranking, certification, or code execution", "Scores and study plans are practice feedback, not hiring or qualification evidence"]
    },
    categories: ["AI", "Education", "Front end"], technologies: ["JavaScript", "Node.js", "Vercel Functions", "Local Storage", "PWA"],
    sourceUrl: "https://github.com/princeinoba/codeclarity-ai", demoUrl: "https://codeclarity-ai-tau.vercel.app",
    image: "codeclarity-ai", imageAlt: "CodeClarity AI home page with sprint, question bank, progress, and Study Coach options"
  }),
  modern({
    id: "skyplan-weather-intelligence", title: "SkyPlan Weather Intelligence", originalRoute: "/portfolio/weather-dashboard", demoChecked: "July 30, 2026",
    tagline: "Forecast clearly. Plan confidently.",
    summary: "A local-first weather intelligence product combining current conditions, hourly and ten-day forecasts, saved locations, comparison, air-quality context, and grounded planning guidance.",
    details: ["City autocomplete, opt-in geolocation, unit controls, weather details, up to eight saved places, and two-to-three-location comparison support everyday planning.", "A tool-grounded planning assistant uses normalized Open-Meteo data and retains a deterministic response when optional AI rewriting is disabled."],
    caseStudy: {
      problem: "A basic weather dashboard showed raw conditions but did not help people compare places, understand broader conditions, or translate a forecast into a cautious plan.",
      solution: "Normalize several public forecast sources into an accessible local-first interface and constrain planning guidance to the retrieved weather evidence.",
      features: ["Current, thirty-six-hour, and ten-day forecasts", "Precipitation, air quality, UV, wind, visibility, and pressure", "Saved locations and multi-place comparison", "Opt-in geolocation and unit controls", "Tool-grounded planning assistant"],
      implementation: ["A dependency-free generator creates eight canonical documents and an offline-capable shell.", "Four functions handle health, location search, normalized weather data, and planning guidance.", "Local preferences and caching keep saved places and display choices private."],
      architecture: "Static generated pages use local preferences and four narrow Vercel Functions backed by Open-Meteo services.",
      integrations: ["Open-Meteo Forecast", "Open-Meteo Air Quality", "Optional Vercel AI Gateway"], boundaries: ["No official weather warnings, safety guarantees, health advice, or exact-street claims", "Planning guidance is informational and does not replace authoritative local services"]
    },
    categories: ["AI", "API", "Productivity"], technologies: ["JavaScript", "Node.js", "Open-Meteo", "Vercel Functions", "PWA"],
    sourceUrl: "https://github.com/princeinoba/skyplan-weather-intelligence", demoUrl: "https://skyplan-weather-intelligence.vercel.app",
    image: "skyplan-weather-intelligence", imageAlt: "SkyPlan Weather Intelligence home page with forecast summaries, saved places, and planning tools"
  })
];

export const categories = ["All", ...Array.from(new Set(projects.flatMap((project) => project.categories))).sort()];
export function getProject(id) { return projects.find((project) => project.id === id); }
