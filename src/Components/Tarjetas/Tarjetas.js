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
      columna: false,
      sinResultados: null
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
    if (cancionesFiltradas.length !== 0) {this.setState({
        info: cancionesFiltradas,
        sinResultados: null
    })}else {
      this.setState({
        sinResultados: 1
      })
    } 
    /* console.log(cancionesFiltradas) */; 
  }
  borrarTarjetas(BorrarTarjeta){
        let tarjetasQueQuedan = this.state.info.filter( info => info.id !== BorrarTarjeta);

        this.setState({
            info: tarjetasQueQuedan
        })
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
        this.state.sinResultados !== null ?
        <>
          <Buscador filtrarBusqueda= {(textoAFiltrar) => this.filtrarBusqueda(textoAFiltrar)}/>
        <h4>No hay datos que coincidan con su búsqueda, pruebe buscar otro titulo</h4>
          </> :
          <>
        <div className='buscador'>
          <Buscador filtrarBusqueda= {(textoAFiltrar) => this.filtrarBusqueda(textoAFiltrar)}/>

          <section className='sectionTop'>
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
                    < Tarjeta key={info.id + idx} datosTarjeta={info} columna={this.state.columna} remove={(borrarTarjeta)=>this.borrarTarjetas(borrarTarjeta)}/>
                )
              }
            </article> :
            <article className='tarjetasColumna'>
              {
                this.state.isLoaded === false ?
                <p>Cargando... </p> :
                this.state.info.map((info, idx) =>
                    < Tarjeta key={info.id + idx} datosTarjeta={info} columna={this.state.columna} remove={(borrarTarjeta)=>this.borrarTarjetas(borrarTarjeta)}/>
                )
              }
            </article>
        }
        <button onClick={() => this.cargarMas()} type="button">Cargar más tarjetas</button>  
      </>
    )
  }
}

export default Tarjetas