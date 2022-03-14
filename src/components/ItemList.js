import React,{useState, useEffect} from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import "./itemList.css"


const ItemList = ({productos}) =>{

        return(
            <div>
                <ul className="list-group list-group-horizontal">
                    {productos.map((producto, indice)=>{
                        return <li key={indice} > <Item producto={producto}/>  <ItemCount stock ={producto.stock}/></li>
                    })}
                </ul>
            </div>
        );
    }
    
    export default ItemList;

