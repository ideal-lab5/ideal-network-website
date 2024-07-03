import { useState } from "react";
import "./styles/Header.sass";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black bg-opacity-70 z-30">
      <div className="container">
        <nav className="sm:flex">
          <a href="/" className="brand">
            <img
              src="/images/onecolor-white-logo.svg"
              alt="Ideal Network"
              style={{ zIndex: 11, position: "relative" }}
            />
          </a>
          <div
            id="haburger-icon"
            className="space-y-2 absolute top-0 right-0 px-8 py-8 mobile cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              id="close-icon"
              className="absolute top-0 right-0 px-8 py-8 mobile"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul
              id="mobile-menu"
              className="flex flex-col items-center justify-between min-h-[250px] mobile"
            >
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://etf.idealabs.network/docs/intro" target="_blank" rel="noreferrer">Docs</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://discord.gg/TheXVBdbbu" target="_blank" rel="noreferrer">Discord</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://matrix.to/#/#ideal-labs:matrix.org" target="_blank" rel="noreferrer">Matrix</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://ideallabs.substack.com/" target="_blank" rel="noreferrer">Substack</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://medium.com/@ideal_labs" target="_blank" rel="noreferrer">Medium</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://github.com/ideal-lab5" target="_blank" rel="noreferrer">GitHub</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://x.com/Ideallabs0" target="_blank" rel="noreferrer">X</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="mailto:hello@idealabs.network" target="_blank" rel="noreferrer">Contact</a>
              </li>
            </ul>
          </div>
          <ul id="desktop-menu" className="sm:flex desktop">
            <li className="px-8">
              <a href="https://etf.idealabs.network/docs/intro" target="_blank" rel="noreferrer">Docs</a>
            </li>
            <li className="px-8">
              <a href="https://github.com/ideal-lab5" target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li className="px-8">
              <a href="mailto:hello@idealabs.network" target="_blank" rel="noreferrer">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
