import { GlassCard, NeonButton, SectionTitle } from '../components/Layout'

export default function SystemsPage() {
  return (
    <section className="container page-section">
      <SectionTitle
        eyebrow="Sistemas sob medida"
        title="Quando o negócio cresce, adaptar planilha e improviso começa a sair caro."
        text="A proposta aqui é criar uma estrutura digital própria para a sua operação, com foco em clareza, controle, produtividade e evolução contínua."
      />

      <div className="cards-grid two">
        <GlassCard>
          <div className="content-box">
            <h3>O que pode entrar</h3>
            <ul className="clean-list">
              <li>Painel administrativo</li>
              <li>Cadastro e gestão de clientes</li>
              <li>Controle de pedidos, processos ou serviços</li>
              <li>Relatórios e indicadores internos</li>
            </ul>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="content-box">
            <h3>O resultado esperado</h3>
            <p>Uma operação mais organizada, menos dependente de improviso e com uma base tecnológica mais coerente com o nível de crescimento que a empresa quer alcançar.</p>
            <NeonButton to="/contato">Quero estruturar meu sistema</NeonButton>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
