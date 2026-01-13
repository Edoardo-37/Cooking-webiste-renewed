import howItWorksSteps from "../../data/howItWorksSteps";
import HowItWorksCard from "./HowItWorksCard";

const HowItWorks = () => {
  return (
    <section
      className="min-h-[80vh] py-24 px-6 bg-primary/10 text-neutral lg:px-12"
      aria-labelledby="how-it-works-title"
    >
      <h2 id="how-it-works-title" className="text-center mb-20 font-bold">
        Cucinare bene, in pochi e semplici passi
      </h2>
      <div className="grid items-center justify-center gap-5 lg:flex lg:items-start lg:justify-evenly">
        {/* Per ogni step stampa un componente card */}
        {howItWorksSteps.map((s) => {
          return (
            <HowItWorksCard
              key={s.step}
              title={s.title}
              description={s.description}
              icon={s.icon}
              altText={s.altText}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
