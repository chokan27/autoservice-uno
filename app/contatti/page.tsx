import { Footer, Header } from "../components";

const mapUrl="https://www.google.com/maps/search/?api=1&query=Via+Caboto+39%2FB+Milano";

export default function Contatti(){return <main><Header />
  <section className="contact-hero"><p className="eyebrow">CONTATTI</p><h1>PARLIAMO<br /><span>DELLA TUA AUTO.</span></h1><p>Scegli il riferimento giusto oppure vieni direttamente in officina.</p></section>
  <section className="contact-directory">
    <article className="contact-card"><small>APPUNTAMENTI · ACCETTAZIONE · SOCCORSO</small><h2>Cristian</h2><p>Capo officina. Il riferimento per organizzare controlli, interventi e assistenza stradale.</p><span>OFFICINA E APPUNTAMENTI</span></article>
    <article className="contact-card"><small>AMMINISTRAZIONE E PRATICHE</small><h2>Ines</h2><p>Il riferimento per documenti, informazioni e gestione amministrativa.</p><span>GESTIONE AMMINISTRATIVA</span></article>
    <a className="contact-card contact-location" href={mapUrl} target="_blank" rel="noreferrer"><small>DOVE SIAMO</small><h2>Via Caboto 39/B</h2><p>Milano. Indicazioni rapide per raggiungere direttamente Autoservice UNO.</p><span>APRI GOOGLE MAPS ↗</span></a>
  </section>
  <section className="contact-final"><div><p className="eyebrow">AUTOSERVICE UNO · MILANO</p><h2>PASSA A TROVARCI IN OFFICINA.</h2><p>I recapiti telefonici saranno inseriti appena disponibili.</p></div><a className="button red-button" href={mapUrl} target="_blank" rel="noreferrer">COME ARRIVARE <span>↗</span></a></section>
  <Footer /></main>}
