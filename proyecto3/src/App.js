import Navbar from "./componentes/Navbar/Navbar"
//import Footer from "./componentes/Footer/Footer"
import Home from "./screens/Home/Home"
import {Switch, Route} from "react-router-dom"

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path={'/'} exact={true} component={Home} />
            </Switch>
        </>
    );
} 
    
export default App;
