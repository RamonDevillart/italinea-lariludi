import Image from "next/image";
import { ambientes, diferenciais, portfolio, siteConfig } from "@/data/site";

export function Ambientes() {
  return (
    <section id="ambientes" className="section ambientes">
      <div className="container">
        <p className="eyebrow">Ambientes planejados</p>
        <h2 className="section-title">Soluções para cada espaço da sua casa ou empresa.</h2>
        <p className="section-description">
          Desenvolvemos projetos que unem beleza, aproveitamento inteligente dos espaços e conforto para sua rotina.
        </p>
        <div className="ambiente-list">
          {ambientes.map((item) => <div className="ambiente-item" key={item}>{item}</div>)}
        </div>
      </div>
    </section>
  );
}

export function Diferenciais() {
  return (
    <section id="diferenciais" className="section">
      <div className="container">
        <p className="eyebrow">Por que escolher</p>
        <h2 className="section-title">Atendimento completo para tirar seu projeto do papel.</h2>
        <div className="card-grid">
          {diferenciais.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="section ambientes">
      <div className="container">
        <p className="eyebrow">Inspiração</p>
        <h2 className="section-title">Ambientes com design, funcionalidade e sofisticação.</h2>
        <p className="section-description">
          Substitua essas imagens por fotos reais dos projetos do Grupo Lariludi para aumentar autoridade e conversão.
        </p>
        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <article className="portfolio-item" key={item.title}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 25vw" />
              <span>{item.title}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Olá! Quero solicitar um projeto de móveis planejados.")}`;
  return (
    <section id="contato" className="section cta">
      <div className="container">
        <p className="eyebrow" style={{ color: "rgba(255,255,255,.72)" }}>Solicite seu orçamento</p>
        <h2 className="section-title">Vamos planejar seu próximo ambiente?</h2>
        <p className="section-description">
          Fale com a equipe Italínea Grupo Lariludi e receba atendimento para criar um projeto sob medida.
        </p>
        <a className="btn btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  console.log(siteConfig.address);
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Italínea Grupo Lariludi</h3>
          <p>Móveis planejados com projeto personalizado e padrão Italínea.</p>
        </div>
        <div>
          <h3>Contato</h3>
          {siteConfig.phone.map((phone) => (
            <a href={`tel:${phone.tel.replace(/\D/g, "")}`} key={phone.tel}>
              <p key={phone.tel}>{phone.loja}: {phone.tel}</p>
            </a>
          ))}          
        </div>
        <div>
          <h3>Endereço</h3>
          <a href={siteConfig.links[0]} target="_blank" rel="noreferrer">
            {siteConfig.address[0]}
          </a>
          <p>{siteConfig.city}</p>
          <a href={siteConfig.links[1]} target="_blank" rel="noreferrer">
            {siteConfig.address[1]}
          </a>
          <p>{siteConfig.city}</p>
        </div>
      </div>
    </footer>
  );
}
