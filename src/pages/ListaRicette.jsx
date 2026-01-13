import { Link } from "react-router";
import { useState } from "react";
import recipesData from "../data/recipesData";
import RecipeCard from "../components/UI/recipeCard"; // componente card

const ListaRicette = () => {
  const [activeTab, setActiveTab] = useState("Antipasti");
  const dishtypes = ["Antipasti", "Primi", "Secondi"];

  // Filtra l'array delle ricette mostrando solo quelle il cui dishType corrisponde alla tab attualmente attiva. Ogni cambio di activeTab provoca un nuovo render con un sottoinsieme diverso di ricette
  const filteredRecipes = recipesData.filter((recipe) => {
    return recipe.dishType === activeTab;
  });

  return (
    <main className="bg-base-100">
      <section
        className="hero-offset relative min-h-[70vh] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url(/assets/recipes/heroBg.webp)",
          backgroundSize: "cover",
        }}
        aria-labelledby="recipes-page-title"
      >
        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        {/* content */}
        <div className="z-10 px-6 text-neutral-content max-w-lg lg:max-w-xl">
          <h1
            id="recipes-page-title"
            className="mb-5 text-5xl font-extrabold italic tracking-wide"
          >
            Le ricette
          </h1>
        </div>
      </section>

      {/* tabs e code per cambio al click a 2a della famiglia di piatti*/}
      <div
        role="tablist"
        className="tabs tabs-box tabs-xl tabs-boxed w-fit mx-auto mt-24 flex justify-center shadow-md"
      >
        {dishtypes.map((type) => {
          return (
            <Link
              key={type}
              className={`tab ${activeTab === type ? "tab-active" : ""}`}
              onClick={() => setActiveTab(type)}
            >
              {type}
            </Link>
          );
        })}
      </div>

      {/* griglia ricette */}
      <div className="min-h-screen py-18 px-3 lg:px-12 grid gap-10 md:items-center md:justify-items-center lg:grid-cols-2 xl:grid-cols-3">
        {filteredRecipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </main>
  );
};

export default ListaRicette;
