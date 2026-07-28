const services = [
  {
    number: "01",
    title: "Autoriparazioni",
    text: "Manutenzione ordinaria e straordinaria, diagnosi e risoluzione dei problemi della tua auto.",
    tag: "MECCANICA",
  },
  {
    number: "02",
    title: "Gommista",
    text: "Sostituzione, montaggio, equilibratura e riparazione pneumatici per viaggiare sempre sicuri.",
    tag: "PNEUMATICI",
  },
  {
    number: "03",
    title: "Controlli",
    text: "Verifiche periodiche e controlli generali del veicolo, con indicazioni chiare prima di ogni intervento.",
    tag: "SICUREZZA",
  },
  {
    number: "04",
    title: "Soccorso stradale",
    text: "Assistenza in caso di fermo o guasto, per recuperare il veicolo e riportarti rapidamente in sicurezza.",
    tag: "ASSISTENZA",
  },
];

const team = [
  { name: "Ines", role: "Amministrazione", text: "Il tuo riferimento per pratiche, documenti e informazioni amministrative.", accent: true },
  { name: "Cristian", role: "Appuntamenti", text: "Accoglienza, organizzazione degli interventi e appuntamenti in officina.", accent: true },
  { name: "Maurizio", role: "Meccanico", text: "Competenza tecnica e attenzione concreta a ogni dettaglio del veicolo." },
  { name: "Davide", role: "Meccanico", text: "Precisione nelle lavorazioni e cura dell'auto in ogni fase dell'intervento." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Navigazione principale">
        <a className="brand" href="#top" aria-label="Autoservice UNO, torna all'inizio">
          <span className="brand-mark">U</span>
          <span>AUTOSERVICE <b>UNO</b></span>
        </a>
        <div className="nav-links">
          <a href="#servizi">Servizi</a>
          <a href="#chi-siamo">Chi siamo</a>
          <a href="#team">Team</a>
          <a href="#contatti">Contatti</a>
        </div>
        <a className="nav-cta" href="#contatti">PRENOTA <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> OFFICINA · GOMMISTA · SOCCORSO STRADALE</p>
          <h1>LA TUA AUTO.<br /><em>IL NOSTRO</em><br />MESTIERE.</h1>
          <p className="hero-copy">Competenza, trasparenza e cura concreta.<br />A Milano, per ogni chilometro che ti aspetta.</p>
          <div className="hero-actions">
            <a className="button button-red" href="#contatti">PRENOTA UN APPUNTAMENTO <span>→</span></a>
            <a className="text-link" href="#servizi">SCOPRI I SERVIZI <span>↓</span></a>
          </div>
        </div>
        <div className="hero-location">
          <span className="pin">⌖</span>
          <div><small>CI TROVI QUI</small><strong>Via Caboto 39/B</strong><span>Milano</span></div>
        </div>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="trustbar" aria-label="I nostri valori">
        <p><b>01</b> DIAGNOSI CHIARE</p><p><b>02</b> INTERVENTI PRECISI</p><p><b>03</b> CONTATTO DIRETTO</p><p><b>04</b> CURA PERSONALE</p>
      </section>

      <section className="services section" id="servizi">
        <header className="section-head">
          <div><p className="kicker">SERVIZI PRINCIPALI</p><h2>TUTTO QUELLO CHE SERVE.<br /><em>FATTO BENE.</em></h2></div>
          <p>Dalla manutenzione alla sicurezza su strada: un unico punto di riferimento per prenderti cura della tua auto.</p>
        </header>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="card-top"><span>{service.number}</span><small>{service.tag}</small></div>
              <div className="service-icon" aria-hidden="true">{service.number === "01" ? "⚙" : service.number === "02" ? "◉" : service.number === "03" ? "✓" : "+"}</div>
              <h3>{service.title}</h3><p>{service.text}</p>
              <a href="#contatti">RICHIEDI INFORMAZIONI <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="chi-siamo">
        <div className="about-image" role="img" aria-label="Auto in lavorazione nella nostra officina" />
        <div className="about-copy">
          <p className="kicker light">AUTOSERVICE UNO</p>
          <h2>UNA NUOVA OFFICINA.<br /><em>UN IMPEGNO PRECISO.</em></h2>
          <p>Autoservice UNO nasce da un progetto condiviso da Ines e Cristian: un’officina indipendente dove professionalità e rapporto umano viaggiano insieme.</p>
          <p>Qui trovi risposte semplici, un contatto diretto e un team che tratta ogni auto con la stessa attenzione che dedicherebbe alla propria.</p>
          <div className="about-sign"><span>UNO</span><p>UN SOLO REFERENTE.<br />TUTTO IL SERVIZIO CHE SERVE.</p></div>
        </div>
      </section>

      <section className="team section" id="team">
        <header className="section-head team-head">
          <div><p className="kicker">LE PERSONE</p><h2>IL TEAM CHE SI PRENDE<br /><em>CURA DELLA TUA AUTO.</em></h2></div>
          <p>Ruoli chiari e persone sempre raggiungibili: sai subito a chi rivolgerti.</p>
        </header>
        <div className="team-grid">
          {team.map((person, index) => (
            <article className={`team-card ${person.accent ? "team-accent" : ""}`} key={person.name}>
              <span className="team-number">0{index + 1}</span>
              <div className="avatar" aria-hidden="true">{person.name[0]}</div>
              <p className="role">{person.role}</p><h3>{person.name}</h3><p>{person.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contatti">
        <div className="contact-title"><p className="kicker light">PARLIAMONE</p><h2>LA TUA AUTO<br />MERITA <em>UNO.</em></h2></div>
        <div className="contact-options">
          <a className="contact-row" href="#contatti"><span>01</span><div><small>PER APPUNTAMENTI</small><strong>Parla con Cristian</strong></div><b>→</b></a>
          <a className="contact-row" href="#contatti"><span>02</span><div><small>AMMINISTRAZIONE E PRATICHE</small><strong>Parla con Ines</strong></div><b>→</b></a>
          <a className="contact-row" href="https://www.google.com/maps/search/?api=1&query=Via+Caboto+39%2FB+Milano" target="_blank" rel="noreferrer"><span>03</span><div><small>DOVE SIAMO</small><strong>Via Caboto 39/B, Milano</strong></div><b>↗</b></a>
          <p className="contact-note">I recapiti telefonici saranno disponibili qui a breve.</p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">U</span><span>AUTOSERVICE <b>UNO</b></span></a>
        <p>Autoriparazioni · Gommista · Controlli · Soccorso stradale</p><p>Via Caboto 39/B · Milano</p><a href="#top">TORNA SU ↑</a>
      </footer>
    </main>
  );
}
