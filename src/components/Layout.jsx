import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/solucoes', label: 'Soluções' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/faq', label: 'Dúvidas' },
  { to: '/contato', label: 'Contato' },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <div className="grid-overlay" />

      <header className="header glass">
        <div className="container nav-row">
          <Link to="/" className="brand">
            Digital <span>Aragão</span>
          </Link>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="desktop-cta-wrap">
            <Link to="/comecar" className="btn btn-primary btn-sm neon-btn">
              Começar <ArrowUpRight size={16} />
            </Link>
          </div>

          <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mobile-menu glass"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/comecar" className="btn btn-primary neon-btn" onClick={() => setOpen(false)}>
              Começar agora
            </Link>
          </motion.div>
        )}
      </header>

      <main>{children}</main>

      <a
        className="floating-wa neon-btn"
        href="https://wa.me/5581994336238?text=Fala%20Jeremias,%20quero%20automatizar%20meu%20neg%C3%B3cio"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <footer className="footer">
        <div className="container footer-grid glass">
          <div>
            <h3>Digital Aragão</h3>
            <p>
              Automação, sistemas e páginas de alta conversão para negócios que querem crescer com estrutura.
            </p>
          </div>
          <div>
            <h4>Navegação</h4>
            <div className="footer-links">
              <Link to="/solucoes">Soluções</Link>
              <Link to="/projetos">Projetos</Link>
              <Link to="/sobre">Sobre</Link>
              <Link to="/contato">Contato</Link>
            </div>
          </div>
          <div>
            <h4>Contato</h4>
            <p>WhatsApp: (81) 99433-6238</p>
            <p>E-mail: contato@digitalaragao.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
