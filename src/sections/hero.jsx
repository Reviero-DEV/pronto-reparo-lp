import {
  FaWhatsapp,
  FaClipboardList,
  FaCheck,
  FaUserCheck,
  FaFileAlt,
  FaHome,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="img-hero">
        <img
          src="./public/images/img-hero.webp"
          alt="Imagem Hero"
          loading="eager"
          fetchPriority="high"
        />
      </div>

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
            <FaWhatsapp />
            Chamar no Whatsapp
          </a>
          <button className="btn-quote">
            <FaClipboardList />
            Solicitar Orçamento
          </button>
        </div>
      </div>
      <div className="hero-features">
        <div className="feature-item">
          <FaCheck />
          <span> Atendimento Rapido</span>
        </div>
        <div className="feature-item">
          <FaUserCheck />
          <span> Profissionais Qualificados</span>
        </div>
        <div className="feature-item">
          <FaFileAlt />
          <span>Orçamento sem complicaçao</span>
        </div>
        <div className="feature-item">
          <FaHome />
          <span>Residencial e Comercial</span>
        </div>
      </div>
    </section>
  );
}
