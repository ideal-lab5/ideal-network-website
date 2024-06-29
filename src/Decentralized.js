import "./styles/Decentralized.sass";

function Decentralized() {
  return (
    <section id="decentralized" className="overflow-hidden relative min-h-screen bg-left bg-no-repeat bg-cover bg-black flex flex-col-reverse md:flex-row">
      <div className="container flex items-center">
        <div className="textContainer flex flex-col justify-center items-start gap-10 relative">
          <h1 className="text-4xl xl:text-6xl font-bold">Decentralized</h1>
          <p>The Ideal Network is a blockchain that uses a novel consensus mechanism. It produces publicly verifiable secret keys in each block header.</p>
          <button className="cta">Decentralize the universe</button>
        </div>
      </div>
      <img src="/images/Decentralized.png" className="decentralized" />
    </section>
  );
}

export default Decentralized;
