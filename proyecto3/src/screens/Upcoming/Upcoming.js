import React, { Component } from 'react';
import { options } from '../../Key/Key';
import ContainerTopRanked from '../../componentes/ContainerUpcoming/ContainerUpcoming';
import './Upcoming.css'; // Importa el archivo CSS de estilos

class TopRanked extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="top-ranked-container">
                <h1 className="top-ranked-title">Próximamente</h1>
                <ContainerTopRanked />
            </div>
        );
    }
}

export default TopRanked;
