import style from "./FlowCard.module.css"
import datajson from "../../db/db.json"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  
  plugins: {
   
    title: {
      display: true,
      text: 'Fluxo de entrada',
    },
  },
  maintainAspectRatio: false, // Permite a responsividade
  responsive: true,
  aspectRatio: 1.5,
};

export const data = {
  labels: datajson.map( data => data.nome),
  datasets: [
    {
      label: 'Users',
      data: datajson.map(data => data.id),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
export default function FlowCard() {
  return (

    <div className={style.container}>
      <Line options={options} data={data}/>
    </div>
  )
}
