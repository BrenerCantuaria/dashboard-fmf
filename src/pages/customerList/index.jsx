import { useCallback, useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useApi } from "../../hooks/useApi";
import style from "./CustomerList.module.css";

export default function CustomersList() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [flagFilter, setFlagFilter] = useState(false);
  const api = useApi();

  const dataResponse = useCallback(async () => {
    const data = await api.getTeste();
    setUser(data);
  }, [api]);

  useEffect(() => {
    dataResponse();
  }, []);

  useEffect(() => {
    const listaFiltrada = user.filter((userDoFilter) => {
      // userDoFilter.nome mudar para name
      const firstName = String(userDoFilter.name).includes(search)
      return firstName; 
    });
    setFiltered(listaFiltrada);
    setFlagFilter(true);
  }, [search, user]);

  return (
    <main>
      <header className={style.cabecalho}>
        <h1 className={style.title}>Todos clientes cadastrados</h1>
      </header>
      <div className={style.search}>
        <input
          placeholder="buscar por cliente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <FcSearch size={30} />
      </div>
      <section className={style.table_clientes}>
      <div className={style.content}>
      <table className={style.table_container}>
          <thead className={style.table_container_head}>
            <tr>
              <td>Nome</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {search === "" || flagFilter === false
              ? user.map((userData) => (
                  <tr key={userData.id}>
                    <td>{userData.name}</td>
                    <td>{userData.email}</td>
                  </tr>
                ))
              : filtered.map((userData) => (
                  <tr key={userData.id}>
                    <td>{userData.name}</td>
                    <td>{userData.email}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
        
      </section>
    </main>
  );
}
