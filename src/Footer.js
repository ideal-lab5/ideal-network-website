import "./styles/Footer.sass";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="container flex flex-col gap-20">
        <div className="upper flex flex-col md:flex-row gap-10 md:gap-20">
          <ul className="w-full md:w-80">
            <p className="category uppercase mb-4">Docs</p>
            <li><a href="#">Tutorial</a></li>
          </ul>
          <ul className="w-full md:w-80">
            <p className="category uppercase mb-4">Company</p>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Matrix</a></li>
            <li><a href="#">Substacks</a></li>
          </ul>
          <ul className="w-full md:w-80">
            <p className="category uppercase mb-4">More</p>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Github</a></li>
          </ul>
        </div>
        <div className="lower">
          <p>@ 2024 Ideal Network</p>
          <p><a href="">Terms of Service</a>&nbsp;&nbsp;&nbsp;<a href="">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
