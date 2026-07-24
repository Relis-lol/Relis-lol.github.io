/*
  HIER TRÄGST DU DEINE INHALTE EIN.
  Diese Datei ist die einzige, die du zum Pflegen der Seite bearbeiten musst.
  Screenshots einfach in die passenden Ordner unter assets/img/tileX/ legen
  und hier unter "images" mit ihrem Dateinamen eintragen (Reihenfolge = Abspielreihenfolge).
*/

window.PORTFOLIO_DATA = {
  profile: {
    name: "Björn Boldt",
    role: "Junior Cloud & Platform Operations",
    roleSecondary: "Linux-first · Container · Automatisierung · Performance",
    status: "Open to Junior Opportunities",
    avatar: "assets/avatar.jpg",
    github: "https://github.com/Relis-lol",
    linkedin: "https://www.linkedin.com/in/björn-boldt",
    location: "Nürnberg, Deutschland",
    cv: "", // Pfad zu einer PDF, z.B. "assets/cv.pdf" — leer lassen zum Ausblenden
    certifications: [
      "Microsoft Certified: Azure Fundamentals (AZ-900)"
    ]
  },

  hero: {
    heading: "Ich entwickle und betreibe praxisnahe Linux- und Cloud-Systeme.",
    text: "Als IT-Quereinsteiger verbinde ich praktische Erfahrung aus eigenen Produktivsystemen mit Linux, Docker, Python, PostgreSQL und Azure-Grundlagen. Ich suche den beruflichen Einstieg in Cloud-, Platform- oder Infrastructure Operations mit Fokus auf Automatisierung, Stabilität und Performance.",
    stats: [
      { value: "Junior", label: "IT-Quereinstieg" },
      { value: "Linux-first", label: "Operations & Automatisierung" },
      { value: "AZ-900", label: "Azure Fundamentals" }
    ],
    skills: [
      "Linux", "Azure Fundamentals", "Docker", "Python", "PostgreSQL", "Monitoring"
    ]
  },

  // Genau 6 Kacheln, 3 Spalten x 2 Reihen. Reihe 1 = "Project 1" (die
  // EVE-Market-Tools-Präsentation: metrics, gallery, links), Reihe 2 =
  // "Project 2" (gewöhnliche Screenshot-Slots "type: showcase", warten noch
  // auf Inhalt). "imageFolder" ist fest an den physischen assets/img/-Ordner
  // gebunden und bleibt beim Umsortieren der Kacheln stabil.
  tiles: [
    {
      // Kachel 1 (links oben): animierte Mini-Präsentation realer Kennzahlen
      // der EVE-Market-Tools-Plattform. Werte kommen aus platformMetrics unten.
      type: "metrics",
      cardTitle: "EVE Platform · Live Metrics",
      cardCategory: "Production Data Platform",
      ariaLabel: "Kennzahlen der produktiven EVE-Market-Tools-Plattform"
    },
    {
      // Kachel 2 (mitte oben): Screenshot-Präsentation der EVE Market Tools.
      // Bilder liegen in assets/img/tile5/.
      type: "gallery",
      cardTitle: "EVE Market Tools",
      cardCategory: "Self-hosted Data & Intelligence Platform",
      imageFolder: "tile5",
      images: [
        { src: "Kachel 2 Desktop 1.png", alt: "EVE Market Tools – Ansicht 1" },
        { src: "Kachel 2 Desktop 2.png", alt: "EVE Market Tools – Ansicht 2" },
        { src: "Kachel 2 Desktop 3.png", alt: "EVE Market Tools – Ansicht 3" },
        { src: "Kachel 2 Desktop 4.png", alt: "EVE Market Tools – Ansicht 4" },
        { src: "Kachel 2 Desktop 5.png", alt: "EVE Market Tools – Ansicht 5" },
        { src: "Kachel 2 Desktop 6.png", alt: "EVE Market Tools – Ansicht 6" }
      ]
    },
    {
      // Kachel 3 (rechts oben): direkter Projektzugang, keine Bilder.
      type: "links",
      cardTitle: "Projekt ansehen",
      cardCategory: "Code, Dokumentation und Live-System",
      links: [
        {
          type: "live",
          title: "Live Platform",
          description: "EVE Market Tools öffnen",
          label: "Live Production System",
          url: "https://eve-tradelooper.com/",
          ariaLabel: "EVE Market Tools Live-Plattform in neuem Tab öffnen"
        },
        {
          type: "github",
          title: "GitHub Repository",
          description: "Architektur und technische Dokumentation",
          label: "Source & Documentation",
          url: "https://github.com/Relis-lol/homelab-hybrid-cloud-platform",
          ariaLabel: "GitHub-Repository des Homelab-Projekts in neuem Tab öffnen"
        }
      ]
    },
    {
      type: "showcase",
      title: "Projekt 1",
      keywords: ["React", "TypeScript", "Stripe"],
      link: "",
      imageFolder: "tile1",
      images: []
    },
    {
      type: "showcase",
      title: "Projekt 2",
      keywords: ["Node.js", "PostgreSQL", "Docker"],
      link: "",
      imageFolder: "tile2",
      images: []
    },
    {
      type: "showcase",
      title: "Projekt 3",
      keywords: ["Next.js", "Tailwind"],
      link: "",
      imageFolder: "tile3",
      images: []
    }
  ],

  // Slides für die Kennzahlen-Kachel (Kachel 4). Reale Messwerte /
  // Tagesdurchschnitte der selbst betriebenen Plattform, keine SLAs.
  platformMetrics: [
    {
      category: "DATA THROUGHPUT",
      value: "≈ 7,5 Mio.",
      label: "neue DB-Zeilen pro Tag",
      detail: "real gemessener Tagesdurchschnitt"
    },
    {
      category: "DATABASE SCALE",
      value: "124,3 Mio.",
      label: "Live-Zeilen in PostgreSQL",
      detail: "70 GB · 81 Tabellen"
    },
    {
      category: "AUTOMATION",
      value: "≈ 9.650",
      label: "orchestrierte Import-Läufe pro Tag",
      detail: "14 automatisierte Pipelines"
    },
    {
      category: "API INTEGRATION",
      value: "7 Quellen",
      label: "rund 30 integrierte API-Endpunkte",
      detail: "inkrementell · rate-limit-konform"
    },
    {
      category: "MONITORING & RECOVERY",
      value: "5 Min.",
      label: "Monitoring- und Alerting-Zyklus",
      detail: "automatischer Backup-Fallback"
    },
    {
      category: "PERFORMANCE",
      value: "≈ 80 ms",
      label: "Homepage-Ladezeit über HTTPS",
      detail: "≈ 1 ms interner Health-Check, warm"
    }
  ],

  // Dekorativer Hintergrund-Layer ("Linux Script Spotlight Reveal"). Rein
  // kuratierte, ungefährliche Beispielzeilen — keine echten Hosts, Tokens
  // oder Zugangsdaten. Wird gekachelt/rotiert, um eine große Textfläche zu
  // füllen, siehe attachCodeReveal() in script.js.
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
