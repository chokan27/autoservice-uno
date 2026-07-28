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
    <section className="quick-services">
      <Link href="/servizi"><small>01</small><strong>Autoriparazioni</strong><span>→</span></Link>
      <Link href="/servizi"><small>02</small><strong>Gommista</strong><span>→</span></Link>
      <Link href="/servizi"><small>03</small><strong>Controlli</strong><span>→</span></Link>
      <Link href="/servizi"><small>04</small><strong>Soccorso stradale</strong><span>→</span></Link>
    </section>
    <Footer />
  </main>;
}
