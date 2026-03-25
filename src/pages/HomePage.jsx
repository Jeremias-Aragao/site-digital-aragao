import { Link } from 'react-router-dom';
import SectionHero from '../components/SectionHero';
import FeatureGrid from '../components/FeatureGrid';

const items = [
  { title: 'Automação de processos', text: 'Elimine tarefas repetitivas e ganhe velocidade operacional com sistemas desenhados para a rotina real.' },
  { title: 'Sistemas sob medida', text: 'Estruture a operação com controle, organização e uma solução pensada para o seu modelo de negócio.' },
  { title: 'Sites e landing pages', text: 'Páginas premium com visual forte e foco total em converter visitantes em clientes.' },
];

export default function HomePage() {
  return (
    <>
      <SectionHero
        badge="Transformação digital com cara de marca grande"
        title="Seu negócio ainda depende de você para funcionar? Eu crio sistemas que fazem ele rodar com mais controle, velocidade e escala."
        text="A Digital Aragão une tecnologia, direção estratégica e apresentação premium para transformar operações manuais em estruturas mais inteligentes e mais lucrativas."
        primaryTo="/comecar"
        primaryLabel="Quero começar agora"
        secondaryTo="/solucoes"
        secondaryLabel="Ver soluções"
      />

      <section className="container section-block">
        <div className="section-head">
          <span className="badge">O que a Digital Aragão entrega</span>
          <h2>Soluções com função clara: atrair, convencer e converter.</h2>
          <p>Não é um site genérico. É uma estrutura pensada para posicionamento, autoridade e geração de leads.</p>
        </div>
        <FeatureGrid items={items} />
      </section>

      <section className="container section-block split-layout">
        <div className="glass neon-frame split-card">
          <span className="badge">Funil guiado</span>
          <h2>O visitante não fica perdido. Ele é conduzido.</h2>
          <p>Cada página tem um objetivo. A home posiciona, as páginas de solução aprofundam, a página de contato converte.</p>
          <div className="cta-row">
            <Link to="/comecar" className="btn btn-primary neon-btn">Entrar no funil</Link>
            <Link to="/contato" className="btn btn-secondary">Pedir orçamento</Link>
          </div>
        </div>
        <div className="split-list glass">
          <div>
            <strong>1. Atração</strong>
            <span>headline forte, visual premium, posicionamento</span>
          </div>
          <div>
            <strong>2. Convencimento</strong>
            <span>soluções claras, prova, autoridade</span>
          </div>
          <div>
            <strong>3. Conversão</strong>
            <span>WhatsApp, contato e páginas focadas em ação</span>
          </div>
        </div>
      </section>
    </>
  );
}
