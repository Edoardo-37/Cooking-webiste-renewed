import IllustrationOne from "/assets/home/brandStory-1.svg";

const BrandStory = () => {
  return (
    <section
      className="min-h-[80vh] py-24 px-6 bg-base-100 grid gap-10 lg:grid-cols-2 lg:px-12"
      aria-labelledby="value-proposition-title"
    >
      {/* testo */}
      <div className="flex flex-col gap-5 justify-center items-center lg:items-start lg:max-w-xl">
        <h2
          id="value-proposition-title"
          className="text-center font-bold lg:text-start"
        >
          Perchè nasce Sapori e Profumi
        </h2>
        <p className="text-center lg:text-start">
          Sapori e Profumi <b>nasce nel 2021 </b> dalla voglia di rendere la
          cucina accessibile a tutti, senza rinunciare al gusto e alla qualità
          dei piatti che raccontiamo. Ogni ricetta è pensata per essere chiara,
          affidabile e facile da seguire, anche per chi ha poco tempo o poca
          esperienza.
        </p>
        <p className="text-center lg:text-start">
          Qui non troverai procedimenti complicati o passaggi dati per scontati,
          ma{" "}
          <u>
            <b>spiegazioni semplici e curate</b>
          </u>
          , pensate per accompagnarti passo dopo passo.
        </p>
      </div>
      {/* immagine */}
      <div className="flex items-center justify-center lg:mx-auto">
        <img
          className="rounded-3xl lg:w-150 shadow-lg"
          src={IllustrationOne}
          alt="Illustrazione di una tavola con diversi piatti cucinati con al centro una pentola di pasta"
          title="Illustrazione di una tavola con diversi piatti cucinati con al centro una pentola di pasta"
        />
      </div>
    </section>
  );
};

export default BrandStory;
