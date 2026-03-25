import { GlassCard, SectionTitle, Badge } from '../components/Layout'

const projects = [
  ['Landing page premium', 'Estrutura focada em valor percebido, CTA forte e experiência visual memorável.'],
  ['Sistema interno', 'Organização de operação com clareza de fluxo e foco em produtividade.'],
  ['Página de venda', 'Layout persuasivo para oferta específica com maior poder de conversão.'],
]

export default function ProjectsPage() {
  return (
    <section className="container page-section">
      <SectionTitle
        eyebrow="Projetos"
        title="Exemplos de direção visual e estratégica para elevar o nível da marca."
        text="Aqui você pode usar prints reais, telas de projetos, imagens de sistemas e páginas já concluídas. Nesta versão, deixei a estrutura pronta para isso."
      />

      <div className="cards-grid three">
        {projects.map(([title, text]) => (
          <GlassCard key={title}>
            <div className="project-card">
              <div className="project-thumb">Espaço para print</div>
              <Badge>{title}</Badge>
              <p>{text}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
