const NewsletterForm = () => {
  return (
    <form className="mt-10 py-8 px-6 bg-base-100 rounded-2xl shadow-lg max-w-lg text-neutral mx-auto">
      {/* Nome */}
      <label htmlFor="name" className="sr-only">
        Nome
      </label>
      <input
        id="name"
        type="text"
        className="input input-lg validator w-full"
        required
        placeholder="Nome (Opzionale)"
        pattern="[A-Za-z][A-Za-z0-9\-]*"
        minLength="3"
        maxLength="15"
        title="solo lettere, numeri o trattini"
      />
      <p className="validator-hint text-red-600 font-bold my-3 peer-invalid:visible">
        Deve contenere da 3 a 15 caratteri. Solo lettere, numeri o trattini
      </p>
      {/* Email */}
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        type="email"
        className="input input-lg validator w-full"
        required
        placeholder="mail@sito.com"
      />
      <p className="validator-hint font-bold text-red-600 my-3 peer-invalid:visible">
        Inserisci un indirizzo email valido
      </p>
      <button
        type="submit"
        className="btn btn-lg btn-secondary w-full hover:scale-105 transition-transform duration-300"
      >
        Iscriviti
      </button>
    </form>
  );
};

export default NewsletterForm;
