import Link from "next/link";
import { Footer, Header } from "../components";

const services=[
  {n:"01",title:"Diagnosi elettronica",intro:"Individuiamo con precisione guasti e anomalie prima di intervenire.",items:["Lettura spie e centraline","Ricerca guasti elettronici","Controllo batteria e ricarica","Reset e verifiche dopo l’intervento"]},
  {n:"02",title:"Tagliandi e manutenzione",intro:"La manutenzione periodica necessaria per mantenere l’auto efficiente.",items:["Cambio olio e filtri","Controllo livelli e liquidi","Cinghie e manutenzione programmata","Controllo generale del veicolo"]},
  {n:"03",title:"Meccanica e sicurezza",intro:"Riparazioni meccaniche e componenti fondamentali per la guida.",items:["Freni e pastiglie","Sospensioni e ammortizzatori","Scarico e componenti motore","Frizione e organi meccanici"]},
  {n:"04",title:"Gommista",intro:"Pneumatici controllati e montati correttamente in ogni stagione.",items:["Sostituzione pneumatici","Montaggio ed equilibratura","Riparazione forature","Controllo usura e pressione"]},
  {n:"05",title:"Controlli del veicolo",intro:"Verifiche mirate prima di un viaggio, una scadenza o un acquisto.",items:["Controlli periodici","Verifica luci e tergicristalli","Controllo pre-viaggio","Valutazione generale dell’auto"]},
  {n:"06",title:"Soccorso stradale",intro:"Assistenza quando l’auto si ferma e hai bisogno di una soluzione rapida.",items:["Recupero del veicolo","Trasporto in officina","Assistenza in caso di guasto","Contatto diretto con Cristian"]},
];

export default function Servizi(){return <main><Header /><section className="page-head"><p className="eyebrow">SERVIZI COMPLETI</p><h1>OGNI PROBLEMA.<br /><span>UNA SOLUZIONE CONCRETA.</span></h1><p>Dalla diagnosi al soccorso stradale: spiegazioni chiare, lavori concordati e un team sempre raggiungibile.</p></section><section className="detailed-services">{[services.slice(0,3),services.slice(3)].map((row,index)=><div className="service-row" key={index}>{row.map(s=><article key={s.n}><h2>{s.title}</h2><p>{s.intro}</p><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul><Link href="/contatti">CHIEDI INFORMAZIONI →</Link></article>)}</div>)}</section><section className="friendly-cta"><div><p className="eyebrow">NON SAI QUALE SERVIZIO SERVE?</p><h2>RACCONTACI IL PROBLEMA.</h2><p>Individuiamo la causa e ti proponiamo la soluzione più adatta, con chiarezza e senza sorprese.</p></div><Link className="button red-button" href="/contatti">PARLA CON NOI →</Link></section><Footer /></main>}
