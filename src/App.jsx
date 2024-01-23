import React from "react";
import Inicio from "./paginas/Inicio";
import InicioSesion from "./paginas/Inicio_Sesion";
import Registro from "./paginas/Registro";
import Inicio_CLiente from "./paginas/Inicio_CLiente";
import Productos_Cliente from "./componentes/Cliente/Productos_Cliente";
import Productos from "./paginas/Productos";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Inicio></Inicio>
      {/* <InicioSesion></InicioSesion>
      <Registro></Registro>
      <Inicio_CLiente></Inicio_CLiente> */}
    </div>
  );
}
