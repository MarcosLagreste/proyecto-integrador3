import React, {Component} from 'react'

class Tarjeta extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <main>
          <img src={this.props.datosTarjeta.artist.picture_medium} alt=""/>
          <h3>{this.props.datosTarjeta.title}</h3>
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
}

export default Tarjeta