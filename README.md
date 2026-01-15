# Winterfestival Neede Website

Een moderne, responsive website voor het Winterfestival Neede, gebouwd met de Hugo static site generator.

## 🎪 Over het Project

Deze website is ontwikkeld voor het Winterfestival Neede, georganiseerd door Stichting Vlearmoesplein. De site bevat alle informatie die bezoekers nodig hebben, van praktische details tot ticketverkoop.

## 🚀 Features

- **Responsive Design** - Werkt perfect op alle apparaten
- **Snelle Laadtijden** - Geoptimaliseerd voor performance
- **SEO Vriendelijk** - Goede vindbaarheid in zoekmachines
- **Toegankelijk** - Voldoet aan toegankelijkheidseisen
- **Eenvoudig te Beheren** - Content in Markdown formaat
- **Event Theming** - Ontworpen voor evenementenorganisatie
- **Modern UI** - Schone, professionele design

## 📁 Structuur

```
vlearmoesplein/
├── content/              # Website content
│   ├── _index.md        # Homepage
│   ├── winterfestival-2025.md  # Current event
│   ├── bezoeken.md
│   ├── tickets.md
│   ├── evenementen.md
│   ├── contact.md
│   └── over-ons.md
├── themes/
│   └── conf/            # Custom theme
│       ├── layouts/     # HTML templates
│       └── assets/      # CSS, JS
├── static/              # Static files (images, etc.)
├── data/                # Data files (schedule, sponsors)
├── hugo.toml           # Site configuration
├── hugo.dev.toml       # Development configuration
├── Makefile            # Build commands
├── package.json        # NPM scripts
└── README.md
```

## 🛠️ Installatie & Setup

### Vereisten

- [Hugo Extended](https://gohugo.io/installation/) (versie 0.110.0 of hoger)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (optioneel, voor development tools)

### Snelle Start

1. **Clone de repository:**
   ```bash
   git clone https://github.com/vlearmoesplein/winterfestival-website.git
   cd winterfestival-website
   ```

2. **Run setup script:**
   ```bash
   ./setup.sh
   ```

3. **Of handmatig:**
   ```bash
   # Start development server
   make dev
   # of
   hugo server --config hugo.dev.toml
   ```

4. **Open in browser:**
   ```
   http://localhost:1313
   ```

De site wordt automatisch ververst wanneer je wijzigingen maakt.

## 📝 Content Beheren

### Pagina's Bewerken

Alle content staat in de `content/` directory als Markdown bestanden:

- `content/_index.md` - Homepage Winterfestival
- `content/evenementen.md` - Overzichtspagina programma
- `content/evenementen/_index.md` - Landingspagina voor alle evenementen
- `content/evenementen/event-1.md` - Voorbeeld van een individueel evenement
- `content/artiesten` - Artiestenprofielen
- `content/tickets.md` - Tickets en ticketshop
- `content/bezoeken.md` - Praktische informatie (route, tijden, FAQ)
- `content/sponsors.md` - Sponsors pagina
- `content/huisregels.md` - Huisregels op het terrein
- `content/contact.md` - Contact informatie
- `content/over-ons.md` - Over Stichting Vlearmoesplein

### Nieuw evenement toevoegen

1. **Maak een nieuw event‑bestand in de `evenementen` map:**
   ```bash
   cp content/evenementen/event-1.md content/evenementen/mijn-nieuw-event.md
   ```

2. **Pas de front matter aan:**
   ```yaml
   ---
   title: "Naam van het nieuwe event"
   date: 2026-12-13
   draft: false
   subtitle: "Korte omschrijving van het event"
   ---
   ```

3. **Zorg dat het event in de navigatie of planning terugkomt:**
   - Voeg het event toe aan `data/schedule.yaml` als onderdeel van de meerdaagse planning.
   - Of link ernaar vanuit content (bijvoorbeeld vanaf `evenementen.md` of de homepage).

### Site Configuratie

Wijzig site-brede instellingen in `hugo.toml`:

```toml
[params.hero]
  title = "Welcome to Winterfestival"
  subtitle = "Join us for an amazing festival experience"
  date = "13 December 2025"
  location = "Vlearmoesplein Neede"

[params.contact]
  email = "info@vlearmoesplein.nl"
  formAction = "https://formspree.io/f/your-endpoint"
```

## 🎨 Design Aanpassen

### CSS Wijzigen

De hoofdstylesheet staat in `themes/winterfestival/assets/css/main.css`.

Belangrijke CSS secties:
- **Kleuren** - CSS variabelen in `:root`
- **Typography** - Font instellingen
- **Header/Navigation** - Navigatie styling
- **Hero Section** - Homepage hero
- **Cards** - Component styling

### Layout Templates

HTML templates staan in `themes/winterfestival/layouts/`:
- `_default/baseof.html` - Basis template
- `_default/index.html` - Homepage layout
- `_default/single.html` - Standaard contentpagina‑layout
- `_default/sponsors.html` - Sponsorspagina
- `evenementen/list.html` / `evenementen/single.html` - Programma‑overzicht en individuele evenementen
- `artiesten/list.html` / `artiesten/single.html` - Artiestenoverzicht en artiestdetail
- `tickets/list.html` - Tickets‑pagina
- `partials/header.html` - Website header
- `partials/footer.html` - Website footer

## 🚀 Deployment

### Build voor Productie

```bash
make build
# of
hugo --minify
```

Dit genereert de site in de `public/` directory.

### Deployment Opties

#### GitHub Pages (Aanbevolen)
1. Push code naar GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source: "GitHub Actions"
4. De workflow deployt automatisch bij push naar main

#### Netlify
1. Connect je GitHub repository met Netlify
2. Build command: `hugo --minify`
3. Publish directory: `public`
4. Environment variables: `HUGO_VERSION=0.128.0`

#### Vercel
1. Import project in Vercel
2. Framework: Hugo
3. Build command: `hugo --minify`
4. Output directory: `public`

#### FTP Upload
```bash
make build
# Upload contents of public/ directory to your web server
```

## 📊 Available Commands

### Make Commands

```bash
make dev          # Start development server
make build        # Build for production
make clean        # Clean generated files
make deploy       # Build and prepare for deployment
make check        # Check Hugo version and config
```

### NPM Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run clean     # Clean build files
npm run test      # Test build
```

### Hugo Commands

```bash
hugo server -D                    # Development server with drafts
hugo --minify                    # Production build
hugo new content/page.md         # Create new page
hugo list drafts                 # List draft content
```

## 🔧 Development Tips

### Live Reload
```bash
hugo server -D --navigateToChanged
```

### Draft Content
Voeg `draft: true` toe aan front matter om content te verbergen in productie.

### Shortcodes
Gebruik Hugo shortcodes voor herbruikbare content:
```markdown
{{< figure src="image.jpg" alt="Alt text" >}}
```

## 🐛 Troubleshooting

### Veelvoorkomende Problemen

**Site bouwt niet:**
- Check Hugo versie: `hugo version`
- Controleer syntax in `hugo.toml`
- Kijk naar error messages in terminal

**Styling werkt niet:**
- Clear browser cache
- Check of CSS bestanden bestaan in `themes/conf/assets/css/`
- Controleer browser developer tools voor errors

**Menu items verschijnen niet:**
- Controleer menu configuratie in `hugo.toml`
- Zorg dat pagina's `draft: false` hebben
- Check URL paths in menu items

### Logs & Debugging
```bash
hugo server -D --verbose --debug
```

## 🤝 Contributing

### Voor Developers
1. Fork de repository
2. Maak een feature branch: `git checkout -b feature/nieuwe-functie`
3. Commit je wijzigingen: `git commit -am 'Voeg nieuwe functie toe'`
4. Push naar de branch: `git push origin feature/nieuwe-functie`
5. Maak een Pull Request

### Voor Content Editors
1. Clone de repository
2. Bewerk Markdown bestanden in `content/`
3. Test lokaal met `make dev`
4. Commit en push wijzigingen

## 📞 Support

Voor vragen of problemen:

- **Email:** info@vlearmoesplein.nl
- **GitHub Issues:** [Maak een issue](https://github.com/vlearmoesplein/winterfestival-website/issues)

## 📄 Licentie

Dit project is gelicenseerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 🙏 Credits

- **Hugo** - Static site generator
- **Inter Font** - Typography
- **Design** - Custom conf theme
- **Icons** - SVG icons, inclusief [Bootstrap Icons](https://icons.getbootstrap.com)

---

**Gebouwd met ❤️ voor het Winterfestival Neede**

*Laatste update: Januari 2025*
