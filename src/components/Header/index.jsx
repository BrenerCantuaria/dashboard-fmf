import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth/authcontext";

export default function Header() {
  const auth = useContext(AuthContext);
  const location = useLocation();
  const handleLogOut = async () => {
    await auth.signout();
  };
  return (
    <nav className={style.header}>
      <ul>
        <li className={location.pathname === "/" ? style.active_link : ""}>
          <Link to="/">DashBoard</Link>
        </li>
        <li
          className={location.pathname === "/Clientes" ? style.active_link : ""}
        >
          <Link to="/Clientes">Clientes</Link>
        </li>
        {auth.user && (
          <li>
            <Link to="/Login" onClick={handleLogOut}>
              Sair
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
