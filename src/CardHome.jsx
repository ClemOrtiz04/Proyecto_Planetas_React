import { cardsHome } from "./data/cardsHome"

export default function CardHome() {
  return (
    <div className="row mt-5 cards-espacio">
      {cardsHome.map((card) => (
        <div key={card.id} className="col-md-4">
          <div className="card bg-transparent border-light">
            <img
              src={card.imagen}
              className="card-img-top"
              alt={card.titulo}
            />
            <div className="card-body">
              <h5 className="card-title h5">{card.titulo}</h5>
              <p className="card-text parrafo">{card.descripcion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
