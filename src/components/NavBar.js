import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import "./navBar.css"
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";



const NavBar =() => {
    const {addItem, removeItem, clear, isInCart, cart, cartTotal}= useContext(CartContext)



    return (
        <div id="topnav">
        <nav> 
            <ul>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/categoria/Amplifiers"> Amplifiers</Link></li>
                <li><Link to="/categoria/Microcontrollers"> Microcontrollers</Link></li>
                <li><Link to="/categoria/Sensors"> Sensors</Link></li>
                {cart.length === 0 ? null :
                <li><Link to="/carrito"> <CartWidget/> </Link></li>
                }
            </ul>
        </nav>
        </div>
        
    )
}

export default NavBar

