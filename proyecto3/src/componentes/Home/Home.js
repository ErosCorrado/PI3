import React, { Component } from 'react';
import Container from '../Container/Container';
import './Home.css'; // Importa el archivo CSS de estilos

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <h1 className="home-title">Películas Populares</h1>
                <Container />
            </div>
        );
    }
}

export default Home;
