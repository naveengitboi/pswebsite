import { NavLink } from "react-router-dom";
import '../cssComponents/Navbar.css'
import { useState } from "react";
function Navbar(){
    const [hamburger, setHamburger] = useState('hamburger')
    const [active, setActive] = useState(false)
    const [navlinks, setNavlinks] = useState('navLinks')

    function handleMenu(){
        if(!active){
            setHamburger(prev => prev = 'hamburgerActive')
            setNavlinks(prev => prev = 'navLinksActive')
        }
        else{
            setHamburger(prev => prev = 'hamburger')
            setNavlinks(prev => prev = 'navLinks')
        }
        setActive(prev => !prev)

    }


    return(
        <div className="navbar">
            <h1 className="mediumHeading">Naveen</h1>
            <div className={hamburger} onClick={()=> handleMenu()}></div>
            <ul className={navlinks}>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/gallary'}>Gallary</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>

        </div>
    )
}

export default Navbar