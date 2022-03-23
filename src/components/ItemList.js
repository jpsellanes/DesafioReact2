import React,{useState, useContext, useEffect} from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import "./itemList.css"
import { CartContext } from "../context/CartContext";



const ItemList = ({productos}) =>{


        return(
            <div>
                <ul  className="ItemContainer">
                    {productos.map((producto, indice)=>{
                        return <li key={indice} > <Item producto={producto}/> </li>     
                    })}
                </ul>
            </div>
        );
    }
    
    export default ItemList;

