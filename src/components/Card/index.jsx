import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import style from "./Card.module.css";
import dbTeste from "../../db/db.json";
// eslint-disable-next-line react/prop-types
export default function Card({ title }) {
  const [weeklyVisits, setWeeklyVisits] = useState([]);
  const api = useApi();
  const [data,setData] = useState([])
  
  useEffect(()=>{
    const fetchData = async () =>{
      const response = await api.getRecords()
      setData(response)
    }
    fetchData()
  },[])

  useEffect(() => {
   

    const visitasValidas = data.filter(
      (visita) => visita.data_entrada != ""
    );
    const totalVisitasPorDia = visitasValidas.reduce((total, visita) => {
      console.log("total: ",total)
      const diaDaSemana = new Date(visita.data_entrada).getDay();
      total[diaDaSemana]++;
      return total;
    }, Array(7).fill(0));

    setWeeklyVisits(totalVisitasPorDia);
  }, [data]);
  return (
    <div className={style.container}>
      <header>
        <h1>
          {title}
          <span> {new Date().getDay()}</span>
        </h1>
      </header>
      <div className={style.content}>
        <table className={style.table_total_de_visitas_na_semana}>
          <thead>
            <tr>
              <th>Segunda-feira</th>
              <th>Terça-feira</th>
              <th>Quarta-feira</th>
              <th>Quinta-feira</th>
              <th>Sexta-feira</th>
              <th>Sábado</th>
              <th>Domingo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weeklyVisits.map((total, index) => (
                <td key={index}>{total}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
