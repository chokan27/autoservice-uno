import type { Metadata } from "next";
import { Archivo, Barlow } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ variable: "--font-display", subsets: ["latin"] });
const ui = Barlow({ variable: "--font-mono", subsets: ["latin"], weight: ["500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Autoservice UNO | Officina e Gommista a Milano",
  description: "Autoriparazioni, servizio gommista e controlli auto in Via Caboto 39/B a Milano.",
  icons: { icon: "/autoservice-uno/favicon.svg", shortcut: "/autoservice-uno/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body className={`${archivo.variable} ${ui.variable}`}>{children}</body></html>;
}
