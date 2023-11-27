import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./authcontext";

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storageData = window.localStorage.getItem("user");
    storageData ? localStorage.getItem("user") : null;
  });
  const api = useApi();

  const signin = async (email, password) => {
    const data = await api.signin(email, password);
    console.log(data)
    // add  veificação se é admin ou não
    // mudar aqui para data.tipo
    if(data.user.tipo === "Administrador" && data.user.email == email){
      if (data.user && data.token) {
        setUser(data.user);
        persistUser(data.user);
        setToken(data.token);
        return true;
      }
    }
      
    
   
    return false;
  };
  
  const persistUser = (user) => {
    window.localStorage.setItem("user", JSON.stringify(user));
  };
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const signout = async () => {
    setUser(null);
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
  };

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  //signout
  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
