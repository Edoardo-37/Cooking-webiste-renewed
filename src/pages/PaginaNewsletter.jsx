import NewsletterForm from "../components/UI/NewsletterForm";

const PaginaNewsletter = () => {
  return (
    <section
      className="hero-offset relative min-h-screen pb-12 flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url(/assets/newsletter/pageBg.webp)",
        backgroundSize: "cover",
      }}
      aria-labelledby="newsletter-hero-title"
    >
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      {/* content */}
      <div className="z-10 px-6 text-neutral-content max-w-lg lg:max-w-2xl flex flex-col">
        <h1 id="newsletter-hero-title" className="my-12 text-5xl font-bold">
          Ricevi ricette ogni settimana!
        </h1>
        <p>
          Idee semplici, nuove ricette e ispirazioni stagionali facili da
          replicare a casa in solitaria o con i tuoi cari.
        </p>
        {/* Form */}
        <NewsletterForm />
      </div>
    </section>
  );
};

export default PaginaNewsletter;
