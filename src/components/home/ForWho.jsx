// Sezione che risponde alla domanda per quale persone e quali casistiche è adatto questo sito?
import IllustrationTwo from "/assets/home/forWho-1.svg";

function ForWho() {
  return (
    <section
      className="min-h-[60vh] py-24 px-6 bg-base-100 grid gap-10 md:gap-15 lg:grid-cols-2 lg:px-12"
      aria-labelledby="forWho-section-title"
    >
      {/* immagine */}
      <div className="flex items-center justify-center lg:mx-auto">
        <img
          className="rounded-3xl lg:w-150 shadow-lg"
          src={IllustrationTwo}
          alt="Illustrazione di una donna in piedi vicino ai fornelli in cucina che tiene in mano un cucchiaio"
          title="Illustrazione di una donna in piedi vicino ai fornelli in cucina che tiene in mano un cucchiaio"
        />
      </div>
      {/* testo */}
      <div className="flex flex-col gap-5 justify-center items-center lg:items-start lg:max-w-xl">
        <h2
          id="forWho-section-title"
          className="text-center font-bold lg:text-start"
        >
          Uno spazio pensato per chi ama cucinare
        </h2>
        <p className="text-center lg:text-start">
          Sapori e Profumi è pensato per chi cucina per sé chi cucina con gli
          altri o chi apre il frigo e cerca un'idea. Uno spazio per chi ama le
          cose buone, senza complicazioni o grandi pretese.
        </p>
      </div>
    </section>
  );
}

export default ForWho;
