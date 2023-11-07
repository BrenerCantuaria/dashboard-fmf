import style from "./Card.module.css";
// eslint-disable-next-line react/prop-types
export default function Card({ title }) {
  const data = new Date();
  return (
    <div className={style.container}>
      <header>
        <h1>
          {title}
          <span> {data.toLocaleDateString()}</span>
        </h1>
      </header>
      <div className={style.content}>
        <table className={style.table_total_de_visitas_na_semana}>
          <thead>
            <tr>
              <th>Segunda-feira</th>
              <th>Terça-feira</th>
              <th>Quarta-feira</th>
              <th>Sexta-feira</th>
              <th>Sábado</th>
              <th>Domingo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12</td>
              <td>4</td>
              <td>15</td>
              <td>15</td>
              <td>12</td>
              <td>12</td>
            </tr>
            <tr>
              <td>12</td>
              <td>4</td>
              <td>15</td>
              <td>15</td>
              <td>12</td>
              <td>12</td>
            </tr>
            <tr>
              <td>12</td>
              <td>4</td>
              <td>15</td>
              <td>15</td>
              <td>12</td>
              <td>12</td>
            </tr>
            <tr>
              <td>12</td>
              <td>4</td>
              <td>15</td>
              <td>15</td>
              <td>12</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
