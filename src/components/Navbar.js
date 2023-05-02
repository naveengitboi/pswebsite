import { NavLink } from "react-router-dom";
import '../cssComponents/Navbar.css'
function Navbar(){
    return(
        <div className="navbar">
            <h1 className="mediumHeading">Naveen</h1>
            <div className="hamburger"></div>
            <ul className="navLinks">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/gallary'}>Gallary</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>

        </div>
    )
}

export default Navbar