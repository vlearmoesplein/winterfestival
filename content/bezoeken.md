---
title: "Bezoeken"
date: 2024-01-01
draft: false
description: "Praktische informatie voor je bezoek aan het Winterfestival Neede"
---

<style>
.visit-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.visit-hero {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 40px 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  text-align: center;
}

.visit-hero h1 {
  margin: 0 0 15px 0;
  font-size: 2.5em;
  font-weight: 700;
}

.visit-hero p {
  font-size: 1.2em;
  margin: 0;
  opacity: 0.9;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.visit-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e5e9;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.visit-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.visit-card h2 {
  color: #1e3c72;
  margin: 0 0 20px 0;
  font-size: 1.4em;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.visit-card h3 {
  color: #2a5298;
  margin: 20px 0 10px 0;
  font-size: 1.1em;
  font-weight: 600;
}

.visit-card ul {
  margin: 10px 0;
  padding-left: 20px;
}

.visit-card li {
  margin: 8px 0;
  line-height: 1.5;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 15px 0;
}

.info-item {
  background: #f8f9fa;
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid #1e3c72;
}

.info-item strong {
  color: #1e3c72;
  display: block;
  margin-bottom: 5px;
}

.alert-box {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  border-left: 4px solid #f39c12;
}

.alert-box.important {
  background: #f8d7da;
  border-color: #f5c6cb;
  border-left-color: #dc3545;
}

.alert-box.success {
  background: #d4edda;
  border-color: #c3e6cb;
  border-left-color: #28a745;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.tip-item {
  background: #e3f2fd;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
}

.tip-item strong {
  color: #1976d2;
  display: block;
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .visit-container {
    padding: 15px;
  }

  .visit-hero {
    padding: 30px 20px;
  }

  .visit-hero h1 {
    font-size: 2em;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="visit-container">

<div class="cards-grid">

<div class="visit-card">
  <h2>🎯 Handige Tips</h2>

  <div class="alert-box success">
    <strong>Het aftellen is begonnen!</strong> Nog heel even en het Winterfestival barst weer los op het Vlearmoesplein.
  </div>

  <h3>📅 Programma</h3>
  <ul>
    <li><strong>Kindermiddag:</strong> 14:00 uur - prikkelarme bingo en kerstman voor winterbingo</li>
    <li><strong>Winterfestival:</strong> 20:30 uur - DJ Daan Rohof en de Gladjakkers in de verwarmde tent</li>
  </ul>

  {{ if .Site.Params.tickets.enabled }}
  <h3>🎟️ Tickets</h3>
  <ul>
    <li>Tickets vanaf 16 jaar</li>
    <li>Laat tickets scannen vanaf je mobiel</li>
    <li>Zorg dat je telefoon opgeladen is</li>
    <li>ID verplicht</li>
  </ul>
  {{ else }}
  <h3>🎟️ Toegang</h3>
  <ul>
    <li>Gratis toegang voor alle bezoekers</li>
    <li>Geen tickets nodig</li>
    <li>ID alleen nodig voor alcoholische dranken (18+)</li>
  </ul>
  {{ end }}

  <div class="tips-grid">
    <div class="tip-item">
      <strong>💳 Pinnen</strong>
      Ja graag!
    </div>
    <div class="tip-item">
      <strong>🧥 Garderobe</strong>
      Niet beschikbaar (tenzij elders aangegeven)
    </div>
    <div class="tip-item">
      <strong>🚲 Parkeren</strong>
      Kom met de fiets! Onbewaakte stalling bij oude gemeentehuis en het vlearmoesplein
    </div>
    <div class="tip-item">
      <strong>🏥 EHBO</strong>
      EHBO Neede aanwezig voor hulp
    </div>
  </div>

  <div class="alert-box important">
    <strong>⚠️ Belangrijk:</strong> Er wordt streng gecontroleerd op alcoholgebruik onder de 18 jaar. Vergeet je ID niet!
  </div>
</div>

<div class="visit-card">
  <h2>📍 Locatie & Adres</h2>

  <div class="info-item">
    <strong>Winterfestival Neede</strong>
    Vlearmoesplein<br>
    7161 HZ Neede<br>
    Nederland
  </div>

  <h3>🕒 Openingstijden Winterfestival 2025</h3>
  <div class="info-grid">
    <div class="info-item">
      <strong>Zaterdag 13 december</strong>
      14:30 - 22:00
    </div>
  </div>

  <div class="alert-box">
    <strong>⏰ Let op:</strong> Toegang tot het festivalterrein sluit 30 minuten voor de eindtijd
  </div>
</div>

<div class="visit-card">
  <h2>🚗 Aankomst & Bereikbaarheid</h2>

  <h3>🚙 Met de Auto</h3>
  <div class="info-item">
    <strong>Gratis parkeren</strong>
    Jumbo / Lidl parkeerplaats<br>
    Zwembad parkeerplaats<br>
  </div>

  <h3>🚌 Openbaar Vervoer</h3>
  <ul>
    <li><strong>Halte:</strong> "Neede Bustation" (50m van het terrein)</li>
    <li>Check actuele dienstregeling op 9292.nl</li>
  </ul>

  <h3>🚲 Met de Fiets</h3>
  <ul>
    <li>Onbewaakte fietsenstalling bij oude gemeentehuis en het vlearmoesplein</li>
    <li>Open tijdens alle festivaltijden</li>
  </ul>
</div>

<div class="visit-card">
  <h2>🏪 Voorzieningen</h2>

  <h3>🚻 Toiletten</h3>
  <ul>
    <li>4 toiletblokken verspreid over het terrein</li>
    <li>Toegankelijke toiletten voor rolstoelgebruikers</li>
    <li>Verschoontafels beschikbaar</li>
    <li>Regelmatige reiniging en onderhoud</li>
  </ul>

  <h3>🍔 Eten & Drinken</h3>
  <ul>
    <li>15+ foodstands met diverse keuken</li>
    <li>Allergeneninformatie beschikbaar</li>
    <li>Vegetarische en veganistische opties</li>
    <li>Halal gecertificeerde stands aanwezig</li>
  </ul>

  <h3>🏥 Gezondheidszorg</h3>
  <ul>
    <li>EHBO-post naast het hoofdpodium</li>
    <li>Professionele EHBO-medewerkers aanwezig</li>
    <li>AED (defibrillator) op meerdere locaties</li>
    <li>Noodgevallen: bel 112 of ga naar EHBO-post</li>
  </ul>

  <h3>♿ Toegankelijkheid</h3>
  <ul>
    <li>Rolstoeltoegankelijke routes naar alle podia</li>
    <li>Speciale kijkplaatsen voor rolstoelgebruikers</li>
    <li>Begeleiding door vrijwilligers indien gewenst</li>
    <li>Gebarentolk op aanvraag (meld vooraf aan)</li>
  </ul>
</div>

<div class="visit-card">
  <h2>🛡️ Veiligheid & Regels</h2>

  <h3>✅ Wat Mag Je Meenemen?</h3>
  <ul>
    <li>Kleine rugzak of tas</li>
    <li>Eigen medicijnen</li>
    <li>Lege waterfles (gratis bijvullen mogelijk)</li>
    <li>Camera/telefoon</li>
    <li>Warme kleding en dekens</li>
  </ul>

  <h3>❌ Niet Toegestaan</h3>
  <ul>
    <li>Alcohol en drugs</li>
    <li>Glazen voorwerpen</li>
    <li>Professionele camera-uitrusting</li>
    <li>Vuurwerk en gevaarlijke voorwerpen</li>
    <li>Huisdieren (behalve geleidehonden)</li>
  </ul>

  <h3>🔒 Veiligheidscontrole</h3>
  <ul>
    <li>Bagagecontrole bij alle ingangen</li>
    <li>Beveiligingspersoneel aanwezig</li>
    <li>Camera-bewaking op het terrein</li>
    <li>Verloren voorwerpen: meld bij informatiestand</li>
  </ul>
</div>

<div class="visit-card">
  <h2>🌨️ Weer & Kleding</h2>

  <h3>📊 Weersverwachting December</h3>
  <div class="info-grid">
    <div class="info-item">
      <strong>Temperatuur</strong>
      -2°C tot 5°C
    </div>
    <div class="info-item">
      <strong>Neerslag</strong>
      Mogelijke sneeuw en regen
    </div>
    <div class="info-item">
      <strong>Wind</strong>
      Matige wind uit het westen
    </div>
  </div>

  <h3>👕 Kledingadvies</h3>
  <ul>
    <li>Warme winterjas</li>
    <li>Muts en handschoenen</li>
    <li>Warme sjaal</li>
    <li>Waterdichte schoenen met goede zool</li>
    <li>Meerdere lagen (ui-principe)</li>
    <li>Thermo-ondergoed bij koud weer</li>
  </ul>
</div>

<div class="visit-card">
  <h2>👨‍👩‍👧‍👦 Gezinnen Met Kinderen</h2>

  <h3>🎠 Kindervoorzieningen</h3>
  <ul>
    <li>Speciale kinderzone met activiteiten</li>
    <li>Kindvriendelijke tijden: 14:00-20:00</li>
    <li>Luierdepo bij informatiestand</li>
    <li>Kinderwagens welkom (beperkte stallingsruimte)</li>
  </ul>

  <h3>🛡️ Veiligheid voor Kinderen</h3>
  <ul>
    <li>Gratis polsbandjes met contactgegevens</li>
    <li>Aparte zoekgeraakte kinderen punt</li>
    <li>Kinderopvang op aanvraag (vooraf aanmelden)</li>
  </ul>
</div>

<div class="visit-card">
  <h2>🌱 Duurzaamheid</h2>

  <h3>♻️ Ons Groene Festival</h3>
  <ul>
    <li>Herbruikbare bekers (€2 statiegeld)</li>
    <li>Afvalscheiding overal aanwezig</li>
    <li>Groene stroom voor alle voorzieningen</li>
    <li>Lokale leveranciers gestimuleerd</li>
  </ul>

  <h3>🤝 Hoe Kun Je Helpen?</h3>
  <ul>
    <li>Kom met openbaar vervoer of fiets</li>
    <li>Gebruik herbruikbare bekers</li>
    <li>Scheid je afval correct</li>
    <li>Neem eigen waterfles mee</li>
  </ul>
</div>

<div class="visit-card">
  <h2>🏢 Speciale Diensten</h2>

  <h3>👥 Groepen & Bedrijven</h3>
  <ul>
    <li>Groepsreserveringen mogelijk (10+ personen)</li>
    <li>Bedrijfsuitjes op maat</li>
    <li>VIP-arrangementen beschikbaar</li>
    <li>Contact: events@vlearmoesplein.nl</li>
  </ul>

  <h3>📰 Pers & Media</h3>
  <ul>
    <li>Accreditatie vereist voor professionele media</li>
    <li>Persruimte in VIP-gebied</li>
    <li>Fotograaf ter plaatse voor officiële foto's</li>
    <li>Contact: pers@vlearmoesplein.nl</li>
  </ul>

  <h3>🏨 Accommodatie</h3>
  <ul>
    <li><strong>Hotels & B&B's:</strong> Hotel Restaurant De Kruishoeve (1,2 km), B&B De Pastorie (0,8 km)</li>
    <li><strong>Camping:</strong> Camping De Moespot (3 km) - winterkampeerders op aanvraag</li>
  </ul>
</div>

<div class="visit-card">
  <h2>📞 Contact & Informatie</h2>

  <h3>📧 Voor Je Bezoek</h3>
  <div class="info-grid">
    <div class="info-item">
      <strong>Email</strong>
      info@vlearmoesplein.nl
    </div>
  </div>

  <h3>📱 Tijdens Het Festival</h3>
  <ul>
    <li>Informatiestand bij hoofdingang</li>
    <li>Social media: @winterfestivalneede</li>
  </ul>

  <h3>🚨 Noodgevallen</h3>
  <div class="alert-box important">
    <strong>Algemeen alarmnummer:</strong> 112<br>
    <strong>Festival noodlijn:</strong> +31 6 12345678<br>
    <strong>EHBO-post:</strong> Naast hoofdpodium
  </div>
</div>

<div class="visit-card">
  <h2>💡 Tips voor je Bezoek</h2>

  <h3>🎯 Insider Tips</h3>
  <ul>
    <li>Kom vroeg voor de beste plekken bij het hoofdpodium</li>
    <li>Download onze app voor live updates en plattegrond</li>
    <li>Volg ons op Instagram voor backstage content</li>
    <li>Breng contant geld mee (niet alle stands accepteren pinnen)</li>
    <li>Check het weerbericht en kleed je in lagen</li>
    <li>Maak gebruik van de gratis shuttlebus vanaf sportpark</li>
  </ul>

  <h3>🎁 Speciale Acties</h3>
  <div class="tips-grid">
    <div class="tip-item">
      <strong>Happy Hour</strong>
      Vrijdag 18:00-19:00 korting op glühwein
    </div>
    <div class="tip-item">
      <strong>Familie Zondag</strong>
      Kinderen tot 12 jaar gratis activiteiten
    </div>
    <div class="tip-item">
      <strong>Local Love</strong>
      10% korting bij lokale stands met Neede-pas
    </div>
  </div>
</div>

</div>

</div>