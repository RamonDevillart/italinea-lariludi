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
    "móveis planejados Maricá",
    "móveis planejados Niterói",
    "móveis planejados São Gonçalo",
    "móveis planejados Rio de Janeiro",
    "Italínea Maricá",
    "Italínea Niterói",
    "Italínea São Gonçalo",
    "Italínea Rio de Janeiro",
  ],

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Italínea Grupo Lariludi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`/og-image.webp`],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true, 
      follow: true, 
      "max-video-preview": -1, 
      "max-image-preview": "large", 
      "max-snippet": -1, 
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org", 
    "@type": "FurnitureStore", 
    name: "Italínea Grupo Lariludi", 
    url: siteConfig.url, 
    description: "Loja especializada em móveis planejados Italínea.", 
    areaServed: [ 
      "Niterói", 
      "São Gonçalo",
      "Maricá", 
      "Rio de Janeiro", 
    ], 
    telephone: siteConfig.phone, 
  };
  return (
    <html lang="pt-BR">
      <body className={montserrat.variable}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema), }} />
        {children}
        </body>
    </html>
  );
}
