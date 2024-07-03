import Header from "./Header";
import Hero from "./Hero";
import Decentralized from "./Decentralized";
import Timelock from "./Timelock";
import EntropyMesh from "./EntropyMesh";
import Footer from "./Footer";
import "./styles/App.sass";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Decentralized />
        <Timelock />
        <EntropyMesh />
      </main>
      <Footer />
    </div>
  );
}

export default App;
