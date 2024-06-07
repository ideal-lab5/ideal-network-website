function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-8 py-4">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold mb-2">Docs</h3>
          <ul>
            <li>
              <a href="https://etf.idealabs.network/docs/intro">Tutorial</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Community</h3>
          <ul>
            <li>
              <a href="https://discord.gg/TheXVBdbbu">Discord</a>
            </li>
            <li>
              <a href="https://matrix.to/#/#ideal-labs:matrix.org">Matrix</a>
            </li>
            <li>
              <a href="https://ideallabs.substack.com/">Substack</a>
            </li>
            <li>
              <a href="https://x.com/Ideallabs0">Twitter</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">More</h3>
          <ul>
            <li>
              <a href="https://medium.com/@ideal_labs">Medium</a>
            </li>
            <li>
              <a href="https://github.com/ideal-lab5">GitHub</a>
            </li>
            <li>
              <a href="https://idealabs.network/">Ideal Labs</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-4">Copyright &copy; 2024 Ideal Labs, LLC</p>
    </footer>
  );
}

export default Footer;
