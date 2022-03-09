import React from "react";
import "./item.css"


const Item = ({producto}) =>{

    return(
        <div id="item">
            <h4>{producto.nombre}</h4>
            <img src={producto.imgurl}/>
            <p>Product ID={producto.id}</p>
            <p>Precio u$d {producto.precio}</p>
            <p>Stock {producto.stock}</p>
        </div>
    )
}

export default Item