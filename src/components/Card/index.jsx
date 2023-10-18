import style from "./Card.module.css";
// eslint-disable-next-line react/prop-types
export default function Card({ title }) {
  return (
    <div className={style.container}>
       <h1>{title}</h1>
    </div>
  );
}
