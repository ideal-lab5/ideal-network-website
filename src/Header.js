import "./styles/Header.sass";

function Header() {
  return (
    <header className="fixed w-full bg-black bg-opacity-70 z-30">
      <div className="container">
        <nav>
          <a href="/" className="brand py-4">
            <img src="/images/onecolor-white-logo.svg" alt="Ideal Network" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;