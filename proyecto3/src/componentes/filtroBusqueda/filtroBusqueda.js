import { Component } from "react";
import './styles.css'

class filtroBusqueda extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    guardarValor(event){
        this.setState({
            valorInput: event.target.value
        },
        ()=> this.props.filtrarPeliculas(this.state.valorInput))
    }

    render(){
        return(
            <form
                onSubmit={(event)=> this.evitarSubmit(event)}
            >
                <input
                onChange={(event)=> this.guardarValor(event)}
                placeholder="Busca una pelicula" />
            </form>
        )
    }
}

export default filtroBusqueda