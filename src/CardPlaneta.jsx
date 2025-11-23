import { planetas } from "./data/planetas";

export default function CardHome() {
  return (
    <div className="row mt-5 cards-espacio">
      {planetas.map((item) => (
        <div className="col-md-4" key={item.id}>
          <div className="card bg-transparent border-light">
            <img
              src={item.imagen}
              className="card-img-top"
              alt={item.alt}
            />
            <div className="card-body">
              <h5 className="card-title h5">{item.titulo}</h5>
              <p className="card-text parrafo">{item.descripcion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
