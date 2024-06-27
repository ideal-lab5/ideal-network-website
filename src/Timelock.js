import "./styles/Timelock.sass";

function Timelock({ title, children }) {
  return (
    <section id="timelock">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export default Timelock;
