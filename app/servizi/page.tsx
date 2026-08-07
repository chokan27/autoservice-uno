import Link from "next/link";
import { FinalCta, Footer, Header } from "../components";

const services = [
  {title:"Diagnosi elettronica",intro:"Individuiamo con precisione guasti e anomalie prima di intervenire.",items:["Lettura spie e centraline","Ricerca guasti elettronici","Controllo batteria e ricarica","Reset e verifiche dopo l’intervento"]},
  {title:"Tagliandi e manutenzione",intro:"La manutenzione periodica necessaria per mantenere l’auto efficiente.",items:["Cambio olio e filtri","Controllo livelli e liquidi","Cinghie e manutenzione programmata","Controllo generale del veicolo"]},
  {title:"Meccanica generale",intro:"Riparazioni meccaniche e componenti fondamentali per una guida sicura.",items:["Motore e organi meccanici","Frizione e trasmissione","Scarico e raffreddamento","Ricerca rumori e anomalie"]},
  {title:"Freni e sospensioni",intro:"Controlliamo i componenti che incidono direttamente sulla sicurezza.",items:["Freni e pastiglie","Dischi e liquido freni","Ammortizzatori e sospensioni","Controllo componenti di sicurezza"]},
  {title:"Gommista",intro:"Pneumatici controllati e montati correttamente in ogni stagione.",items:["Sostituzione pneumatici","Montaggio ed equilibratura","Riparazione forature","Controllo usura e pressione"]},
  {title:"Controlli del veicolo",intro:"Verifiche mirate prima di un viaggio, una scadenza o un acquisto.",items:["Controlli periodici","Verifica luci e tergicristalli","Controllo pre-viaggio","Valutazione generale dell’auto"]},
  {title:"Batterie e impianto elettrico",intro:"Controlli rapidi per avviamento, ricarica e principali componenti elettrici.",items:["Test batteria","Controllo alternatore","Verifica avviamento","Sostituzione batteria"]},
  {title:"Soccorso stradale",intro:"Assistenza quando l’auto si ferma e hai bisogno di una soluzione rapida.",items:["Recupero del veicolo","Trasporto in officina","Assistenza in caso di guasto","Contatto diretto con Cristian"]},
];

export default function Servizi(){return <main><Header />
  <section className="page-hero"><p className="eyebrow">SERVIZI COMPLETI</p><h1>OGNI PROBLEMA.<br /><span>UNA SOLUZIONE CONCRETA.</span></h1><p>Dalla diagnosi al soccorso stradale: spiegazioni chiare, lavori concordati e un team sempre raggiungibile.</p></section>
  <section className="catalog-intro"><p className="eyebrow red">ASSISTENZA COMPLETA</p><h2>DIAGNOSI, MANUTENZIONE<br />E SICUREZZA.</h2><p>I servizi sono organizzati per aiutarti a trovare rapidamente ciò che serve, anche quando non conosci ancora la causa del problema.</p></section>
  <section className="service-catalog">{services.map(s=><article key={s.title}><span className="card-mark" aria-hidden="true">◆</span><h2>{s.title}</h2><p>{s.intro}</p><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul><Link href="/contatti">CHIEDI INFORMAZIONI →</Link></article>)}</section>
  <section className="problem-band"><p className="eyebrow">NON SAI QUALE SERVIZIO SERVE?</p><div><h2>RACCONTACI COSA SUCCEDE.</h2><p>Ascoltiamo il problema, individuiamo la causa e ti proponiamo l’intervento più adatto.</p></div><Link className="button outline" href="/contatti">PARLA CON NOI →</Link></section>
  <FinalCta eyebrow="AUTO SERVICE UNO · MILANO" title="ORGANIZZIAMO IL TUO INTERVENTO." text="Contatta Cristian per appuntamenti, accettazione e assistenza in officina." />
  <Footer />
  </main>}
