import React from "react";
import ItemList from "./ItemList";

const onAdd = () =>{
    console.log("Agregado al carrito")
}


const ItemListContainer = (props) =>{
    return(
        <div id="ItemListConteiner">
            <ItemList/>
        </div>
    )
}

export default ItemListContainer