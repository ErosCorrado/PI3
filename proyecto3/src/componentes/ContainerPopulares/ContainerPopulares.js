import React, { Component } from 'react'
import Card from '../Card/Card'
import "./ContainerPopulares.css"

class ContainerPopulares extends Component {
  constructor(props){
    super(props)
    this.state = {
        movies:[],
        pelisFiltradas: [],
        busqueda:'',
        page:0
    }
}

componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular')
    .then((resp)=> resp.json())
    .then((data)=> this.setState({movies: data.results}))
    .catch((err) => console.log(err))
}

masPeliculas(){
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06&page=${(this.state.page + 1)}`)
  .then(resp => resp.json())
  .then(data => this.setState({
    page: this.state.page + 1,
    movies: this.state.movies.concat(data.results)}))
    .catch(err => console.log(err))
}

guardarValor = (event) => {
  const busqueda = event.target.value.toLowerCase();
  const peliculasFiltradas = this.state.movies.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(busqueda)
  );
  this.setState({ busqueda, peliculasFiltradas });
};


render() {
  const { busqueda, peliculasFiltradas, movies } = this.state;
  const peliculasAMostrar = busqueda ? peliculasFiltradas : movies;
  const mostrarBoton = !busqueda;
  const mostrarMensaje = busqueda && peliculasAMostrar.length === 0; // Determina si se debe mostrar el mensaje de "No hay resultados"

  return (
    <div>
      <form onSubmit={(event) => this.evitarSubmit(event)}>
        <input
          type="text"
          name="busqueda"
          onChange={(event) => this.guardarValor(event)}
          placeholder="Busca una peli popular"
          value={this.state.valorInput}
        />
      </form>
      <div className="section">
        {mostrarMensaje ? (
          <h2>No hay resultados para la búsqueda ingresada</h2>
        ) : (
          peliculasAMostrar.length > 0 ? (
            peliculasAMostrar.map((elm, idx) => (
              <Card
                refreshState={this.props.refreshState ? (id) => this.props.refreshState(id) : false}
                id={elm.id}
                image={`https://image.tmdb.org/t/p/w500${elm.poster_path}`}
                title={elm.title}
                description={elm.overview}
                key={idx + elm.name}
              />
            ))
          ) : (
            <h2>Cargando...</h2>
          )
        )}
      </div>
      {mostrarBoton && <button onClick={() => this.masPeliculas()}>CARGAR MÁS PELÍCULAS POPULARES</button>}
    </div>
  );
}}
export default ContainerPopulares;