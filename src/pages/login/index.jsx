import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/authcontext";
import style from "./Login.module.css";
import { Paper, Typography } from '@mui/material';

function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if ((email, password)) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        //home
        navigate("/");
      } else {
        alert("Falha ao eventuar o login");
      }
    }
  };

  return (
    <main className={style.container}>
      <div className={style.esquerda}>Logo aqui </div>
      <div className={style.direita}>
        
        <h1 className={style.cabecalho}>Login</h1>
        <div className={style.mensagemFixa}>
          <Paper elevation={3} className={style.paper}>
            <Typography variant="body1">
              Para demonstração, utilize o seguinte login:
              <br />
              E-mail: user@teste.com
              <br />
              Senha: 12345
            </Typography>
          </Paper>
        </div>
        <h2 className={style.cabecalho}>Seja bem-vindo</h2>
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
              name="password"
              placeholder="digite sua senha aqui"
              value={password}
              onChange={(value) => setPassword(value.target.value)}
            />
          </div>
          <button type="submit" className={style.btn_enviar}>Entrar</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
