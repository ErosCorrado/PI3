import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div>
                <img src={props.image} alt={props.title} />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button>Agregar a fav</button>
            </div>
        </div>
    );
}

export default Card;

