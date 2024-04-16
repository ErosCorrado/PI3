import React from 'react';
import './Card.css'; 

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <img src={props.image} alt={props.title} />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button className="more">Agregar a fav</button>
            </div>
        </div>
    );
}

export default Card;
