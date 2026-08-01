import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/archivo-latin.woff2",
  variable: "--font-display",
  weight: "100 900",
  display: "swap",
});
const ui = localFont({
  src: [
    { path: "./fonts/barlow-500.woff2", weight: "500" },
    { path: "./fonts/barlow-600.woff2", weight: "600" },
    { path: "./fonts/barlow-700.woff2", weight: "700" },
    { path: "./fonts/barlow-800.woff2", weight: "800" },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Site under maintenance | Auto Service UNO",
  description: "Il sito di Auto Service UNO è temporaneamente in manutenzione.",
  icons: { icon: "/autoservice-uno/favicon.svg", shortcut: "/autoservice-uno/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  void children;
  return (
    <html lang="it">
      <body className={`${archivo.variable} ${ui.variable}`}>
        <main className="maintenance-page">
          <div className="maintenance-accent" aria-hidden="true" />
          <section className="maintenance-card" aria-labelledby="maintenance-title">
            <p className="maintenance-brand">AUTO SERVICE <strong>UNO</strong> · MILANO</p>
            <h1 id="maintenance-title">SITE UNDER<br /><span>MAINTENANCE</span></h1>
            <p>Stiamo lavorando al nuovo sito. Torneremo online presto.</p>
            <div className="maintenance-line" aria-hidden="true" />
            <address>Via Caboto 39/B · Milano</address>
          </section>
        </main>
      </body>
    </html>
  );
}
