import React, { Component } from 'react';
import Card from '../Card/Card';
import { options } from '../../Key/Key';
import { Link } from 'react-router-dom';
import './PelisPopulares.css'


class PelisPopulares extends Component {

    constructor(props){
        super(props)
        this.state = {
            movies:[],
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular', options)
        .then((resp)=> resp.json())
        .then((data)=> this.setState({movies: data.results.slice(0,5)}))
        .catch((err) => console.log(err))
    }

    render(){
        return (
            <div className="section"> 
                {this.state.movies.length > 0 ? (
                    this.state.movies.map((elm, idx) => (
                        <Card 
                            refreshState={this.props.refreshState ? (id) => this.props.refreshState(id) : false} 
                            id={elm.id}
                            image={`https://image.tmdb.org/t/p/w500${elm.poster_path}`}
                            title={elm.title}
                            description={elm.overview}
                            key={idx + elm.name} 
                        />
                    )
                )
                ) : (
                    <h2>Cargando..</h2>
                )}    
                <button><Link to="/Populares" class='boton'>VER TODAS LAS PELICULAS POPULARES</Link></button>

            </div>
            
        );
        
    } 
}

export default PelisPopulares;