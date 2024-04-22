import React, { Component } from 'react'
import Card from '../Card/Card'

class Container extends Component {
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


render(){

  const peliculasAMostrar = this.state.busqueda ? this.state.peliculasFiltradas : this.state.movies;

    return (
      <div>
      <form onSubmit={(event) => this.evitarSubmit(event)}>
        <input
          type="text"
          name="busqueda"
          onChange={(event) => this.guardarValor(event)}
          placeholder="Busca una pelicula popular"
          value={this.state.valorInput}
        />
      </form>
      <div className="section">{
          peliculasAMostrar.map((elm, idx) => (
            <Card
              refreshState={this.props.refreshState ? (id) => this.props.refreshState(id) : false}
              id={elm.id}
              image={`https://image.tmdb.org/t/p/w500${elm.poster_path}`}
              title={elm.title}
              description={elm.overview}
              key={idx + elm.name}
            />
          ))}</div>
        <button onClick={() => this.masPeliculas()}>CARGAR MAS PELICULAS POPULARES</button>
    </div>
  );
    
} 
}
export default Container;