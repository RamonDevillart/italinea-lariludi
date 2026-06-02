import { siteConfig } from "@/data/site";

export function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Olá! Quero falar com a Italínea Grupo Lariludi.")}`;

  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Móveis planejados Italínea</p>
          <p>Somos a maior rede de lojas de móveis planejados da América Latina. Mais do que isso, somos especialistas em realizar projetos de vida feliz.</p>
          <h1>Projetos sob medida para transformar seu ambiente.</h1>
          <p>
            Cozinhas, dormitórios, closets, salas e ambientes corporativos planejados com elegância,
            funcionalidade e atendimento consultivo do Grupo Lariludi.
          </p>
          <div className="hero-actions">
            <a className="btn btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
            <a className="btn btn-outline" href="#portfolio">
              Ver ambientes
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Destaques">
          <strong>100%</strong>
          <span>projetos personalizados para sua rotina</span>
          <div className="stats">
            <div><strong>6+</strong><span>ambientes</span></div>
            <div><strong>1</strong><span>projeto exclusivo</span></div>
            <div><strong>360º</strong><span>atendimento</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
