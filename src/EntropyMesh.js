import "./styles/EntropyMesh.sass";

function EntropyMesh() {
  return (
    <section id="privacy" className="overflow-hidden relative min-h-screen bg-left bg-no-repeat bg-cover bg-black flex flex-col-reverse md:flex-row gap-10">
      <div className="container flex items-center">
        <div className="textContainer flex flex-col justify-center items-start gap-10 relative">
          <h1 className="text-4xl xl:text-6xl font-bold">Entropy Mesh</h1>
          <p>The Entropy Mesh is a novel approach to aggregating many sources of randomness into a single verifiable, transparent, and auditiable structure, secured by the Ideal Network.</p>
          <a href="https://etf.idealabs.network/docs/intro" className="cta" target="_blank" rel="noreferrer">Limitless Entropy</a>
        </div>
      </div>
      <img src="/images/Privacy.png" className="privacy" alt="Privacy"/>
    </section>
  );
}

export default EntropyMesh;