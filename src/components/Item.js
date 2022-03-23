import React ,{useState, useContext, useEffect} from "react";
import "./item.css"
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const Item = ({producto}) =>{

    const {addItem, cart} = useContext(CartContext)

    const onAdd =(count)=>{
        if(count != undefined){
            addItem(producto, count)
            console.log("CART=",cart)
        }
    }

    return(
        <div id="item">
            <h4>{producto.nombre}</h4>
            <img src={producto.imgurl}/>
            <p>Precio u$d {producto.precio}</p>
            <p>Stock {producto.stock}</p>
            <button><Link to={`/item/${producto.id}`} >Mas Detalles</Link></button>
            <ItemCount stock ={producto.stock}  onAdd ={onAdd}/>
        </div>
    )
}

export default Item