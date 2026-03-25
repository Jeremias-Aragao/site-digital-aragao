import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const menu = [
  ['Início', '/'],
  ['Começar', '/comecar'],
  ['Soluções', '/solucoes'],
  ['Projetos', '/projetos'],
  ['Sobre', '/sobre'],
  ['FAQ', '/faq'],
  ['Contato', '/contato'],
]

function NeonLine() {
  return (
    <>
      <motion.span
        className="neon-run top"
        animate={{ x: ['-10%', '340%'] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
      />
      <motion.span
        className="neon-run bottom"
        animate={{ x: ['-15%', '360%'] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'linear', delay: 0.9 }}
      />
      <motion.span
        className="neon-run right"
        animate={{ y: ['-15%', '360%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 0.4 }}
      />
    </>
  )
}

export function NeonButton({ children, href, to, secondary = false, className = '' }) {
  const cls = `btn ${secondary ? 'btn-secondary' : 'btn-primary'} ${className}`
  const inner = (
    <>
      <NeonLine />
      <span className="btn-label">{children}</span>
    </>
  )
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  )
}

export function SectionTitle({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  )
}

export function GlassCard({ children, className = '' }) {
  return (
    <div className={`glass-card ${className}`}>
      <NeonLine />
      <div className="glass-card-inner">{children}</div>
    </div>
  )
}

export function Badge({ children }) {
  return <span className="badge">{children}</span>
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const whatsapp = 'https://wa.me/5581994336238?text=Olá,%20vim%20pelo%20site%20da%20Digital%20Aragão%20e%20quero%20entender%20a%20melhor%20solução%20para%20o%20meu%20negócio.'

  return (
    <div className="site-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-grid" />

      <header className="site-header">
        <div className="container header-row">
          <Link to="/" className="brand">
            <span>Digital</span>
            <strong>Aragão</strong>
          </Link>

          <nav className="desktop-nav">
            {menu.map(([label, path]) => (
              <NavLink key={path} to={path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="top-cta">
              <span>Falar no WhatsApp</span>
              <ArrowUpRight size={16} />
            </a>
            <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mobile-panel container">
            {menu.map(([label, path]) => (
              <NavLink key={path} to={path} className="mobile-link" onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="eyebrow">Digital Aragão</p>
            <h3>Soluções digitais com presença premium e foco real em conversão.</h3>
          </div>
          <div>
            <p className="footer-title">Navegação</p>
            <div className="footer-links">
              {menu.map(([label, path]) => (
                <Link key={path} to={path}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-title">Ação rápida</p>
            <a className="footer-wa" href={whatsapp} target="_blank" rel="noreferrer">Solicitar atendimento</a>
          </div>
        </div>
      </footer>

      <a href={whatsapp} target="_blank" rel="noreferrer" className="floating-wa">
        <MessageCircle size={22} />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
