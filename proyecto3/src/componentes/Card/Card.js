import React, { Component } from 'react';
import './Card.css'; 
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Card extends Component {
    constructor(props){
        super(props);
        this.state= {
          isSelected: false,
          hiddenContent: true,
          textBtn: 'Ver más',
          isFav: false,
          ultimoCommit: 'ultimo commit'
        }
    }

    componentDidMount() {
      let favStorage = localStorage.getItem('favourites')
        let arrParseado = JSON.parse(favStorage)
  
        if (arrParseado !== null) {
          let isFav = arrParseado.includes(this.props.id)     
          if (isFav) {
            this.setState({
              isFav: true
            })
          }   
        }
    }

    addToFav(movieId){
      let favStorage = localStorage.getItem('favourites')
      if (favStorage === null) {
        let arrId = [movieId]
        let arrStringificado = JSON.stringify(arrId)
        localStorage.setItem('favourites', arrStringificado)
      }
      else {
        let arrParseado = JSON.parse(favStorage)
        arrParseado.push(movieId)
        let arrStringificado = JSON.stringify(arrParseado)
        localStorage.setItem('favourites', arrStringificado)
      }
      this.setState({
        isFav: true
      })
    }
  
    removeFav(movieId){
      let storageFav = localStorage.getItem('favourites')
      let arrParseado = JSON.parse(storageFav)
      let favsFilter = arrParseado.filter((id) => id !== movieId)
      let arrStringificado = JSON.stringify(favsFilter)
      localStorage.setItem('favourites', arrStringificado)
  
      if (this.props.refreshState !== false) {
        this.props.refreshState(movieId)
        return
      }
  
      this.setState({
        isFav: false
      })
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
      console.log(this.props.peliculas);
        const { peliculas } = this.props;
        return  (
            <div className="card">
                <div className="card-content">
                <Link to={`/movie/id/${this.props.id}`}>
                    <img src={this.props.image} alt={this.props.title} />
                    <h2>{this.props.title}</h2>
                </Link>
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
              <br></br>

              {
                this.state.isFav ?
                <button onClick={() => this.removeFav(this.props.id)}>Eliminar Fav <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></button>
                :
                <button onClick={() => this.addToFav(this.props.id)}>Agregar Fav <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg></button>
              } 
            </div>
            </div>
        );

    }
}

export default withRouter(Card);
