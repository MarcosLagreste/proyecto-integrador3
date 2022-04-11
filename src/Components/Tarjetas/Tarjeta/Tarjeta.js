import React, {Component} from 'react'

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
      <main>
          <img src={this.props.datosTarjeta.artist.picture_medium} alt=""/>
          <h3>{this.props.datosTarjeta.title}</h3>
          <p class="description">Artista: {this.props.datosTarjeta.artist.name}</p>
          {
          this.state.verMas === false ?
          <p></p> :
          <section class="aditional-info">
            <p>Album: {this.props.datosTarjeta.album.title}</p>
          </section>
          }
          <button onClick={()=> this.cambiarVerMas()}>{this.state.text}</button>          
      </main>
    )
  }
}

export default Tarjeta