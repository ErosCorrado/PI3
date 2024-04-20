import React, { Component } from 'react';
import Card from '../Card/Card';
import { options } from '../../Key/Key';
import { Link } from 'react-router-dom';
import './PelisPopulares.css'


class PelisPopulares extends Component {

    constructor(props){
        super(props)
        this.state = {
            popular:[],
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular', options)
        .then((resp)=> resp.json())
        .then((data)=> this.setState({popular: data.results.slice(0,5)}))
        .catch((err) => console.log(err))
    }

    render(){
        return (
            <div className="section"> 
                {this.state.popular.length > 0 ? (
                    this.state.popular.map((elm, idx) => (
                        <Card 
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