 import style from "./PieChart.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import datajson from "../../db/db.json";
import { useEffect, useState } from "react";
export default function PieChart() {
  const [manha,setManha] = useState(0)
  const [tarde,setTarde] = useState(0)
  const [noite,setNoite] = useState(0)

  useEffect(() => {
    
    const horariosDeEntrada = datajson.map((customer) => {
      let date = new Date(customer.horario);
      let hour = date.getHours();
      if (hour >= 6 && hour < 12) {
        setManha((prevManha) => prevManha + 1);
      } else if (hour >= 12 && hour < 18) {
        setTarde((prevTarde) => prevTarde + 1);
      } else {
        setNoite((prevNoite) => prevNoite + 1);
      }
    });
  }, []);
  
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
      <Pie data={data} />
    </div>
  );
}
