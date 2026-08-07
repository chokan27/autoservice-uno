import Link from "next/link";
import { Footer, Header } from "./components";

const featured = [
  ["Diagnosi elettronica", "Spie, centraline e ricerca precisa dei guasti."],
  ["Meccanica e tagliandi", "Manutenzione programmata e riparazioni complete."],
  ["Pneumatici", "Montaggio, equilibratura, controllo e riparazione."],
  ["Soccorso stradale", "Assistenza e recupero del veicolo quando serve."],
];

export default function Home() {
  return <main><Header />
    <section className="hero">
      <div className="hero-geometry" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">AUTO SERVICE UNO · MILANO</p>
        <h1>LA TUA AUTO,<br /><span>IL NOSTRO MESTIERE.</span></h1>
        <p className="lead">Autoriparazioni, pneumatici, controlli e soccorso stradale. Un’officina indipendente, organizzata e vicina alle persone.</p>
        <div className="actions"><Link className="button primary" href="/contatti">PRENOTA UN APPUNTAMENTO <span>→</span></Link><Link className="button outline" href="/servizi">SCOPRI I SERVIZI</Link></div>
      </div>
      <div className="hero-stamp"><strong>UNO</strong><span>ASSISTENZA COMPLETA</span></div>
    </section>

    <section className="feature-strip">
      {featured.slice(0,3).map(([title,text])=><Link href="/servizi" key={title}><span className="feature-icon">◆</span><div><h2>{title}</h2><p>{text}</p></div><b>→</b></Link>)}
    </section>

    <section className="intro section-light">
      <div className="intro-mark"><span>UNO</span><strong>OFFICINA<br />DI FIDUCIA</strong></div>
      <div className="intro-copy"><p className="eyebrow red">COMPETENZA · CHIAREZZA · CURA</p><h2>UN SERVIZIO COMPLETO.<br /><span>UN RAPPORTO DIRETTO.</span></h2><p>Ogni problema viene ascoltato, controllato e spiegato con parole semplici. Prima di iniziare, il lavoro viene organizzato e concordato con te.</p><ul><li>Contatto diretto con il capo officina</li><li>Interventi chiari e concordati</li><li>Assistenza per ogni esigenza dell’auto</li></ul><Link className="text-link" href="/contatti">PARLA CON NOI →</Link></div>
    </section>

    <section className="services-preview section-dark">
      <div className="section-heading"><div><p className="eyebrow">I SERVIZI PRINCIPALI</p><h2>TUTTO QUELLO CHE SERVE.<br /><span>IN UN’UNICA OFFICINA.</span></h2></div><Link className="button outline" href="/servizi">TUTTI I SERVIZI →</Link></div>
      <div className="service-preview-grid">{featured.map(([title,text],i)=><Link href="/servizi" key={title}><small>0{i+1}</small><h3>{title}</h3><p>{text}</p><span>SCOPRI DI PIÙ →</span></Link>)}</div>
    </section>

    <section className="roadside"><div><p className="eyebrow">QUANDO L’AUTO SI FERMA</p><h2>NON RESTARE FERMO.<br /><span>CI PENSIAMO NOI.</span></h2></div><div><p>Soccorso stradale, recupero del veicolo e trasporto in officina. Cristian è il riferimento per assistenza e appuntamenti.</p><Link className="button primary" href="/contatti">RICHIEDI ASSISTENZA →</Link></div></section>
    <Footer />
  </main>;
}
