(() => {
  const root = document.documentElement;
  root.classList.add("js");

  const legacyRoutes = {
    "/portfolio": "/portfolio/",
    "/about": "/about/",
    "/contact": "/contact/",
    "/portfolio/bitgora": "/projects/teoyube/",
    "/portfolio/nominate-it": "/projects/nominate-it/",
    "/portfolio/bookie": "/projects/bookie/",
    "/portfolio/good-games": "/projects/daypilot-ai/",
    "/portfolio/eat-local": "/projects/eat-local/",
    "/portfolio/eat-da-burger": "/projects/burgerforge-ai/",
    "/portfolio/code-quiz": "/projects/codeclarity-ai/",
    "/portfolio/weather-dashboard": "/projects/skyplan-weather-intelligence/",
    "/projects/work-day-scheduler": "/projects/daypilot-ai/",
    "/projects/eat-da-burger": "/projects/burgerforge-ai/",
    "/projects/code-quiz": "/projects/codeclarity-ai/",
    "/projects/weather-dashboard": "/projects/skyplan-weather-intelligence/"
  };

  const hashPath = window.location.hash.startsWith("#/")
    ? window.location.hash.slice(1).replace(/\/$/, "") || "/"
    : "";
  if (hashPath && legacyRoutes[hashPath]) {
    window.location.replace(legacyRoutes[hashPath]);
    return;
  }

  const themeToggle = document.querySelector("[data-theme-toggle]");
  const getStoredTheme = () => {
    try {
      return localStorage.getItem("portfolio-theme");
    } catch {
      return null;
    }
  };
  const setStoredTheme = (theme) => {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Local storage can be unavailable in privacy-focused contexts.
    }
  };
  const prefersDark = () => window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const effectiveTheme = () => {
    const selected = root.dataset.theme || "system";
    return selected === "system" ? (prefersDark() ? "dark" : "light") : selected;
  };
  const syncThemeLabel = () => {
    if (!themeToggle) return;
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", `Use ${next} theme`);
    themeToggle.setAttribute("title", `Use ${next} theme`);
  };

  const storedTheme = getStoredTheme();
  if (storedTheme === "light" || storedTheme === "dark") {
    root.dataset.theme = storedTheme;
  }
  syncThemeLabel();
  themeToggle?.addEventListener("click", () => {
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    setStoredTheme(next);
    syncThemeLabel();
  });
  window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener?.("change", syncThemeLabel);

  document.querySelectorAll(".site-navigation nav a").forEach((link) => {
    link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
  });

  const dialog = document.querySelector("#command-palette");
  const commandOpeners = document.querySelectorAll("[data-command-open]");
  const commandClose = dialog?.querySelector("[data-command-close]");
  const commandInput = dialog?.querySelector("[data-command-search-input]");
  const commandItems = dialog ? [...dialog.querySelectorAll("[data-command-item]")] : [];
  const commandEmpty = dialog?.querySelector("[data-command-empty]");
  let activeCommandIndex = -1;
  let lastCommandOpener = null;

  const visibleCommandItems = () => commandItems.filter((item) => !item.hidden);
  const setActiveCommand = (index) => {
    const items = visibleCommandItems();
    commandItems.forEach((item) => item.classList.remove("is-active"));
    if (!items.length) {
      activeCommandIndex = -1;
      return;
    }
    activeCommandIndex = (index + items.length) % items.length;
    items[activeCommandIndex].classList.add("is-active");
    items[activeCommandIndex].scrollIntoView({ block: "nearest" });
  };
  const filterCommands = () => {
    const query = commandInput?.value.trim().toLowerCase() || "";
    let count = 0;
    commandItems.forEach((item) => {
      const match = !query || item.dataset.commandSearch.toLowerCase().includes(query);
      item.hidden = !match;
      if (match) count += 1;
    });
    if (commandEmpty) commandEmpty.hidden = count > 0;
    setActiveCommand(count ? 0 : -1);
  };
  const openCommands = () => {
    if (!dialog || typeof dialog.showModal !== "function") return;
    lastCommandOpener = document.activeElement?.closest?.("[data-command-open]") || null;
    dialog.showModal();
    if (commandInput) {
      commandInput.value = "";
      filterCommands();
      window.setTimeout(() => commandInput.focus(), 0);
    }
  };
  const closeCommands = () => {
    if (!dialog?.open) return;
    dialog.close();
    lastCommandOpener?.focus();
  };

  if (!dialog || typeof dialog.showModal !== "function") {
    commandOpeners.forEach((button) => button.setAttribute("hidden", ""));
  } else {
    commandOpeners.forEach((button) => button.addEventListener("click", openCommands));
    commandClose?.addEventListener("click", closeCommands);
    commandInput?.addEventListener("input", filterCommands);
    commandInput?.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveCommand(activeCommandIndex + 1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveCommand(activeCommandIndex - 1);
      } else if (event.key === "Enter") {
        const item = visibleCommandItems()[activeCommandIndex] || visibleCommandItems()[0];
        if (item) {
          event.preventDefault();
          window.location.assign(item.href);
        }
      }
    });
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeCommands();
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeCommands();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dialog.open) {
        event.preventDefault();
        closeCommands();
        return;
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        dialog.open ? closeCommands() : openCommands();
      }
    });
  }

  const searchInput = document.querySelector("[data-project-search]");
  const categorySelect = document.querySelector("[data-project-category]");
  const projectCards = [...document.querySelectorAll("[data-project-card]")];
  const projectCount = document.querySelector("[data-project-count]");
  const projectEmpty = document.querySelector("[data-project-empty]");
  const projectReset = document.querySelector("[data-project-reset]");

  const filterProjects = () => {
    if (!projectCards.length) return;
    const query = searchInput?.value.trim().toLowerCase() || "";
    const category = categorySelect?.value || "all";
    let count = 0;
    projectCards.forEach((card) => {
      const searchMatch = !query || card.dataset.search.includes(query);
      const categoryMatch = category === "all" || card.dataset.categories.split("|").includes(category);
      const visible = searchMatch && categoryMatch;
      card.hidden = !visible;
      if (visible) count += 1;
    });
    if (projectCount) projectCount.textContent = String(count);
    if (projectEmpty) projectEmpty.hidden = count !== 0;
  };

  searchInput?.addEventListener("input", filterProjects);
  categorySelect?.addEventListener("change", filterProjects);
  projectReset?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (categorySelect) categorySelect.value = "all";
    filterProjects();
    searchInput?.focus();
  });

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm && window.fetch) {
    const submitButton = contactForm.querySelector("[data-contact-submit]");
    const status = contactForm.querySelector("[data-contact-status]");
    const originalButton = submitButton?.innerHTML || "Send message";
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending…";
      }
      if (status) {
        status.textContent = "Sending your message…";
        status.dataset.state = "pending";
      }
      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: { Accept: "application/json" }
        });
        if (!response.ok) throw new Error(`Form service returned ${response.status}`);
        contactForm.reset();
        if (status) {
          status.textContent = "Message sent. Thank you for reaching out.";
          status.dataset.state = "success";
        }
      } catch {
        if (status) {
          status.textContent = "The message could not be sent. Please email me directly instead.";
          status.dataset.state = "error";
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = originalButton;
        }
      }
    });
  }

  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (revealItems.length && "IntersectionObserver" in window && !reducedMotion) {
    root.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();
