import React from "react";


const Item = (props) =>{

    return(
        <div>
            <h4>{props.nombre}</h4>
            <img src={props.imageURL}/>
            <p>Product ID={props.id}</p>
            <p>Precio u$d {props.precio}</p>
            <p>Stock {props.stock}</p>
        </div>
    )
}

export default Item