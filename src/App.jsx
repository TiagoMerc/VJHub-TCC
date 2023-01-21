import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Contato, Ecossistema, Page404 } from "./pages";
//import Ecossistema from "./pages/home/Ecossistema";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Ecossistema" element={<Ecossistema />} />
    </Routes>
  );
}

export default App;
