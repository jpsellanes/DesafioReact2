import React from "react";
import "./item.css"
import { Link } from "react-router-dom";

const Item = ({producto}) =>{

    return(
        <div id="item">
            <h4>{producto.nombre}</h4>
            <img src={producto.imgurl}/>
            <p>Precio u$d {producto.precio}</p>
            <p>Stock {producto.stock}</p>
            <button><Link to={`/item/${producto.id}`} >Mas Detalles</Link></button>
        </div>
    )
}

export default Item