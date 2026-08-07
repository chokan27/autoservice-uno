import { Footer, Header } from "../components";

const mapUrl="https://www.google.com/maps/search/?api=1&query=Via+Caboto+39%2FB+Milano";

export default function Contatti(){return <main><Header />
  <section className="page-hero contact-heading"><p className="eyebrow">CONTATTI</p><h1>PARLIAMO<br /><span>DELLA TUA AUTO.</span></h1><p>Scegli il riferimento giusto oppure raggiungici direttamente in officina.</p></section>
  <section className="contact-grid">
    <article className="contact-person"><p className="eyebrow red">OFFICINA · APPUNTAMENTI · ACCETTAZIONE</p><div className="initial">C</div><h2>Cristian</h2><h3>Capo officina</h3><p>Il riferimento per organizzare controlli, interventi, appuntamenti e assistenza stradale.</p><span>CONTATTO IN AGGIORNAMENTO</span></article>
    <article className="contact-person"><p className="eyebrow red">AMMINISTRAZIONE · PRATICHE</p><div className="initial">I</div><h2>Ines</h2><h3>Amministrazione</h3><p>Il riferimento per documenti, informazioni e gestione amministrativa dell’officina.</p><span>CONTATTO IN AGGIORNAMENTO</span></article>
    <a className="location-card" href={mapUrl} target="_blank" rel="noreferrer"><p className="eyebrow">DOVE SIAMO</p><h2>VIA CABOTO<br />39/B, MILANO</h2><p>Apri le indicazioni e raggiungi direttamente Auto Service UNO.</p><strong>APRI GOOGLE MAPS ↗</strong></a>
  </section>
  <section className="team-note"><div><p className="eyebrow">IL TEAM IN OFFICINA</p><h2>MAURIZIO E DAVIDE</h2></div><p>Due meccanici al fianco di Cristian per manutenzione, controlli e riparazioni. Un gruppo piccolo, organizzato e sempre raggiungibile.</p></section>
  <section className="contact-bottom"><p className="eyebrow">AUTO SERVICE UNO · MILANO</p><h2>PASSA A TROVARCI.<br /><span>CI PRENDIAMO CURA DELLA TUA AUTO.</span></h2><a className="button primary" href={mapUrl} target="_blank" rel="noreferrer">COME ARRIVARE ↗</a></section>
  <Footer />
  </main>}
