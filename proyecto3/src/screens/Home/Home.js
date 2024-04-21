import React, { Component } from 'react';
import './Home.css'; 
import ContainerRanked from '../../componentes/ContainerRanked/ContainerRanked';
import Busqueda from '../../componentes/Busqueda/Busqueda'
import PelisPopulares from '../../componentes/PelisPopulares/PelisPopulares';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log('props home', props)
    }

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
