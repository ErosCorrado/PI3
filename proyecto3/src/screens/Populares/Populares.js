import React, { Component } from 'react';
import PelisPopulares from '../../componentes/Container/Container';
import './Populares.css';

class Populares extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="populares-container">
                <h1 className="populares-title">Populares</h1>
                <PelisPopulares />
            </div>
        );
    }
}

export default Populares;
