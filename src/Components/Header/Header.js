import React from 'react'
import Buscador from './Buscador/Buscador'

function Header() {
  return (
    <header className="App-header">

    <h1>Título/ Nombre de la app</h1>
    <section>
        <i class="fas fa-th"></i>
        <i class="fas fa-align-justify"></i>
        <Buscador/>
    </section>
  </header>
  )
}

export default Header