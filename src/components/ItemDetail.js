import React, {useContext, useEffect, useState} from "react";
import "./itemDetail.css"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail =({producto})=>{

    const[contador, setContador] = useState(true);
    const {addItem, cart} = useContext(CartContext)

    const onAdd =(count)=>{
        if(count != undefined){
            setContador(false);
            addItem(producto, count)
            toast.info("Product Added!");
        }
    }


    return(
        <div id ="itemDetail">
            <div id ="itemDetailimg">
                <h4>{producto.nombre}</h4>
                <img src={producto.imgurl}/>
            </div>
            <p>Product ID={producto.id}</p>
            <p>Precio u$d {producto.precio}</p>
            <p>Stock {producto.stock}</p>
            <p>{producto.detail}</p>
            <p>{producto.features}</p>
            { contador ? <ItemCount stock ={producto.stock} onAdd ={onAdd}/> : <Link to="/carrito"><button>Finalizar</button></Link> }
        </div>
    )
}

export default ItemDetail
