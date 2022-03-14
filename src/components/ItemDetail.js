import React, {useEffect, useState} from "react";
import "./itemDetail.css"
import ItemCount from "./ItemCount";

const ItemDetail =({producto})=>{
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
            <ItemCount stock ={producto.stock}/>
        </div>
    )
}

export default ItemDetail
