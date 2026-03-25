const faqs = [
  {
    q: 'Quanto tempo leva para um projeto ficar pronto?',
    a: 'Depende da complexidade, mas a estrutura do site já foi pensada para apresentar isso com clareza e facilitar a negociação.'
  },
  {
    q: 'Preciso entender de tecnologia para contratar?',
    a: 'Não. A proposta da Digital Aragão é traduzir o problema do negócio em uma solução mais clara e mais eficiente.'
  },
  {
    q: 'O projeto pode crescer depois?',
    a: 'Sim. A estrutura é pensada para evoluir com novas páginas, novos módulos e novas etapas.'
  },
  {
    q: 'Vocês fazem só sites?',
    a: 'Não. A Digital Aragão trabalha com automação, sistemas sob medida e páginas de venda com foco em conversão.'
  }
];

export default function FAQPage() {
  return (
    <section className="container section-block narrow-page">
      <div className="section-head">
        <span className="badge">Central de dúvidas</span>
        <h1>Remova objeções antes mesmo do cliente perguntar.</h1>
        <p>Essa página ajuda a passar mais segurança, deixar o processo mais claro e apoiar a conversão.</p>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <div key={item.q} className="faq-item glass neon-frame">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
