import style from "./AppointmentsList.module.css";
import agendamentos from "../../db/dbAgendamentos.json";
export default function AppointmentsList() {
  // const [agendamentosState,setAgentamentosState] = useState(null)

  return (
    <div className={style.container}>
      <h1> Agendamentos do dia</h1>
      <div className={style.content}>
        <table className={style.table_agendamentos}>
          <thead>
            <tr>
              <th>Visitante</th>
              <th>Torre</th>
              <th>Apartamento</th>
              <th>Expirado</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((visitante) => {
              return (
                <tr key={visitante.id}>
                  <td>{visitante.nome}</td>
                  <td>{visitante.torre}</td>
                  <td>{visitante.apartamento}</td>
                  <td>
                    <span className={style.expirado}>Expirado</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
