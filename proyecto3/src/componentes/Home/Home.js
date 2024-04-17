import React, { Component } from 'react';
import Container from '../Container/Container';
import './Home.css'; // Importa el archivo CSS de estilos
import ContainerRanked from '../ContainerRanked/ContainerRanked';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <h1 className="home-title">Películas Populares</h1>
                <Container />
                <h1 className="home-title">Películas Mejor Rankeadas</h1>
                <ContainerRanked />

            </div>
        );
    }
}

export default Home;
