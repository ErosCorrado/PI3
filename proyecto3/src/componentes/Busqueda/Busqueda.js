import React from "react";
import { Component } from "react";

class Busqueda extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }

    evitarSubmit(event){
        event.preventDefault();
        this.props.history.push('/resultadosBusqueda/'+ this.state.valorInput)
    }

    guardarValor(event){
        this.setState({
            valorInput: event.target.value
        })}


    render(){
        return(
            <form
                onSubmit={(event)=> this.evitarSubmit(event)}
            >
                <input
                type="text"
                name="busqueda"
                onChange={(event)=> this.guardarValor(event)}
                placeholder="Busca una pelicula"
                value = {this.state.valorInput}
                />
                <button type="submit">Buscar</button>
            
            </form>
        )
    }
}

export default Busqueda