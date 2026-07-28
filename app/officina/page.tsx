import Link from "next/link";
import { Footer, Header } from "../components";

const people=[["Ines","Amministrazione e pratiche"],["Cristian","Capo officina, appuntamenti e accettazione"],["Maurizio","Meccanico"],["Davide","Meccanico"]];

export default function Officina(){return <main><Header /><section className="about-page"><div className="about-photo"/><div className="about-text"><p className="eyebrow red-text">AUTOSERVICE UNO</p><h1>PROFESSIONALITÀ.<br /><span>SENZA DISTANZE.</span></h1><p>Autoservice UNO nasce dal progetto di Ines e Cristian: un’officina indipendente dove il lavoro ben fatto incontra un rapporto semplice e diretto.</p><ul><li>Spiegazioni chiare prima degli interventi</li><li>Lavori concordati e organizzati</li><li>Un team tecnico sempre presente</li></ul><Link className="button red-button" href="/contatti">PARLA CON NOI →</Link></div></section><section className="team-row">{people.map(([name,role],i)=><article key={name}><small>0{i+1}</small><div>{name[0]}</div><h2>{name}</h2><p>{role}</p></article>)}</section><Footer /></main>}
