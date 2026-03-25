import { GlassCard, SectionTitle } from '../components/Layout'

const faq = [
  {
    question: 'Como funciona o processo?',
    answer:
      'Primeiro entendemos seu objetivo. Depois organizamos a solução, definimos o escopo e evoluímos o projeto com foco em clareza, presença premium e conversão.',
  },
  {
    question: 'Vocês fazem só o visual do site?',
    answer:
      'Não. A proposta da Digital Aragão é unir estratégia, estrutura, copy, design e tecnologia para gerar resultado real, não apenas aparência bonita.',
  },
  {
    question: 'Posso começar com uma versão menor?',
    answer:
      'Sim. O projeto pode nascer com uma base forte e evoluir por etapas, sem perder consistência visual nem direção comercial.',
  },
  {
    question: 'O site já pode ir para o GitHub e Render?',
    answer:
      'Sim. A estrutura foi pensada para deploy simples, especialmente em ambientes como GitHub e Render, com foco em velocidade e praticidade.',
  },
]

export default function FaqPage() {
  return (
    <section className="container page-section">
      <SectionTitle
        eyebrow="FAQ"
        title="Perguntas que normalmente aparecem antes da decisão."
        text="Esta página ajuda a quebrar objeções, reduzir insegurança e deixar o visitante mais próximo da ação."
        align="center"
      />

      <div className="feature-grid three-col">
        {faq.map((item) => (
          <GlassCard key={item.question}>
            <div className="content-box">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
