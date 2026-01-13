import { Link } from "react-router";

function NewsletterCTA() {
  return (
    <section
      className="min-h-[60vh] py-24 px-6 flex flex-col justify-center items-center text-center text-neutral bg-secondary/10 lg:px-12"
      aria-labelledby="newsletterReminder-section-title"
    >
      {/* content */}
      <div className="px-6 max-w-lg lg:max-w-2xl">
        <h2
          id="newsletterReminder-section-title"
          className="mb-5 text-5xl font-bold"
        >
          Resta sempre aggiornato!
        </h2>
        <p className="mb-5">
          Non perdere le nostre nuove ricette e ispirazioni stagionali. Vai alla
          pagina newsletter per iscriverti.
        </p>
        <Link
          to="/PaginaNewsletter"
          title="Vai alla pagina per iscriverti alla newsletter"
          className="btn btn-secondary btn-lg btn-filled"
        >
          Iscriviti alla newsletter
        </Link>
      </div>
    </section>
  );
}

export default NewsletterCTA;
