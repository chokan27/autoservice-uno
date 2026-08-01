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
  title: "Autoservice UNO | Officina e Gommista a Milano",
  description: "Autoriparazioni, servizio gommista e controlli auto in Via Caboto 39/B a Milano.",
  icons: { icon: "/autoservice-uno/favicon.svg", shortcut: "/autoservice-uno/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body className={`${archivo.variable} ${ui.variable}`}>{children}</body></html>;
}
