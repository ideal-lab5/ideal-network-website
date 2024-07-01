import "./styles/Hero.sass";

function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-center bg-no-repeat bg-cover">
      <div className="container flex items-center">
        <div className="textContainer flex flex-col justify-center items-start gap-10">
          <h1 className="text-4xl xl:text-6xl font-bold">Proper on-chain randomness</h1>
          <p>Our cutting-edge advanced algorithm enhances security, fairness, and unpredictability, essential for decentralized applications, smart contracts, and more.</p>
          <button className="cta">Roll the dice</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;