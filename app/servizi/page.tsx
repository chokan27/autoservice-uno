import Link from "next/link";
import { Footer, Header } from "../components";

const services=[
  ["01","Autoriparazioni","Manutenzione ordinaria e straordinaria, diagnosi e riparazioni meccaniche."],
  ["02","Gommista","Montaggio, equilibratura e riparazione pneumatici per ogni stagione."],
  ["03","Controlli","Verifiche periodiche e controlli generali per viaggiare in sicurezza."],
  ["04","Soccorso stradale","Assistenza e recupero del veicolo in caso di fermo o guasto."],
];

export default function Servizi(){return <main><Header /><section className="page-head"><p className="eyebrow">I NOSTRI SERVIZI</p><h1>TUTTO QUELLO CHE SERVE.<br /><span>FATTO BENE.</span></h1><p>Un unico punto di riferimento per la manutenzione e la sicurezza della tua auto.</p></section><section className="service-page-grid">{services.map(([n,title,text])=><article key={n}><small>{n}</small><div className="service-icon">{n==="01"?"⚙":n==="02"?"●":n==="03"?"✓":"+"}</div><h2>{title}</h2><p>{text}</p><Link href="/contatti">RICHIEDI INFORMAZIONI →</Link></article>)}</section><Footer /></main>}
