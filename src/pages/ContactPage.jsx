export default function ContactPage() {
  return (
    <section className="container section-block contact-layout">
      <div className="glass contact-copy neon-frame">
        <span className="badge">Contato</span>
        <h1>Vamos construir algo forte para o seu negócio.</h1>
        <p>Use essa página para captar leads, direcionar para o WhatsApp e abrir conversas mais qualificadas.</p>
        <ul className="contact-points">
          <li>✔ Atendimento direto</li>
          <li>✔ Foco em solução real</li>
          <li>✔ Estrutura visual premium</li>
        </ul>
      </div>
      <form className="glass contact-form">
        <label>
          Nome
          <input type="text" placeholder="Seu nome" />
        </label>
        <label>
          WhatsApp
          <input type="text" placeholder="Seu WhatsApp" />
        </label>
        <label>
          Tipo de projeto
          <select>
            <option>Automação</option>
            <option>Sistema sob medida</option>
            <option>Site / landing page</option>
          </select>
        </label>
        <label>
          O que você precisa resolver?
          <textarea rows="5" placeholder="Descreva o seu objetivo" />
        </label>
        <button type="button" className="btn btn-primary neon-btn">Enviar solicitação</button>
      </form>
    </section>
  );
}
