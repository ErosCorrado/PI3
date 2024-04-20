import React, { Component } from 'react';
import Card from '../Card/Card';
import { options } from '../../Key/Key';
import './Container.css'; 

class Container extends Component {

    constructor(props){
        super(props)
        this.state = {
            movieData:[],
            pag:1
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular', options)
        .then((resp)=> resp.json())
        .then((data)=> this.setState({movieData: data.results}))
        .catch((err) => console.log(err))
    }

    masPeliculas(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7384aa0b23ce68ba408f9921ee711e62&page=${(this.state.pag + 1)}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            movieData : this.state.movieData.concat(data.results),
            pag: this.state.pag + 1
        }))
        .catch(err => console.log(err))
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
                {this.state.movieData.length >= 10 && (
                    <button onClick={()=>this.masPeliculas()}>CARGAR MAS PELICULAS</button>
                )}
            </div>
            
        );
        
    } 
}

export default Container;