import React,{useContext} from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection , serverTimestamp  } from "firebase/firestore";
import {dbFirebase} from "../firebaseConfig"
import CartForm from "./CartForm"

const Carrito = ()=>{

    const {addItem, removeItem, clear, isInCart, cart, cartTotal}= useContext(CartContext)

    

    return(
        <div>
            {cart.map(item=>(
                <div key={item.product.id}>
                    <div>
                        <p>{item.product.nombre}</p>
                        <img src={item.product.imgurl} />
                        <p>Product ID={item.product.id}</p>
                        <p>Precio U$D {item.product.precio}</p>
                        <p>Amount {item.count}</p>
                        <p>Sub-Total U$D {item.count * item.product.precio}</p>
                        <button onClick={()=>removeItem(item.product)}>Remove from Cart</button>
                    </div>
                </div>
            ))}
            <div>
                <h3>Cart Total = U$D {cartTotal(cart)}</h3>
                <button onClick={clear}>Eliminar Carrito</button>
            </div>
            <div>
                <CartForm/>
            </div>
        </div>
        
    )
}
export default Carrito