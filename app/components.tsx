import Link from "next/link";

const base = "/autoservice-uno";

export function Header() {
  return <>
    <div className="topbar"><span>Via Caboto 39/B · Milano</span><span>Officina · Gommista · Soccorso stradale</span></div>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Auto Service UNO, Home">
        <img src={`${base}/logo-auto-service.png`} alt="Auto Service UNO · Officina e Gommista" />
      </Link>
      <nav aria-label="Navigazione principale">
        <Link href="/">Home</Link><Link href="/servizi">Servizi</Link><Link href="/officina">Officina</Link><Link href="/contatti">Contatti</Link>
      </nav>
      <Link className="header-cta" href="/contatti">PRENOTA <span>→</span></Link>
    </header>
  </>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-brand"><img src={`${base}/logo-auto-service.png`} alt="Auto Service UNO" /><p>Competenza concreta, spiegazioni chiare e un contatto sempre diretto.</p></div>
    <div><p className="footer-label">DOVE SIAMO</p><p>Via Caboto 39/B<br />Milano</p></div>
    <div><p className="footer-label">ESPLORA</p><Link href="/servizi">Tutti i servizi</Link><Link href="/officina">Officina e team</Link><Link href="/contatti">Contatti</Link></div>
    <div><p className="footer-label">PARLIAMO DELLA TUA AUTO</p><Link className="footer-action" href="/contatti">PRENOTA →</Link></div>
  </footer>;
}

export function PageHero({ eyebrow, title, accent, text }: { eyebrow: string; title: string; accent: string; text: string }) {
  return <section className="page-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}<br /><span>{accent}</span></h1><p>{text}</p></section>;
}

export function FinalCta({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="final-cta"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div><Link className="button dark-button" href="/contatti">PRENOTA UN APPUNTAMENTO <span>→</span></Link></section>;
}
