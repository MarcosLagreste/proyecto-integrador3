import React, {Component} from 'react'
import Tarjeta from './Tarjeta/Tarjeta'
import Buscador from '../Buscador/Buscador'

class Tarjetas extends Component{
  constructor(props) {
    super(props)
    this.state= {
      isLoaded: false,
      info: [],
      infoInicial: [],
      error: ''
    }
  }

  componentDidMount() {
    let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10'
    fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({
          isLoaded: true,
          info: data.data,
          infoInicial: data.data
        }))
        .catch((error) => this.setState({ error: 'Ups, ocurrió un error inesperado' }))
  }
  filtrarBusqueda(textoAFiltrar){
    let cancionesFiltradas = this.state.infoInicial.filter(info => info.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
    this.setState({
        infoInicial: cancionesFiltradas
    })
    console.log(cancionesFiltradas); 
  }
  render(){
    console.log('renderizado')
    return(
      <React.Fragment>
      <Buscador filtrarBusqueda={(textoAFiltrar) => this.filtrarBusqueda(textoAFiltrar)}/>
      <button type="button">Cargar más tarjetas</button>
      <article>
          {
            this.state.isLoaded === false ?
            <p>Cargando... </p> :
            this.state.info.map((info, idx) =>
                < Tarjeta key={info.id + idx} datosTarjeta={info} />
            )
          }
      </article>  
      </React.Fragment>
    )
  }
}

export default Tarjetas