import { siteConfig } from "@/data/site";
import Image from "next/image";

export function Header() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento de móveis planejados.")}`;
  
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo" aria-label="Página inicial">
          <Image src="/images/logo-italinea.png" alt="Italínea Grupo Lariludi" width={141} height={45} />
          <span style={{ marginLeft: '10px' }}>Lariludi</span>
        </a>

        <nav className="nav" aria-label="Menu principal">
          <a href="#ambientes">Ambientes</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#portfolio">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="btn btn-primary btn-orcamento" href={whatsappUrl} target="_blank" rel="noreferrer">
          Orçamento
        </a>
      </div>
    </header>
  );
}
