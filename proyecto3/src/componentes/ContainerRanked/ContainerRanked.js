import React, { Component } from 'react';
import Card from '../Card/Card';
import { options } from '../../Key/Key';

class ContainerRanked extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ranked: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/upcoming', options)
            .then((resp) => resp.json())
            .then((data) => this.setState({ ranked: data.results.slice(0, 5) }))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="section">
                {this.state.ranked.length > 0 ? (
                    this.state.ranked.map((elm, idx) => (
                        <Card
                            image={`https://image.tmdb.org/t/p/w500${elm.poster_path}`}
                            title={elm.title}
                            description={elm.overview}
                            key={idx + elm.name}
                        />
                    ))
                ) : (
                    <h2>Cargando..</h2>
                )}
            </div>
        );
    }
}

export default ContainerRanked;
