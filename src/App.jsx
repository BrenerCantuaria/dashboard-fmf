import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Customers from "./pages/customerList";
import DashBoard from "./pages/dashboard";
import Home from "./pages/home";
import Login from "./pages/login";
import AuthProvider from "./context/auth/authprovider";
import RequireAuth from "./context/auth/RequireAuth";

function App() {
  return (
    // Provedor
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<RequireAuth> <Home/> </RequireAuth>}>
            <Route path="/" element={<DashBoard />}></Route>
            <Route path="/Clientes" element={<Customers />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
