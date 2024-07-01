import "./styles/Privacy.sass";

function Privacy() {
  return (
    <section id="privacy" className="overflow-hidden relative min-h-screen bg-left bg-no-repeat bg-cover bg-black flex flex-col-reverse md:flex-row gap-10">
      <div className="container flex items-center">
        <div className="textContainer flex flex-col justify-center items-start gap-10 relative">
          <h1 className="text-4xl xl:text-6xl font-bold">Programmable Privacy</h1>
          <p>Encrypt once, decrypt many. The Ideal network enables programmable, zero-knowledge data encryption mechanisms using practical witness encryption.</p>
          <button className="cta">Limitless Privacy</button>
        </div>
      </div>
      <img src="/images/Privacy.png" className="privacy" />
    </section>
  );
}

export default Privacy;