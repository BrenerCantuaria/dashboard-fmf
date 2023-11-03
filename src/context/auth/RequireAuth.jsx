import { useContext } from "react";
import { AuthContext } from "./authcontext";
import Login from "../../pages/login";

function RequireAuth({ children }) {
  const auth = useContext(AuthContext);
  if (!auth.user) {
    return <Login />;
  }
  return children;
}

export default RequireAuth;
