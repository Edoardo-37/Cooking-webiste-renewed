import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  const {
    slug,
    title,
    description,
    dishType,
    prepTime,
    difficulty,
    portions,
    img,
    alt,
  } = recipe;
  return (
    // componente card di DaisyUI
    <div className="card card-lg bg-white w-96 h-full shadow-md hover:-translate-y-2 hover:shadow-lg hover:shadow-primary transition-all duration-300 ">
      <figure className="w-full h-60">
        <img src={img} alt={alt} />
      </figure>
      <div className="card-body justify-between gap-5 flex-1">
        <h3 className="card-title">{title}</h3>
        <div className="badge badge-lg badge-secondary font-semibold tracking-wide w-fit">
          {dishType}
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end flex items-center">
          <div className="badge badge-lg">{portions}</div>
          <div className="badge badge-lg">{prepTime}</div>
          <div className="badge badge-lg">{difficulty}</div>
        </div>
        <Link
          to={`/ListaRicette/${slug}`}
          className="btn btn-primary btn-lg w-fit ms-auto"
        >
          Vedi ricetta
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
