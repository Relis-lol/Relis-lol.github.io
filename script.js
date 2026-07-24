(() => {
  const DATA = window.PORTFOLIO_DATA;
  const FRAME_DWELL_MS = 1800;
  const METRICS_DWELL_MS = 2400;
  const GALLERY_DWELL_MS = 2500;
  const MOBILE_DWELL_MS = 3000;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const ICONS = {
    github: `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>`,
    linkedin: `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>`,
    pin: `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0c3.314 0 6 2.657 6 6.03 0 4.144-5.25 9.393-5.472 9.611a.75.75 0 0 1-1.056 0C7.25 15.423 2 10.174 2 6.03 2 2.657 4.686 0 8 0Zm0 8.5A2.5 2.5 0 1 0 8 3.5a2.5 2.5 0 0 0 0 5Z"/></svg>`,
    badge: `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 0a3 3 0 0 1 2.598 1.5 3 3 0 0 1 3.903 3.903A3 3 0 0 1 16 8a3 3 0 0 1-1.499 2.598 3 3 0 0 1-3.903 3.903A3 3 0 0 1 8 16a3 3 0 0 1-2.598-1.5 3 3 0 0 1-3.903-3.903A3 3 0 0 1 0 8a3 3 0 0 1 1.499-2.598A3 3 0 0 1 5.402 1.5 3 3 0 0 1 8 0Zm2.03 5.72a.75.75 0 0 0-1.06-1.06L7 6.63 5.53 5.16a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z"/></svg>`,
    external: `<svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor"><path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V9a.75.75 0 0 0-1.5 0v3.5h-9v-9H7A.75.75 0 0 0 7 2z"/><path d="M9.5 2a.75.75 0 0 0 0 1.5h1.94L6.22 8.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6.5a.75.75 0 0 0 1.5 0V2z"/></svg>`
  };

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  // Screenshot folder for a tile. Prefers the explicit content.js field so
  // reordering tiles in the array never silently breaks image paths.
  function folderFor(tile, index) {
    return tile.imageFolder || `tile${index + 1}`;
  }

  function renderProfile() {
    const p = DATA.profile;
    const avatarEl = document.getElementById("avatar");
    const fallback = "data:image/svg+xml;utf8," + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="168" height="168"><rect width="100%" height="100%" fill="#1c2129"/><circle cx="84" cy="70" r="30" fill="#30363d"/><ellipse cx="84" cy="150" rx="52" ry="42" fill="#30363d"/></svg>`
    );
    avatarEl.src = p.avatar || fallback;
    avatarEl.onerror = () => { avatarEl.onerror = null; avatarEl.src = fallback; };
    avatarEl.alt = p.name || "";
    document.getElementById("profile-name").textContent = p.name || "";
    document.getElementById("profile-role").textContent = p.role || "";
    document.getElementById("profile-role-secondary").textContent = p.roleSecondary || "";
    document.getElementById("profile-status").textContent = p.status || "";

    const list = document.getElementById("contact-list");
    const items = [];
    if (p.github) items.push({ href: p.github, icon: ICONS.github, label: "GitHub", aria: "GitHub-Profil in neuem Tab öffnen" });
    if (p.linkedin) items.push({ href: p.linkedin, icon: ICONS.linkedin, label: "LinkedIn", aria: "LinkedIn-Profil in neuem Tab öffnen" });
    if (p.location) items.push({ href: null, icon: ICONS.pin, label: p.location });

    items.forEach(it => {
      const node = it.href ? el("a", "contact-item") : el("span", "contact-item");
      if (it.href) {
        node.href = it.href;
        node.target = "_blank";
        node.rel = "noopener noreferrer";
        if (it.aria) node.setAttribute("aria-label", it.aria);
      }
      node.innerHTML = `${it.icon}<span>${it.label}</span>`;
      list.appendChild(node);
    });

    if (p.cv) {
      const btn = document.getElementById("cv-btn");
      btn.href = p.cv;
      btn.style.display = "flex";
    }

    const certWrap = document.getElementById("cert-list");
    (p.certifications || []).forEach(c => {
      certWrap.appendChild(el("div", "cert-item", `${ICONS.badge}<span>${c}</span>`));
    });
  }

  function renderHero() {
    const h = DATA.hero;
    document.getElementById("hero-heading").textContent = h.heading || "";
    document.getElementById("hero-text").textContent = h.text || "";

    const statsWrap = document.getElementById("hero-stats");
    (h.stats || []).forEach(s => {
      const stat = el("div", "stat");
      stat.innerHTML = `<span class="stat__value">${s.value}</span><span class="stat__label">${s.label}</span>`;
      statsWrap.appendChild(stat);
    });

    const skillsWrap = document.getElementById("skills");
    (h.skills || []).forEach(s => {
      skillsWrap.appendChild(el("span", "skill-pill", s));
    });
  }

  // ---- slideshow engine, shared by showcase tiles, metrics tile and gallery tile ----
  function createSlideshow(frames, dwellMs, onTick) {
    let idx = 0;
    let timer = null;
    function show(i) {
      frames.forEach((f, fi) => f.classList.toggle("is-visible", fi === i));
      if (onTick) onTick(i);
    }
    function start() {
      if (timer) return; // never stack intervals
      if (frames.length < 2 || prefersReduced) { show(idx); return; }
      show(idx);
      timer = setInterval(() => {
        idx = (idx + 1) % frames.length;
        show(idx);
      }, dwellMs);
    }
    function stop() {
      clearInterval(timer);
      timer = null;
    }
    function goTo(i) {
      idx = i;
      show(idx);
    }
    function next() {
      goTo((idx + 1) % frames.length);
    }
    return { start, stop, goTo, next, get index() { return idx; } };
  }

  // Wires standard desktop hover/focus rotation behaviour onto a card.
  function attachHoverRotation(card, slideshow) {
    card.addEventListener("mouseenter", () => slideshow.start());
    card.addEventListener("mouseleave", () => { slideshow.stop(); slideshow.goTo(0); });
    card.addEventListener("focus", () => slideshow.start());
    card.addEventListener("blur", () => { slideshow.stop(); slideshow.goTo(0); });
  }

  // Wires viewport-driven rotation + tap-to-pause for touch devices.
  function attachTouchRotation(card, slideshow) {
    let inView = false;
    let paused = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        inView = entry.isIntersecting;
        if (inView && !paused) slideshow.start();
        else {
          slideshow.stop();
          if (!inView) slideshow.goTo(0);
        }
      });
    }, { threshold: 0.4 });
    io.observe(card);
    card.addEventListener("click", () => {
      if (!inView) return;
      paused = !paused;
      if (paused) slideshow.stop();
      else slideshow.start();
    });
    card.addEventListener("focus", () => slideshow.start());
    card.addEventListener("blur", () => { slideshow.stop(); slideshow.goTo(0); });
  }

  function attachRotation(card, slideshow) {
    if (isTouch) attachTouchRotation(card, slideshow);
    else attachHoverRotation(card, slideshow);
  }

  // Cursor-follow spotlight glow, shared by every tile type. Pure CSS custom
  // properties + one mousemove listener per card, no extra dependency.
  function attachSpotlight(card) {
    if (isTouch) return;
    const spot = el("div", "tile__spotlight");
    card.prepend(spot);
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
  }

  // ---- tile type: showcase (top row + default) ----
  function buildShowcaseTile(tile, index) {
    const card = el("div", "tile");
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", tile.title);

    attachSpotlight(card);

    const hasImages = Array.isArray(tile.images) && tile.images.length > 0;
    if (hasImages) card.classList.add("has-images");

    const framesWrap = el("div", "tile__frames");
    const frames = [];
    if (hasImages) {
      const folder = folderFor(tile, index);
      tile.images.forEach((src, i) => {
        const img = el("img", "tile__frame");
        img.src = `assets/img/${folder}/${src}`;
        img.alt = `${tile.title} Screenshot ${i + 1}`;
        img.loading = "lazy";
        framesWrap.appendChild(img);
        frames.push(img);
      });
    } else {
      const ph = el("div", "tile__placeholder", "Coming Soon");
      framesWrap.appendChild(ph);
    }
    card.appendChild(framesWrap);

    const scrim = el("div", "tile__scrim");
    card.appendChild(scrim);

    let slideshow;
    if (hasImages && frames.length > 1) {
      const progress = el("div", "tile__progress");
      frames.forEach(() => progress.appendChild(el("span")));
      card.appendChild(progress);

      function markProgress(activeIdx) {
        [...progress.children].forEach((seg, i) => {
          seg.classList.remove("is-active", "is-done");
          seg.style.setProperty("--dur", `${FRAME_DWELL_MS}ms`);
          if (i < activeIdx) seg.classList.add("is-done");
          if (i === activeIdx) seg.classList.add("is-active");
        });
      }
      slideshow = createSlideshow(frames, FRAME_DWELL_MS, markProgress);
    } else {
      slideshow = createSlideshow(frames, FRAME_DWELL_MS, null);
      if (frames.length === 1) frames[0].classList.add("is-visible");
    }

    // No content yet ("Coming Soon") -> don't clutter the placeholder with a
    // title/keywords nobody can act on. Both come back automatically once
    // real images are added in content.js.
    if (hasImages) {
      const title = el("div", "tile__title", tile.title);
      card.appendChild(title);

      if ((tile.keywords || []).length) {
        const kwWrap = el("div", "tile__keywords");
        tile.keywords.forEach(k => kwWrap.appendChild(el("span", "tile__kw", k)));
        card.appendChild(kwWrap);
      }
    }

    card.addEventListener("mouseenter", () => hasImages && slideshow.start());
    card.addEventListener("mouseleave", () => {
      if (!hasImages) return;
      slideshow.stop();
      slideshow.goTo(0);
    });
    card.addEventListener("focus", () => hasImages && slideshow.start());
    card.addEventListener("blur", () => {
      if (!hasImages) return;
      slideshow.stop();
      slideshow.goTo(0);
    });

    card.addEventListener("click", () => openShowcaseModal(tile, index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openShowcaseModal(tile, index);
      }
    });

    return card;
  }

  // Shared fixed footer (category + title), overlaid at the bottom of a tile.
  function buildFixedFooter(cardCategory, cardTitle) {
    const footer = el("div", "tile-fixed-footer");
    if (cardCategory) footer.appendChild(el("span", "tile-fixed-footer__category", cardCategory));
    footer.appendChild(el("span", "tile-fixed-footer__title", cardTitle));
    return footer;
  }

  // Same category + title pairing, but laid out inline at the top instead of
  // overlaid — used where the tile body can't share space with an overlay.
  function buildStaticHeader(cardCategory, cardTitle) {
    const header = el("div", "tile-header");
    if (cardCategory) header.appendChild(el("span", "tile-fixed-footer__category", cardCategory));
    header.appendChild(el("span", "tile-fixed-footer__title", cardTitle));
    return header;
  }

  function buildPresentationDots(count) {
    const dots = el("div", "presentation-dots");
    dots.setAttribute("aria-hidden", "true");
    for (let i = 0; i < count; i++) dots.appendChild(el("span"));
    return dots;
  }

  function markDots(dots, activeIdx) {
    [...dots.children].forEach((d, i) => d.classList.toggle("is-active", i === activeIdx));
  }

  // ---- tile type: metrics (bottom-left) ----
  function buildMetricsTile(tile) {
    const metrics = DATA.platformMetrics || [];
    const card = el("div", "tile tile--metrics");
    card.tabIndex = 0;
    card.setAttribute("role", "group");
    card.setAttribute("aria-label", tile.ariaLabel || "Kennzahlen der produktiven EVE-Market-Tools-Plattform");

    attachSpotlight(card);

    const stage = el("div", "metrics-stage");
    stage.setAttribute("aria-live", "off");
    const slides = metrics.map((m, i) => {
      const slide = el("div", "metrics-slide");
      slide.innerHTML = `
        <span class="metrics-slide__category">${m.category}</span>
        <span class="metrics-slide__value">${m.value}</span>
        <span class="metrics-slide__label">${m.label}</span>
        ${m.detail ? `<span class="metrics-slide__detail">${m.detail}</span>` : ""}
      `;
      if (i === 0) slide.classList.add("is-visible");
      stage.appendChild(slide);
      return slide;
    });
    card.appendChild(stage);

    const dots = buildPresentationDots(metrics.length);
    if (metrics.length) markDots(dots, 0);
    card.appendChild(dots);

    card.appendChild(buildFixedFooter(tile.cardCategory, tile.cardTitle));

    // Screen-reader-only full list, always available regardless of animation state.
    const srList = el("ul", "sr-only");
    metrics.forEach(m => {
      srList.appendChild(el("li", null, `${m.category}: ${m.value} — ${m.label}${m.detail ? ", " + m.detail : ""}`));
    });
    card.appendChild(srList);

    const slideshow = createSlideshow(slides, isTouch ? MOBILE_DWELL_MS : METRICS_DWELL_MS, (i) => markDots(dots, i));
    attachRotation(card, slideshow);

    const openBig = () => openMetricsModal(tile, metrics);
    if (!isTouch) card.addEventListener("click", openBig);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openBig();
      }
    });

    return card;
  }

  // ---- tile type: gallery (bottom-middle) ----
  function buildGalleryTile(tile, index) {
    const images = tile.images || [];
    const card = el("div", "tile tile--gallery");
    card.tabIndex = 0;
    card.setAttribute("role", "group");
    card.setAttribute("aria-label", `${tile.cardTitle} Screenshots`);

    attachSpotlight(card);

    const galleryFolder = folderFor(tile, index);
    const framesWrap = el("div", "gallery-frames");
    const frames = images.map((img, i) => {
      const frame = el("img", "gallery-frame");
      frame.src = `assets/img/${galleryFolder}/${img.src}`;
      frame.alt = img.alt || `${tile.cardTitle} Screenshot ${i + 1}`;
      frame.loading = "lazy";
      if (i === 0) frame.classList.add("is-visible");
      framesWrap.appendChild(frame);
      return frame;
    });
    card.appendChild(framesWrap);

    const scrim = el("div", "tile-fixed-scrim");
    card.appendChild(scrim);

    const dots = buildPresentationDots(images.length);
    if (images.length) markDots(dots, 0);
    card.appendChild(dots);

    card.appendChild(buildFixedFooter(tile.cardCategory, tile.cardTitle));

    const slideshow = createSlideshow(frames, isTouch ? MOBILE_DWELL_MS : GALLERY_DWELL_MS, (i) => markDots(dots, i));
    attachRotation(card, slideshow);

    const openBig = () => openGalleryModal(tile, images, index);
    if (!isTouch) card.addEventListener("click", openBig);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openBig();
      }
    });

    return card;
  }

  // ---- tile type: links (bottom-right) ----
  function buildLinksTile(tile) {
    const card = el("div", "tile tile--links");

    attachSpotlight(card);

    card.appendChild(buildStaticHeader(tile.cardCategory, tile.cardTitle));

    const list = el("div", "links-list");
    (tile.links || []).forEach(link => {
      const a = el("a", "project-link");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", link.ariaLabel || link.title);
      const icon = link.type === "github" ? ICONS.github : ICONS.external;
      const desc = link.label ? `${link.description} · ${link.label}` : link.description;
      a.innerHTML = `
        <span class="project-link__icon">${icon}</span>
        <span class="project-link__text">
          <span class="project-link__title">${link.title}</span>
          <span class="project-link__desc">${desc}</span>
        </span>
        <span class="project-link__arrow">${ICONS.external}</span>
      `;
      list.appendChild(a);
    });
    card.appendChild(list);

    return card;
  }

  function buildRowLabel(text) {
    const label = el("div", "row-label", text);
    label.setAttribute("aria-hidden", "true");
    return label;
  }

  function renderTiles() {
    const wrap = document.getElementById("tiles");
    DATA.tiles.slice(0, 6).forEach((tile, i) => {
      if (i === 0) wrap.appendChild(buildRowLabel("Project 1"));
      if (i === 3) wrap.appendChild(buildRowLabel("Project 2"));

      let node;
      switch (tile.type) {
        case "metrics":
          node = buildMetricsTile(tile, i);
          break;
        case "gallery":
          node = buildGalleryTile(tile, i);
          break;
        case "links":
          node = buildLinksTile(tile, i);
          break;
        default:
          node = buildShowcaseTile(tile, i);
      }
      wrap.appendChild(node);
    });
  }

  // ---- modal / lightbox, shared by all tile types ----
  let modalSlideshow = null;
  let modalAdvanceEnabled = false;

  function openModalShell(titleText, categoryText) {
    const modal = document.getElementById("modal");
    const stage = document.getElementById("modal-stage");
    const title = document.getElementById("modal-title");
    const keywords = document.getElementById("modal-keywords");
    const dots = document.getElementById("modal-dots");

    if (modalSlideshow) modalSlideshow.stop();
    modalAdvanceEnabled = false;
    stage.classList.remove("is-advanceable");
    stage.innerHTML = "";
    keywords.innerHTML = "";
    dots.innerHTML = "";
    stage.classList.remove("is-metrics");
    title.textContent = titleText;
    if (categoryText) keywords.appendChild(el("span", "tile__kw", categoryText));

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    return { stage, dots };
  }

  // Wires dot navigation + click-anywhere-on-stage-to-advance onto a set of
  // already-appended frame elements. Shared by every modal flavour below.
  // The stage's own click listener is attached exactly once, in initModal();
  // this only toggles the flag it checks, so repeated opens never stack listeners.
  function wireModalSlideshow(stage, dots, frames, dwellMs) {
    if (frames.length > 1) {
      frames.forEach((_, i) => {
        const dot = el("button");
        dot.addEventListener("click", (e) => {
          e.stopPropagation();
          modalSlideshow.stop();
          modalSlideshow.goTo(i);
          modalSlideshow.start();
        });
        dots.appendChild(dot);
      });
      modalSlideshow = createSlideshow(frames, dwellMs, (i) => {
        [...dots.children].forEach((d, di) => d.classList.toggle("is-active", di === i));
      });
      modalSlideshow.start();
      modalAdvanceEnabled = true;
      stage.classList.add("is-advanceable");
    } else if (frames.length === 1) {
      frames[0].classList.add("is-visible");
    }
  }

  function openShowcaseModal(tile, index) {
    const hasImages = Array.isArray(tile.images) && tile.images.length > 0;
    const { stage, dots } = openModalShell(hasImages ? tile.title : "", null);
    const keywords = document.getElementById("modal-keywords");
    if (hasImages) (tile.keywords || []).forEach(k => keywords.appendChild(el("span", "tile__kw", k)));

    const frames = [];
    if (hasImages) {
      const folder = folderFor(tile, index);
      tile.images.forEach((src, i) => {
        const img = el("img", "modal__frame");
        img.src = `assets/img/${folder}/${src}`;
        img.alt = `${tile.title} Screenshot ${i + 1}`;
        stage.appendChild(img);
        frames.push(img);
      });
    } else {
      stage.appendChild(el("div", "tile__placeholder", "Coming Soon"));
    }
    wireModalSlideshow(stage, dots, frames, FRAME_DWELL_MS);
  }

  function openGalleryModal(tile, images, index) {
    const { stage, dots } = openModalShell(tile.cardTitle, tile.cardCategory);
    const galleryFolder = folderFor(tile, index);
    const frames = images.map((img, i) => {
      const frame = el("img", "modal__frame");
      frame.src = `assets/img/${galleryFolder}/${img.src}`;
      frame.alt = img.alt || `${tile.cardTitle} Screenshot ${i + 1}`;
      stage.appendChild(frame);
      return frame;
    });
    wireModalSlideshow(stage, dots, frames, GALLERY_DWELL_MS);
  }

  function openMetricsModal(tile, metrics) {
    const { stage, dots } = openModalShell(tile.cardTitle, tile.cardCategory);
    stage.classList.add("is-metrics");
    const frames = metrics.map((m) => {
      const slide = el("div", "modal-metric-slide");
      slide.innerHTML = `
        <span class="metrics-slide__category">${m.category}</span>
        <span class="metrics-slide__value">${m.value}</span>
        <span class="metrics-slide__label">${m.label}</span>
        ${m.detail ? `<span class="metrics-slide__detail">${m.detail}</span>` : ""}
      `;
      stage.appendChild(slide);
      return slide;
    });
    wireModalSlideshow(stage, dots, frames, METRICS_DWELL_MS);
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (modalSlideshow) modalSlideshow.stop();
  }

  function initModal() {
    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("modal-backdrop").addEventListener("click", closeModal);
    document.getElementById("modal-stage").addEventListener("click", () => {
      if (!modalAdvanceEnabled || !modalSlideshow) return;
      modalSlideshow.stop();
      modalSlideshow.next();
      modalSlideshow.start();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  // ---- Linux Script Spotlight Reveal (decorative background layer) ----
  // Text is always color:transparent; it only becomes visible where a
  // background gradient shows through via background-clip:text — the same
  // "gradient text" trick, and the same building block (radial-gradient +
  // JS-updated position) as the working tile__spotlight glow, just clipped
  // to glyphs instead of painted over a card.
  function attachCodeReveal() {
    if (isTouch) return; // no pointer to track; CSS also hides the layer entirely

    const text = document.getElementById("bg-code-text");
    const lines = DATA.backgroundCodeLines || [];
    if (!text || !lines.length) return;

    // Build one large, varied text block once (a few rotated passes through
    // the curated lines so the same 40-ish snippets don't feel like a loop).
    const rotations = [0, 7, 13, 19, 5];
    text.textContent = rotations
      .map(offset => lines.map((_, i) => lines[(i + offset) % lines.length]).join("\n"))
      .join("\n");

    if (prefersReduced) {
      // Static, very faint, no tracking at all.
      text.style.background = "none";
      text.style.webkitBackgroundClip = "border-box";
      text.style.backgroundClip = "border-box";
      text.style.webkitTextFillColor = "var(--code-reveal-color)";
      text.style.color = "var(--code-reveal-color)";
      text.style.opacity = "var(--code-reveal-opacity)";
      text.classList.add("is-visible");
      return;
    }

    // Comet-tail reveal: each trail node fades out on its own, by age, not by
    // a fixed per-frame array shrink — so when the cursor stops it dissolves
    // smoothly over MAX_AGE_MS instead of snapping away over a couple of
    // frames. While moving, new nodes keep spawning (throttled by distance/
    // time) so the tail stretches out behind the cursor.
    const MAX_AGE_MS = 850;
    const SPAWN_INTERVAL_MS = 45;
    const START_RADIUS = 95;
    const END_RADIUS = 20;
    const BASE_ALPHA = 0.42;
    const REVEAL_RGB = "88, 166, 255"; // matches --accent (#58a6ff)

    let targetX = 0, targetY = 0, curX = 0, curY = 0;
    let lastTargetX = null, lastTargetY = null;
    let trail = []; // { x, y, born }
    let lastSpawn = 0;
    let rafId = null;
    let active = false;

    function paintTrail(now) {
      if (!trail.length) {
        text.style.backgroundImage = "none";
        return;
      }
      text.style.backgroundImage = trail.map((p) => {
        const age = (now - p.born) / MAX_AGE_MS; // 0 (just spawned) -> 1 (fully faded)
        const r = START_RADIUS + (END_RADIUS - START_RADIUS) * age;
        const a = BASE_ALPHA * Math.pow(1 - age, 1.6); // ease-out fade
        return `radial-gradient(circle ${r}px at ${p.x}px ${p.y}px, rgba(${REVEAL_RGB}, ${a}) 0%, rgba(${REVEAL_RGB}, ${a * 0.4}) 50%, transparent 78%)`;
      }).join(", ");
    }

    function render(now) {
      curX += (targetX - curX) * 0.22;
      curY += (targetY - curY) * 0.22;

      // Only spawn fresh nodes while the cursor is actually moving. Without
      // this check the trail restocks itself forever at a resting cursor and
      // never empties out — which is exactly the "never disappears" bug.
      const moved = lastTargetX === null || Math.hypot(targetX - lastTargetX, targetY - lastTargetY) > 0.4;
      lastTargetX = targetX;
      lastTargetY = targetY;

      if (moved && now - lastSpawn > SPAWN_INTERVAL_MS) {
        trail.push({ x: curX, y: curY, born: now });
        lastSpawn = now;
        if (trail.length > 40) trail.shift(); // safety cap for erratic fast movement
      }
      trail = trail.filter(p => now - p.born < MAX_AGE_MS);

      paintTrail(now);

      if (!trail.length || document.hidden) {
        rafId = null;
        if (!trail.length) text.classList.remove("is-visible");
        return;
      }
      rafId = requestAnimationFrame(render);
    }

    function ensureLoop() {
      if (rafId === null && !document.hidden) rafId = requestAnimationFrame(render);
    }

    document.addEventListener("pointermove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!active) {
        active = true;
        curX = targetX;
        curY = targetY;
      }
      text.classList.add("is-visible");
      ensureLoop();
    }, { passive: true });

    document.documentElement.addEventListener("mouseleave", () => {
      text.classList.remove("is-visible");
    });
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) ensureLoop();
    });
  }

  renderProfile();
  renderHero();
  renderTiles();
  initModal();
  attachCodeReveal();
})();
