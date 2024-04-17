import React, { Component } from 'react';
import { options } from '../../Key/Key';
import ContainerRanked from '../../componentes/ContainerRanked/ContainerRanked';
import './TopRanked.css'; // Importa el archivo CSS de estilos

class TopRanked extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="top-ranked-container">
                <h1 className="top-ranked-title">Mejor rankeadas</h1>
                <ContainerRanked />
            </div>
        );
    }
}

export default TopRanked;
