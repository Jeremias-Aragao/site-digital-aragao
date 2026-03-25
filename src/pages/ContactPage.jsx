import { NeonButton, GlassCard, SectionTitle } from '../components/Layout'

export default function ContactPage() {
  return (
    <section className="container page-section">
      <SectionTitle
        eyebrow="Contato"
        title="Se quiser acelerar, já me diga o que você quer vender, organizar ou automatizar."
        text="Essa página já está pronta para hospedar e usar como porta de entrada comercial. Os campos podem ser integrados depois com o serviço de envio que você preferir."
      />

      <div className="split-section">
        <GlassCard>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              <span>Nome</span>
              <input placeholder="Seu nome" />
            </label>
            <label>
              <span>WhatsApp</span>
              <input placeholder="Seu WhatsApp" />
            </label>
            <label>
              <span>Objetivo do projeto</span>
              <select defaultValue="">
                <option value="" disabled>Escolha uma opção</option>
                <option>Automação de processos</option>
                <option>Sistema sob medida</option>
                <option>Site ou landing page</option>
              </select>
            </label>
            <label>
              <span>Mensagem</span>
              <textarea rows="6" placeholder="Me conte o que você quer construir" />
            </label>
            <div className="form-actions">
              <NeonButton to="/comecar">Avançar com o projeto</NeonButton>
            </div>
          </form>
        </GlassCard>

        <GlassCard>
          <div className="content-box">
            <h3>Atendimento rápido</h3>
            <p>Se quiser ir direto para a conversa, o botão flutuante do WhatsApp já está pronto com mensagem automática.</p>
            <p>Você também pode usar esta página como base para integrar envio por e-mail, automação de lead e CRM.</p>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
