import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Customers from "./pages/customerList";
import DashBoard from "./pages/dashboard";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/Clientes" element={<Customers />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
