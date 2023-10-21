import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.css";

export default function Header() {
  const location = useLocation();

  return (
    <nav className={style.header}>
      <ul>
        <li className={location.pathname === '/' ? style.active_link : ''}>
          <Link to="/">DashBoard</Link>
        </li>
        <li className={location.pathname === '/Clientes' ? style.active_link : ''}>
          <Link to="/Clientes">Clientes</Link>
        </li>
      </ul>
    </nav>
  );
}
