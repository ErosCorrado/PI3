import React, { Component } from 'react';
import { options } from '../../Key/Key'

class Home extends Component {
    state = {
        movies: [],
        UpComing:[],
    };

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular', options)
        .then(response => response.json())
        .then(data => {this.setState({ movies: data.results.slice(0,5)});})
        .catch(err => console.log(err))

        fetch('https://api.themoviedb.org/3/movie/upcoming', options)
        .then(response => response.json())
        .then(data => {this.setState({ UpComing: data.results.slice(0,5)});})
        .catch(err => console.log(err))
    
    
    
    
    }
    


    
    render() {
        const { movies } = this.state;
        const { UpComing } = this.state;


        return (
            <div>
                <h1>Home</h1>
                <h2>Popular Movies</h2>
                
                        {movies.map((movie) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                <h2>UpComing Movies</h2>
                
                        {UpComing.map((movie) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                
                        
            </div>
        );
    }
}

export default Home;