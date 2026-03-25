import { Link } from 'react-router-dom';

export default function SystemsPage() {
  return (
    <section className="container section-block narrow-page">
      <span className="badge">Sistemas sob medida</span>
      <h1>Um sistema próprio para organizar o seu negócio com mais controle e mais escala.</h1>
      <p className="lead">Quando a operação cresce sem estrutura, aparecem confusão, retrabalho e perda de dinheiro. Um sistema sob medida resolve isso com organização real.</p>
      <div className="content-list glass neon-frame">
        <div><strong>Para quem é:</strong><span>negócios que precisam controlar pedidos, clientes, financeiro, produção ou fluxo interno.</span></div>
        <div><strong>O que entrega:</strong><span>mais visibilidade da operação, menos improviso e uma base melhor para crescer.</span></div>
        <div><strong>Posicionamento:</strong><span>não é só software. É estrutura operacional com cara de negócio profissional.</span></div>
      </div>
      <div className="cta-row">
        <Link to="/contato" className="btn btn-primary neon-btn">Quero meu sistema</Link>
        <Link to="/projetos" className="btn btn-secondary">Ver projetos</Link>
      </div>
    </section>
  );
}
