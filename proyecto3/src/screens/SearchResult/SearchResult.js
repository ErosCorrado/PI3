import React, { Component } from 'react';
import Card from '../../componentes/Card/Card'

class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            favoritos: []
        };
    }

    componentDidMount() {
         fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.search}&api_key=0ac8f3235ecd7f1b9c2f99fa8b233126`)
             .then(response => response.json())
             .then(data => {
                console.log(data.results)
                this.setState({ peliculas: data.results });
             })
             .catch(error => {
                 console.error('Error al obtener los resultados de la búsqueda:', error);
            });
    }

    render() {
        return (
            <div>
                <h1>Resultados de Búsqueda</h1>
                {this.state.peliculas.map((elm, idx) => (
                <Card
                 key={idx + elm.title}
                actualizarFav={(arr) => this.favoritos(arr)}
                esFav={this.state.favoritos.includes(elm.id)}
                peliculas={elm}
                  />
                ))
            }
            </div>
      )
    }
      
  }    
export default ResultadoBusqueda;