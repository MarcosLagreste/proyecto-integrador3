import React, {Component} from 'react'

class DeezerInfo extends Component {
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
      
      <ul>
        {
          this.state.info.map((info) => <li>
            {info.title}
          </li>)
        }
      </ul>
    )}
}
export default DeezerInfo