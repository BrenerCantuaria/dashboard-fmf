import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./authcontext";

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storage = localStorage.getItem("token");
      if (storage) {
        const data = await api.validateToken(storage);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, [api]);

  const signin = async (email,password) => {
    const data = await api.signin(email,password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    setUser(null);
    setToken('')
    await api.logout();
  };

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
