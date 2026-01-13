import { Link } from "react-router";

function Hero() {
  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/assets/home/hero-Bg.webp)",
      }}
      aria-labelledby="hero-title"
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg lg:max-w-xl">
          <h1 id="hero-title" className="mb-5 text-5xl font-extrabold">
            Le migliori ricette del momento
          </h1>
          <p className="mb-5">
            Scopri le ricette più popolari del momento, spiegate passo dopo
            passo. Anche se sei alle prime armi troverai tutte le informazioni
            per prepararle al meglio.
          </p>
          {/* CTA */}
          <div className="flex flex-col justify-center gap-5 items-center sm:flex-row">
            <Link
              to="/ListaRicette"
              title="Vai alla pagina delle ricette"
              className="btn btn-lg btn-primary"
            >
              Vai alla lista ricette
            </Link>
            <Link
              to="/PaginaNewsletter"
              title="Vai alla pagina per iscriverti alla newsletter"
              className="btn btn-secondary btn-lg btn-outline"
            >
              Iscriviti alla newsletter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
