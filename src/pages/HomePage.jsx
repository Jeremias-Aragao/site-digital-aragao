import { ArrowRight, CheckCircle2, Layers3, MonitorSmartphone, Bot, Workflow, Star } from 'lucide-react'
import { GlassCard, NeonButton, SectionTitle, Badge } from '../components/Layout'

const services = [
  {
    icon: Workflow,
    title: 'Automação de processos',
    text: 'Reduza retrabalho, elimine etapas manuais e ganhe velocidade operacional com fluxos inteligentes.',
    link: '/automacao',
  },
  {
    icon: Layers3,
    title: 'Sistemas sob medida',
    text: 'Projetos criados para a rotina real do seu negócio, com estrutura preparada para crescer.',
    link: '/sistemas',
  },
  {
    icon: MonitorSmartphone,
    title: 'Sites e landing pages',
    text: 'Presença digital premium, visual forte e páginas desenhadas para gerar desejo e conversão.',
    link: '/sites',
  },
]

const results = [
  'Mais organização operacional',
  'Menos dependência de processos manuais',
  'Mais controle sobre a operação',
  'Mais confiança para vender',
]

const reviews = [
  'Visual premium, comunicação forte e estrutura muito mais profissional.',
  'A página passa autoridade e conduz para a ação sem confundir o cliente.',
  'É o tipo de presença digital que já valoriza a marca antes da conversa começar.',
]

export default function HomePage() {
  return (
    <>
      <section className="hero-section container">
        <div className="hero-copy">
          <Badge>Presença premium + conversão</Badge>
          <h1>
            Seu site precisa parecer grande, vender bem e fazer o cliente querer falar com você agora.
          </h1>
          <p>
            A Digital Aragão cria sites, landing pages, automações e sistemas com visual premium, experiência fluida e estrutura pensada para transformar visita em oportunidade real de venda.
          </p>

          <div className="hero-actions">
            <NeonButton to="/comecar">Começar agora</NeonButton>
            <NeonButton to="/solucoes" secondary>Ver soluções</NeonButton>
          </div>

          <div className="hero-proof">
            {results.map((item) => (
              <div key={item} className="proof-item">
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <GlassCard className="hero-showcase">
          <div className="dashboard-mock">
            <div className="dashboard-top">
              <div>
                <p className="eyebrow">Estrutura estratégica</p>
                <h3>Site que transmite valor e conduz para a ação</h3>
              </div>
              <span className="mini-tag">R06</span>
            </div>
            <div className="stat-grid">
              <div>
                <small>Marca</small>
                <strong>Mais premium</strong>
              </div>
              <div>
                <small>Fluxo</small>
                <strong>Mais claro</strong>
              </div>
              <div>
                <small>Conversão</small>
                <strong>Mais forte</strong>
              </div>
              <div>
                <small>Impacto</small>
                <strong>Mais memorável</strong>
              </div>
            </div>
            <div className="dashboard-callout">
              <Star size={16} />
              <span>Design premium com neons dinâmicos, microanimações e CTAs estrategicamente distribuídos.</span>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="container section-spacing">
        <SectionTitle
          eyebrow="Soluções"
          title="Cada página com um objetivo claro. Cada seção com função de venda."
          text="O site não precisa apenas ser bonito. Ele precisa posicionar melhor a marca, remover objeções e empurrar o visitante para a próxima ação."
        />

        <div className="cards-grid three">
          {services.map((item) => {
            const Icon = item.icon
            return (
              <GlassCard key={item.title}>
                <div className="service-card">
                  <div className="icon-box"><Icon size={22} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href={item.link} className="text-link">Explorar solução <ArrowRight size={16} /></a>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </section>

      <section className="container section-spacing split-section">
        <div>
          <SectionTitle
            eyebrow="Posicionamento"
            title="Você não está vendendo só serviço. Está vendendo percepção de valor."
            text="Quando o site transmite confiança, organização e sofisticação, o cliente já chega mais inclinado a ouvir, confiar e comprar."
          />
          <div className="bullet-list">
            <div><Bot size={18} /> Layout que parece marca premium</div>
            <div><Layers3 size={18} /> Estrutura pensada como funil</div>
            <div><MonitorSmartphone size={18} /> Experiência forte no mobile</div>
          </div>
        </div>
        <GlassCard>
          <div className="quote-box">
            <p>“A diferença entre um site comum e um site que vende começa no posicionamento visual e termina na clareza da jornada.”</p>
            <span>Digital Aragão</span>
          </div>
        </GlassCard>
      </section>

      <section className="container section-spacing">
        <SectionTitle
          eyebrow="Prova social"
          title="A percepção certa reduz objeção antes mesmo da primeira mensagem."
          text="Mesmo quando o cliente ainda não conhece seu trabalho a fundo, o design, a estrutura e a clareza do site já fazem parte da venda."
          align="center"
        />

        <div className="cards-grid three">
          {reviews.map((item, idx) => (
            <GlassCard key={idx}>
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>{item}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="container section-spacing final-cta">
        <GlassCard>
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Pronto para vender melhor?</p>
              <h2>Vamos transformar sua presença digital em uma máquina de conversão premium.</h2>
              <p>Escolha a solução certa e avance com uma estrutura pronta para hospedar, anunciar e vender.</p>
            </div>
            <div className="cta-panel-actions">
              <NeonButton to="/comecar">Começar meu projeto</NeonButton>
              <NeonButton to="/contato" secondary>Solicitar orçamento</NeonButton>
            </div>
          </div>
        </GlassCard>
      </section>
    </>
  )
}
