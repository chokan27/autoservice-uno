import Link from "next/link";
import { FinalCta, Footer, Header, PageHero } from "../components";

const services = [
  ["Diagnosi elettronica", "Individuiamo guasti e anomalie con strumenti diagnostici professionali.", ["Lettura spie e centraline", "Ricerca guasti elettronici", "Controllo batteria e ricarica", "Reset e verifiche finali"]],
  ["Tagliandi e manutenzione", "Tutto il necessario per mantenere l’auto efficiente e affidabile.", ["Cambio olio e filtri", "Controllo livelli e liquidi", "Cinghie e manutenzione programmata", "Controllo generale del veicolo"]],
  ["Meccanica e sicurezza", "Riparazioni meccaniche e controllo dei componenti fondamentali per la guida.", ["Freni e pastiglie", "Sospensioni e ammortizzatori", "Scarico e componenti motore", "Frizione e organi meccanici"]],
  ["Pneumatici", "Assistenza completa per gomme, sicurezza e tenuta di strada.", ["Sostituzione pneumatici", "Montaggio ed equilibratura", "Riparazione forature", "Controllo usura e pressione"]],
  ["Controlli del veicolo", "Verifiche mirate prima di un viaggio o quando qualcosa non convince.", ["Controlli periodici", "Verifica luci e tergicristalli", "Controllo pre-viaggio", "Valutazione generale dell’auto"]],
  ["Soccorso stradale", "Assistenza e recupero del veicolo quando non puoi proseguire.", ["Recupero del veicolo", "Trasporto in officina", "Assistenza in caso di guasto", "Contatto diretto con Cristian"]],
];

export default function Servizi() { return <main><Header /><PageHero eyebrow="SERVIZI COMPLETI" title="TUTTO PER LA TUA AUTO." accent="SENZA COMPLICAZIONI." text="Dalla diagnosi al soccorso stradale: interventi chiari, concordati e organizzati in un’unica officina." /><section className="service-catalog">{services.map(([title,text,items],i)=><article key={title as string}><span className="card-mark">0{i+1}</span><h2>{title as string}</h2><p>{text as string}</p><ul>{(items as string[]).map(item=><li key={item}>{item}</li>)}</ul><Link href="/contatti">CHIEDI INFORMAZIONI →</Link></article>)}</section><section className="problem-band"><p className="eyebrow">NON SAI QUALE SERVIZIO SERVE?</p><div><h2>RACCONTACI IL PROBLEMA.</h2><p>Ti aiutiamo a individuare l’intervento giusto, con spiegazioni semplici.</p></div><Link className="button primary" href="/contatti">PARLA CON NOI →</Link></section><FinalCta eyebrow="PRENOTAZIONI" title="ORGANIZZIAMO IL PROSSIMO INTERVENTO." text="Descrivici il problema oppure indicaci il servizio che ti serve." /><Footer /></main>; }
