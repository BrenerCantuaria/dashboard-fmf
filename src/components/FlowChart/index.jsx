import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import datajson from "../../db/db.json";
import style from "./FlowCard.module.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
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
const horariosDeVisitas = Object.fromEntries(horarios.map(hora => [hora,0]))

datajson.forEach((customer) => {
  const hora = customer.horario.split("T")[1].slice(0, -3);
  horariosDeVisitas[hora] = (horariosDeVisitas[hora] || 0 ) + customer.total_de_visitas
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
  labels:Object.keys(horariosDeVisitasOrdenados),
  datasets: [
    {
      label: "Visitas",
      data: Object.values(horariosDeVisitasOrdenados),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export default function FlowCard() {
  return (
    <div className={style.container}>
      <Bar options={options} data={data} />
    </div>
  );
}
