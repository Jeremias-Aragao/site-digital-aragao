import { GlassCard, NeonButton, SectionTitle } from '../components/Layout'

export default function AboutPage() {
  return (
    <section className="container page-section">
      <SectionTitle
        eyebrow="Sobre a Digital Aragão"
        title="Liderança, posicionamento e construção de soluções com visão de negócio."
        text="Aqui entra sua apresentação como liderança do projeto, reforçando confiança, clareza e autoridade para quem está avaliando contratar a Digital Aragão."
      />

      <div className="split-section">
        <GlassCard>
          <div className="portrait-placeholder">Espaço para sua foto profissional</div>
        </GlassCard>
        <GlassCard>
          <div className="content-box">
            <h3>Quem está por trás</h3>
            <p>Meu nome é Jeremias Aragão. Lidero a Digital Aragão com foco em criar soluções digitais que unem presença premium, organização operacional e estrutura de conversão.</p>
            <p>A proposta não é entregar só um site bonito. É construir algo que transmita valor, gere confiança e ajude o negócio a vender melhor.</p>
            <NeonButton to="/contato">Quero falar com a Digital Aragão</NeonButton>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
