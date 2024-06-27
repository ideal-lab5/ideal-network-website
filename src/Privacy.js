import "./styles/Privacy.sass";

function Privacy({ title, children }) {
  return (
    <section id="privacy">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export default Privacy;