import React, { Component } from 'react'; // Importa Component de React
import './Card.css'; 

class Card extends Component { // Cambia el nombre de la clase a Card
    constructor(props){
        super(props);
        this.state= {
          isSelected: false,
          hiddenContent: true,
          textBtn: 'Ver menos'
        }
    }

    seleccionarFicha(){
        this.setState({
          isSelected:true,
        })
      }

      ocultarContenido(){
        if(this.state.hiddenContent){
          this.setState({
            hiddenContent:false,
            textBtn:'Ver menos'
          })
        } else {
          this.setState({
            hiddenContent:true,
            textBtn:'Ver más'
          })
        }
      }

    render(){
        return  (
            <div className="card">
                <div className="card-content">
                    <img src={this.props.image} alt={this.props.title} />
                    <h2>{this.props.title}</h2>
                    {
              this.state.hiddenContent 
              ?
              ""
              :  
              <div>
                    <p>{this.props.description}</p>
              </div>
              }
              <button onClick={()=> this.ocultarContenido()}>
              {this.state.textBtn}
              </button>
                    <button className="more">Agregar a fav</button>
                </div>
            </div>
        );
    }
}

export default Card;
