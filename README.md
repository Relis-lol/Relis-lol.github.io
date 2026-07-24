# Portfolio

Statische Portfolio-Seite, kein Build-Schritt nötig — `index.html` direkt im Browser öffnen oder per einfachem Server hosten.

## Inhalte pflegen

Alles Inhaltliche steht in **`content.js`**:

- `profile` — Name, Rolle, Foto, GitHub/LinkedIn-Link, Standort, Zertifikate
- `hero` — Überschrift, Beschreibungstext, Kennzahlen, Technologie-Tags
- `tiles` — genau 6 Kacheln (3×2-Grid). Jede Kachel hat ein `type`-Feld:
  - `"showcase"` (Kachel 1–3, obere Reihe) — normale Screenshot-Kachel, Titel/Stichwörter/Bilder
  - `"metrics"` (Kachel 4, unten links) — animierte Kennzahlen-Präsentation, Werte in `platformMetrics`
  - `"gallery"` (Kachel 5, unten mitte) — Screenshot-Diashow mit festem Titel, Bilder direkt in der Kachel
  - `"links"` (Kachel 6, unten rechts) — zwei direkte Projektlinks, Konfiguration in `tile.links`
- `platformMetrics` — die 6 Slides der Kennzahlen-Kachel

## Screenshots hinzufügen (showcase- und gallery-Kacheln)

1. Bilder in `assets/img/tile1`, `tile2`, `tile3` (obere Reihe) bzw. `assets/img/tile5` (EVE-Market-Tools-Kachel) ablegen
2. In `content.js` bei der jeweiligen Kachel unter `images` die Dateinamen in Abspielreihenfolge eintragen, z. B.:

```js
images: ["01-overview.png", "02-detail.png", "03-mobile.png"]
```

Beim Hovern/Fokussieren einer Kachel läuft die Bilderserie automatisch als Diashow (Fade zwischen den Bildern) durch. Bei den `showcase`-Kacheln öffnet ein Klick zusätzlich die Kachel groß im Lightbox-Modal. Auf Touch-Geräten starten `metrics`- und `gallery`-Kachel automatisch, sobald sie im Viewport sichtbar sind (Antippen pausiert/fortsetzt).

`showcase`-Kacheln ohne Bilder zeigen automatisch einen Platzhalter — die Seite bricht also nie, auch wenn noch nicht alle Kacheln befüllt sind.

## Eigenes Foto

Datei z. B. als `assets/avatar.jpg` ablegen und in `content.js` unter `profile.avatar` eintragen.

## Design

Dunkles Theme angelehnt an die GitHub-Farbpalette, mit automatischem Light-Mode je nach Systemeinstellung. Farben/Radien/Timing lassen sich zentral in `style.css` unter `:root` anpassen.
