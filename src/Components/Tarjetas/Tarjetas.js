import React, {Component} from 'react'
import Tarjeta from './Tarjeta/Tarjeta'

class Tarjetas extends Component{
  constructor(props) {
    super(props)
    this.state= {
      isLoaded: false,
      info: [],
      error: ''
    }
  }

  componentDidMount() {
    let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10'
    fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({
          isLoaded: true,
          info: data.data
        }))
        .catch((error) => this.setState({ error: 'Ups, ocurrió un error inesperado' }))
  }
  render(){
    console.log('renderizado')
    return(
      
      <article>
          {
            this.state.isLoaded === false ?
            <p>Cargando... </p> :
            this.state.info.map((info, idx) =>
                < Tarjeta key={info.id + idx} datosTarjeta={info} />
            )
          }
      </article>  
    )
  }
}

export default Tarjetas