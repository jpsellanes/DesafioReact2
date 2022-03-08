import React,{useState, useEffect} from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";


const ItemList = ({productos}) =>{

        return(
            <div>
                <ul>
                    {productos.map((producto, indice)=>{
                        return <li> <Item producto={producto}/>  <ItemCount stock ={producto.stock}/>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
    
    export default ItemList;