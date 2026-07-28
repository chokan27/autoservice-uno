import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ variable: "--font-display", subsets: ["latin"] });
const mono = Space_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Autoservice UNO | Officina e Gommista a Milano",
  description: "Autoriparazioni, servizio gommista e controlli auto in Via Caboto 39/B a Milano.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body className={`${archivo.variable} ${mono.variable}`}>{children}</body></html>;
}
