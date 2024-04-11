import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    let navegacion = [
        {
            name: "Home",
            ruta: "/"
        },
        {
            name: "Populares",
            ruta: "/Populares"
        },
        {
            name: "Mejor Rankeadas",
            ruta: "/TopRanked"
        }
    ];

    return (
        <div>
            <nav>
                <ul className='arriba'>
                    <li>
                        <Link to={navegacion[0].ruta}>
                            <img src="../../images/netflix.png" alt="" className="logo" />
                        </Link>
                    </li>
                    {navegacion.map((elm, index) => (
                        <li key={index} className="itemlista">
                            <Link className="navlink" to={elm.ruta}>
                                {elm.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
