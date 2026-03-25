const samples = [
  { title: 'Sistema de pedidos', text: 'Estrutura pensada para operação, agilidade e organização em ambiente comercial.' },
  { title: 'Landing page premium', text: 'Página de alto impacto visual com CTA fortes e foco em captação de leads.' },
  { title: 'Automação operacional', text: 'Fluxo digital para reduzir tarefas manuais e aumentar clareza do processo.' },
];

export default function ProjectsPage() {
  return (
    <section className="container section-block">
      <div className="section-head">
        <span className="badge">Projetos</span>
        <h1>Exemplos de estrutura e direção criativa.</h1>
        <p>Essa área ajuda a reforçar confiança e mostrar o tipo de solução que a Digital Aragão desenvolve.</p>
      </div>
      <div className="feature-grid">
        {samples.map((item) => (
          <div key={item.title} className="feature-card glass neon-frame project-card">
            <div className="project-thumb" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
