/*
  THIS IS WHERE YOU EDIT YOUR CONTENT.
  It is the only file you need to touch to maintain the page.
  Drop screenshots into the matching assets/img/tileX/ folder and list their
  filenames under "images" below (array order = playback order).
*/

window.PORTFOLIO_DATA = {
  profile: {
    name: "Björn Boldt",
    role: "Junior Cloud & Platform Operations",
    roleSecondary: "Linux-first · Containers · Automation · Performance",
    status: "Open to Junior Opportunities",
    avatar: "assets/avatar.jpg",
    github: "https://github.com/Relis-lol",
    linkedin: "https://www.linkedin.com/in/björn-boldt",
    location: "Nuremberg, Germany",
    cv: "", // Path to a PDF, e.g. "assets/cv.pdf" — leave empty to hide the button
    certifications: [
      "Microsoft Certified: Azure Fundamentals (AZ-900)"
    ]
  },

  hero: {
    heading: "I build and operate real-world Linux and cloud systems.",
    text: "A career changer into IT, working from hands-on experience with production systems I run myself: Linux, Docker, Python, PostgreSQL and Azure fundamentals. I'm looking for an entry-level role in cloud, platform or infrastructure operations, with a focus on automation, stability and performance.",
    stats: [
      { value: "Junior", label: "Career changer into IT" },
      { value: "Linux-first", label: "Operations & automation" },
      { value: "AZ-900", label: "Azure Fundamentals" }
    ],
    skills: [
      "Linux", "Azure Fundamentals", "Docker", "Python", "PostgreSQL", "Monitoring"
    ]
  },

  // Tiles are laid out three per row, and one row = one project. Every third
  // entry starts a new row and gets the vertical label on the left ("Project 1",
  // "Project 2", ...), so adding another group of three below is enough to grow
  // the grid — no change to script.js or style.css required. Optionally set
  // rowLabels: ["EVE Platform", "DispoHub", ...] to name the rows yourself.
  //
  // Row 1 = EVE Market Tools (metrics, gallery, links).
  // Row 2 = DispoHub (keywords, gallery, links).
  // Row 3 = reserved for the next project.
  // "imageFolder" is bound to the physical assets/img/ directory and stays
  // stable when tiles are reordered.
  tiles: [
    {
      // Tile 1 (top left): animated mini-presentation of real key figures from
      // the EVE Market Tools platform. Values come from platformMetrics below.
      type: "metrics",
      cardTitle: "EVE Platform · Live Metrics",
      cardCategory: "Production Data Platform",
      ariaLabel: "Key metrics of the production EVE Market Tools platform"
    },
    {
      // Tile 2 (top centre): screenshot presentation of EVE Market Tools.
      // Images live in assets/img/tile5/.
      type: "gallery",
      cardTitle: "EVE Market Tools",
      cardCategory: "Self-hosted Data & Intelligence Platform",
      imageFolder: "tile5",
      images: [
        { src: "Kachel 2 Desktop 1.png", alt: "EVE Market Tools – view 1" },
        { src: "Kachel 2 Desktop 2.png", alt: "EVE Market Tools – view 2" },
        { src: "Kachel 2 Desktop 3.png", alt: "EVE Market Tools – view 3" },
        { src: "Kachel 2 Desktop 4.png", alt: "EVE Market Tools – view 4" },
        { src: "Kachel 2 Desktop 5.png", alt: "EVE Market Tools – view 5" },
        { src: "Kachel 2 Desktop 6.png", alt: "EVE Market Tools – view 6" }
      ]
    },
    {
      // Tile 3 (top right): direct project access, no images.
      type: "links",
      cardTitle: "View the project",
      cardCategory: "Code, documentation and live system",
      links: [
        {
          type: "live",
          title: "Live Platform",
          description: "Open EVE Market Tools",
          label: "Live Production System",
          url: "https://eve-tradelooper.com/",
          ariaLabel: "Open the EVE Market Tools live platform in a new tab"
        },
        {
          type: "github",
          title: "GitHub Repository",
          description: "Architecture and technical documentation",
          label: "Source & Documentation",
          url: "https://github.com/Relis-lol/homelab-hybrid-cloud-platform",
          ariaLabel: "Open the homelab project's GitHub repository in a new tab"
        }
      ]
    },
    {
      // Tile 4 (row 2, left): the stack at a glance. Static on purpose — this
      // is the tile a recruiter scans for technology names.
      type: "keywords",
      cardTitle: "DispoHub · Stack",
      cardCategory: "Dispatch & Fleet Management Platform",
      ariaLabel: "Technologies used in the DispoHub project",
      // Shown on the small tile face — keep this to roughly a dozen entries so
      // nothing gets clipped. The full grouped list below appears in the modal.
      highlights: [
        "Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "Jinja2",
        "WebSockets", "pytest", "Alembic", "PWA", "RBAC", "i18n"
      ],
      groups: [
        { label: "Backend", items: ["Python", "FastAPI", "SQLAlchemy", "Alembic"] },
        { label: "Database", items: ["PostgreSQL", "SQLite", "Migrations"] },
        { label: "Frontend", items: ["Jinja2", "JavaScript", "WebSockets", "PWA"] },
        { label: "Ops & quality", items: ["Docker", "pytest", "RBAC", "i18n"] }
      ]
    },
    {
      // Tile 5 (row 2, centre): screenshots. Images live in assets/img/tile1/.
      type: "gallery",
      cardTitle: "DispoHub",
      cardCategory: "Self-hosted Dispatch System for Small Fleets",
      imageFolder: "tile1",
      images: [
        { src: "01-dashboard.png", alt: "DispoHub – management dashboard" },
        { src: "02-vehicles.png", alt: "DispoHub – vehicle records" },
        { src: "03-calendar.png", alt: "DispoHub – month calendar grid" },
        { src: "04-tasks.png", alt: "DispoHub – office task list" },
        { src: "05-forms.png", alt: "DispoHub – printable forms" }
      ]
    },
    {
      // Tile 6 (row 2, right): direct project access, no images.
      type: "links",
      cardTitle: "View the project",
      cardCategory: "Source code and technical documentation",
      links: [
        {
          type: "github",
          title: "GitHub Repository",
          description: "Open source, MIT licensed",
          label: "Source",
          url: "https://github.com/Relis-lol/dispohub",
          ariaLabel: "Open the DispoHub GitHub repository in a new tab"
        },
        {
          type: "docs",
          title: "Architecture",
          description: "Design decisions and trade-offs",
          label: "Documentation",
          url: "https://github.com/Relis-lol/fleethubdoc",
          ariaLabel: "Open the DispoHub architecture documentation in a new tab"
        }
      ]
    },

    // ---- Row 3: reserved for the next project ----------------------------
    // Easiest path is to copy row 2: turn the first tile into "keywords" with
    // your stack, the second into "gallery" with screenshots from
    // assets/img/tile8/, and the third into "links" pointing at the repo and
    // its documentation. Until then each renders a neutral "Coming Soon"
    // placeholder — title and keywords stay hidden while a tile has no images.
    {
      type: "showcase",
      title: "Next project",
      keywords: [],
      link: "",
      imageFolder: "tile7",
      images: []
    },
    {
      type: "showcase",
      title: "Next project",
      keywords: [],
      link: "",
      imageFolder: "tile8",
      images: []
    },
    {
      type: "showcase",
      title: "Next project",
      keywords: [],
      link: "",
      imageFolder: "tile9",
      images: []
    }
  ],

  // Slides for the metrics tile. Real measurements / daily averages from the
  // self-operated platform — not SLAs.
  platformMetrics: [
    {
      category: "DATA THROUGHPUT",
      value: "≈ 7.5M",
      label: "new database rows per day",
      detail: "measured daily average"
    },
    {
      category: "DATABASE SCALE",
      value: "124.3M",
      label: "live rows in PostgreSQL",
      detail: "70 GB · 81 tables"
    },
    {
      category: "AUTOMATION",
      value: "≈ 9,650",
      label: "orchestrated import runs per day",
      detail: "14 automated pipelines"
    },
    {
      category: "API INTEGRATION",
      value: "7 sources",
      label: "around 30 integrated API endpoints",
      detail: "incremental · rate-limit compliant"
    },
    {
      category: "MONITORING & RECOVERY",
      value: "5 min",
      label: "monitoring and alerting cycle",
      detail: "automatic backup fallback"
    },
    {
      category: "PERFORMANCE",
      value: "≈ 80 ms",
      label: "homepage load time over HTTPS",
      detail: "≈ 1 ms internal health check, warm"
    }
  ],

  // Decorative background layer ("Linux script spotlight reveal"). Curated,
  // harmless sample lines only — no real hosts, tokens or credentials. Tiled
  // and rotated to fill a large text area, see attachCodeReveal() in script.js.
  backgroundCodeLines: [
    "systemctl status api.service",
    "systemctl restart worker.service",
    "journalctl -u api.service --since \"30 minutes ago\"",
    "journalctl -p warning",
    "uptime",
    "free -h",
    "df -h",
    "ss -tulpn",
    "ps aux --sort=-%cpu",
    "docker compose ps",
    "docker compose logs --tail=100 api",
    "docker compose up -d",
    "docker inspect --format='{{.State.Health.Status}}'",
    "docker system df",
    "set -euo pipefail",
    "flock -n /tmp/worker.lock",
    "find /var/backups -type f -mtime +14 -delete",
    "rsync -a --delete source/ destination/",
    "curl --fail --silent http://localhost/health",
    "# it's you vs you",
    "SELECT COUNT(*) FROM market_snapshots;",
    "SELECT pg_size_pretty(pg_database_size(current_database()));",
    "VACUUM ANALYZE;",
    "CREATE INDEX CONCURRENTLY;",
    "INSERT INTO snapshots (...) VALUES (...)",
    "ON CONFLICT (...) DO UPDATE SET ...;",
    "check_api_health",
    "check_disk_usage",
    "check_backup_target",
    "send_alert",
    "response_time_ms",
    "container_status=healthy",
    "backup_status=verified",
    "proxy_pass http://api:8000;",
    "proxy_set_header Host $host;",
    "limit_req zone=api burst=20 nodelay;",
    "add_header X-Content-Type-Options nosniff;",
    "[OK] api health check passed",
    "[OK] database connection healthy",
    "[INFO] snapshot import completed",
    "[INFO] backup verification successful",
    "[WARN] retry scheduled"
  ]
};
