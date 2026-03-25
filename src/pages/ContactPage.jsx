import { useState } from 'react'
import { NeonButton, GlassCard, SectionTitle } from '../components/Layout'

export default function ContactPage() {
  const [form, setForm] = useState({
    nome: '',
    whatsapp: '',
    objetivo: '',
    mensagem: '',
  })

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const linhas = [
      'Olá, Jeremias. Vim pelo site da Digital Aragão e quero avançar com meu projeto.',
      '',
      `*Nome:* ${form.nome || 'Não informado'}`,
      `*WhatsApp:* ${form.whatsapp || 'Não informado'}`,
      `*Objetivo do projeto:* ${form.objetivo || 'Não informado'}`,
      `*Mensagem:* ${form.mensagem || 'Não informada'}`,
    ]

    const texto = encodeURIComponent(linhas.join('\n'))
    const url = `https://wa.me/5581994336238?text=${texto}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="container page-section">
      <SectionTitle
        eyebrow="Contato"
        title="Se quiser acelerar, já me diga o que você quer vender, organizar ou automatizar."
        text="Agora o formulário já envia os dados preenchidos direto para o WhatsApp, facilitando o início da conversa comercial."
      />

      <div className="split-section">
        <GlassCard>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Nome</span>
              <input
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => updateField('nome', e.target.value)}
              />
            </label>

            <label>
              <span>WhatsApp</span>
              <input
                placeholder="Seu WhatsApp"
                value={form.whatsapp}
                onChange={(e) => updateField('whatsapp', e.target.value)}
              />
            </label>

            <label>
              <span>Objetivo do projeto</span>
              <select
                value={form.objetivo}
                onChange={(e) => updateField('objetivo', e.target.value)}
              >
                <option value="">Escolha uma opção</option>
                <option>Automação de processos</option>
                <option>Sistema sob medida</option>
                <option>Site ou landing page</option>
              </select>
            </label>

            <label>
              <span>Mensagem</span>
              <textarea
                rows="6"
                placeholder="Me conte o que você quer construir"
                value={form.mensagem}
                onChange={(e) => updateField('mensagem', e.target.value)}
              />
            </label>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                <span className="btn-label">Enviar para WhatsApp</span>
              </button>
            </div>
          </form>
        </GlassCard>

        <GlassCard>
          <div className="content-box">
            <h3>Atendimento rápido</h3>
            <p>Ao clicar no botão, o WhatsApp abre com os dados do formulário já preenchidos na mensagem.</p>
            <p>Isso reduz atrito, deixa o contato mais organizado e acelera o início do atendimento.</p>

            <div className="form-actions">
              <NeonButton href="https://wa.me/5581994336238?text=Olá,%20vim%20pelo%20site%20da%20Digital%20Aragão%20e%20quero%20entender%20a%20melhor%20solução%20para%20o%20meu%20negócio.">
                Falar direto no WhatsApp
              </NeonButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
