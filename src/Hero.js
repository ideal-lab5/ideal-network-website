import "./styles/Hero.sass";

function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-center bg-no-repeat bg-cover">
      <div className="container flex items-center">
        <div className="textContainer flex flex-col justify-center items-start gap-10">
          <h1 className="text-4xl xl:text-6xl font-bold">Onchain Randomness</h1>
          <p>Onchain randomness is refreshed with each new block and can be used in smart contracts and runtime modules for random number generation.</p>
          <a href="https://etf.idealabs.network/docs/intro" className="cta btn" target="_blank" rel="noreferrer">Roll the dice</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;