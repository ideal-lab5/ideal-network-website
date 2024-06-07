import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import "./styles/App.sass";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section title="Decentralized">
          The Ideal Network is a blockchain that uses a novel consensus
          mechanism. It produces publicly verifiable secret keys in each block
          header.
        </Section>
        <Section title="Onchain Randomness">
          Onchain randomness is refreshed with each new block and can be used in
          smart contracts and runtime modules for random number generation.
        </Section>
        <Section title="Timelock Encryption">
          The ETF Network enables timelock encryption, allowing you to
          effortlessly send messages into the future and unlock them right from
          your browser!
        </Section>
        <Section title="Programmable Privacy">
          Encrypt once, decrypt many. The Ideal network enables programmable,
          zero-knowledge data encryption mechanisms using practical witness
          encryption.
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
