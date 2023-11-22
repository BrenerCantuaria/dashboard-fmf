import { useCallback, useEffect, useState } from "react";
import agendamentos from "../../db/dbAgendamentos.json";
import { useApi } from "../../hooks/useApi";
import style from "./AppointmentsList.module.css";
import Loading from "../Load";

{
  /* 
  Endpoint responsável é /Cards
  - O campo status só vai receber da api se foi utilizado ou não
  - utilizar status vindo da api
*/
}
export default function AppointmentsList() {
  const [customers, setCustomers] = useState([]);
  const [loding, setLoading] = useState(true);
  const api = useApi();

  const dataResponse = useCallback(async () => {
    try {
      const data = await api.getTeste();
      setCustomers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, [api]);

  useEffect(() => {
    dataResponse();
  }, []);
  return (
    <div className={style.container}>
      <div className={style.cabecalho}>
        <header>
          <h1>Agendamentos</h1>
        </header>
      </div>
      <div className={style.content}>
        {" "}
        {loding ? (
          <Loading />
        ) : (
          <table className={style.table_container}>
            <thead className={style.table_container_head}>
              <td>Visitante</td>
              <td>Torre</td>
              <td>Destino</td>
              <td>Status</td>
            </thead>
            <tbody>
              {customers.map((customer) => {
                return (
                  <tr key={customer.id} className={style.items}>
                    <td>{customer.name}</td>
                    <td>{customer.id}</td>
                    <td>{customer.address.suite}</td>
                    <td>
                      <span>OK</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
