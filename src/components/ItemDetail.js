import React, {useEffect, useState} from "react";
import "./itemDetail.css"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail =({producto})=>{

    const[contador, setContador] = useState(true);


    const onAdd =(count)=>{
        if(count != undefined){
            console.log("Enviado");
            console.log(count);
            setContador(false);
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
