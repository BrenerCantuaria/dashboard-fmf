import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import SideBar from "../../components/Sidebar/SideBar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <SideBar />
      <Outlet />
      <Footer />
    </main>
  );
}
