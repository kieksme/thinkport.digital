## kieks.me - Thinkport PoC

1. **Inhalte**
	- [ ] Verzeichnisbaum bildet die Hierachie der Webseite ab
	- [ ] Eingabe als Markdown
	- [ ] Beim Kopieren von Inhalten bleiben Formatierungen wie Überschriften und Aufzählungen erhalten
	- [ ] Verwendung von Templates
	- [ ] Inhaltsgenerierung mit AI
	- [ ] Pasten von Screenshots mit CMD+V
	- [ ] Es gibt eine Änderungshistorie der Inhalte (wer, was, wann)
2. **Zugriffsteuerung**
	- [ ] In Github über Pull Requests
	- [ ] Die Datei CONTRIBUTER bestimmt, wer das Recht hat Pull Request zu mergen
3. **Hosting**
	- [ ] Über *Github Pages*, oder *Azure Static Web Apps* für statische Inhalte kostenlos
	- [ ] Performance: Responsetime < 120ms
	- [ ] Custom Domain bei GitHub kostenlos.
4. **Deployment**
	- [ ] Änderungen im Inhalt werden über git commits markiert und mit `git push`auf den Server übertragen.
	- [ ] Eine Github Action kümmert sich um das Ausrollen der Anwendung. (etwa 2 Minuten)
	- [ ] Rollback durch git möglich, indem man den pointer im main Branch an eine bestimmte setzt.



## Status Quo

### Designsystem

https://www.figma.com/design/y6kGDz0GNh5EBsSwN49hqz/Thinkport-Web?node-id=0-1&t=pJ3bUBTwKV1USkBx-1

- **22 Inhaltselemente**
	- Heros
	- Spalten
	- CTAs
	- Formulare
	- Slider
	- Cards
	- Personen-Teaser

#### Neue Elemente erstellen, oder nachbauen
- Styling: [Tailwind UI Kit](https://tailwindui.com/components/preview)
- Dauer durchschnittlich 5h pro Element


## WordPres vs AstroJS

### ✅ Vorteile von Astro gegenüber WordPress

##### 1️⃣ Performance

- Astro generiert statische Seiten (SSG), die extrem schnell laden, da kein Server-seitiges Rendering oder eine Datenbankabfrage notwendig ist.
- WordPress benötigt PHP und MySQL, was Ladezeiten und Serverlast erhöhen kann.

##### 2️⃣ Flexibilität & Moderne Entwicklung

- Astro erlaubt es, verschiedene Frontend-Frameworks (React, Vue, Svelte, usw.) innerhalb eines Projekts zu nutzen.
- WordPress ist in PHP geschrieben und zwingt Entwickler in ein festes Ökosystem mit Themes und Plugins.
##### 3️⃣ Geringere Wartung & Sicherheitsrisiken

- Da Astro statische Seiten ausliefert, gibt es keine Angriffsfläche für SQL-Injections oder Plugin-Sicherheitslücken.
- WordPress erfordert regelmäßige Updates von Plugins, Themes und der Core-Software, um Sicherheitsrisiken zu minimieren.

##### 4️⃣ Geringe Hosting-Kosten

- Astro-Websites können auf einfachen Static-Hosting-Plattformen wie Vercel, Netlify oder GitHub Pages laufen.
- WordPress braucht einen Server mit PHP und einer Datenbank, was mehr Ressourcen benötigt.

##### 5️⃣ Bessere Entwicklererfahrung

- Astro nutzt moderne JavaScript-Technologien und erlaubt eine saubere Code-Struktur.
- WordPress hat oft mit Legacy-Code und einer nicht immer entwicklerfreundlichen Umgebung zu kämpfen.

### ❌ Nachteile von Astro gegenüber WordPress
  
##### 1️⃣ Kein integriertes CMS

- WordPress bietet ein vollwertiges Backend mit WYSIWYG-Editor für Content-Management.
- Astro benötigt ein Headless CMS (z. B. Strapi, Sanity, Contentful) oder Markdown-Dateien für Inhalte.

##### 2️⃣ Keine Out-of-the-Box Plugins

- WordPress hat Tausende von Plugins für SEO, E-Commerce, Formulare usw.
- In Astro muss vieles individuell entwickelt oder mit externen APIs gelöst werden.

##### 3️⃣ Nicht ideal für dynamische Inhalte

- WordPress kann durch PHP und Plugins dynamische Inhalte einfach verwalten.
- Astro ist primär für statische Websites gedacht – dynamische Funktionen müssen über JavaScript oder Serverless-APIs eingebunden werden.

##### 4️⃣ Höhere Einstiegshürde für Nicht-Entwickler

- WordPress kann ohne Programmierkenntnisse genutzt werden.
- Astro richtet sich eher an Entwickler, da Konfigurationen über Code erfolgen.

### Fazit: Wann welches System?

| **Use Case**                                    | **Besser geeignet**             |
| ----------------------------------------------- | ------------------------------- |
| Einfache, schnelle Website (Landing Page, Blog) | **Astro**                       |
| Unternehmenswebsite mit CMS für Redakteure      | **WordPress**                   |
| Hohe Performance & modernes Web-Development     | **Astro**                       |
| E-Commerce (Shop)                               | **WordPress (mit WooCommerce)** |
| Entwicklerfreundliche, modulare Architektur     | **Astro**                       |
| Kein Entwicklerteam, einfach bedienbar          | **WordPress**                   |

Wenn du eine wartungsarme, schnelle und moderne Website willst, ist **Astro** ideal. Falls du jedoch viele Redakteure hast oder ohne Entwickler arbeiten möchtest, bleibt **WordPress** die bessere Wahl.

---

### Derzeitige Probleme

- Datenschutz
	- Cookies werden vor Zustimmung gesetzt
- Performance
	- Redundanter Code (JavaScript)
	- [LightHouse Report](https://www.webpagetest.org/result/250210_AiDcB3_4XT/)
	- [PageSpeedReport ](https://pagespeed.web.dev/analysis/https-thinkport-digital/fiu34w7d1f?form_factor=mobile)
		- First Contentful Paint **9.4 s**
		- Largest Contentful Paint **22.3 s**
- Sicherheitslücken
	- Viele Plugins bieten mehr Angriffsfläche
	- Veraltete Plugins haben ggf. Sicherheitslücken
- Kosten
	- PHP Updates
	- PHP serverseitige Scriptsprache
- Datensicherheit
	- Backups werden erstellt, aber das einspielen in kompliziert
- KnowHow
	- Es fehlt an bezahlbaren KnowHow für PHP und Wordpress


---

## PoC Demo

- Frontend http://thinkport.netlify.app/
- "Backend"
- Deployment Netlify https://app.netlify.com/sites/thinkport/deploys[]()