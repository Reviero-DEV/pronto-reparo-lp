export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          PRONTO <span>REPARO</span>
        </div>

        <nav className="nav-menu">
          <a href="#home">Inicio</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
