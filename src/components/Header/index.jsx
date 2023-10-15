import style from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={style.header}>
      <ul>
        <li>
          <Link to="/">DashBoard</Link>
        </li>
        <li>
          <Link to="/Clientes">Clientes</Link>
        </li>
      </ul>
    </header>
  );
}
