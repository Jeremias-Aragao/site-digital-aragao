import { GlassCard, SectionTitle } from '../components/Layout'

const faqs = [
  ['Quanto tempo leva?', 'Depende da complexidade. Páginas mais diretas tendem a sair mais rápido; projetos maiores pedem escopo e cronograma.'],
  ['Vocês fazem só site?', 'Não. A Digital Aragão também trabalha com automação de processos e sistemas sob medida.'],
  ['O site já fica pronto para hospedar?', 'Sim. A estrutura dessa versão já foi pensada para GitHub e Render.'],
  ['Dá para integrar formulário e pagamento?', 'Sim. O projeto pode ser conectado a ferramentas de lead, automação, checkout e meios de pagamento.'],
]

export default function FaqPage() {
  return (
    <section className="container page-section">
      <SectionTitle
        eyebrow="FAQ"
        title="Dúvidas que normalmente travam a decisão do cliente"
        text="Uma boa central de perguntas reduz insegurança e tira peso da conversa comercial."
      />

      <div className="faq-list">
        {faqs.map(([q, a]) => (
          <GlassCard key={q}>
            <div className="faq-item">
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
