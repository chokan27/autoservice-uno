import Link from "next/link";

export function Header() {
  return <><div className="top-strip"><span>Via Caboto 39/B · Milano</span><span>Officina · Gommista · Soccorso stradale</span></div><header className="site-header">
    <Link className="brand-image-link" href="/" aria-label="Auto Service UNO, home"><img className="brand-image" src="/autoservice-uno/logo-auto-service-uno-nuovo.png?v=2" alt="Auto Service UNO · Officina e gommista" /></Link>
    <nav aria-label="Navigazione principale"><Link href="/">Home</Link><Link href="/servizi">Servizi</Link><Link href="/officina">Officina & Team</Link><Link href="/contatti">Contatti</Link></nav>
    <Link className="header-cta" href="/contatti">PRENOTA <span>→</span></Link>
  </header></>;
}

export function Footer() {
  return <footer><div className="footer-brand"><Link className="brand-image-link" href="/"><img className="brand-image" src="/autoservice-uno/logo-auto-service-uno-nuovo.png?v=2" alt="Auto Service UNO · Officina e gommista" /></Link><p>Competenza concreta e un rapporto sempre diretto.</p></div><div><small>DOVE SIAMO</small><p>Via Caboto 39/B<br />Milano</p></div><div><small>SERVIZI</small><p>Officina · Gommista<br />Controlli · Soccorso stradale</p></div><Link className="footer-link" href="/contatti">CONTATTI <span>→</span></Link></footer>;
}
