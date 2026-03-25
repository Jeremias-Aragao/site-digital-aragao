import { GlassCard, NeonButton, SectionTitle } from '../components/Layout'

const points = [
  'Design premium e visual memorável',
  'Estrutura de página com foco em conversão',
  'Experiência forte no mobile',
  'CTA claro e distribuído com inteligência',
]

export default function WebsitesPage() {
  return (
    <section className="container page-section">
      <SectionTitle
        eyebrow="Sites e landing pages"
        title="Seu site precisa parecer mais valioso do que a média do mercado."
        text="Quando o visual, a copy e a jornada trabalham juntos, o site deixa de ser só uma vitrine e começa a funcionar como parte real do processo de venda."
      />

      <div className="split-section">
        <GlassCard>
          <div className="content-box">
            <h3>O que entra na entrega</h3>
            <ul className="clean-list">
              {points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="content-box">
            <h3>Para quem é ideal</h3>
            <p>Para marcas que querem vender melhor, transmitir mais autoridade, elevar valor percebido e parar de parecer amadoras no digital.</p>
            <NeonButton to="/contato">Quero um site premium</NeonButton>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
