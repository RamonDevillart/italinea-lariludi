import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ambientes, CTA, Diferenciais, Footer, Portfolio } from "@/components/Sections";
import { siteConfig } from "@/data/site";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "BR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Ambientes />
        <Diferenciais />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
