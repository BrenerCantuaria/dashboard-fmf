/* eslint-disable no-unused-vars */
import style from "./Dashboard.module.css";
import FlowChart from "../../components/FlowChart";
import PieChart from "../../components/PieTimeChart";
import Table from "../../components/Table";
import Card from "../../components/Card";
import AppointmentsList from "../../components/AppointmentsList";
import { Chart } from "chart.js";
import { useApi } from "../../hooks/useApi";
import Buttons  from "../../components/Button";
export default function DashBoard() {
  
  return (
    <main className={style.container}>
      <section className={style.grid_item}>
        <FlowChart />
        <PieChart />
      </section>
      <section className={style.card}>
        <Card title={"Total de visitas na semana"} />
        <Buttons/>
      </section>
      <section className={style.grid_table}>
        <Table />
      </section>
      {/* 
        - Removido
      <section className={style.grid_table}>
        <AppointmentsList />
      </section> */}
    </main>
  );
}
