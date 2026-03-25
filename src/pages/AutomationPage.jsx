import { Link } from 'react-router-dom';

export default function AutomationPage() {
  return (
    <section className="container section-block narrow-page">
      <span className="badge">Automação de processos</span>
      <h1>Pare de perder tempo com etapas manuais que travam sua operação.</h1>
      <p className="lead">A proposta aqui é clara: reduzir retrabalho, acelerar execução e dar mais controle ao negócio com processos automatizados e mais inteligentes.</p>
      <div className="content-list glass neon-frame">
        <div><strong>Dor:</strong><span>planilhas confusas, tarefas repetitivas, demora e dependência excessiva de pessoas.</span></div>
        <div><strong>Solução:</strong><span>criação de fluxo digital mais organizado, reduzindo gargalo e aumentando produtividade.</span></div>
        <div><strong>Benefício:</strong><span>menos erro, mais velocidade, mais clareza e mais estrutura para crescer.</span></div>
      </div>
      <div className="cta-row">
        <Link to="/contato" className="btn btn-primary neon-btn">Quero automatizar meu negócio</Link>
        <Link to="/faq" className="btn btn-secondary">Tirar dúvidas</Link>
      </div>
    </section>
  );
}
