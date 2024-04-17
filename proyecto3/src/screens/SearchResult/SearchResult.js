import React, { Component } from 'react';

class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: []
        };
    }

    componentDidMount() {
         fetch('https://api.themoviedb.org/3/search/movie?query=' + this.props.data.title)
             .then(response => response.json())
             .then(data => {
                 this.setState({ resultados: data });
             })
             .catch(error => {
                 console.error('Error al obtener los resultados de la búsqueda:', error);
            });
    }

    render() {
        return (
            <div>
                <h1>Resultados de Búsqueda</h1>
                {this.state.resultados.map((resultado, index) => (
                    <div key={index}>
                        {/* Aquí mostrarías la información de cada resultado */}
                    </div>
                ))}
            </div>
        );
    }
}

export default ResultadoBusqueda;