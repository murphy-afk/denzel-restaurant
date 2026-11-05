# Denzel Restaurant Website Redesign Roadmap

## 1. Overview

- Client: Denzel, kosher gourmet street food restaurant in Milan.
- Source website: https://www.denzel.it/ (built on Wix).
- Goal: a simple, clean, modern website whose style matches the vibe of the restaurant, taken from the photos on the source site.
- This is a redesign project for a small business. Work proceeds in sessions (the phases of this project are called sessions).
- Stack: React (frontend), Express (backend), MySQL with MySQL Workbench, Prisma for migrations, custom CSS, optimized SEO.
- Constraints: no Prettier or other unnecessary tooling, code and comments in English, page content in Italian, commit rules in AGENTS.md.
- Deployment plan: temporary demo on GitHub Pages to show the client, then a production deploy elsewhere based on client preference.

## 2. Rules

All project rules live in AGENTS.md. Summary: no emdashes, no emojis, no lines that only contain ">" or "/>", never commit without asking permission, English code and comments, Italian page content, minimal commit messages around 12 words, sessions are called sessions, no Prettier.

## 3. Source content inventory (scraped from denzel.it)

### 3.1 Brand and vibe

- Logo (PNG): https://static.wixstatic.com/media/c6595a_0d9d7bb6473548d69681f09d18ff4247.png
- Concept: street food from around the world in gourmet version, meat certified kosher from small controlled farms.
- Tone of the site: informal, playful, confident. Example: the "Sfida 530g" burger challenge and a gallery full of celebrity visits.
- Burgers are served open so the guest sees exactly what they eat and can dose the sauce themselves.
- Visual style must be derived from the photos (logo, menu photos, gallery photos) during Session 1. The Wix site uses warm food photography with dark backgrounds.

### 3.2 Navigation (main menu)

HOME, CHI SIAMO, KOSHER, DICONO DI NOI, MENU', GALLERY, CONTACT.

### 3.3 Home page

Hero logo image. Four cards with image, title, one line description, "Read More" link:

- SFIDA 530g: "Il 530g ti aspetta! Porta a casa la maglietta!" links to /sfida530g.
- CONCEPT: "Sai quello che mangi e decidi come farlo!" links to /diconodinoi.
- KOSHER: "Che cosa vuol dire kosher? Scoprilo con noi!" links to /kosher.
- SERVIZI DENZEL: "Scopri i nostri servizi take away e delivery!" links to /contact.

Social and order icons in header area: contact, Just Eat, Deliveroo, Instagram, Facebook, Twitter.

### 3.4 Chi Siamo (Concept) page

Heading: CONCEPT

Text (Italian, keep as is):

"Denzel si propone di offrire ai propri clienti lo street food di diverse parti del mondo in versione gourmet. Esaltando il gusto di ogni piatto senza perderne però l'originalità e la tradizione. La nostra carne, come tutto il resto è certificata Kosher e proviene da piccoli allevamenti controllati, ne deriva un'alta qualità e pregio del prodotto e anche una garanzia di sicurezza data l'elevata attenzione nella selezione del prodotto dopo la macellazione. Tutto in un unico ristorante!"

Second text block:

"I nostri hamburger sono presentati aperti per permetterti di vedere esattamente cosa stai mangiare, per darti la possibilità di dosare la quantità di salsa e lasciar che sia tu a scegliere la modalità di degustazione!"

Photo of burgers on board (CDN: c6595a_e5d1bf05c94d40f288754cbd11f340ff.jpg).

### 3.5 Kosher page

Heading: KOSHER, subheading "Che cosa vuol dire Kosher?"

Text (Italian, keep as is):

"Letteralmente la parola Kasher o Kosher significa "Adatto", quindi conforme alle regole dell'alimentazione ebraica.

Queste regole sono stabilite nella Torah e determinano i criteri secondo i quali un alimento può essere consumato. La carne proveniente solo da ruminanti con lo zoccolo separato e alcune specie di volatili, per quanto riguarda i pesci devono avere le pinne e le squame.

Importante è anche la macellazione che si basa su un procedimento indolore chiamata Shechitah per mano di una persona esperta. Dopo la macellazione l'animale è sottoposto ad un controllo approfondito per verificare che i polmoni siano sani, cioè senza buchi o imperfezioni ed è così che la carne prende l'appellativo di Glatt che rappresenta un più alto livello di purezza e qualità.

Nel nostro ristorante non sono presenti latticini poichè l'abbinamento di questi con i piatti a base di carne è proibito.

"Non mangerai il vitello nel latte di sua madre"

Le materie prime, gli strumenti utilizzati e le nostre preparazioni sono costantemente controllate dal rabbino come garanzia dalla nostra certificazione"

FAQ section "FAQ - DOMANDE FREQUENTI" with 5 items (Italian, keep as is):

1. "Che cosa è lo Shabbat?" -> "Lo Shabbat è il giorno di riposo settimanale della religione ebraica. Ha inizio al tramonto del venerdì e finisce al tramonto del sabato, per questo motivo non siamo aperti il venerdì sera e durante l'ora legale anche il sabato sera."
2. "Che cosa è quella pergamena attaccata alla porta?" -> "Si chiama Mezuzah ed è appunto una pergamena su cui è stilata una preghiera fondamentale della religione ebraica. È usanza che chi entra in casa tocchi la mezuzah con le dita e baci le dita stesse, in segno di rispetto per la Torah di cui contiene passi."
3. "Sono intollerante al lattosio, posso stare tranquillo?" -> "Assolutamente si, nel nostro ristorante non possono essere introdotti latticini essendo basari (di carne) Glatt - Kosher. Non rinunciamo ai dolci però che sono fatti di latte di soia."
4. "Che cosa rappresenta il candelabro con 9 braccia?" -> "Si chiama Menorah ed è un candelabro con nove candele: otto di queste rappresentano le notti di Chanukah, l'ultima (la più alta) è chiamata Shamash o "serva" perché è usata per illuminare le altre candele. Nella prima notte di Chanukah viene accesa una candela che continuerà a bruciare per otto notti, fino a quando cioè tutte le candele saranno accese."
5. "Avete anche piatti vegetariani nel vostro menù?" -> "Si, ci sono i nostri croccanti felafel, insalate, involtini di melanzane e a breve anche l'hamburger vegetariano"

### 3.6 Dicono di noi page

Heading: "COSA DICONO DI NOI?" The current page is almost empty in the scrape (reviews likely load dynamically or exist as images). Session 1 must extract review content (text and images) from the live page HTML and any embedded widgets.

### 3.7 Menu page

Heading: "Menù Italiano". The menu is published as photos only, in 4 language galleries, 12 images per gallery (the carousel shows "1/12"). Image names follow the pattern denzel_menu_ita-01 .. denzel_menu_ita-12, denzel_menu_eng-01 .. 12, denzel_menu_ebr-01 .. 12, denzel_menu_fra-01 .. 12.

Known image URLs (Wix CDN, full size available by removing the /v1/fill/... transform):

- Italian 01: https://static.wixstatic.com/media/c6595a_19415b18c8914fbcabc586fe09a6516c~mv2.jpg
- Italian 02: https://static.wixstatic.com/media/c6595a_cecf78c4e453475d9217c79b614cf747~mv2.jpg
- Italian 12: https://static.wixstatic.com/media/c6595a_60c7179324cd4e8f9c2580497244fb9d~mv2.jpg
- English 01: https://static.wixstatic.com/media/c6595a_e18f8b88459647a7ad4736d672000a2c~mv2.png
- English 02: https://static.wixstatic.com/media/c6595a_d77399cb67004514bf57a6c62806200f~mv2.png
- English 12: https://static.wixstatic.com/media/c6595a_53607f32458e4b0aafc05f60db68b2ee~mv2.png
- Hebrew 01: https://static.wixstatic.com/media/c6595a_62f9aab82d154b9c85da1d39bf4f883d~mv2.png
- Hebrew 02: https://static.wixstatic.com/media/c6595a_6c4d14074d6746819eb168f903e55821~mv2.png
- Hebrew 12: https://static.wixstatic.com/media/c6595a_1adc4d164c5d4949a976ba8cb0a56f2f~mv2.png
- French 01: https://static.wixstatic.com/media/c6595a_f1df9c24de8b460991a780842c126739~mv2.png
- French 02: https://static.wixstatic.com/media/c6595a_00546b6f2b2645c2ad6ee88e851dd895~mv2.png
- French 12: https://static.wixstatic.com/media/c6595a_7766e9ec4cd245869072860f015bb5ad~mv2.png

The remaining 9 images per gallery must be extracted from the live page HTML/JS during Session 1. Menu photos must be downloaded, read, and transcribed into structured data (categories, items, prices) because the menu text does not exist anywhere as text.

### 3.8 Gallery page

Heading: "DENZEL GALLERY". Photos with captions (lightbox "press to zoom", "Show More" button):

DENZEL WINGS, DENZEL BURGER 330g, FISH AND CHIPS, DENZEL FRIENDS, LOCATION, GOLDSTAR & MACCABEE, MACCIO CAPATONDA, WORK IN PROGRESS, ALBERTO BRANDI, BENVENUTI, MISS ISRAELE 2013, FELAFEL, HAPPY BIRTHDAY, PIMENTO BURGER, FEDERICO BASSO DA ZELIG, plus more hidden behind "Show More". Full image list must be extracted in Session 1.

### 3.9 Contact page

Heading: "SERVIZI". Three services:

- PRENOTAZIONE: "Invia una mail o chiama e ti riserveremo subito un tavolo"
- TAKE AWAY: "Chiama oppure ordina direttamente qui da noi i nostri piatti da gustare a casa"
- DELIVERY: "Denzel direttamente a casa tua grazie a Just Eat, Deliveroo, oppure tramite whatsapp al numero 3398246521"

Restaurant details:

- DENZEL, via Washington 9, 20146 Milano (MI)
- Email: ristorantedenzel@yahoo.it
- TEL: 02 485 19326, CELL: 327 738 1017

Opening hours:

- Dom - Gio: pranzo 12.00 - 14.30, cena 19.00 - 23.00
- Ven: pranzo 12.00 - 14.30 (closed Friday evening for Shabbat)
- Sab sera: 19.00 - 23.00, only in winter season

There is a contact form ("Inviare" button, success message "I tuoi dati sono stati inviati con successo!") and a map section.

### 3.10 Sfida 530g page

Heading: "SFIDA 530g". Text (Italian, keep as is):

"Pensi di essere un vero mangiatore di Hamburger? Poldo ti fa un baffo?

Allora ti lanciamo la sfida DENZEL 530!

Ordina e mangia un intero Denzel Burger da 530g e come simbolo della tua vittoria ti verrà donata la nostra T-shirt da vero DENZEL-addicted!"

Photo of the challenge burger (CDN: c6595a_ff377649f12f428486c2f559f99eb2b4.jpg).

### 3.11 Global footer

- Copyright 2011 Denzel
- Via Washington 9, Milano
- Tel. 02 485 19326, Cell. 327 738 1017
- P.IVA n. 12563170153, REA Mi 1569017
- Links: Just Eat (https://www.justeat.it/restaurants-denzelartburgeremore), Deliveroo (https://deliveroo.it/it/menu/milano/santambrogio/denzel), Instagram (http://www.instagram.com/DENZELburger), Facebook (http://www.facebook.com/DENZELburger), Twitter (http://www.twitter.com/DENZELburger)

## 4. Sessions

### Session 1: Research and content extraction

- Download logo, gallery photos, and all menu photos from the Wix CDN.
- Extract the complete gallery and menu image lists from the live page HTML/JS.
- Read the Italian menu photos and transcribe them into structured data (categories, items, prices).
- Extract the Dicono di noi review content.
- Analyze the photos for color palette, typography direction, and overall vibe. Write short style notes.
- Deliverable: a content directory with Italian copy, structured menu data, downloaded images, and style notes.

### Session 2: Project scaffold and design system

- Initialize the repository layout (client and server folders).
- Set up React with Vite, routing for all pages, and custom CSS design tokens (colors, typography, spacing from the style notes).
- Build the global layout: header with nav, footer, responsive behavior.
- No Prettier, no CSS frameworks, only hand written CSS.
- Deliverable: styled shell with all routes and static Italian content in place.

### Session 3: Database and API

- Define the Prisma schema: MenuCategory, MenuItem, MenuLanguage, GalleryImage, Review, FaqItem, Service, ContactMessage.
- Create the MySQL database in MySQL Workbench, run Prisma migrations, seed with the transcribed menu and content.
- Build the Express API: read endpoints for menu, gallery, reviews, FAQ, services, and a write endpoint for the contact form.
- Environment configuration and CORS.
- Deliverable: running API serving seeded data.

### Session 4: Frontend integration and full pages

- Connect the React app to the API. Provide a static JSON fallback so the site also works as a pure static build for GitHub Pages.
- Build all pages: Home, Chi Siamo, Kosher (FAQ accordion), Menu (structured Italian menu plus photo galleries), Gallery (lightbox), Dicono di noi (reviews), Contact (form, map, hours), Sfida 530g.
- Mobile first responsive design, accessible markup, Italian alt texts.
- Deliverable: complete site ready for review.

### Session 5: SEO and performance

- Italian meta titles and descriptions per page, Open Graph tags, canonical URLs, JSON-LD Restaurant schema (address, hours, geo, menu).
- sitemap.xml, robots.txt, semantic headings, image optimization (compressed images, WebP where possible, lazy loading), font loading strategy.
- Deliverable: SEO checklist complete, good Lighthouse scores.

### Session 6: GitHub Pages demo deploy

- Build the client as a static site with embedded JSON data (no backend on GitHub Pages).
- Configure base path and routing for GitHub Pages, add a GitHub Actions workflow to publish the build.
- Verify the demo works and share the URL with the client.
- Deliverable: live demo link for client presentation.

### Session 7: Production deploy (after client feedback)

- Choose the production host with the client (needs Node and MySQL, for example a VPS, Railway, or Render).
- Deploy Express and MySQL, run migrations, point the domain, enable SSL.
- Deliverable: production website live.

Each session ends with a short summary and commits made only after permission is asked.

## 5. Repository structure

denzel-restaurant/
  ROADMAP.md
  AGENTS.md
  client/           React app (Vite, custom CSS)
    src/
      components/
      pages/
      data/         static JSON fallback for GitHub Pages
      styles/
  server/           Express API
    prisma/         schema and migrations
    src/

## 6. Deployment notes

GitHub Pages serves only static files, so the demo in Session 6 will run the React client with embedded data. The Express API and MySQL database are used in the production deploy in Session 7, hosted wherever the client prefers.

## 7. Open questions for the client

- Confirm the color palette and typography after Session 1 style notes.
- The Dicono di noi page needs real review content. Ask the client for texts and photos.
- Which menu languages to keep in the redesign (the source has Italian, English, Hebrew, and French photo menus).
- Preferred production host and domain for Session 7.
