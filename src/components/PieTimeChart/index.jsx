import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useApi } from "../../hooks/useApi";
import Loading from "../Load";
import style from "./PieChart.module.css";
import dbTeste from "../../db/db.json"
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const [manha, setManha] = useState(0);
  const [tarde, setTarde] = useState(0);
  const [noite, setNoite] = useState(0);
  const [dataRecords, setDataRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = useApi();

  
  useEffect(() => {
    const calculateVisits = async () => {
      try {
        const response = await api.getRecords()
        setDataRecords(response)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    };
    calculateVisits();
  }, []);

  useEffect(()=>{
    let manhaCount = 0;
    let tardeCount = 0;
    let noiteCount = 0;
    // substituir a chamada da api aqui 
    dbTeste.forEach((customer) => {
      function zeroOnTheLeft(num) {
        return num >= 10 ? num : `0${num}`;
      }

      if (customer.data_entrada !== "") {
        const horas = new Date(customer.data_entrada).getHours();
        const addZeroNoIncio = zeroOnTheLeft(horas);
        if (addZeroNoIncio >= 6 && addZeroNoIncio < 12) {
          manhaCount += 1;
        } else if (addZeroNoIncio >= 12 && addZeroNoIncio < 18) {
          tardeCount += 1;
        } else if (addZeroNoIncio >= 18) {
          noiteCount += 1;
        }
      }
    });

    setManha(manhaCount);
    setTarde(tardeCount);
    setNoite(noiteCount);
  },[dataRecords])


  const data = {
    labels: ["Manhã", "Tarde", "Noite"],
    datasets: [
      {
        label: "Visitas",
        data: [manha, tarde, noite],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
      },
    ],
  };

  return (
    <div className={style.container}>
         <Pie data={data}/>
    </div>
  );
}
