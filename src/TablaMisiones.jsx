import { tablaMisiones } from "./data/tablaMisiones";

export default function TablaMisiones() {
  return (
    <table className="table table-dark table-striped mt-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Misión</th>
          <th scope="col">Año</th>
          <th scope="col">Objetivo</th>
        </tr>
      </thead>

      <tbody>
        {tablaMisiones.map((mision) => (
          <tr key={mision.id}>
            <th scope="row">{mision.id}</th>
            <td>{mision.nombre}</td>
            <td>{mision.año}</td>
            <td>{mision.objetivo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
