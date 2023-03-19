import { NavLink } from "react-router-dom";
import '../cssComponents/Navbar.css'
function Navbar(){
    return(
        <div className="navbar">
            <h1 className="largeHeading">Naveen</h1>
            <ul className="navLinks">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>

        </div>
    )
}

export default Navbar