import Link from "next/link";

export function Header() {
  return <header className="site-header">
    <Link className="logo" href="/" aria-label="Autoservice UNO, home"><span className="logo-mark">1</span><span>AUTOSERVICE <b>UNO</b></span></Link>
    <nav aria-label="Navigazione principale"><Link href="/">Home</Link><Link href="/servizi">Servizi</Link><Link href="/officina">Officina & Team</Link><Link href="/contatti">Contatti</Link></nav>
    <Link className="header-cta" href="/contatti">PRENOTA</Link>
  </header>;
}

export function Footer() {
  return <footer><Link className="logo" href="/"><span className="logo-mark">1</span><span>AUTOSERVICE <b>UNO</b></span></Link><p>Via Caboto 39/B · Milano</p><p>Officina · Gommista · Controlli · Soccorso stradale</p></footer>;
}
