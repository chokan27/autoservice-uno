"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const services = [
  ["Diagnosi elettronica", "Ricerca guasti, spie e anomalie."],
  ["Tagliandi", "Olio, filtri e manutenzione programmata."],
  ["Meccanica", "Freni, sospensioni e riparazioni."],
  ["Gommista", "Montaggio, equilibratura e riparazioni."],
  ["Controlli", "Verifiche generali e sicurezza."],
  ["Soccorso stradale", "Assistenza e recupero del veicolo."],
];

export function HomeMotion() {
  const motionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = motionRef.current;
    if (!element) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const header = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
      const distance = Math.max(1, rect.height - window.innerHeight + header);
      const progress = Math.min(1, Math.max(0, (header - rect.top) / distance));
      element.style.setProperty("--slide-progress", progress.toFixed(4));
      element.style.setProperty("--slide-x", `${(-progress * 50).toFixed(3)}%`);
      element.style.setProperty("--progress-width", `${(progress * 100).toFixed(2)}%`);
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="home-motion" ref={motionRef}>
    <div className="home-stage">
      <div className="home-track">
        <section className="home-hero home-panel">
          <div className="home-copy">
            <p className="eyebrow">AUTOSERVICE UNO · MILANO</p>
            <h1>LA TUA AUTO,<br /><span>IL NOSTRO MESTIERE.</span></h1>
            <p>Autoriparazioni, pneumatici, controlli e soccorso stradale. Competenza concreta e un contatto sempre diretto.</p>
            <div className="actions"><Link className="button red-button" href="/contatti">PRENOTA UN APPUNTAMENTO <span>→</span></Link><Link className="button ghost-button" href="/servizi">SCOPRI I SERVIZI</Link></div>
          </div>
          <div className="scroll-cue" aria-hidden="true"><span>SCORRI PER I SERVIZI</span><b>→</b></div>
        </section>

        <section className="home-services home-panel">
          <div className="home-services-title"><p className="eyebrow">I NOSTRI SERVIZI</p><h2>TUTTO PER LA TUA AUTO.</h2><Link href="/servizi">VEDI TUTTI I DETTAGLI →</Link></div>
          <div className="home-services-grid six">
            {services.map(([title, description]) => <Link href="/servizi" key={title}><h3>{title}</h3><p>{description}</p><span>→</span></Link>)}
          </div>
          <div className="services-watermark" aria-hidden="true"><span>DIAGNOSI</span><span>MECCANICA</span><span>PNEUMATICI</span></div>
        </section>
      </div>
      <div className="motion-progress" aria-hidden="true"><span /></div>
    </div>
  </div>;
}
