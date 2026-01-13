// Sezione che risponde alla domanda perchè scegliere questa pagina / brand?
import { Link } from "react-router";

function EmotionalSection() {
  return (
    <section
      className="relative min-h-[80vh] flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url(/assets/home/emotionalSectionBg.webp)",
        backgroundSize: "cover",
      }}
      aria-labelledby="emotional-section-title"
    >
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      {/* content */}
      <div className="z-10 px-6 text-neutral-content max-w-lg lg:max-w-xl">
        <h2 id="emotional-section-title" className="mb-5 text-5xl font-bold">
          Sapori che raccontano storie
        </h2>
        <p className="mb-5">
          La cucina è fatta di profumi che restano nella memoria e di sapori che
          parlano di casa. Qui i piatti nascono per essere cucinati con calma,
          condivisi e ricordati.
        </p>
        <Link
          to="/ListaRicette"
          title="Vai alla pagina delle ricette"
          className="btn btn-lg btn-primary"
        >
          Vai alla lista ricette
        </Link>
      </div>
    </section>
  );
}

export default EmotionalSection;
