import Link from "next/link";

export function Header() {
  return <header className="site-header">
    <Link className="wordmark" href="/" aria-label="Auto Service UNO, home"><strong>AUTO SERVICE</strong><span>UNO</span><small>OFFICINA · GOMMISTA</small></Link>
    <nav aria-label="Navigazione principale"><Link href="/">Home</Link><Link href="/servizi">Servizi</Link><Link href="/officina">Officina & Team</Link><Link href="/contatti">Contatti</Link></nav>
    <Link className="header-cta" href="/contatti">PRENOTA</Link>
  </header>;
}

export function Footer() {
  return <footer><Link className="wordmark footer-wordmark" href="/"><strong>AUTO SERVICE</strong><span>UNO</span><small>OFFICINA · GOMMISTA</small></Link><p>Via Caboto 39/B · Milano</p><p>Assistenza completa per la tua auto</p><Link className="footer-link" href="/contatti">CONTATTI →</Link></footer>;
}
