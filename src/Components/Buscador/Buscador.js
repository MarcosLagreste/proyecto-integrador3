import React, { Component } from 'react'
import "./buscador.css"

class Buscador extends Component { 
  constructor(props){
    super(props);
    this.state ={
      filtrar: ''
    }
  }
  evitarSumit(event){
    event.preventDefault()
    console.log('Evitando el envio')
  }
  controlarCambios(event){
    this.setState({
      filtrar: event.target.value
    }, () => this.props.filtrarBusqueda(this.state.filtrar))
  }
  
  render() {
  return (
    <form action="" onSubmit={(evento)=> this.evitarSumit(evento)}>
            <input type="text" onChange={(event)=> this.controlarCambios(event)} value={this.state.filtrar} name="search" id="" placeholder="Search title"/>
            <button type="submit"><i class="fas fa-search"></i></button>
    </form>
  )
}
}
export default Buscador