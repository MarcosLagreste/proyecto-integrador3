import React, {Component} from 'react'
import Tarjeta from './Tarjeta/Tarjeta'
import Buscador from '../Buscador/Buscador'
import "./tarjetas.css"

class Tarjetas extends Component{
  constructor(props) {
    super(props)
    this.state= {
      isLoaded: false,
      info: [],
      infoI: [],
      error: '',
      limit: 10
    }
  }

  componentDidMount() {
    let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10'
    fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({
          isLoaded: true,
          info: data.data,
          infoI: data.data
        }))
        .catch((error) => this.setState({ error: 'Ups, ocurrió un error inesperado' }))
  }

  componentDidUpdate(){
    let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=${this.state.limit}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({
          info: data.data,
          infoI: data.data
        }))
        .catch((error) => this.setState({ error: 'Ups, ocurrió un error inesperado' }))
  }

  filtrarBusqueda(textoAFiltrar){
    let cancionesFiltradas = this.state.infoI.filter(info => info.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
    this.setState({
        info: cancionesFiltradas
    })
    /* console.log(cancionesFiltradas) */; 
  }

  traerTarjetas(){
    this.setState({
      limit: this.state.limit + 10
    })
  }

  render(){
    /* console.log('renderizado') */
    return(
      <React.Fragment>
      <Buscador filtrarBusqueda= {(textoAFiltrar) => this.filtrarBusqueda(textoAFiltrar)}/>
      <article>
          {
            this.state.isLoaded === false ?
            <p>Cargando... </p> :
            this.state.info.map((info, idx) =>
                < Tarjeta key={info.id + idx} datosTarjeta={info} />
            )
          }
        <button onClick={() => this.traerTarjetas()} type="button">Cargar más tarjetas</button>
      </article>  
      </React.Fragment>
    )
  }
}

export default Tarjetas