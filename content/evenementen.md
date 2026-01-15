---
title: "Evenementen"
date: 2024-01-01
draft: false
description: "Overzicht van alle evenementen georganiseerd door Stichting Vlearmoesplein"
---

<style>
.evenementen-container {
  max-width: 1100px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.evenementen-section-title {
  color: #4d7bc2;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  border-bottom: 2px solid #e89940;
  padding-bottom: 0.3rem;
}
.event-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 1.5rem;
}
.event-card {
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(77, 123, 194, 0.08);
  border: 1px solid #e5e7eb;
  padding: 1.5rem 1.2rem;
  transition: box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  position: relative;
}
.event-card.present {
  border-left: 6px solid #4d7bc2;
}
.event-card.future {
  border-left: 6px solid #10b981;
}
.event-card.past {
  border-left: 6px solid #d1d5db;
  opacity: 0.7;
}
.event-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1e293b;
}
.event-date {
  font-size: 1rem;
  color: #4d7bc2;
  font-weight: 500;
}
.event-location {
  font-size: 0.98rem;
  color: #374151;
}
.event-status {
  font-size: 0.95rem;
  font-weight: 500;
  margin-top: 0.2rem;
}
.event-link {
  margin-top: 0.5rem;
  color: #e89940;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}
.event-link:hover {
  color: #4d7bc2;
}
@media (max-width: 700px) {
  .event-cards { grid-template-columns: 1fr; }
}
</style>

<div class="evenementen-container">

<div style="margin-bottom: 2rem; font-size: 1.08rem;">
  Welkom bij het overzicht van alle evenementen van Stichting Vlearmoesplein. Hier vind je onze huidige, aankomende en afgelopen evenementen. Klik op een evenement voor meer informatie of tickets.
</div>

<!-- Present Events -->
<div>
  <div class="evenementen-section-title">🎉 Huidige Evenementen</div>
  <div class="event-cards">
    <div class="event-card present">
      <div class="event-title">Winterfestival 2025</div>
      <div class="event-date">13 december 2025</div>
      <div class="event-location">Vlearmoesplein, Neede</div>
      <div class="event-status">Status: Bezig!</div>
      <a href="/winterfestival-2025/" class="event-link">Meer info</a>
    </div>
  </div>
</div>

<!-- Future Events -->
<div>
  <div class="evenementen-section-title">🔮 Aankomende Evenementen</div>
  <div class="event-cards">
    <div class="event-card future">
      <div class="event-title">Winterfestival 2026</div>
      <div class="event-date">2026</div>
      <div class="event-location">Vlearmoesplein, Neede</div>
      <div class="event-status">Status: Onbekend</div>
    </div>
</div>

<!-- Past Events -->
<div>
  <div class="evenementen-section-title evenementen-section-title--past">⏳ Afgelopen Evenementen</div>
  <div class="event-cards">
    <div class="event-card past">
      <div class="event-title">Winterfestival 2024</div>
      <div class="event-date">7 december 2024</div>
      <div class="event-location">Vlearmoesplein, Neede</div>
      <div class="event-status">Status: Geslaagd!</div>
    </div>
    <div class="event-card past">
      <div class="event-title">Winterfestival 2023</div>
      <div class="event-date">9 december 2023</div>
      <div class="event-location">Vlearmoesplein, Neede</div>
      <div class="event-status">Status: Geslaagd!</div>
    </div>
    <div class="event-card past">
      <div class="event-title">Winterfestival 2022</div>
      <div class="event-date">10 december 2022</div>
      <div class="event-location">Vlearmoesplein, Neede</div>
      <div class="event-status">Status: Geslaagd!</div>
    </div>
    <div class="event-card past">
      <div class="event-title">Expeditie Neede</div>
      <div class="event-date">9 augustus 2020</div>
      <div class="event-location">Neede</div>
      <div class="event-status">Status: Geslaagd!</div>
    </div>
    <div class="event-card past">
      <div class="event-title">Veiligheidsdag 2019</div>
      <div class="event-date">19 mei 2019</div>
      <div class="event-location">Neede</div>
      <div class="event-status">Status: Geslaagd!</div>
    </div>
    <div class="event-card past">
      <div class="event-title">Hap en Tap</div>
      <div class="event-date">3 juni 2018</div>
      <div class="event-location">Neede</div>
      <div class="event-status">Status: Geslaagd!</div>
    </div>
    <div class="event-card past">
      <div class="event-title">Veiligheidsdag 2017</div>
      <div class="event-date">17 mei 2017</div>
      <div class="event-location">Neede</div>
      <div class="event-status">Status: Geslaagd!</div>
    </div>
    <div class="event-card past">
      <div class="event-title">Kofferbak verkoop</div>
      <div class="event-date">10 april 2016</div>
      <div class="event-location">Neede</div>
      <div class="event-status">Status: Geslaagd!</div>
    </div>
    <div class="event-card past">
      <div class="event-title">DJ Battle</div>
      <div class="event-date">12 september 2015</div>
      <div class="event-location">Neede</div>
      <div class="event-status">Status: Geslaagd!</div>
    </div>
    <div class="event-card past">
      <div class="event-title">Needse Gezelligheid</div>
      <div class="event-date">13 september 2014</div>
      <div class="event-location">Neede</div>
      <div class="event-status">Status: Geslaagd!</div>
    </div>
  </div>
</div>

</div>