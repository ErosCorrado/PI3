import React, { Component } from 'react';
import Card from '../Card/Card';
import { options } from '../../Key/Key';
import { Link } from 'react-router-dom';


class ContainerRanked extends Component {

    constructor(props){
        super(props)
        this.state = {
            movieData:[],
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming', options)
        .then((resp)=> resp.json())
        .then((data)=> this.setState({movieData: data.results.slice(0,5)}))
        .catch((err) => console.log(err))
    }

    render(){
        return (
            <div className="section"> 
                {this.state.movieData.length > 0 ? (
                    this.state.movieData.map((elm, idx) => (
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
                <button><Link to="/Upcoming" class='boton'>VER TODAS LAS PRÓXIMAS PELICULAS</Link></button>

            </div>
            
        );
        
    } 
}

export default ContainerRanked;