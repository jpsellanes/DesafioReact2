import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import "./navBar.css"

const NavBar =() => {
    return (
        <div id="topnav">
        <nav> 
            <ul>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/categoria/Amplifiers"> Amplifiers</Link></li>
                <li><Link to="/categoria/Microcontrollers"> Microcontrollers</Link></li>
                <li><Link to="/categoria/Sensors"> Sensors</Link></li>
                <li><Link to="/carrito"> <CartWidget/> </Link></li>
            </ul>
        </nav>
        </div>
        
    )
}

export default NavBar

/*
bg="primary" variant="dark" expand="lg" 
 */