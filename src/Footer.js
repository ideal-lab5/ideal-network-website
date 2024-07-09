import "./styles/Footer.sass";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="container flex flex-col gap-20">
        <div className="upper flex flex-col md:flex-row gap-10 md:gap-20">
          <ul className="w-full md:w-80">
            <p className="category uppercase mb-4">Docs</p>
            <li>
              <a
                href="https://docs.idealabs.network/docs/intro"
                target="_blank"
                rel="noreferrer"
              >
                Tutorial
              </a>
            </li>
          </ul>
          <ul className="w-full md:w-80">
            <p className="category uppercase mb-4">Community</p>
            <li>
              <a
                href="https://discord.gg/TheXVBdbbu"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://matrix.to/#/#ideal-labs:matrix.org"
                target="_blank"
                rel="noreferrer"
              >
                Matrix
              </a>
            </li>
            <li>
              <a
                href="https://ideallabs.substack.com/"
                target="_blank"
                rel="noreferrer"
              >
                Substack
              </a>
            </li>
          </ul>
          <ul className="w-full md:w-80">
            <p className="category uppercase mb-4">More</p>
            <li>
              <a
                href="https://medium.com/@ideal_labs"
                target="_blank"
                rel="noreferrer"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ideal-lab5"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Ideallabs0"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
            </li>
          </ul>
          <ul className="w-full md:w-80">
            <p className="category uppercase mb-4">Contact</p>
            <li>
              <a
                href="mailto:hello@idealabs.network"
                target="_blank"
                rel="noreferrer"
              >
                hello@idealabs.network
              </a>
            </li>
          </ul>
        </div>
        <div className="lower">
          <p>Copyright © 2024 Ideal Labs, LLC</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
