import Link from "next/link";

export function Header() {
  return <header className="site-header">
    <Link className="logo" href="/" aria-label="Auto Service UNO, home"><img className="brand-logo brand-logo-new" src="/autoservice-uno/logo-auto-service-uno.png?v=1" alt="Auto Service UNO · Officina e gommista" /></Link>
    <nav aria-label="Navigazione principale"><Link href="/">Home</Link><Link href="/servizi">Servizi</Link><Link href="/officina">Officina & Team</Link><Link href="/contatti">Contatti</Link></nav>
    <Link className="header-cta" href="/contatti">PRENOTA</Link>
  </header>;
}

export function Footer() {
  return <footer><Link className="logo" href="/"><img className="brand-logo brand-logo-new" src="/autoservice-uno/logo-auto-service-uno.png?v=1" alt="Auto Service UNO · Officina e gommista" /></Link><p>Via Caboto 39/B · Milano</p><p>Assistenza completa per la tua auto</p><Link className="footer-link" href="/contatti">CONTATTI →</Link></footer>;
}
