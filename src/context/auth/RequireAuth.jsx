/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./authcontext";
import Login from "../../pages/login";

function RequireAuth({ children }) {
  //
  // Validar o token antes dessa parte,
  // 422 no interceptor deve apagar o token e redirecionar para o login
  const auth = useContext(AuthContext);
  if (!auth.user && !localStorage.getItem("user")) {
    return <Login />;
  }
  return children;
}

export default RequireAuth;
