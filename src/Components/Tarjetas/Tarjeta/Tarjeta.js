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
    this.state.verMas === true ?
    this.setState({verMas: false, text: "Ver Más"}) :
    this.setState({verMas: true, text: "Ver Menos"})
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
                
                {
                this.state.verMas === false ?
                null :
                <section class="aditional-info">
                  <p>Ranking: {this.props.datosTarjeta.position}</p>
                  <p>Duration: {this.props.datosTarjeta.duration} seconds</p>
                  <p>Album: {this.props.datosTarjeta.album.title}</p>
                </section>
                }
                <div className='botones'>
                  <button onClick={()=> this.cambiarVerMas()}>{this.state.text}</button>
                  <button class="Borrar1" onClick={()=>this.props.remove(this.props.datosTarjeta.id)}>Eliminar</button>
                </div>
              </div>            
          </main> :
          
          <main className='contenedor-tarjeta-columna'>
            <img src={this.props.datosTarjeta.artist.picture_medium} alt=""/>
              <div className='fila'>  
                <h3>{this.props.datosTarjeta.title_short}</h3>
                <p class="description">Artista: {this.props.datosTarjeta.artist.name}</p>
                {
                this.state.verMas === false ?
                null :
                <React.Fragment>
                <p>Ranking: {this.props.datosTarjeta.position}</p>
                <p>Duration: {this.props.datosTarjeta.duration} seconds</p>
                <p>Album: {this.props.datosTarjeta.album.title}</p>
                </React.Fragment>
                }
                <button className="borrar1" onClick={()=> this.cambiarVerMas()}>{this.state.text}</button>
                <button className="borrar2" onClick={()=>this.props.remove(this.props.datosTarjeta.id)}>Eliminar</button>
              </div>            
          </main>
      }
      
      
      </React.Fragment>
    )
  }
}

export default Tarjeta