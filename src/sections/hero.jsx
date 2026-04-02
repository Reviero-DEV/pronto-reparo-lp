export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1>PROBLEMAS EM CASA?</h1>
        <h2>
          Resolva hoje mesmo <br />{" "}
          <span>com atendimento rapido e profissional.</span>
        </h2>

        <p>
          Eletricista, encanador, ar-condicionado, desentupimento e manutençao
          residencial com atendimento agil e suporte via WhatsApp
        </p>
        <div className="hero-actions">
          <a href="#" className="btn-whatsapp">
            Chamar no Whatsapp
          </a>
          <button className="btn-quote">Solicitar Orçamento</button>
        </div>
      </div>
      <div className="hero-features">
        <div className="feature-item">
          <span>Atendimento Rapido</span>
        </div>
        <div className="feature-item">
          <span>Profissionais Qualificados</span>
        </div>
        <div className="feature-item">
          <span>Orçamento sem complicaçao</span>
        </div>
        <div className="feature-item">
          <span>Residencial e Comercial</span>
        </div>
      </div>
    </section>
  );
}
