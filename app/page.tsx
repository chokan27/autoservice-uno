import Link from "next/link";
import { Footer, Header } from "./components";

const featured = [
  ["Diagnosi elettronica", "Spie, centraline e ricerca precisa dei guasti."],
  ["Meccanica e tagliandi", "Manutenzione programmata e riparazioni complete."],
  ["Pneumatici", "Montaggio, equilibratura, controllo e riparazione."],
];

export default function Home() {
  return <main><Header />
    <section className="hero home-hero">
      <div className="hero-geometry" aria-hidden="true" />
      <div className="hero-copy"><p className="eyebrow">AUTO SERVICE UNO · MILANO</p><h1>LA TUA AUTO,<br /><span>IL NOSTRO MESTIERE.</span></h1><p className="lead">Autoriparazioni, pneumatici, controlli e soccorso stradale. Un’officina indipendente, organizzata e vicina alle persone.</p><div className="actions"><Link className="button primary" href="/contatti">PRENOTA UN APPUNTAMENTO <span>→</span></Link><Link className="button outline" href="/servizi">SCOPRI I SERVIZI</Link></div></div>
      <div className="hero-stamp"><strong>UNO</strong><span>ASSISTENZA COMPLETA</span></div>
    </section>
    <section className="home-services" aria-label="Servizi principali">
      <div className="home-services-heading"><p className="eyebrow red">I SERVIZI PIÙ RICHIESTI</p><h2>PARTIAMO DA CIÒ<br /><span>CHE CONTA DAVVERO.</span></h2><Link className="text-link" href="/servizi">VEDI TUTTI I SERVIZI →</Link></div>
      <div className="home-service-list">{featured.map(([title,text],i)=><Link href="/servizi" key={title}><small>0{i+1}</small><div><h3>{title}</h3><p>{text}</p></div><b>→</b></Link>)}</div>
    </section>
    <section className="home-trust"><div><p className="eyebrow red">UN’OFFICINA, PERSONE VERE</p><h2>CHIARO PRIMA.<br /><span>PRECISO DOPO.</span></h2></div><div><p>Parli direttamente con chi segue la tua auto. Cristian gestisce appuntamenti e accettazione; Ines è il riferimento per la parte amministrativa.</p><Link className="button outline" href="/officina">CONOSCI L’OFFICINA</Link></div></section>
    <Footer />
  </main>;
}
