import React, { Component } from 'react';
import Container from '../Container/Container';
import './Home.css'; // Importa el archivo CSS de estilos
import ContainerRanked from '../ContainerRanked/ContainerRanked';
import Busqueda from '../../componentes/Busqueda/Busqueda'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


class Home extends Component {
    /* render() {
        return (
            <div className="home-container">
                <h1 className="home-title">Películas Populares</h1>
                <Container />
                <h1 className="home-title">Películas Mejor Rankeadas</h1>
                <ContainerRanked />

            </div>
        );
    }} */

    constructor() {
        super()
        this.state = {
          ranked: [],
          populares: [],
        }
      }
      componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming')
          .then(resp => resp.json())
          .then(data => {
            this.setState({
              ranked: data.results.splice(0,5),
            })
          })
          .catch(err => console.log(err))
    
        fetch('https://api.themoviedb.org/3/movie/popular')
          .then(resp => resp.json())
          .then(data => {
            this.setState({
              populares: data.results.splice(0,5),
            })
          })
          .catch(err => console.log(err))
      this.setState({
        todasPeliculas: this.state.ranked + this.state.populares
      })
      console.log(this.state.todasPeliculas)
      }
    

    filtrarPeliculas(valorInput){
        this.props.history.push('/searchResult/'+ valorInput)
      }
    
      render() {
        return (
          <React.Fragment>
          <Busqueda 
            filtrarPeliculas={(valorInput) => this.filtrarPeliculas(valorInput)}/>
          <h2 className= 'title'> Peliculas Top Ranked</h2>
          <button className='boton'>
              <Link to={`TopRanked`}>Ver todas las películas Top Ranked</Link>
          </button>
          <ContainerRanked pelisTopRanked={this.state.ranked} />
          <h2 className= 'title'> Peliculas Populares </h2>
          <button className='boton'>
              <Link to={`Populares`}>Ver todas las películas populares</Link>
          </button>
          <Container pelisPopulares={this.state.populares} />
          </React.Fragment>
        )}}


export default Home;
