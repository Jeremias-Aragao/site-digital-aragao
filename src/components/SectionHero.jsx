import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SectionHero({ badge, title, text, primaryTo = '/contato', primaryLabel = 'Solicitar projeto', secondaryTo = '/solucoes', secondaryLabel = 'Ver soluções' }) {
  return (
    <section className="hero-section container">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="hero-copy">
        <span className="badge neon-line">{badge}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="hero-actions">
          <Link to={primaryTo} className="btn btn-primary neon-btn">{primaryLabel}</Link>
          <Link to={secondaryTo} className="btn btn-secondary">{secondaryLabel}</Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="hero-card glass neon-frame">
        <div className="mini-panel">
          <span className="mini-label">Experiência premium</span>
          <h3>Estrutura visual magnética</h3>
          <p>Linhas neon dinâmicas, glow elegante, CTA fortes e sensação tecnológica de alto valor.</p>
        </div>
        <div className="stats-grid">
          <div><strong>+ autoridade</strong><span>visual premium</span></div>
          <div><strong>+ conversão</strong><span>CTA melhor posicionados</span></div>
          <div><strong>+ clareza</strong><span>jornada guiada</span></div>
          <div><strong>+ resultado</strong><span>site vendedor</span></div>
        </div>
      </motion.div>
    </section>
  );
}
