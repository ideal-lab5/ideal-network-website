import "./styles/Hero.sass";

function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-center bg-no-repeat bg-cover">
      <div className="container flex items-center">
        <div className="textContainer flex flex-col justify-center items-start gap-10">
          <h1 className="text-4xl xl:text-6xl font-bold">Ideal Network</h1>
          <h2 className="text-2xl xl:text-4xl font-bold">
            The Interoperable Entropy Layer
          </h2>
          <p>
            The IDN enables interoperable randomness beacons, producing publicly
            verifiable on-chain randomness that can be used in trustless,
            on-chain protocols.
          </p>
          <a
            href="https://docs.idealabs.network/docs/intro"
            className="cta btn"
            target="_blank"
            rel="noreferrer"
          >
            Roll the Dice
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
