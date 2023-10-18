import data from "../../db/db.json";
import style from "./Table.module.css";

function Table() {
  const maisVisitados = data
    .sort(function (a, b) {
      return a.total_de_visitas - b.total_de_visitas;
    })
    .reverse();

  return (
    <div className={style.container}>
      <div  className={style.cabecalho}>
        <header >
          <h1>Clientes mais visitados</h1>
        </header>
      </div>
      <table>
        <thead>
          <td>Cliente</td>
          <td>Torre</td>
          <td>Apartamento</td>
          <td>Total de visitas</td>
        </thead>
        <tbody>
          {maisVisitados.map((customer) => {
            return (
              <tr key={customer.id} className={style.items}>
                <td>{customer.nome}</td>
                <td>{customer.torre}</td>
                <td>{customer.apartamento}</td>
                <td>{customer.total_de_visitas}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
