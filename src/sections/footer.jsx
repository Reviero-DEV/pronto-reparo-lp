export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            PRONTO <span>REPARO</span>
          </div>
          <p>Manutenção residencial de alta qualidade.</p>
        </div>

        <div className="footer-nav">
          <h4>Navegação</h4>
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <p>suporte@prontoreparo.com</p>
          <a href="#" className="footer-link-zap">
            Abrir conversa no WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 PRONTO REPARO - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
