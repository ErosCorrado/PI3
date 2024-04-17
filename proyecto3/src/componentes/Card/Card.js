import React, { Component } from 'react'; // Importa Component de React
import './Card.css'; 

class Card extends Component { // Cambia el nombre de la clase a Card
    constructor(props){
        super(props);
    }

    render(){
        return  (
            <div className="card">
                <div className="card-content">
                    <img src={this.props.image} alt={this.props.title} />
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <button className="more">Agregar a fav</button>
                </div>
            </div>
        );
    }
}

export default Card;
