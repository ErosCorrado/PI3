import Navbar from "./componentes/Navbar/Navbar"

let navegacion = [
	{
        name: "home",
        Link: "./"
    },
    {
        name: "Popular",
        Link:"./"
    },
    {
        name: "Top Rated",
        Link: "./"
    },

];

function App() {
  return (
      <div>
          <Navbar
          datos = { navegacion }
          titulo="Elemento menu"
          usuario="Nombre del usuario"/>
      </div>
      
      );
    }
    
export default App;
