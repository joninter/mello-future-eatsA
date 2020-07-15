import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import PedidoCard from "./components/PedidoCard";

function App() {
  return (
    <BrowserRouter>
      <PedidoCard></PedidoCard>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
