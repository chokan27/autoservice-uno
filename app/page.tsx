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
    </section>
    <section className="home-services">
      <div className="home-services-title"><p className="eyebrow">I NOSTRI SERVIZI</p><h2>TUTTO PER LA TUA AUTO.</h2><Link href="/servizi">VEDI TUTTI I DETTAGLI →</Link></div>
      <div className="home-services-grid six">
        <Link href="/servizi"><h3>Diagnosi elettronica</h3><p>Ricerca guasti, spie e anomalie.</p><span>→</span></Link>
        <Link href="/servizi"><h3>Tagliandi</h3><p>Olio, filtri e manutenzione programmata.</p><span>→</span></Link>
        <Link href="/servizi"><h3>Meccanica</h3><p>Freni, sospensioni e riparazioni.</p><span>→</span></Link>
        <Link href="/servizi"><h3>Gommista</h3><p>Montaggio, equilibratura e riparazioni.</p><span>→</span></Link>
        <Link href="/servizi"><h3>Controlli</h3><p>Verifiche generali e sicurezza.</p><span>→</span></Link>
        <Link href="/servizi"><h3>Soccorso stradale</h3><p>Assistenza e recupero del veicolo.</p><span>→</span></Link>
      </div>
    </section>
    <Footer />
  </main>;
}
