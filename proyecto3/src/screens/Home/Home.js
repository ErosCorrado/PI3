import React, { Component } from 'react';
import { options } from '../../Key/Key'

class Home extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        this.fetchPopularMovies();
    }

    fetchPopularMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/popular', options)
            .then(response => response.json())
            .then(data => {
                this.setState({ movies: data.results });
            })
            .catch(error => {
                console.error('Error fetching popular movies:', error);
            });
    };

    render() {
        const { movies } = this.state;

        return (
            <div>
                <h1>Home</h1>
                <h2>Popular Movies</h2>
                
                        {movies.map((movie) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
            </div>
        );
    }
}

export default Home;