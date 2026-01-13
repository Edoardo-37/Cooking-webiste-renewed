import { useParams } from "react-router";
import recipesData from "../data/recipesData";
import { Link } from "react-router";
// icons import
import RecipeTimer from "/assets/icons/recipeTime.svg";
import RecipeDifficulty from "/assets/icons/recipeDifficulty.svg";
import RecipePortions from "/assets/icons/recipePortions.svg";

const RicettaInDettaglio = () => {
  const { slug } = useParams();

  // Cerca nell'array delle ricette quella corretta per la pagina di dettaglio della ricetta stessa
  // 'find' scorre l'array recipesData e restituisce il PRIMO oggetto per cui la condizione posta sia vera
  // Qui si confronta lo slug della ricetta con quello recuperato dall'URL tramite l'hook useParams
  // Se non trova corrispondenze recipeToRender diventa undefined e viene mostrato il messaggio di errore.
  const recipeToRender = recipesData.find((recipe) => {
    return recipe.slug === slug;
  });

  // controllo esistenza slug
  if (!recipeToRender) {
    return (
      <div
        role="alert"
        className="min-h-screen alert alert-info alert-soft justify-center font-bold text-xl"
      >
        <span className="text-error">
          Ricetta non trovata / link non corretto, riprovare.{" "}
        </span>
      </div>
    );
  }
  return (
    <main className="bg-primary/20">
      <section
        className="hero-offset min-h-screen max-w-5/6 shadow-lg mx-auto py-18 px-6 bg-base-100 flex flex-col gap-4 lg:px-12 "
        aria-labelledby="recipe-detailed-page-title"
      >
        {/* titolo */}
        <h1 id="recipe-detailed-page-title" className="font-extrabold mt-12">
          {recipeToRender.title}
        </h1>
        {/* badge con tipologia piatto */}
        <div className="badge badge-lg my-3 badge-secondary font-semibold tracking-wide w-fit">
          {recipeToRender.dishType}
        </div>
        {/* immagine piatto */}
        <img
          width="640px"
          src={recipeToRender.img}
          alt={recipeToRender.alt}
          className="rounded-xl"
        />
        {/* icone informative */}
        <div className="flex flex-col gap-5 tracking-wider my-6 md:flex-row">
          <div className="flex flex-col w-full items-center bg-info/5 border-2 border-info rounded-xl py-6 px-3  md:items-start ">
            <img
              src={RecipeTimer}
              alt="icona di un timer"
              title="icona di un timer"
            />
            <p className="font-bold">Tempo</p>
            <span>{recipeToRender.prepTime}</span>
          </div>
          <div className="flex flex-col w-full items-center bg-info/10 border-2 border-info rounded-xl py-6 px-3 md:items-start ">
            <img
              src={RecipeDifficulty}
              alt="icona che rappresenta la difficoltà di preparazione"
              title="icona che rappresenta la difficoltà di preparazione"
            />
            <p className="font-bold">Difficoltà</p>
            <span>{recipeToRender.difficulty}</span>
          </div>
          <div className="flex flex-col w-full items-center bg-info/10 border-2 border-info rounded-xl py-6 px-3 md:items-start ">
            <img
              src={RecipePortions}
              alt="icona che rappresenta le porzioni della ricetta"
              title="icona che rappresenta le porzioni della ricetta"
            />
            <p className="font-bold">Porzioni</p>
            <span>{recipeToRender.portions}</span>
          </div>
        </div>
        {/* descrizione piatto */}
        <p className="mb-8">{recipeToRender.longDescription}</p>
        {/* ingredienti */}
        <div className="border-s-6 border-b-6 bg-accent/10 rounded-2xl border-accent py-8 px-4 mb-8">
          <h3 className="mb-8">Ingredienti</h3>
          <ul className="list-disc list-inside space-y-4 pl-5 lg:grid lg:grid-cols-2 lg:gap-x-10 ">
            {recipeToRender.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* procedimento */}
        <h3 className="font-bold">Procedimento</h3>
        <ol id="recipe-steps" className="list-none space-y-4 my-4">
          {recipeToRender.steps.map((step) => (
            <li
              key={step.stepNumber}
              className="my-10 flex items-center gap-4 md:gap-8"
            >
              <div className="flex flex-col">
                <span className="font-bold mb-2">{step.title}</span>
                <p className="text-bold">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        {/* bottone back */}
        <Link
          to="/ListaRicette"
          className=" btn btn-lg btn-primary w-full md:w-[80%] md:mx-auto"
        >
          Torna alla lista ricette
        </Link>
      </section>
    </main>
  );
};

export default RicettaInDettaglio;
