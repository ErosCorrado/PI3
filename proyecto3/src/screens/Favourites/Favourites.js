import React, { Component } from "react";
import { options } from "../../Key/Key";
import Card from "../../componentes/Card/Card";
import "./Favourites.css"


class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      haveFav: false
    };
  }
  componentDidMount() {
    let storageMovies = localStorage.getItem("favourites");
    if (storageMovies !== null) {
        let favouritesMovies = JSON.parse(storageMovies);
        Promise.all(
            favouritesMovies.map((id) =>
                fetch("https://api.themoviedb.org/3/movie/" + id, options).then(
                    (resp) => resp.json()
                )
            )
        )
        .then((data) => {
            // Filtramos las películas que tienen éxito en la respuesta de la API
            const validMovies = data.filter(movie => movie.success !== false);
            validMovies.length > 0 ?
            this.setState({ favourites: validMovies, haveFav: true })
            :
            this.setState({ haveFav: false })
        })
        .catch((err) => console.log(err));
    }
}

  refreshState(id) {
    let refState = this.state.favourites.filter((elm) => elm.id !== id);
    if(refState.length === 0) {
      <h1 className="letter">No tenes peliculas favoritas</h1>
      this.setState({
        haveFav: false
      })
    }
    this.setState({
      favourites: refState
    });
  }
  render() {
    return (
      <>
        <h1 className="search-results-title">Peliculas Favoritas</h1>
          <section className="search-results-container" >
            <div className="cards-container" >
            {
              this.state.haveFav ?
              this.state.favourites.map((movie) => 
                <Card
                refreshState={this.props.refreshState ? (id) => this.props.refreshState(id) : false}
                id={movie.id}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
                description={movie.overview}
                />
              ) :
              <h1 className="letter">No hay peliculas favoritas <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M175.9 448c-35-.1-65.5-22.6-76-54.6C67.6 356.8 48 308.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208s-93.1 208-208 208c-28.4 0-55.5-5.7-80.1-16zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0C156.6 308.6 128 349 128 369zm128-65c-13.3 0-24 10.7-24 24s10.7 24 24 24c30.7 0 58.7 11.5 80 30.6c9.9 8.8 25 8 33.9-1.9s8-25-1.9-33.9C338.3 320.2 299 304 256 304zm47.6-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg></h1>
            }
            </div>
        </section>
      </>
    );
  }
}
export default Favourites;