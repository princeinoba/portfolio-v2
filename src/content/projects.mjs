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
    sourceUrl: "https://github.com/princeinoba/teoyube-frontend", demoUrl: "https://teoyube-phase-1-sntz.vercel.app",
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
  {
    id: "teoyube", title: "Teoyube App", tagline: "An earlier Scripture-focused concept for personalized discovery and animated guidance.",
    summary: "The original portfolio describes Teoyube as a Bible research and animation application connecting Scripture promises with a user's circumstances and purpose.",
    details: ["The concept combines personalization, Scripture search, animated media, saved research, and prayer-oriented prompts.", "The original data describes an intended React, Express, MongoDB, authentication, media-storage, and real-time architecture."],
    categories: ["Full stack", "Product concept", "Faith technology"], technologies: ["React", "Express", "MongoDB", "Passport", "Cloudinary", "Socket.io"],
    sourceUrl: "https://github.com/princeinoba/teoyube-app", demoUrl: null, demoStatus: "unavailable", status: "Source available", demoChecked: "July 29, 2026",
    image: "teoyube", imageAlt: "Earlier Teoyube application concept interface", featured: false, originalRoute: "/portfolio/bitgora"
  },
  {
    id: "work-day-scheduler", title: "Work Day Scheduler", tagline: "A browser-based daily planner with time-aware scheduling.",
    summary: "A workday calendar that lets users enter and save tasks by hour while distinguishing past, present, and future time blocks.",
    details: ["The current day appears above business-hour blocks, with entries saved locally.", "The project uses JavaScript, jQuery, Bootstrap, Moment.js, Font Awesome, and local storage."],
    categories: ["Front end", "Productivity"], technologies: ["JavaScript", "jQuery", "Bootstrap", "Moment.js", "Local Storage"],
    sourceUrl: "https://github.com/princeinoba/bootcamp-homework5", demoUrl: "https://princeinoba.github.io/bootcamp-homework5/", demoStatus: "verified-live", status: "Live demo", demoChecked: "July 29, 2026",
    image: "work-day-scheduler", imageAlt: "Work Day Scheduler with hourly planning rows", featured: false, originalRoute: "/portfolio/good-games"
  },
  {
    id: "eat-da-burger", title: "Eat Da Burger", tagline: "Log burgers to try, mark them devoured, and manage the list.",
    summary: "An early full-stack project that moves burgers between planned and completed lists and persists records through a server-backed data model.",
    details: ["Users create a burger, mark it devoured, and remove completed entries.", "The original portfolio identifies Handlebars, Bootstrap, Node.js, Express, and MySQL."],
    categories: ["Full stack"], technologies: ["Node.js", "Express", "MySQL", "Handlebars", "Bootstrap"],
    sourceUrl: "https://github.com/princeinoba/eat-da-burger", demoUrl: null, demoStatus: "unavailable", status: "Source available", demoChecked: "July 29, 2026",
    image: "eat-da-burger", imageAlt: "Eat Da Burger project interface", featured: false, originalRoute: "/portfolio/eat-da-burger"
  },
  {
    id: "code-quiz", title: "JavaScript Code Quiz", tagline: "A timed quiz with scoring and locally saved results.",
    summary: "A five-question JavaScript quiz with a sixty-second timer, time penalties for incorrect answers, and a local high-score list.",
    details: ["Remaining time becomes the final score; incorrect answers subtract ten seconds.", "The project uses browser events, timers, CSS transitions, and local storage."],
    categories: ["Front end"], technologies: ["JavaScript", "CSS", "Local Storage", "Font Awesome"],
    sourceUrl: "https://github.com/princeinoba/bootcamp-homework4", demoUrl: "https://princeinoba.github.io/bootcamp-homework4/", demoStatus: "verified-live", status: "Live demo", demoChecked: "July 29, 2026",
    image: "code-quiz", imageAlt: "JavaScript Code Quiz question and timer interface", featured: false, originalRoute: "/portfolio/code-quiz"
  },
  {
    id: "weather-dashboard", title: "Weather Dashboard", tagline: "Current conditions, a five-day forecast, and saved city searches.",
    summary: "A weather planning dashboard that retrieves current conditions and forecast data while retaining recent searches in the browser.",
    details: ["The current panel shows temperature, humidity, wind speed, and UV information.", "The project uses OpenWeather, Bootstrap, Font Awesome, JavaScript, and local storage."],
    categories: ["Front end", "API"], technologies: ["JavaScript", "OpenWeather API", "Bootstrap", "Local Storage"],
    sourceUrl: "https://github.com/princeinoba/bootcamp-homework6", demoUrl: "https://princeinoba.github.io/bootcamp-homework6/", demoStatus: "verified-live", status: "Live demo", demoChecked: "July 29, 2026",
    image: "weather-dashboard", imageAlt: "Weather Dashboard current conditions and forecast interface", featured: false, originalRoute: "/portfolio/weather-dashboard"
  }
];

export const categories = ["All", ...Array.from(new Set(projects.flatMap((project) => project.categories))).sort()];
export function getProject(id) { return projects.find((project) => project.id === id); }