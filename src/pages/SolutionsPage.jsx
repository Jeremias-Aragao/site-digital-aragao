import { Link } from 'react-router-dom';

const pages = [
  { title: 'Automação de processos', text: 'Para negócios que perdem tempo com tarefas repetitivas, etapas manuais e operação desorganizada.', to: '/automacao' },
  { title: 'Sistemas sob medida', text: 'Para estruturar o negócio com uma solução própria, focada no seu fluxo e no seu crescimento.', to: '/sistemas' },
  { title: 'Sites e landing pages', text: 'Para gerar autoridade, apresentar a marca com mais força e criar uma estrutura que venda melhor.', to: '/sites' },
];

export default function SolutionsPage() {
  return (
    <section className="container section-block">
      <div className="section-head">
        <span className="badge">Soluções</span>
        <h1>Cada página vende uma solução específica.</h1>
        <p>Em vez de colocar tudo em um único lugar, a Digital Aragão trabalha com páginas mais focadas para aumentar clareza e conversão.</p>
      </div>
      <div className="feature-grid">
        {pages.map((item) => (
          <div key={item.title} className="feature-card glass neon-frame">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link className="btn btn-secondary inline-btn" to={item.to}>Abrir página</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
