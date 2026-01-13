import { Link } from "react-router";
import Logo from "/assets/icons/logo.png";
const Footer = () => {
  return (
    // componente footer di DaisyUI
    <footer className="footer shadow-t-2 bg-base-300 sm:footer-horizontal text-base-content p-10">
      <aside>
        <div className="w-16 h-16">
          <img
            src={Logo}
            alt="Logo di Sapori e Profumi"
            title="Logo di Sapori e Profumi"
          />
        </div>
        <p>
          Sapori e Profumi
          <br />
          Parliamo di cucina dal 2021
        </p>
        <p>Copyright © {new Date().getFullYear()}. Tutti i diritti riservati</p>
      </aside>
      <nav>
        <h6 className="footer-title">Navigazione</h6>
        <Link to="/ListaRicette" className="link link-hover">
          Vai Alla Lista Ricette
        </Link>
        <Link to="/PaginaNewsletter" className="link link-hover">
          Iscriviti Alla Newsletter
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Contatti</h6>
        <Link to="#" className="link link-hover">
          Chi Siamo
        </Link>
        <Link to="#" className="link link-hover">
          Scrivi Per Noi
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="#" className="link link-hover">
          Termini di utilizzo
        </Link>
        <Link to="#" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="#" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
