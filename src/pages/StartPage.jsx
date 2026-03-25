import { Link } from 'react-router-dom';

const choices = [
  { title: 'Quero automatizar processos', text: 'Para reduzir retrabalho, acelerar a operação e organizar melhor a rotina.', to: '/automacao' },
  { title: 'Quero criar um sistema', text: 'Para controlar pedidos, clientes, finanças ou uma operação específica do negócio.', to: '/sistemas' },
  { title: 'Quero um site que venda', text: 'Para ter presença premium, mais autoridade e uma estrutura melhor de conversão.', to: '/sites' },
];

export default function StartPage() {
  return (
    <section className="container section-block">
      <div className="section-head center-head">
        <span className="badge">Página inteligente de entrada</span>
        <h1>O que você precisa resolver hoje?</h1>
        <p>Escolha o caminho ideal e vá direto para a página certa. Isso reduz dúvida e acelera a decisão.</p>
      </div>
      <div className="feature-grid">
        {choices.map((item) => (
          <Link key={item.title} to={item.to} className="feature-card glass neon-frame action-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="card-link">Ir para essa solução</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
