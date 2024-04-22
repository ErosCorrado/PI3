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
         fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.resultadosBusqueda}&api_key=0ac8f3235ecd7f1b9c2f99fa8b233126`)
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
          this.state.peliculas.length !== 0 ?
            <section>
              <h2>Resultados para: {this.props.match.params.resultadosBusqueda}</h2> 
              {
              this.state.peliculas.map((elm, idx) => (
                  <Card
                  refreshState={this.props.refreshState ? (id) => this.props.refreshState(id) : false} 
                  id={elm.id}
                  image={`https://image.tmdb.org/t/p/w500${elm.poster_path}`}
                  title={elm.title}
                  description={elm.overview}
                  key={idx + elm.name} 
                  />
              ))
          }
            </section>
            :
            <h2>No se encontraron resultados para: {this.props.match.params.resultadosBusqueda}</h2>
        )
      }
    }
export default ResultadoBusqueda;