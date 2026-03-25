import { GlassCard, NeonButton, SectionTitle } from '../components/Layout'

const items = [
  'Mapeamento do processo atual',
  'Redução de tarefas repetitivas',
  'Mais velocidade operacional',
  'Menos falha manual e mais consistência',
]

export default function AutomationPage() {
  return (
    <section className="container page-section">
      <SectionTitle
        eyebrow="Automação de processos"
        title="Se o processo é repetitivo, ele está te custando tempo, energia e dinheiro."
        text="Automação não é luxo. É ganho real de produtividade. A proposta aqui é transformar um fluxo manual e cansativo em algo mais leve, rápido e controlável."
      />

      <div className="split-section">
        <GlassCard>
          <div className="feature-stack">
            {items.map((item) => <div key={item}>{item}</div>)}
          </div>
        </GlassCard>
        <GlassCard>
          <div className="content-box">
            <h3>Quando faz sentido automatizar?</h3>
            <p>Quando existe repetição, dependência de etapas humanas, atraso entre tarefas e perda de controle em processos internos.</p>
            <p>Esse tipo de solução faz sentido para operações administrativas, atendimento, rotinas comerciais, fluxos internos e processos digitais de várias naturezas.</p>
            <NeonButton to="/contato">Solicitar análise de automação</NeonButton>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
