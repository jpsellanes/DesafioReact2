import React,{useState, useContext, useEffect} from "react";
import Item from "./Item";
import "./itemList.css"


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

