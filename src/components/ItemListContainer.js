import React from "react";
import ItemCount from "./ItemCount";

const onAdd = () =>{
    console.log("Agregado al carrito")
}



const ItemListContainer = (props) =>{
    return(
        <div id="ItemListConteiner">
            <h2>This is your new PCB model {props.model} </h2>
            <p>The amounts of components of this pcb model is {props.compqty} </p>
            <ItemCount stock ={5}/>
        </div>
    )
}

export default ItemListContainer