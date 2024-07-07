import "./styles/Timelock.sass";

function Timelock() {
  return (
    <section id="timelock" className="overflow-hidden relative min-h-screen bg-left bg-no-repeat bg-cover bg-black flex flex-col flex-col-reverse md:flex-row">
      <div className="container flex items-center justify-end">
        <div className="textContainer flex flex-col justify-center items-end gap-10 relative">
          <h2 className="text-4xl xl:text-6xl font-bold text-right">Timelock Encryption</h2>
          <p className="text-right">The Ideal Network enables timelock encryption, allowing you to effortlessly send messages into the future and unlock them right from your browser!</p>
          <a href="https://etf.idealabs.network/docs/intro" className="cta" target="_blank" rel="noreferrer">Encryption To The Future</a>
        </div>
      </div>
      <img src="/images/Timelock.png" className="timelock" alt="Timelock Encryption" />
    </section>
  );
}

export default Timelock;
