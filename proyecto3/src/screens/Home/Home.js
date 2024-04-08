import React, { Component } from 'react';
import { options } from '../../Key/Key'

class Home extends Component {
    constructor(props){
        super(props)
    this.state = {
        movies: [],
        TopRated:[],
    }
}

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular', options)
        .then(response => response.json())
        .then(data => {this.setState({ movies: data.results.slice(0,5)});})
        .catch(err => console.log(err))

        fetch('https://api.themoviedb.org/3/movie/top_rated', options)
        .then(response => response.json())
        .then(data => {this.setState({ TopRated: data.results.slice(0,5)});})
        .catch(err => console.log(err))
    
    
    
    
    }
    


    
    render() {
        const { movies } = this.state;
        const { TopRated } = this.state;


        return (
            <div>
                <h1>Home</h1>
                <h2>Peliculas Populares</h2>
                
                        {movies.map((movie) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                <h2>Peliculas mejor rankeadas</h2>
                
                        {TopRated.map((movie) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                
                        
            </div>
        );
    }
}

export default Home;