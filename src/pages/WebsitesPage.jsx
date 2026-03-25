import { Link } from 'react-router-dom';

export default function WebsitesPage() {
  return (
    <section className="container section-block narrow-page">
      <span className="badge">Sites e landing pages</span>
      <h1>Visual premium, direção estratégica e páginas pensadas para vender mais.</h1>
      <p className="lead">Não basta ter presença online. O site precisa transmitir valor, gerar confiança e conduzir o visitante para a ação certa.</p>
      <div className="content-list glass neon-frame">
        <div><strong>Objetivo:</strong><span>passar autoridade, destacar a marca e aumentar a conversão com uma experiência mais fluida.</span></div>
        <div><strong>Visual:</strong><span>estética premium, neons dinâmicos, glow elegante e sensação tecnológica de alto valor.</span></div>
        <div><strong>Estratégia:</strong><span>CTA fortes, páginas com objetivo claro e uma navegação que guia o cliente.</span></div>
      </div>
      <div className="cta-row">
        <Link to="/contato" className="btn btn-primary neon-btn">Quero um site assim</Link>
        <Link to="/comecar" className="btn btn-secondary">Voltar para o início</Link>
      </div>
    </section>
  );
}
