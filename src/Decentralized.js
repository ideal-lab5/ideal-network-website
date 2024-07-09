import "./styles/Decentralized.sass";

function Decentralized() {
  return (
    <section
      id="decentralized"
      className="overflow-hidden relative min-h-screen bg-left bg-no-repeat bg-cover bg-black flex flex-col-reverse md:flex-row"
    >
      <div className="container flex items-center">
        <div className="textContainer flex flex-col justify-center items-start gap-10 relative">
          <h2 className="text-4xl xl:text-6xl font-bold">Decentralized</h2>
          <p>
            The Ideal Network is permisionless blockchain that acts as an
            entropy layer for the next generation of fair protocols, enabling
            new paradigms for trustless interactions.
          </p>
          <a
            href="https://docs.idealabs.network/docs/intro"
            className="cta"
            target="_blank"
            rel="noreferrer"
          >
            Decentralize the Universe
          </a>
        </div>
      </div>
      <img
        src="/images/Decentralized.png"
        className="decentralized"
        alt="decentralized"
      />
    </section>
  );
}

export default Decentralized;
