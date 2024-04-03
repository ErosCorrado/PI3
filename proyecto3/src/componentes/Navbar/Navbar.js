function Navbar (props) {
    return (
        <div>
    <nav>
        <ul classname="main-nav">
            {
            props.datos.map((Itemheader, idx)=><li key={idx + Itemheader.name}> {Itemheader.name}</li>)
            }
        </ul>
        <ul class="user">
            <li>{props.usuario} <img src="./user.jpg" alt=""/></li>
        </ul>
    </nav>
        </div>
    );
}
export default Navbar