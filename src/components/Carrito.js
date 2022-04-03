import React,{useContext} from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection , serverTimestamp  } from "firebase/firestore";
import {dbFirebase} from "../firebaseConfig"
import {Button} from "@mui/material"
import CartForm from "./CartForm"
import "./carrito.css"

const Carrito = ()=>{

    const {addItem, removeItem, clear, isInCart, cart, cartTotal}= useContext(CartContext)

    

    return(
        <div className="carrito">
            <div className="carritoComponent">
                {cart.map(item=>(
                    <div key={item.product.id}>
                        <div className="carritoProducto">
                            <h2>{item.product.nombre}</h2>
                            <img src={item.product.imgurl} />
                            <p>Product ID={item.product.id}</p>
                            <p>Precio U$D {item.product.precio}</p>
                            <p>Amount {item.count}</p>
                            <p>Sub-Total U$D {item.count * item.product.precio}</p>
                            <Button style ={{backgroundColor: "Red"}} variant="contained" size="small" onClick={()=>removeItem(item.product)}>Remove from Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carritoComponent">
                <h3>Cart Total = U$D {cartTotal(cart)}</h3>
                <Button style ={{backgroundColor: "Red"}} variant="contained" onClick={clear}>Clear Cart</Button>
                <CartForm/>
            </div>
        </div>
        
        
    )
}
export default Carrito