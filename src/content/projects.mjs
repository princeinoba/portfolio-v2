export const projects = [
  {
    id: "teoyube",
    title: "Teoyube App",
    tagline: "A Scripture-focused product concept for personalized discovery and animated guidance.",
    summary:
      "The uploaded portfolio describes Teoyube as a Bible research and animation application that connects Scripture promises with a user's circumstances and purpose.",
    details: [
      "The concept combines account-based personalization, searchable Scripture promises, animated media, saved research, and prayer-oriented prompts.",
      "In the original portfolio data, Teoyube is represented as a full-stack React and Express project with MongoDB, authentication, media storage, and real-time communication in its intended architecture."
    ],
    categories: ["Full stack", "Product concept"],
    technologies: ["React", "Express", "MongoDB", "Passport", "Cloudinary", "Socket.io"],
    sourceUrl: "https://github.com/princeinoba/teoyube-app",
    demoUrl: null,
    demoStatus: "unavailable",
    image: "teoyube",
    featured: true,
    originalRoute: "/portfolio/bitgora"
  },
  {
    id: "nominate-it",
    title: "Nominate It",
    tagline: "Search for movies and submit a personal top-five nomination list.",
    summary:
      "A full-stack movie nomination experience that lets users search the OMDb catalogue, assemble a list, and browse submitted nominations.",
    details: [
      "Users add movies from search results and submit their top five choices.",
      "The original project data identifies React and Bootstrap on the front end, with Express, MongoDB/Mongoose, Axios, and the OMDb API behind the experience."
    ],
    categories: ["Full stack", "API"],
    technologies: ["React", "Bootstrap", "Express", "Mongoose", "Axios", "OMDb API"],
    sourceUrl: "https://github.com/princeinoba/nominate-it",
    demoUrl: null,
    demoStatus: "unavailable",
    image: "nominate-it",
    featured: true,
    originalRoute: "/portfolio/nominate-it"
  },
  {
    id: "bookie",
    title: "Bookie",
    tagline: "Search for books and share recommendations.",
    summary:
      "A book discovery application where users search the Google Books catalogue, save titles, and review community recommendations.",
    details: [
      "The search flow retrieves book information from the Google Books API and lets users add selected titles to a recommendation list.",
      "The uploaded project model lists React and Bootstrap for the interface and Express with MongoDB/Mongoose for the server layer."
    ],
    categories: ["Full stack", "API"],
    technologies: ["React", "Bootstrap", "Express", "Mongoose", "Google Books API"],
    sourceUrl: "https://github.com/princeinoba/bookie",
    demoUrl: null,
    demoStatus: "unavailable",
    image: "bookie",
    featured: true,
    originalRoute: "/portfolio/bookie"
  },
  {
    id: "work-day-scheduler",
    title: "Work Day Scheduler",
    tagline: "A browser-based daily planner with time-aware scheduling.",
    summary:
      "A workday calendar that lets users enter and save tasks by hour while visually distinguishing past, present, and future time blocks.",
    details: [
      "The current day appears above a set of standard business-hour time blocks. Entries are saved to local storage from each row.",
      "The original description identifies JavaScript, jQuery, Bootstrap, Moment.js, Font Awesome, and local storage as the relevant implementation tools."
    ],
    categories: ["Front end", "Productivity"],
    technologies: ["JavaScript", "jQuery", "Bootstrap", "Moment.js", "Local Storage"],
    sourceUrl: "https://github.com/princeinoba/bootcamp-homework5",
    demoUrl: "https://princeinoba.github.io/bootcamp-homework5/",
    demoStatus: "verified-live",
    image: "work-day-scheduler",
    featured: false,
    originalRoute: "/portfolio/good-games"
  },
  {
    id: "eat-local",
    title: "Eat Local",
    tagline: "Find nearby restaurants using location and dining APIs.",
    summary:
      "A restaurant lookup designed to help users discover local businesses within ten kilometres of their current location.",
    details: [
      "Users can browse provided categories or search for a specific craving, then compare distance, ratings, hours, and available restaurant details.",
      "The uploaded project data identifies Yelp, Zomato, and Google Maps URLs as data sources, with Bulma used for the interface."
    ],
    categories: ["Front end", "API"],
    technologies: ["JavaScript", "Bulma", "Yelp API", "Zomato API", "Google Maps"],
    sourceUrl: "https://github.com/princeinoba/eat-local",
    demoUrl: "https://ziyonghe.github.io/EatLocal/index.html",
    demoStatus: "verified-live",
    image: "eat-local",
    featured: false,
    originalRoute: "/portfolio/eat-local",
    collaborators: ["Ziyong He", "Natallie M’bayo"]
  },
  {
    id: "eat-da-burger",
    title: "Eat Da Burger",
    tagline: "Log burgers to try, mark them devoured, and manage the list.",
    summary:
      "An early full-stack project that moves burgers between planned and completed lists and persists records through a server-backed data model.",
    details: [
      "Users create a burger, mark it as devoured, and remove completed entries.",
      "The original portfolio identifies Express Handlebars, Bootstrap, Node.js, Express, and MySQL as the implementation stack."
    ],
    categories: ["Full stack"],
    technologies: ["Node.js", "Express", "MySQL", "Handlebars", "Bootstrap"],
    sourceUrl: "https://github.com/princeinoba/eat-da-burger",
    demoUrl: null,
    demoStatus: "unavailable",
    image: "eat-da-burger",
    featured: false,
    originalRoute: "/portfolio/eat-da-burger"
  },
  {
    id: "code-quiz",
    title: "JavaScript Code Quiz",
    tagline: "A timed quiz with scoring and locally saved results.",
    summary:
      "A five-question JavaScript quiz with a sixty-second timer, time penalties for incorrect answers, and a local high-score list.",
    details: [
      "The remaining time becomes the final score when all questions are answered; incorrect answers subtract ten seconds.",
      "The project uses browser event handling, timers, CSS transitions, and local storage without a server dependency."
    ],
    categories: ["Front end"],
    technologies: ["JavaScript", "CSS", "Local Storage", "Font Awesome"],
    sourceUrl: "https://github.com/princeinoba/bootcamp-homework4",
    demoUrl: "https://princeinoba.github.io/bootcamp-homework4/",
    demoStatus: "verified-live",
    image: "code-quiz",
    featured: false,
    originalRoute: "/portfolio/code-quiz"
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    tagline: "Current conditions, a five-day forecast, and saved city searches.",
    summary:
      "A weather planning dashboard that retrieves current conditions and forecast data while retaining recent searches in the browser.",
    details: [
      "The current panel shows temperature, humidity, wind speed, and UV information; the forecast focuses on temperature and humidity.",
      "The uploaded project data identifies the OpenWeather API, Bootstrap, Font Awesome, JavaScript, and local storage."
    ],
    categories: ["Front end", "API"],
    technologies: ["JavaScript", "OpenWeather API", "Bootstrap", "Local Storage"],
    sourceUrl: "https://github.com/princeinoba/bootcamp-homework6",
    demoUrl: "https://princeinoba.github.io/bootcamp-homework6/",
    demoStatus: "verified-live",
    image: "weather-dashboard",
    featured: false,
    originalRoute: "/portfolio/weather-dashboard"
  },
  {
    id: "bitgora",
    title: "BitGora",
    tagline: "A marketplace concept for buying and selling goods with Bitcoin.",
    summary:
      "A marketplace where users can publish listings, browse other users' goods, and use real-time chat to arrange a purchase or negotiate a price.",
    details: [
      "The project explores smaller peer-to-peer transactions as a way to make Bitcoin more usable for familiar exchanges.",
      "The original project model lists React, Express, MongoDB/Mongoose, Passport, Cloudinary, Socket.io, and the CoinDesk API."
    ],
    categories: ["Full stack", "Marketplace"],
    technologies: ["React", "Express", "Mongoose", "Passport", "Cloudinary", "Socket.io", "CoinDesk API"],
    sourceUrl: "https://github.com/ZiyongHe/bitGora",
    demoUrl: null,
    demoStatus: "unavailable",
    image: "bitgora",
    featured: false,
    originalRoute: null,
    collaborators: ["Ziyong He"]
  }
];

export const categories = [
  "All",
  ...Array.from(new Set(projects.flatMap((project) => project.categories))).sort()
];

export function getProject(id) {
  return projects.find((project) => project.id === id);
}
