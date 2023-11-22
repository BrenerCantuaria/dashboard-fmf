import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import style from "./Table.module.css";
import Loading from "../Load";

function Table() {
  const api = useApi();
  const [data, setDataResponse] = useState([]);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getVisitas();
        setDataResponse(response);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // const maisVisitados = data
  //   .sort(function (a, b) {
  //     return a.total_de_visitas - b.total_de_visitas;
  //   })
  //   .reverse();

  return (
    <div className={style.container}>
      <div className={style.cabecalho}>
        <header>
          <h1>Clientes mais visitados</h1>
        </header>
      </div>
      <div className={style.content}>
        <table className={style.table_container}>
          <thead className={style.table_container_head}>
            <td>Visitante</td>
            <td>Torre</td>
            <td>Destino</td>
            <td>Total de visitas</td>
          </thead>
          <tbody>
            {loading ? (<Loading/>) : (
              data.map((customer) => {
              return (
                <tr key={customer.id} className={style.items}>
                  <td>{customer.nome}</td>
                  <td>{customer.id}</td>
                  <td>{customer.torre}</td>
                  <td>{customer.totalVisitas}</td>
                </tr>
              );
            })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
