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
          <a href="#home">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#faq">Contato</a>
          <a href="#" className="footer-link-zap">
            Abrir conversa no WhatsApp
          </a>
          <p>suporte@prontoreparo.com</p>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 PRONTO REPARO - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
