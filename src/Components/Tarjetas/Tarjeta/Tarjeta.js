import React, {Component} from 'react'
import "./tarjeta.css"

class Tarjeta extends Component{
  constructor(props){
    super(props)
    this.state = {
      verMas: false,
      text: "Ver Más"
    }
  }

  cambiarVerMas(){
    if(this.state.verMas){
      this.setState({verMas: false, text: "Ver Más"})
    } else {
      this.setState({verMas: true, text: "Ver Menos"})
    }
  }
  
  render(){
    return(
      <React.Fragment>
      {
        this.props.columna === false ?
          <main className='contenedor-tarjeta-columnas'>
            <img src={this.props.datosTarjeta.artist.picture_medium} alt=""/>
              <div>  
                <h3>{this.props.datosTarjeta.title_short}</h3>
                <p class="description">Artista: {this.props.datosTarjeta.artist.name}</p>
                <button class="Borrar" onClick={()=>this.props.remove(this.props.datosTarjeta.id)}>Eliminar</button>
                {
                this.state.verMas === false ?
                <p></p> :
                <section class="aditional-info">
                  <p>Album: {this.props.datosTarjeta.album.title}</p>
                </section>
                }
                <button onClick={()=> this.cambiarVerMas()}>{this.state.text}</button>
              </div>            
          </main> :
          
          <main className='contenedor-tarjeta-columna'>
          <img src={this.props.datosTarjeta.artist.picture_medium} alt=""/>
            <div className='fila'>  
              <h3>{this.props.datosTarjeta.title_short}</h3>
              <p class="description">Artista: {this.props.datosTarjeta.artist.name}</p>
              <button class="Borrar" onClick={()=>this.props.remove(this.props.datosTarjeta.id)}>Eliminar</button> 
              {
              this.state.verMas === false ?
              <p></p> :
              <section class="aditional-info-columna">
                <img src={this.props.datosTarjeta.album.cover_small}/>
                <p>Album: {this.props.datosTarjeta.album.title}</p>
              </section>
              }
              <button onClick={()=> this.cambiarVerMas()}>{this.state.text}</button>
            </div>            
        </main>
      }
      
      
      </React.Fragment>
    )
  }
}

export default Tarjeta