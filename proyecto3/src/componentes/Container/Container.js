import React, { Component } from 'react'
import Card from '../Card/Card'


class Container extends Component {
  constructor(props){
    super(props)
    this.state={
        movieData:[]
    }
    
  }

  render(){
    console.log('props del container', this.props.movies)
    return (
      <>
        <section className='section'>
          {
          this.props.movies.length === 0 ?
            <h1>No se encontraron resultados</h1>   
          :
          this.props.movies.map((movie)=> <Card 
          refreshState={this.props.refreshState ? (id) => this.props.refreshState(id) : false} 
          id={movie.id}
          key={movie.title + movie.id}
          title={movie.title} 
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          description={movie.overview}
          />)
          }
        </section>
      </>
    )
  }
}
export default Container