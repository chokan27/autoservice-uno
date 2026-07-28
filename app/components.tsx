import Link from "next/link";

export function Header() {
  return <header className="site-header">
    <Link className="logo" href="/" aria-label="Autoservice UNO, home"><img className="brand-logo" src="/autoservice-uno/logo-uno.svg?v=2" alt="UNO" /><span>AUTOSERVICE</span></Link>
    <nav aria-label="Navigazione principale"><Link href="/">Home</Link><Link href="/servizi">Servizi</Link><Link href="/officina">Officina & Team</Link><Link href="/contatti">Contatti</Link></nav>
    <Link className="header-cta" href="/contatti">PRENOTA</Link>
  </header>;
}

export function Footer() {
  return <footer><Link className="logo" href="/"><img className="brand-logo" src="/autoservice-uno/logo-uno.svg?v=2" alt="UNO" /><span>AUTOSERVICE</span></Link><p>Via Caboto 39/B · Milano</p><p>Assistenza completa per la tua auto</p><Link className="footer-link" href="/contatti">CONTATTI →</Link></footer>;
}
