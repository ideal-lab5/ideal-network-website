import "./styles/Randomness.sass";

function Randomness({ title, children }) {
  return (
    <section id="randomness">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export default Randomness;
