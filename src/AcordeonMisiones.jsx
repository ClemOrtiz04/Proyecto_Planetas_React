import { misiones } from "./data/misiones";

export default function AcordeonMisiones() {
  return (
    <div className="accordion" id="misiones">
      {misiones.map((mision) => (
        <div key={mision.id} className="accordion-item bg-dark border-light">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                mision.show ? "" : "collapsed"
              } bg-secondary text-white`}
              data-bs-toggle="collapse"
              data-bs-target={`#${mision.id}`}
            >
              <h5 className="subtitulo-misiones">{mision.titulo}</h5>
            </button>
          </h2>

          <div
            id={mision.id}
            className={`accordion-collapse collapse ${mision.show ? "show" : ""}`}
          >
            <div className="accordion-body">
              <p className="descripcion">{mision.descripcion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
