import { MoveRight } from 'lucide-react'
import { GlassCard, SectionTitle } from '../components/Layout'
import { Link } from 'react-router-dom'

const paths = [
  ['Quero automatizar processos', '/automacao', 'Para quem está perdendo tempo com tarefas repetitivas, retrabalho e etapas manuais.'],
  ['Quero um sistema sob medida', '/sistemas', 'Para quem precisa organizar a operação com uma solução construída para o seu negócio.'],
  ['Quero um site que venda melhor', '/sites', 'Para quem quer presença premium, mais autoridade e páginas com foco real em conversão.'],
]

export default function StartPage() {
  return (
    <section className="container page-section">
      <SectionTitle
        eyebrow="Começar"
        title="Escolha o caminho certo para o seu objetivo de agora."
        text="Aqui você entra pela necessidade real do seu negócio. Assim a conversa já começa com mais clareza, estratégia e direção."
      />

      <div className="cards-grid three">
        {paths.map(([title, link, text]) => (
          <GlassCard key={link}>
            <Link to={link} className="path-card">
              <h3>{title}</h3>
              <p>{text}</p>
              <span>Seguir por esse caminho <MoveRight size={16} /></span>
            </Link>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
