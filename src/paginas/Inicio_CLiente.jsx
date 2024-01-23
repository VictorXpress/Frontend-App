import React from 'react'
import Menu_Cliente from '../componentes/Cliente/Menu_Cliente'
import Panel_Principal from '../componentes/Cliente/Panel_Principal'
import Footer from '../componentes/Footer'

export default function Inicio_CLiente() {
  return (
    <div>
      <Menu_Cliente></Menu_Cliente>
      <Panel_Principal></Panel_Principal>
      <Footer></Footer>
    </div>
  )
}
