import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import style from "./FlowCard.module.css";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import dbTeste from "../../db/db.json"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

{
  /*
  -Endpoint getRecords
  - user.data_entrada é o campo para acessar os valores
  - pegar a data atual, para então adicionar ao gráfico
*/
}

export default function FlowCard() {
  const api = useApi();
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // if (dataResponse === null) {
        try {
          const response = await api.getRecords();
          setDataResponse(response);
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      // }
    };

    fetchData();
  }, []);
  // config do gráfico
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Fluxo de entrada",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 1.5,
  };

  const horarios = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const horariosDeVisitas = Object.fromEntries(
    horarios.map((hora) => [hora, 0])
  );

  //subtituir pela chamada da API AQUI
  dbTeste.forEach((customer) => {
    function zeroOnTheLeft(num) {
      return num >= 10 ? num : `0${num}`;
    }
   if(customer.data_entrada != ""){
    const hora = new Date(customer.data_entrada).getHours();
    const addZeroNoIncio = zeroOnTheLeft(hora);
    const horaString = String(addZeroNoIncio) + ":00";
    console.log(horaString)
    horariosDeVisitas[horaString] = (horariosDeVisitas[horaString] || 0) + 1;
   }
  });
  const horariosOrdenados = Object.keys(horariosDeVisitas).sort((a, b) => {
    const aDate = new Date(`2023-10-18T${a}:00`);
    const bDate = new Date(`2023-10-18T${b}:00`);
    return aDate - bDate;
  });

  const horariosDeVisitasOrdenados = Object.fromEntries(
    horariosOrdenados.map((hora) => [hora, horariosDeVisitas[hora]])
  );

  const data = {
    labels: Object.keys(horariosDeVisitasOrdenados),
    datasets: [
      {
        label: "Visitas",
        data: Object.values(horariosDeVisitasOrdenados),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className={style.container}>
      <Bar options={options} data={data} />
    </div>
  );
}
