import React, { Component } from 'react'
import Card from '../Card/Card'

class ContainerUpcoming extends Component {
  constructor(props){
    super(props)
    this.state = {
        movies:[],
        pelisFiltradas: [],
        busqueda:'',
        page:1
    }
}

componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/upcoming')
    .then((resp)=> resp.json())
    .then((data)=> this.setState({movies: data.results}))
    .catch((err) => console.log(err))
}

masPeliculas(){
  fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=7384aa0b23ce68ba408f9921ee711e62&page=${(this.state.page + 1)}`)
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
  const mostrarMensaje = busqueda && peliculasAMostrar.length === 0;
  return (
    <div>
      <form onSubmit={(event) => this.evitarSubmit(event)}>
        <input
          type="text"
          name="busqueda"
          onChange={(event) => this.guardarValor(event)}
          placeholder="Busca una peli upcoming"
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
      {mostrarBoton && <button onClick={() => this.masPeliculas()}>CARGAR MÁS PELÍCULAS UPCOMING</button>}
    </div>
  );
}}
export default ContainerUpcoming;