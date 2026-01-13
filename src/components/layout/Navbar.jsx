import { useEffect } from "react";
import { Link } from "react-router";
import Logo from "/assets/icons/logo.png";

function Navbar() {
  useEffect(() => {
    const navHeight = document.querySelector("nav").offsetHeight;
    document.documentElement.style.setProperty("--navHeight", `${navHeight}px`);
  }, []);
  return (
    // componente navbar di DaisyUI
    <nav className="navbar bg-base-200 text-base-content shadow-md z-99 fixed p-4 md:px-6">
      <div className="navbar-start">
        {/* dropdown solo mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-xl md:w-82 md:menu-lg"
          >
            <li className=" text-2xl ">
              <Link to="/ListaRicette">Le Ricette</Link>
            </li>
            <li>
              <Link to="/PaginaNewsletter">Newsletter</Link>
            </li>
            <li>
              <a>Contatti</a>
              <ul className="p-2">
                <li>
                  <Link to="#">Chi siamo</Link>
                </li>
                <li>
                  <Link to="#">Privacy policy</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Logo più nome brand */}
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 hidden md:flex">
            <img
              src={Logo}
              alt="Logo di Sapori e Profumi"
              title="Logo di Sapori e Profumi"
            />
          </div>
          <Link to="/">
            <h4 className="font-semibold whitespace-nowrap hover:scale-105 transition-transform duration-400">
              Sapori e Profumi
            </h4>
          </Link>
        </div>
      </div>
      {/* Lista link */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 nd:menu-md lg:menu-lg">
          <li>
            <Link to="/ListaRicette">Le Ricette</Link>
          </li>
          <li>
            <details>
              <summary>Contatti</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <Link to="#">Chi siamo</Link>
                </li>
                <li>
                  <Link to="#">Privacy policy</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/PaginaNewsletter">NewsLetter</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
