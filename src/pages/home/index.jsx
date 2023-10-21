import { Outlet } from "react-router-dom";
import SideBar from "../../components/Sidebar/SideBar";
import styles from "./Home.module.css";
import Loading from "../../components/Load";
import Footer from "../../components/Footer"
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    async function fetchToken() {
      try {
        if (!token) {
          const response = await fetch("URL_AQUI");
          if (!response.ok) {
            throw new Error("Erro na requisição");
          }
          const data = await response.json();
          const receivedToken = data.token;
          setToken(receivedToken);
          localStorage.setItem("token", receivedToken);
          setLoading(false); 
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchToken();
  }, [token]);

  return (
    <main className={styles.container}>
      <SideBar />
      {loading ? <Loading /> : <Outlet />}
      <Footer/>
    </main>
  );
}
