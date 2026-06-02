import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Italínea Grupo Lariludi",
  },
  description: siteConfig.description,
  keywords: [
    "móveis planejados",
    "cozinha planejada",
    "Italínea",
    "Grupo Lariludi",
    "closet planejado",
    "quarto planejado",
    "sala planejada",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
