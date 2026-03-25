import { GlassCard, NeonButton, SectionTitle } from '../components/Layout'
import { Cog, LayoutTemplate, Box, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Cog,
    title: 'Automação de processos',
    text: 'Mais velocidade, menos tarefas manuais e mais consistência operacional.',
    link: '/automacao',
  },
  {
    icon: Box,
    title: 'Sistemas sob medida',
    text: 'Plataformas e painéis criados para a rotina real do seu negócio.',
    link: '/sistemas',
  },
  {
    icon: LayoutTemplate,
    title: 'Sites e landing pages',
    text: 'Presença digital premium com foco em valor percebido e conversão.',
    link: '/sites',
  },
]

export default function SolutionsPage() {
  return (
    <section className="container page-section">
      <SectionTitle
        eyebrow="Soluções"
        title="O que a Digital Aragão faz melhor"
        text="Cada frente tem um papel claro: organizar, vender melhor e preparar o negócio para crescer com mais estrutura."
      />

      <div className="cards-grid three">
        {solutions.map((item) => {
          const Icon = item.icon
          return (
            <GlassCard key={item.title}>
              <div className="solution-card">
                <div className="icon-box"><Icon size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.link} className="text-link">Ver detalhes <ArrowRight size={16} /></a>
              </div>
            </GlassCard>
          )
        })}
      </div>

      <div className="center-actions">
        <NeonButton to="/contato">Quero conversar sobre meu caso</NeonButton>
      </div>
    </section>
  )
}
