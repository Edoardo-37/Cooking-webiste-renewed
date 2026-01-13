function HowItWorksCard({ title, description, icon, altText }) {
  return (
    <div className="flex flex-col items-center rounded-2xl py-4 px-8 gap-5 bg-base-100 max-w-96 shadow-md hover:-translate-y-2 hover:shadow-lg hover:shadow-primary transition-all duration-300">
      {/* icona */}
      <div className="px-10 pt-10 mx-auto">
        <img src={icon} alt={altText} />
      </div>
      {/* testo */}
      <div className=" items-center text-center text-neutral min-h-40">
        <h3 className="font-semibold mb-4">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default HowItWorksCard;
