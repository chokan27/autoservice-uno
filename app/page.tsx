import { Footer, Header } from "./components";
import Link from "next/link";

export default function Home() {
  return <main><Header />
    <section className="home-hero">
      <div className="hero-copy"><p className="eyebrow">AUTOSERVICE UNO · MILANO</p><h1>LA TUA AUTO.<br /><span>IL NOSTRO MESTIERE.</span></h1><p>Autoriparazioni, pneumatici, diagnosi e soccorso stradale. Un servizio completo, spiegato con chiarezza.</p><div className="actions"><Link className="button red-button" href="/contatti">PRENOTA UN APPUNTAMENTO <span>→</span></Link><Link className="button ghost-button" href="/servizi">SCOPRI I SERVIZI</Link></div></div>
      <div className="hero-mark" aria-hidden="true"><div className="hero-mark-ring"/><span>UNO</span><small>AUTO SERVICE</small></div>
    </section>
    <section className="quick-bar"><Link href="/servizi"><b>01</b><span>Diagnosi elettronica</span><i>→</i></Link><Link href="/servizi"><b>02</b><span>Meccanica e tagliandi</span><i>→</i></Link><Link href="/servizi"><b>03</b><span>Pneumatici e soccorso</span><i>→</i></Link></section>
    <section className="home-intro"><div className="intro-graphic"><strong>UNO</strong><span>OFFICINA<br />DI FIDUCIA</span></div><div className="intro-copy"><p className="eyebrow red-text">CHI SIAMO</p><h2>DOVE LA COMPETENZA<br /><span>INCONTRA LA CHIAREZZA.</span></h2><p>Ines e Cristian hanno creato un’officina indipendente, organizzata e vicina alle persone. Ogni intervento viene spiegato e concordato prima di iniziare.</p><ul><li>Contatto diretto con il capo officina</li><li>Lavori organizzati e concordati</li><li>Assistenza completa per la tua auto</li></ul><Link className="text-link" href="/officina">CONOSCI IL TEAM →</Link></div></section>
    <section className="service-preview"><div className="section-heading"><div><p className="eyebrow red-text">SERVIZI PRINCIPALI</p><h2>TUTTO QUELLO CHE SERVE.<br /><span>IN UN’UNICA OFFICINA.</span></h2></div><Link className="button dark-button" href="/servizi">TUTTI I SERVIZI →</Link></div><div className="service-preview-grid">{[["Diagnosi","Spie, centraline e ricerca guasti"],["Tagliandi","Olio, filtri e manutenzione"],["Meccanica","Freni, sospensioni e riparazioni"],["Gommista","Montaggio, equilibratura e forature"],["Controlli","Verifiche generali e sicurezza"],["Soccorso","Recupero e trasporto del veicolo"]].map(([title,text],i)=><Link href="/servizi" key={title}><small>0{i+1}</small><h3>{title}</h3><p>{text}</p><span>→</span></Link>)}</div></section>
    <section className="home-team-cta"><p className="eyebrow">UN TEAM PRESENTE</p><h2>INES, CRISTIAN,<br />MAURIZIO E DAVIDE.</h2><p>Amministrazione, accettazione e competenza tecnica: sai sempre con chi stai parlando.</p><Link className="button white-button" href="/officina">SCOPRI L’OFFICINA →</Link></section>
    <section className="home-final"><div><p className="eyebrow">HAI BISOGNO DI ASSISTENZA?</p><h2>PARLIAMO DELLA TUA AUTO.</h2></div><Link className="button dark-button" href="/contatti">CONTATTACI →</Link></section>
    <Footer />
  </main>;
}
