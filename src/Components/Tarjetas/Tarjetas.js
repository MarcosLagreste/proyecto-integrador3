import React, {Component} from 'react'
import Tarjeta from './Tarjeta/Tarjeta'

class Tarjetas extends Component{
  constructor(props) {
    super(props)
    this.state= {
      info: [],
      error: ''
    }
  }

  componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10')
        .then((response) => response.json())
        .then((data) => this.setState({ info: data.data }))
        .catch((error) => this.setState({ error: 'Ups, ocurrió un error inesperado' }))
  }
  render(){
    console.log('renderizado')
    return(
      
      <article>
          {
            this.state.info.map((info) =>
                <main>
                    <img src={info.picture} alt=""/>
                    <h3>{info.title}</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            )
          }
      </article>  
    )
  }
}

export default Tarjetas