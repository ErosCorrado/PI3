import React, { Component } from 'react';
import './Home.css'; // Importa el archivo CSS de estilos
import ContainerRanked from '../ContainerRanked/ContainerRanked';
import Busqueda from '../Busqueda/Busqueda'
import PelisPopulares from '../PelisPopulares/PelisPopulares';


class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Busqueda
                 history={this.props.history}
                />
                <h1 className="home-title">Películas Populares</h1>
                <PelisPopulares />
                <h1 className="home-title">Películas Mejor Rankeadas</h1>
                <ContainerRanked />

            </div>
        );
    }}

export default Home;
