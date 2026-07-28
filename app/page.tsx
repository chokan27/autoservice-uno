import Link from "next/link";
import { Footer, Header } from "./components";

export default function Home() {
  return <main><Header />
    <section className="home-hero">
      <div className="home-copy">
        <p className="eyebrow">AUTOSERVICE UNO · MILANO</p>
        <h1>LA TUA AUTO.<br /><span>IL NOSTRO MESTIERE.</span></h1>
        <p>Autoriparazioni, pneumatici, controlli e soccorso stradale. Competenza concreta e un contatto sempre diretto.</p>
        <div className="actions"><Link className="button red-button" href="/contatti">PRENOTA UN APPUNTAMENTO <span>→</span></Link><Link className="button ghost-button" href="/servizi">SCOPRI I SERVIZI</Link></div>
      </div>
      <div className="address-card"><small>CI TROVI QUI</small><strong>Via Caboto 39/B</strong><span>Milano</span></div>
    </section>
    <section className="home-services">
      <div className="home-services-title"><p className="eyebrow">I NOSTRI SERVIZI</p><h2>TUTTO PER LA TUA AUTO.</h2><Link href="/servizi">VEDI TUTTI I DETTAGLI →</Link></div>
      <div className="home-services-grid">
        <Link href="/servizi"><small>01</small><h3>Autoriparazioni</h3><p>Manutenzione, diagnosi e riparazioni meccaniche.</p><span>→</span></Link>
        <Link href="/servizi"><small>02</small><h3>Gommista</h3><p>Montaggio, equilibratura e riparazione pneumatici.</p><span>→</span></Link>
        <Link href="/servizi"><small>03</small><h3>Controlli</h3><p>Verifiche periodiche e controlli generali.</p><span>→</span></Link>
        <Link href="/servizi"><small>04</small><h3>Soccorso stradale</h3><p>Assistenza e recupero del veicolo in caso di guasto.</p><span>→</span></Link>
      </div>
    </section>
    <Footer />
  </main>;
}
