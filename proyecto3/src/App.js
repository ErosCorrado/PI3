import Navbar from "./componentes/Navbar/Navbar"
//import Footer from "./componentes/Footer/Footer"
import Home from "./screens/Home/Home"
import {Switch, Route} from "react-router-dom"
import Populares from "./screens/Populares/Populares.js"
import TopRanked from "./screens/TopRanked/TopRanked.js";
import NotFound from './screens/NotFound/NotFound.js'
import SearchResult from './screens/SearchResult/SearchResult.js'
import Favourites from './screens/Favourites/Favourites.js'
import Movie from './componentes/Movie/Movie.js'


function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path={'/'} exact={true} component={Home} />
                <Route path={'/Populares'}  component={Populares} />
                <Route path={'/TopRanked'}  component={TopRanked} />
                <Route path={'/Favourites'} component={Favourites} />
                <Route path={'/movie/id/:id'} component={Movie}/>
                <Route path='/resultadosBusqueda/:resultadosBusqueda' component={SearchResult} />
                <Route component={NotFound} />
            </Switch>
        </>
    );
} 
    
export default App;
