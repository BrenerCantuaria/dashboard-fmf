import style from "./AppointmentsList.module.css";
import agendamentos from "../../db/dbAgendamentos.json"
export default function AppointmentsList() {
 
  return (
    <div className={style.container}>
      <h1> Agendamentos do dia</h1>
      <div className={style.content}>
        <table className={style.table_agendamentos}>
          <thead>
            <td>Visitante</td>
            <td>Torre</td>
            <td>Apartamento</td>
            <td>Expirado</td>
          </thead>
          <tbody>
            {agendamentos.map(visitante => {
              return (  
              <tr key={visitante.id} >
                <td>{visitante.nome}</td>
                <td>{visitante.torre}</td>
                <td>{visitante.apartamento}</td>
                <td><span>Expirado</span></td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
