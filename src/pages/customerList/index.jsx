import { FcSearch } from "react-icons/fc";
import style from "./CustomerList.module.css";
import { useEffect, useState } from "react";
export default function CustomersList() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [flagFilter, setFlagFilter] = useState(false);

  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    const listaFiltrada = user.filter((user) => {
      const LatterfirstName = user.name.split(" ")[0].toLowerCase();
      return LatterfirstName === search.toLocaleLowerCase();
    });
    setFiltered(listaFiltrada);
    setFlagFilter(true);
  }, [search]);
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
        >
          
        </input>
        <FcSearch size={30} />
      </div>
      <section className={style.table_clientes}>
        <table>
          <thead>
            <td>Nome</td>
            <td>Email</td>
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
      </section>
    </main>
  );
}
