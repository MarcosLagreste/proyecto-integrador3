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
      limit: 12,
      columna: false
    }
  }

  componentDidMount() {
    let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=12'
    fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({
          isLoaded: true,
          info: data.data,
          infoI: data.data
        }))
        .catch((error) => this.setState({ error: 'Ups, ocurrió un error inesperado' }))
  }

  cargarMas(){
    this.setState({
      limit: this.state.limit + 12
    }, ()=>{
      let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=${this.state.limit}`
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({
          info: data.data,
          infoI: data.data
        }))
        .catch((error) => this.setState({ error: 'Ups, ocurrió un error inesperado' }))
    })
  }

  filtrarBusqueda(textoAFiltrar){
    let cancionesFiltradas = this.state.infoI.filter(info => info.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
    this.setState({
        info: cancionesFiltradas
    })
    /* console.log(cancionesFiltradas) */; 
  }

  alinearColumnas(){
    this.setState({
      columna: false
    })
  }

  alinearColumna(){
    this.setState({
      columna: true
    })
  }

  render(){
    /* console.log('renderizado') */
    return(
      <React.Fragment>
        <div className='buscador'>
          <Buscador filtrarBusqueda= {(textoAFiltrar) => this.filtrarBusqueda(textoAFiltrar)}/>
          <section>
            <i onClick={() => this.alinearColumnas()} className="fas fa-th"></i>
            <i onClick={() => this.alinearColumna()} className="fas fa-align-justify"></i>
          </section>
        </div>
        {
          this.state.columna === false ?
            <article className='tarjetasColumnas'>
              {
                this.state.isLoaded === false ?
                <p>Cargando... </p> :
                this.state.info.map((info, idx) =>
                    < Tarjeta key={info.id + idx} datosTarjeta={info} columna={this.state.columna} />
                )
              }
            </article> :
            <article className='tarjetasColumna'>
              {
                this.state.isLoaded === false ?
                <p>Cargando... </p> :
                this.state.info.map((info, idx) =>
                    < Tarjeta key={info.id + idx} datosTarjeta={info} columna={this.state.columna}/>
                )
              }
            </article>
        }
        <button onClick={() => this.cargarMas()} type="button">Cargar más tarjetas</button>  
      </React.Fragment>
    )
  }
}

export default Tarjetas