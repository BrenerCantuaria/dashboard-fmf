import { useContext, useState } from "react";
import style from "./Login.module.css";
import { AuthContext } from "../../context/auth/authcontext";
import { useNavigate } from "react-router-dom";
function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email,password) {
      const isLogged = await auth.signin(email,password) 
      if (isLogged) {
        //home
        navigate("/");
      }else{
        alert("Falha ao eventuar o login")
      }
    }
  };

  return (
    <main className={style.container}>
      <h1>Login</h1>
      <form
        method="post"
        className={style.content_form}
        onSubmit={handleLogin}
      >
        <div>
        <label>E-mail:</label>
          <input
            type="email"
            name="email"
            placeholder="digite seu email aqui"
            value={email}
            onChange={(value) => setEmail(value.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="email"
            placeholder="digite sua senha aqui"
            value={password}
            onChange={(value) => setPassword(value.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}

export default Login;
