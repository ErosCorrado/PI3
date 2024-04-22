import React, { Component } from 'react';
import Container from '../../componentes/ContainerPopulares/ContainerPopulares';
import './Populares.css';

class Populares extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="populares-container">
                <h1 className="populares-title">Populares</h1>
                <Container />
            </div>
        );
    }
}

export default Populares;
